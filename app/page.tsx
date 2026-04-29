'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';
import ClimateMarkers, { ShapleyData } from './ClimateMarkers';
import mockClimateDatabase from './data';

// ── Types ─────────────────────────────────────────────────────────────────────

interface ClimateFeature {
  id: string;
  name: string;
  value: number;
  fixed: boolean;
  abbreviation: string;
}

interface ClimateData {
  nao: number;
  amo: number;
  nino: number;
  pdo: number;
  iod: number;
  anino: number;
  ismr: number;
}

interface ParamRange {
  min: number;
  max: number;
  step: number;
  unit?: string;
  description: string;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000';

const PARAM_RANGES: Record<string, ParamRange> = {
  nao:   { min: -3.0, max:  3.0, step: 0.05, description: '−3 to +3'   },
  amo:   { min: -0.5, max:  0.5, step: 0.01, description: '−0.5 to +0.5 °C' },
  nino:  { min: -3.0, max:  3.0, step: 0.05, description: '−3 to +3 °C' },
  pdo:   { min: -3.0, max:  3.0, step: 0.05, description: '−3 to +3'   },
  iod:   { min: -1.5, max:  1.5, step: 0.05, description: '−1.5 to +1.5 °C' },
  anino: { min: -1.5, max:  1.5, step: 0.05, description: '−1.5 to +1.5 °C' },
  ismr:  { min:  200, max: 1000, step: 5,    unit: 'mm', description: '200 – 1000 mm' },
};

const MONTHS = [
  { value: 1,  label: 'Jan' }, { value: 2,  label: 'Feb' },
  { value: 3,  label: 'Mar' }, { value: 4,  label: 'Apr' },
  { value: 5,  label: 'May' }, { value: 6,  label: 'Jun' },
  { value: 7,  label: 'Jul' }, { value: 8,  label: 'Aug' },
  { value: 9,  label: 'Sep' }, { value: 10, label: 'Oct' },
  { value: 11, label: 'Nov' }, { value: 12, label: 'Dec' },
];

const MONTHS_FULL = [
  { value: 1,  label: 'January'   }, { value: 2,  label: 'February'  },
  { value: 3,  label: 'March'     }, { value: 4,  label: 'April'     },
  { value: 5,  label: 'May'       }, { value: 6,  label: 'June'      },
  { value: 7,  label: 'July'      }, { value: 8,  label: 'August'    },
  { value: 9,  label: 'September' }, { value: 10, label: 'October'   },
  { value: 11, label: 'November'  }, { value: 12, label: 'December'  },
];

const YEARS = Array.from({ length: 15 }, (_, i) => 2000 + i);

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Build the 12-row monthly_data array the backend expects.
 * Features (nao, pdo) not used by the model default to 0.
 */
function buildMonthlyData(featureMap: Record<string, number>, targetYear: number) {
  const monthWindow = [
    { year: targetYear - 1, month: 10 },
    { year: targetYear - 1, month: 11 },
    { year: targetYear - 1, month: 12 },
    ...Array.from({ length: 9 }, (_, i) => ({ year: targetYear, month: i + 1 })),
  ];
  return monthWindow.map(({ year, month }) => ({
    year,
    month,
    n:  featureMap['nino']  ?? 0,
    An: featureMap['anino'] ?? 0,
    A:  featureMap['amo']   ?? 0,
    Io: featureMap['iod']   ?? 0,
  }));
}

// ── useBreakpoint ─────────────────────────────────────────────────────────────

function useBreakpoint() {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return { isMobile: width < 640, isTablet: width < 1024, width };
}

// ── MapLoadingOverlay ─────────────────────────────────────────────────────────

function MapLoadingOverlay() {
  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg"
      style={{ backgroundColor: 'rgba(248, 250, 252, 0.85)', backdropFilter: 'blur(2px)' }}
    >
      <style>{`
        @keyframes spin-ring { to { transform: rotate(360deg); } }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes shimmer-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .spin-ring { animation: spin-ring 1.1s linear infinite; }
        .pulse-dot-1 { animation: pulse-dot 1.2s ease-in-out infinite; }
        .pulse-dot-2 { animation: pulse-dot 1.2s ease-in-out 0.4s infinite; }
        .pulse-dot-3 { animation: pulse-dot 1.2s ease-in-out 0.8s infinite; }
        .shimmer-bar { animation: shimmer-bar 1.6s ease-in-out infinite; }
      `}</style>
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-12 h-12">
          <svg className="spin-ring w-12 h-12" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" stroke="#e2e8f0" strokeWidth="3" />
            <circle cx="20" cy="20" r="16" stroke="#475569" strokeWidth="3"
              strokeLinecap="round" strokeDasharray="60 40" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-500 pulse-dot-1" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-sm font-semibold text-slate-600 tracking-wide">Running prediction…</p>
          <div className="relative w-36 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="shimmer-bar absolute inset-y-0 w-1/3 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #64748b, transparent)' }}
            />
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 pulse-dot-1" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 pulse-dot-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 pulse-dot-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ShapleyPanel ──────────────────────────────────────────────────────────────

function ShapleyPanel({
  shapleyData, shapleyLoading, shapleyError, features, monthLabel, year, isMobile,
}: {
  shapleyData: ShapleyData | null;
  shapleyLoading: boolean;
  shapleyError: string | null;
  features: ClimateFeature[];
  monthLabel: string;
  year: number;
  isMobile: boolean;
}) {
  const EMPTY: ShapleyData = { nao: 0, amo: 0, nino: 0, pdo: 0, iod: 0, anino: 0, ismr: 0 };
  const data = shapleyData ?? EMPTY;

  const maxAbs = Math.max(...Object.values(data).map(Math.abs), 0.01);
  const entries = (Object.entries(data) as [keyof ShapleyData, number][])
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));

  const statusBadge = shapleyLoading ? (
    <span className="text-xs text-slate-400 italic">computing…</span>
  ) : shapleyError ? (
    <span className="text-xs text-red-400" title={shapleyError}>⚠ error</span>
  ) : (
    <span className="text-xs text-emerald-500 font-medium">● live</span>
  );

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Shapley Values</p>
          <div className="flex items-center gap-2">
            {statusBadge}
            <p className="text-xs text-slate-500">{monthLabel} {year}</p>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {entries.map(([key, val]) => {
            const pct = (Math.abs(val) / maxAbs) * 100;
            const pos = val >= 0;
            return (
              <div key={key} className="flex-shrink-0 bg-white rounded-lg border border-slate-100 px-3 py-2 min-w-[90px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold font-mono text-slate-500 uppercase">{key}</span>
                  <span
                    className="text-xs font-semibold tabular-nums"
                    style={{ color: pos ? '#2563eb' : '#ea580c' }}
                  >
                    {pos ? '+' : ''}{val.toFixed(2)}
                  </span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: pos ? '#3b82f6' : '#f97316' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <aside className="w-52 flex-shrink-0 flex flex-col gap-2">
      <div className="mb-1">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Shapley Values</p>
          {statusBadge}
        </div>
        <p className="text-xs text-slate-500 mt-0.5">{monthLabel} {year} · contribution to ISMR</p>
      </div>
      <div className="flex flex-col gap-1.5">
        {entries.map(([key, val]) => {
          const pct = (Math.abs(val) / maxAbs) * 100;
          const pos = val >= 0;
          return (
            <div key={key} className="bg-white rounded-md border border-slate-100 px-3 py-2.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold font-mono text-slate-500 uppercase">{key}</span>
                <span
                  className="text-sm font-semibold tabular-nums"
                  style={{ color: pos ? '#2563eb' : '#ea580c' }}
                >
                  {pos ? '+' : ''}{val.toFixed(3)}
                </span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, backgroundColor: pos ? '#3b82f6' : '#f97316' }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-1 truncate">
                {features.find(f => f.id === key)?.name ?? key}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-auto pt-2 flex flex-col gap-1.5">
        {[['#3b82f6', 'Positive'], ['#f97316', 'Negative']].map(([col, label]) => (
          <div key={label} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: col }} />
            <span className="text-xs text-slate-400">{label} contribution</span>
          </div>
        ))}
        <p className="text-xs text-slate-300 mt-1">Summed across 12-month window</p>
      </div>
    </aside>
  );
}

// ── ParameterPanel ────────────────────────────────────────────────────────────

function ParameterPanel({
  features, isExperimentMode, isPanelExpanded, isMobile,
  onFeatureChange, onToggleFix, onToggleExperimentMode,
  onToggleExpanded, onSubmit, loading, prediction,
}: {
  features: ClimateFeature[];
  isExperimentMode: boolean;
  isPanelExpanded: boolean;
  isMobile: boolean;
  onFeatureChange: (id: string, value: string) => void;
  onToggleFix: (id: string) => void;
  onToggleExperimentMode: () => void;
  onToggleExpanded: () => void;
  onSubmit: () => void;
  loading: boolean;
  prediction: number | null;
}) {
  if (isMobile) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Parameters</p>
            {isExperimentMode && (
              <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full font-medium">
                Experiment
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleExperimentMode}
              disabled={loading}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all
                ${isExperimentMode
                  ? 'border-amber-400 bg-amber-50 text-amber-700'
                  : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
            >
              {isExperimentMode ? '✕ Exit' : '⚗ Experiment'}
            </button>
            <button onClick={onToggleExpanded} className="p-1.5 rounded-lg bg-slate-100 text-slate-500">
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path
                  d={isPanelExpanded ? 'M2 8L6 4L10 8' : 'M2 4L6 8L10 4'}
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {isPanelExpanded && (
          <>
            <div className="grid grid-cols-2 gap-2">
              {features.map(f => {
                const range = PARAM_RANGES[f.id] ?? { min: -5, max: 5, step: 0.1, description: '' };
                const pct = ((f.value - range.min) / (range.max - range.min)) * 100;
                const active = isExperimentMode && !f.fixed;
                return (
                  <div
                    key={f.id}
                    className={`rounded-lg border px-3 py-2.5 transition-all
                      ${!isExperimentMode ? 'bg-white border-slate-100 opacity-75'
                        : f.fixed ? 'bg-white border-slate-200'
                        : 'bg-amber-50/50 border-amber-300'}`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold font-mono text-slate-600 uppercase">{f.abbreviation}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold tabular-nums text-slate-700">
                          {f.id === 'ismr' ? f.value.toFixed(0) : f.value.toFixed(2)}
                        </span>
                        {isExperimentMode && (
                          <button
                            onClick={() => onToggleFix(f.id)}
                            disabled={loading}
                            className="text-xs px-1 py-0.5 rounded border leading-none disabled:opacity-40"
                            style={f.fixed
                              ? { borderColor: '#e2e8f0', color: '#94a3b8' }
                              : { borderColor: '#fbbf24', backgroundColor: '#fef3c7', color: '#d97706' }}
                          >
                            {f.fixed ? '🔒' : '🔓'}
                          </button>
                        )}
                      </div>
                    </div>
                    <input
                      type="range"
                      min={range.min} max={range.max} step={range.step} value={f.value}
                      disabled={!isExperimentMode || f.fixed || loading}
                      onChange={e => onFeatureChange(f.id, e.target.value)}
                      className="w-full h-2 appearance-none rounded-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                      style={{
                        background: active && !loading
                          ? `linear-gradient(to right, #f59e0b ${pct}%, #fde68a ${pct}%)`
                          : `linear-gradient(to right, #94a3b8 ${pct}%, #e2e8f0 ${pct}%)`,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 mt-3">
              {prediction !== null && !loading && (
                <div className="flex-1 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
                  <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Prediction</p>
                  <p className="text-base font-bold text-blue-700 tabular-nums">{prediction.toFixed(1)} mm</p>
                </div>
              )}
              <button
                onClick={onSubmit}
                disabled={loading || !isExperimentMode}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm
                  ${isExperimentMode && !loading
                    ? 'bg-slate-800 text-white hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'}`}
              >
                {loading ? 'Running…' : 'Run Prediction'}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  // Desktop collapsed
  if (!isPanelExpanded) {
    return (
      <div className="flex-shrink-0">
        <button
          onClick={onToggleExpanded}
          title="Expand parameters"
          className={`flex flex-col items-center justify-center gap-2 w-8 rounded-xl border py-4 transition-all
            ${isExperimentMode ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M8 2L4 6L8 10"
              stroke={isExperimentMode ? '#d97706' : '#94a3b8'}
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-xs font-bold tracking-widest uppercase leading-none select-none"
            style={{ writingMode: 'vertical-rl', color: isExperimentMode ? '#d97706' : '#94a3b8' }}
          >
            {isExperimentMode ? 'Exp' : 'Params'}
          </span>
          {isExperimentMode && <span className="w-2 h-2 rounded-full bg-amber-400" />}
        </button>
      </div>
    );
  }

  // Desktop expanded
  return (
    <aside className="w-60 flex-shrink-0 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Parameters</p>
          <p className="text-xs text-slate-400 mt-0.5">
            {isExperimentMode ? 'Experiment mode active' : 'Drag sliders to explore'}
          </p>
        </div>
        <button onClick={onToggleExpanded} className="p-1.5 rounded hover:bg-slate-100 text-slate-400">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <button
        onClick={onToggleExperimentMode}
        disabled={loading}
        className={`text-xs px-3 py-2 rounded-lg border font-medium transition-all
          ${isExperimentMode
            ? 'border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100 disabled:opacity-50'
            : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-50'}`}
      >
        {isExperimentMode ? '✕ Exit Experiment' : '⚗ Start Experiment'}
      </button>

      <div className="flex flex-col gap-2">
        {features.map(f => {
          const range = PARAM_RANGES[f.id] ?? { min: -5, max: 5, step: 0.1, description: '' };
          const pct = ((f.value - range.min) / (range.max - range.min)) * 100;
          const active = isExperimentMode && !f.fixed;
          return (
            <div
              key={f.id}
              className={`rounded-lg border px-3 py-2.5 transition-all
                ${!isExperimentMode ? 'bg-white border-slate-100 opacity-75'
                  : f.fixed ? 'bg-white border-slate-200'
                  : 'bg-amber-50/50 border-amber-300'}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold font-mono text-slate-600 uppercase">{f.abbreviation}</span>
                  {active && <span className="text-xs text-amber-600 bg-amber-100 px-1.5 rounded">free</span>}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold tabular-nums text-slate-700">
                    {f.id === 'ismr' ? f.value.toFixed(0) : f.value.toFixed(2)}
                    {range.unit ? ` ${range.unit}` : ''}
                  </span>
                  {isExperimentMode && (
                    <button
                      onClick={() => onToggleFix(f.id)}
                      disabled={loading}
                      className="text-xs px-1 py-0.5 rounded border transition-colors leading-none disabled:opacity-40 disabled:cursor-not-allowed"
                      style={f.fixed
                        ? { borderColor: '#e2e8f0', color: '#94a3b8' }
                        : { borderColor: '#fbbf24', backgroundColor: '#fef3c7', color: '#d97706' }}
                    >
                      {f.fixed ? '🔒' : '🔓'}
                    </button>
                  )}
                </div>
              </div>
              <input
                type="range"
                min={range.min} max={range.max} step={range.step} value={f.value}
                disabled={!isExperimentMode || f.fixed || loading}
                onChange={e => onFeatureChange(f.id, e.target.value)}
                className="w-full h-2 appearance-none rounded-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                style={{
                  background: active && !loading
                    ? `linear-gradient(to right, #f59e0b ${pct}%, #fde68a ${pct}%)`
                    : `linear-gradient(to right, #94a3b8 ${pct}%, #e2e8f0 ${pct}%)`,
                }}
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-slate-400 tabular-nums">{range.min}</span>
                <span className="text-xs text-slate-400">{range.description}</span>
                <span className="text-xs text-slate-400 tabular-nums">{range.max}</span>
              </div>
            </div>
          );
        })}
      </div>

      {prediction !== null && !loading && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5">
          <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-0.5">Model Prediction</p>
          <p className="text-lg font-bold text-blue-700 tabular-nums">{prediction.toFixed(1)} mm</p>
          <p className="text-xs text-blue-400 mt-0.5">ISMR · Top-5 Sequential MLP</p>
        </div>
      )}

      {loading && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 flex items-center gap-3">
          <svg
            className="w-5 h-5 flex-shrink-0"
            viewBox="0 0 16 16" fill="none"
            style={{ animation: 'spin-ring 1.1s linear infinite' }}
          >
            <circle cx="8" cy="8" r="6" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="8" cy="8" r="6" stroke="#475569" strokeWidth="2"
              strokeLinecap="round" strokeDasharray="22 16" />
          </svg>
          <div>
            <p className="text-xs font-semibold text-slate-500">Awaiting response…</p>
            <p className="text-xs text-slate-400 mt-0.5">MLP model running</p>
          </div>
        </div>
      )}

      <button
        onClick={onSubmit}
        disabled={loading || !isExperimentMode}
        title={!isExperimentMode ? 'Start Experiment to run prediction' : undefined}
        className={`mt-auto px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2
          ${isExperimentMode && !loading
            ? 'bg-slate-800 text-white hover:bg-slate-700'
            : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'}`}
      >
        {loading ? (
          <>
            <svg
              className="w-4 h-4" viewBox="0 0 12 12" fill="none"
              style={{ animation: 'spin-ring 1.1s linear infinite' }}
            >
              <circle cx="6" cy="6" r="4.5" stroke="#94a3b8" strokeWidth="1.5" />
              <circle cx="6" cy="6" r="4.5" stroke="#475569" strokeWidth="1.5"
                strokeLinecap="round" strokeDasharray="16 12" />
            </svg>
            Running…
          </>
        ) : 'Run Prediction'}
      </button>
    </aside>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Page() {
  const { isMobile } = useBreakpoint();

  const [selectedYear,  setSelectedYear]  = useState(2020);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [loading,       setLoading]       = useState(false);
  const [prediction,    setPrediction]    = useState<number | null>(null);
  const [isExperimentMode, setIsExperimentMode] = useState(false);
  const [isPanelExpanded,  setIsPanelExpanded]  = useState(true);
  const [linkType, setLinkType] = useState<string>('none');
  const [vizMode,  setVizMode]  = useState<'markers' | 'shapley'>('markers');
  const [experimentYear,  setExperimentYear]  = useState<number | null>(null);
  const [experimentMonth, setExperimentMonth] = useState<number | null>(null);

  // ── Shapley state ──────────────────────────────────────────────────────────
  const [shapleyData,    setShapleyData]    = useState<ShapleyData | null>(null);
  const [shapleyLoading, setShapleyLoading] = useState(false);
  const [shapleyError,   setShapleyError]   = useState<string | null>(null);
  // Debounce timer ref so rapid slider moves don't spam the backend
  const shapleyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [features, setFeatures] = useState<ClimateFeature[]>([
    { id: 'nao',   name: 'North Atlantic Oscillation',        value: 0.5,  fixed: true, abbreviation: 'NAO'   },
    { id: 'amo',   name: 'Atlantic Multidecadal Oscillation', value: 0.3,  fixed: true, abbreviation: 'AMO'   },
    { id: 'nino',  name: 'El Niño–Southern Oscillation',      value: -0.2, fixed: true, abbreviation: 'NINO'  },
    { id: 'pdo',   name: 'Pacific Decadal Oscillation',       value: 0.4,  fixed: true, abbreviation: 'PDO'   },
    { id: 'iod',   name: 'Indian Ocean Dipole',               value: 0.1,  fixed: true, abbreviation: 'IOD'   },
    { id: 'anino', name: 'Atlantic Niño',                     value: 0.2,  fixed: true, abbreviation: 'ANINO' },
    { id: 'ismr',  name: 'Indian Summer Monsoon Rainfall',    value: 600,  fixed: true, abbreviation: 'ISMR'  },
  ]);

  // ── Fetch SHAP from backend ────────────────────────────────────────────────
  const fetchShapley = useCallback(
    async (featureList: ClimateFeature[], targetYear: number) => {
      setShapleyLoading(true);
      setShapleyError(null);
      try {
        const featureMap = Object.fromEntries(featureList.map(f => [f.id, f.value]));
        const monthly_data = buildMonthlyData(featureMap, targetYear);

        const res = await fetch(`${API_BASE}/shapley`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ target_year: targetYear, monthly_data }),
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error((err as any).error ?? `HTTP ${res.status}`);
        }

        const result = await res.json();
        if (result.shapley) {
          setShapleyData(result.shapley as ShapleyData);
        }
      } catch (err: any) {
        console.error('Shapley fetch error:', err);
        setShapleyError(err?.message ?? 'Unknown error');
      } finally {
        setShapleyLoading(false);
      }
    },
    []
  );

  /**
   * Trigger a (debounced) Shapley fetch whenever the viz switches to 'shapley'
   * mode, or when features / year change while already in shapley mode.
   * Debounce delay: 600 ms — comfortable for slider dragging.
   */
  const scheduleShapley = useCallback(
    (featureList: ClimateFeature[], targetYear: number, immediate = false) => {
      if (shapleyTimer.current) clearTimeout(shapleyTimer.current);
      const delay = immediate ? 0 : 600;
      shapleyTimer.current = setTimeout(() => {
        fetchShapley(featureList, targetYear);
      }, delay);
    },
    [fetchShapley]
  );

  // Fetch immediately when switching to shapley mode
  useEffect(() => {
    if (vizMode === 'shapley') {
      scheduleShapley(features, selectedYear, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vizMode]);

  // Re-fetch (debounced) when features or year change while in shapley mode
  useEffect(() => {
    if (vizMode === 'shapley') {
      scheduleShapley(features, selectedYear);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [features, selectedYear]);

  // ── Helpers ────────────────────────────────────────────────────────────────

  const getCurrentClimateData = (): ClimateData => {
    const dataPoint = mockClimateDatabase.find(
      d => d.year === selectedYear && d.month === selectedMonth
    );
    if (dataPoint && features.every(f => f.fixed)) return dataPoint.data;
    return {
      nao:   features.find(f => f.id === 'nao')?.value   ?? 0,
      amo:   features.find(f => f.id === 'amo')?.value   ?? 0,
      nino:  features.find(f => f.id === 'nino')?.value  ?? 0,
      pdo:   features.find(f => f.id === 'pdo')?.value   ?? 0,
      iod:   features.find(f => f.id === 'iod')?.value   ?? 0,
      anino: features.find(f => f.id === 'anino')?.value ?? 0,
      ismr:  features.find(f => f.id === 'ismr')?.value  ?? 0,
    };
  };

  const climateData = getCurrentClimateData();
  const currentMonthFull = MONTHS_FULL.find(m => m.value === selectedMonth)?.label ?? '';

  const loadDataForYearMonth = (year: number, month: number) => {
    const dp = mockClimateDatabase.find(d => d.year === year && d.month === month);
    if (dp) {
      setFeatures(prev => prev.map(f => ({ ...f, value: (dp.data as any)[f.id] ?? f.value, fixed: true })));
    }
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    loadDataForYearMonth(year, selectedMonth);
    if (isExperimentMode) setIsExperimentMode(false);
  };

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
    loadDataForYearMonth(selectedYear, month);
    if (isExperimentMode) setIsExperimentMode(false);
  };

  const handleFeatureChange = (id: string, value: string) => {
    setFeatures(prev => prev.map(f => f.id === id ? { ...f, value: parseFloat(value) || 0 } : f));
  };

  const toggleFix = (id: string) => {
    setFeatures(prev => {
      const updated = prev.map(f => f.id === id ? { ...f, fixed: !f.fixed } : f);
      const hasUnlocked = updated.some(f => !f.fixed);
      if (hasUnlocked && !isExperimentMode) {
        setExperimentYear(selectedYear);
        setExperimentMonth(selectedMonth);
        setIsExperimentMode(true);
      } else if (!hasUnlocked && isExperimentMode) {
        setIsExperimentMode(false);
        setExperimentYear(null);
        setExperimentMonth(null);
      }
      return updated;
    });
  };

  const toggleExperimentMode = () => {
    if (isExperimentMode) {
      loadDataForYearMonth(selectedYear, selectedMonth);
      setIsExperimentMode(false);
      setIsPanelExpanded(true);
      setExperimentYear(null);
      setExperimentMonth(null);
      setPrediction(null);
    } else {
      setExperimentYear(selectedYear);
      setExperimentMonth(selectedMonth);
      setIsExperimentMode(true);
      setIsPanelExpanded(true);
      setFeatures(prev => prev.map(f => ({ ...f, fixed: false })));
    }
  };

  const handlePanelExpandedToggle = () => {
    if (!isPanelExpanded) setIsPanelExpanded(true);
    else if (!isExperimentMode) setIsPanelExpanded(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setPrediction(null);
    try {
      const targetYear = selectedYear;
      const featureMap = Object.fromEntries(features.map(f => [f.id, f.value]));
      const monthly_data = buildMonthlyData(featureMap, targetYear);

      const res = await fetch(`${API_BASE}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target_year: targetYear, monthly_data }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as any).error ?? `HTTP ${res.status}`);
      }
      const result = await res.json();
      setPrediction(result.prediction ?? null);
      if (result.prediction != null) {
        setFeatures(prev =>
          prev.map(f => f.id === 'ismr' ? { ...f, value: Math.round(result.prediction) } : f)
        );
      }

      // Also refresh SHAP after a successful prediction if in shapley mode
      if (vizMode === 'shapley') {
        scheduleShapley(features, targetYear, true);
      }
    } catch (err) {
      console.error('Prediction error:', err);
    } finally {
      setLoading(false);
    }
  };

  const mapTitle = isExperimentMode
    ? `Experiment · based on ${MONTHS_FULL.find(m => m.value === experimentMonth)?.label} ${experimentYear}`
    : `${currentMonthFull} ${selectedYear}`;

  // The ShapleyData passed to ClimateMarkers — fall back to zero struct if not yet loaded
  const safeShapleyData: ShapleyData = shapleyData ?? {
    nao: 0, amo: 0, nino: 0, pdo: 0, iod: 0, anino: 0, ismr: 0,
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 px-3 sm:px-4 md:px-6 py-4 sm:py-6">
      <style>{`
        @keyframes spin-ring { to { transform: rotate(360deg); } }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none; width: 16px; height: 16px;
          border-radius: 50%; background: #fff; border: 2px solid #94a3b8;
          cursor: pointer; box-shadow: 0 1px 2px rgba(0,0,0,0.12); transition: border-color 0.15s;
        }
        input[type='range']:not(:disabled)::-webkit-slider-thumb { border-color: #f59e0b; }
        input[type='range']:disabled::-webkit-slider-thumb { cursor: not-allowed; }
        input[type='range']::-moz-range-thumb {
          width: 16px; height: 16px; border-radius: 50%;
          background: #fff; border: 2px solid #f59e0b; cursor: pointer;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto space-y-4 sm:space-y-5">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <header className="pb-3 sm:pb-4 border-b border-slate-200">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                Climate Oscillation Dashboard
                {isExperimentMode && (
                  <span className="ml-2 text-sm sm:text-base text-amber-600 font-medium">· Experiment</span>
                )}
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                {isExperimentMode
                  ? 'Custom parameter configuration active'
                  : 'Global climate indices · ISMR prediction'}
              </p>
            </div>
            {loading && (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none"
                  style={{ animation: 'spin-ring 1.1s linear infinite' }}
                >
                  <circle cx="6" cy="6" r="4.5" stroke="#cbd5e1" strokeWidth="1.5" />
                  <circle cx="6" cy="6" r="4.5" stroke="#475569" strokeWidth="1.5"
                    strokeLinecap="round" strokeDasharray="16 12" />
                </svg>
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">Predicting…</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Viz toggle */}
            <div className="flex border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
              {(['markers', 'shapley'] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => setVizMode(mode)}
                  disabled={loading}
                  className={`text-xs sm:text-sm px-3 py-1.5 sm:py-2 capitalize transition-colors font-medium disabled:opacity-50
                    ${vizMode === mode ? 'bg-slate-800 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  {mode === 'shapley' ? 'Shapley' : 'Markers'}
                </button>
              ))}
            </div>

            {/* Links */}
            <select
              value={linkType}
              disabled={loading}
              onChange={e => setLinkType(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-600 focus:outline-none shadow-sm disabled:opacity-50"
            >
              <option value="none">No Links</option>
              <option value="pcmci">PCMCI</option>
              <option value="granger">Granger Causality</option>
            </select>

            {/* Year */}
            <select
              value={selectedYear}
              onChange={e => handleYearChange(+e.target.value)}
              disabled={isExperimentMode || loading}
              className="bg-white border border-slate-200 px-2.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-slate-700 focus:outline-none shadow-sm disabled:opacity-50"
            >
              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>

            {/* Month */}
            <select
              value={selectedMonth}
              onChange={e => handleMonthChange(+e.target.value)}
              disabled={isExperimentMode || loading}
              className="bg-white border border-slate-200 px-2.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-slate-700 focus:outline-none shadow-sm disabled:opacity-50"
            >
              {MONTHS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>
          </div>
        </header>

        {/* ── Mobile: Shapley above map ───────────────────────────────────── */}
        {isMobile && vizMode === 'shapley' && (
          <ShapleyPanel
            shapleyData={shapleyData}
            shapleyLoading={shapleyLoading}
            shapleyError={shapleyError}
            features={features}
            monthLabel={currentMonthFull}
            year={selectedYear}
            isMobile
          />
        )}

        {/* ── Three-column layout ───────────────────────────────────────── */}
        <div className={`flex gap-3 sm:gap-4 items-start ${isMobile ? 'flex-col' : ''}`}>

          {/* Left — Shapley panel (desktop/tablet only) */}
          {!isMobile && (
            vizMode === 'shapley'
              ? (
                <ShapleyPanel
                  shapleyData={shapleyData}
                  shapleyLoading={shapleyLoading}
                  shapleyError={shapleyError}
                  features={features}
                  monthLabel={currentMonthFull}
                  year={selectedYear}
                  isMobile={false}
                />
              )
              : <div className="w-52 flex-shrink-0" />
          )}

          {/* Center — Map */}
          <div className={`${isMobile ? 'w-full' : 'flex-1 min-w-0'}`}>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest leading-tight">
                  {vizMode === 'shapley'
                    ? <><span className="hidden sm:inline">Shapley Contributions — </span>{mapTitle}</>
                    : <><span className="hidden sm:inline">Global Climate Oscillations — </span>{mapTitle}</>}
                </h2>
                <div className="flex items-center gap-2">
                  {(loading || shapleyLoading) && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 font-medium flex items-center gap-1">
                      <svg
                        className="w-3 h-3" viewBox="0 0 10 10" fill="none"
                        style={{ animation: 'spin-ring 1.1s linear infinite' }}
                      >
                        <circle cx="5" cy="5" r="3.5" stroke="#cbd5e1" strokeWidth="1.2" />
                        <circle cx="5" cy="5" r="3.5" stroke="#64748b" strokeWidth="1.2"
                          strokeLinecap="round" strokeDasharray="12 10" />
                      </svg>
                      computing
                    </span>
                  )}
                  {vizMode === 'shapley' && !shapleyLoading && !shapleyError && shapleyData && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-medium hidden sm:inline">
                      SHAP · live
                    </span>
                  )}
                  {vizMode === 'shapley' && shapleyError && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-red-500 font-medium hidden sm:inline">
                      SHAP · error
                    </span>
                  )}
                </div>
              </div>

              <section className="relative border border-slate-100 rounded-lg overflow-hidden">
                {loading && <MapLoadingOverlay />}
                <ComposableMap
                  projection="geoEqualEarth"
                  projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}
                  style={{ opacity: loading ? 0.4 : 1, transition: 'opacity 0.3s ease' }}
                >
                  <Sphere id="rsm-sphere" fill="#f8fafc" stroke="#e2e8f0" strokeWidth={0.5} />
                  <Graticule stroke="#e2e8f0" strokeWidth={0.5} />
                  <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                    {({ geographies }) =>
                      geographies.map(geo => (
                        <Geography
                          key={geo.rsmKey} geography={geo}
                          fill="#eeeeee" stroke="#d4d4d4" strokeWidth={0.5}
                          style={{ default: { outline: 'none' }, pressed: { outline: 'none' } }}
                        />
                      ))}
                  </Geographies>
                  <ClimateMarkers
                    climateData={climateData}
                    shapleyData={safeShapleyData}
                    linkType={linkType}
                    vizMode={vizMode}
                  />
                </ComposableMap>
              </section>

              {/* Legend */}
              <div className="mt-2.5 flex items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
                {vizMode === 'markers' ? (
                  <>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <span>Positive Phase</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <span>Negative Phase</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-blue-400" />
                      <span>Positive contribution</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-orange-400" />
                      <span>Negative contribution</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">Bar height ∝ |SHAP|</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right — Parameter panel */}
          {!isMobile && (
            <ParameterPanel
              features={features}
              isExperimentMode={isExperimentMode}
              isPanelExpanded={isPanelExpanded}
              isMobile={false}
              onFeatureChange={handleFeatureChange}
              onToggleFix={toggleFix}
              onToggleExperimentMode={toggleExperimentMode}
              onToggleExpanded={handlePanelExpandedToggle}
              onSubmit={handleSubmit}
              loading={loading}
              prediction={prediction}
            />
          )}
        </div>

        {/* Mobile parameter panel */}
        {isMobile && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3">
            <ParameterPanel
              features={features}
              isExperimentMode={isExperimentMode}
              isPanelExpanded={isPanelExpanded}
              isMobile
              onFeatureChange={handleFeatureChange}
              onToggleFix={toggleFix}
              onToggleExperimentMode={toggleExperimentMode}
              onToggleExpanded={handlePanelExpandedToggle}
              onSubmit={handleSubmit}
              loading={loading}
              prediction={prediction}
            />
          </div>
        )}

        <footer className="text-center text-xs text-slate-300 pb-2">
          Climate oscillation indices · ISMR prediction via Top-5 Sequential MLP
        </footer>
      </div>
    </div>
  );
}