'use client';

import React, { useState } from 'react';
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

const DUMMY_SHAPLEY: Record<string, ShapleyData> = {
  default: { nao: -0.18, amo: 0.42, nino: -0.61, pdo: 0.27, iod: 0.55, anino: -0.12, ismr: 0.80 },
};

function getShapleyData(year: number, month: number): ShapleyData {
  const key = `${year}-${month}`;
  if (DUMMY_SHAPLEY[key]) return DUMMY_SHAPLEY[key];
  const seed = ((year - 2000) * 12 + month) / 180;
  const wave = (offset: number) =>
    parseFloat((Math.sin(seed * Math.PI * 2 + offset) * 0.5).toFixed(2));
  return { nao: wave(0), amo: wave(1), nino: wave(2), pdo: wave(3), iod: wave(4), anino: wave(5), ismr: wave(6) };
}

// ── Map Loading Overlay ────────────────────────────────────────────────────────

function MapLoadingOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg"
      style={{ backgroundColor: 'rgba(248, 250, 252, 0.85)', backdropFilter: 'blur(2px)' }}>
      <style>{`
        @keyframes spin-ring {
          to { transform: rotate(360deg); }
        }
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
        {/* Spinner */}
        <div className="relative w-10 h-10">
          <svg className="spin-ring w-10 h-10" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" stroke="#e2e8f0" strokeWidth="3" />
            <circle cx="20" cy="20" r="16"
              stroke="#475569"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="60 40"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-slate-500 pulse-dot-1" />
          </div>
        </div>

        {/* Label */}
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-[11px] font-semibold text-slate-600 tracking-wide">Running prediction…</p>

          {/* Shimmer progress bar */}
          <div className="relative w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
            <div className="shimmer-bar absolute inset-y-0 w-1/3 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #64748b, transparent)' }} />
          </div>

          {/* Bouncing dots */}
          <div className="flex items-center gap-1 mt-0.5">
            <div className="w-1 h-1 rounded-full bg-slate-400 pulse-dot-1" />
            <div className="w-1 h-1 rounded-full bg-slate-400 pulse-dot-2" />
            <div className="w-1 h-1 rounded-full bg-slate-400 pulse-dot-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Shapley Panel ─────────────────────────────────────────────────────────────

function ShapleyPanel({
  shapleyData, features, monthLabel, year,
}: {
  shapleyData: ShapleyData;
  features: ClimateFeature[];
  monthLabel: string;
  year: number;
}) {
  const maxAbs = Math.max(...Object.values(shapleyData).map(Math.abs), 0.01);

  return (
    <aside className="w-48 flex-shrink-0 flex flex-col gap-2">
      <div className="mb-1">
        <p className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase">Shapley Values</p>
        <p className="text-[10px] text-slate-500 mt-0.5">{monthLabel} {year} · contribution to ISMR</p>
      </div>

      <div className="flex flex-col gap-1">
        {(Object.entries(shapleyData) as [keyof ShapleyData, number][])
          .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
          .map(([key, val]) => {
            const pct = (Math.abs(val) / maxAbs) * 100;
            const pos = val >= 0;
            return (
              <div key={key} className="bg-white rounded-md border border-slate-100 px-2.5 py-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-bold font-mono text-slate-500 uppercase">{key}</span>
                  <span className="text-[10px] font-semibold tabular-nums" style={{ color: pos ? '#2563eb' : '#ea580c' }}>
                    {pos ? '+' : ''}{val.toFixed(3)}
                  </span>
                </div>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: pos ? '#3b82f6' : '#f97316' }} />
                </div>
                <p className="text-[8px] text-slate-400 mt-0.5 truncate">
                  {features.find(f => f.id === key)?.name ?? key}
                </p>
              </div>
            );
          })}
      </div>

      <div className="mt-auto pt-2 flex flex-col gap-1">
        {[['#3b82f6', 'Positive'], ['#f97316', 'Negative']].map(([col, label]) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: col }} />
            <span className="text-[8px] text-slate-400">{label} contribution</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

// ── Parameter Panel ───────────────────────────────────────────────────────────

function ParameterPanel({
  features, isExperimentMode, isPanelExpanded,
  onFeatureChange, onToggleFix, onToggleExperimentMode,
  onToggleExpanded, onSubmit, loading, prediction,
}: {
  features: ClimateFeature[];
  isExperimentMode: boolean;
  isPanelExpanded: boolean;
  onFeatureChange: (id: string, value: string) => void;
  onToggleFix: (id: string) => void;
  onToggleExperimentMode: () => void;
  onToggleExpanded: () => void;
  onSubmit: () => void;
  loading: boolean;
  prediction: number | null;
}) {
  if (!isPanelExpanded) {
    return (
      <div className="flex-shrink-0">
        <button
          onClick={onToggleExpanded}
          title="Expand parameters"
          className={`flex flex-col items-center justify-center gap-2 w-7 rounded-lg border py-4 transition-all
            ${isExperimentMode ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M8 2L4 6L8 10" stroke={isExperimentMode ? '#d97706' : '#94a3b8'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[8px] font-bold tracking-widest uppercase leading-none select-none"
            style={{ writingMode: 'vertical-rl', color: isExperimentMode ? '#d97706' : '#94a3b8' }}>
            {isExperimentMode ? 'Exp' : 'Params'}
          </span>
          {isExperimentMode && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
        </button>
      </div>
    );
  }

  return (
    <aside className="w-56 flex-shrink-0 flex flex-col gap-2.5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase">Parameters</p>
          <p className="text-[8px] text-slate-400 mt-0.5">
            {isExperimentMode ? 'Experiment mode active' : 'Drag sliders to explore'}
          </p>
        </div>
        <button onClick={onToggleExpanded} className="p-1 rounded hover:bg-slate-100 text-slate-400">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <button
        onClick={onToggleExperimentMode}
        disabled={loading}
        className={`text-[10px] px-2.5 py-1.5 rounded-md border font-medium transition-all
          ${isExperimentMode
            ? 'border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100 disabled:opacity-50'
            : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-50'}`}
      >
        {isExperimentMode ? '✕ Exit Experiment' : '⚗ Start Experiment'}
      </button>

      <div className="flex flex-col gap-1.5">
        {features.map(f => {
          const range = PARAM_RANGES[f.id] ?? { min: -5, max: 5, step: 0.1, description: '' };
          const pct = ((f.value - range.min) / (range.max - range.min)) * 100;
          const active = isExperimentMode && !f.fixed;

          return (
            <div key={f.id} className={`rounded-md border px-2.5 py-2 transition-all
              ${!isExperimentMode ? 'bg-white border-slate-100 opacity-75'
                : f.fixed ? 'bg-white border-slate-200'
                : 'bg-amber-50/50 border-amber-300'}`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-bold font-mono text-slate-600 uppercase">{f.abbreviation}</span>
                  {active && <span className="text-[7px] text-amber-600 bg-amber-100 px-1 rounded">free</span>}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-semibold tabular-nums text-slate-700">
                    {f.id === 'ismr' ? f.value.toFixed(0) : f.value.toFixed(2)}
                    {range.unit ? ` ${range.unit}` : ''}
                  </span>
                  {isExperimentMode && (
                    <button onClick={() => onToggleFix(f.id)}
                      disabled={loading}
                      className="text-[8px] px-1 py-0.5 rounded border transition-colors leading-none disabled:opacity-40 disabled:cursor-not-allowed"
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
                min={range.min} max={range.max} step={range.step}
                value={f.value}
                disabled={!isExperimentMode || f.fixed || loading}
                onChange={e => onFeatureChange(f.id, e.target.value)}
                className="w-full h-1.5 appearance-none rounded-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                style={{
                  background: active && !loading
                    ? `linear-gradient(to right, #f59e0b ${pct}%, #fde68a ${pct}%)`
                    : `linear-gradient(to right, #94a3b8 ${pct}%, #e2e8f0 ${pct}%)`,
                }}
              />

              <div className="flex justify-between mt-0.5">
                <span className="text-[7px] text-slate-400 tabular-nums">{range.min}</span>
                <span className="text-[7px] text-slate-400">{range.description}</span>
                <span className="text-[7px] text-slate-400 tabular-nums">{range.max}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prediction result */}
      {prediction !== null && !loading && (
        <div className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2">
          <p className="text-[8px] text-blue-400 font-semibold uppercase tracking-wider mb-0.5">Model Prediction</p>
          <p className="text-sm font-bold text-blue-700 tabular-nums">{prediction.toFixed(1)} mm</p>
          <p className="text-[7px] text-blue-400 mt-0.5">ISMR · Top-5 Sequential MLP</p>
        </div>
      )}

      {/* Loading state in panel */}
      {loading && (
        <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 flex items-center gap-2.5">
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none"
            style={{ animation: 'spin-ring 1.1s linear infinite' }}>
            <circle cx="8" cy="8" r="6" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="8" cy="8" r="6" stroke="#475569" strokeWidth="2"
              strokeLinecap="round" strokeDasharray="22 16" />
          </svg>
          <div>
            <p className="text-[9px] font-semibold text-slate-500">Awaiting response…</p>
            <p className="text-[8px] text-slate-400 mt-0.5">MLP model running</p>
          </div>
        </div>
      )}

      <button
        onClick={onSubmit}
        disabled={loading || !isExperimentMode}
        title={!isExperimentMode ? 'Start Experiment to run prediction' : undefined}
        className={`mt-auto px-3 py-1.5 rounded-md text-[10px] font-semibold transition-all shadow-sm flex items-center justify-center gap-1.5
          ${isExperimentMode && !loading
            ? 'bg-slate-800 text-white hover:bg-slate-700'
            : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'}`}
      >
        {loading ? (
          <>
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"
              style={{ animation: 'spin-ring 1.1s linear infinite' }}>
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

  const [features, setFeatures] = useState<ClimateFeature[]>([
    { id: 'nao',   name: 'North Atlantic Oscillation',        value: 0.5,  fixed: true, abbreviation: 'NAO'   },
    { id: 'amo',   name: 'Atlantic Multidecadal Oscillation', value: 0.3,  fixed: true, abbreviation: 'AMO'   },
    { id: 'nino',  name: 'El Niño–Southern Oscillation',      value: -0.2, fixed: true, abbreviation: 'NINO'  },
    { id: 'pdo',   name: 'Pacific Decadal Oscillation',       value: 0.4,  fixed: true, abbreviation: 'PDO'   },
    { id: 'iod',   name: 'Indian Ocean Dipole',               value: 0.1,  fixed: true, abbreviation: 'IOD'   },
    { id: 'anino', name: 'Atlantic Niño',                     value: 0.2,  fixed: true, abbreviation: 'ANINO' },
    { id: 'ismr',  name: 'Indian Summer Monsoon Rainfall',    value: 600,  fixed: true, abbreviation: 'ISMR'  },
  ]);

  // ── Derived state ───────────────────────────────────────────────────────────

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
  const shapleyData = getShapleyData(selectedYear, selectedMonth);
  const currentMonthFull = MONTHS_FULL.find(m => m.value === selectedMonth)?.label ?? '';

  // ── Handlers ────────────────────────────────────────────────────────────────

  const loadDataForYearMonth = (year: number, month: number) => {
    const dp = mockClimateDatabase.find(d => d.year === year && d.month === month);
    if (dp) setFeatures(prev => prev.map(f => ({ ...f, value: (dp.data as any)[f.id] ?? f.value, fixed: true })));
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
      if (hasUnlocked && !isExperimentMode) { setExperimentYear(selectedYear); setExperimentMonth(selectedMonth); setIsExperimentMode(true); }
      else if (!hasUnlocked && isExperimentMode) { setIsExperimentMode(false); setExperimentYear(null); setExperimentMonth(null); }
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
    if (!isPanelExpanded) { setIsPanelExpanded(true); }
    else if (!isExperimentMode) { setIsPanelExpanded(false); }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setPrediction(null);
    try {
      const targetYear = selectedYear;
      const featureMap = Object.fromEntries(features.map(f => [f.id, f.value]));

      const monthWindow = [
        { year: targetYear - 1, month: 10 },
        { year: targetYear - 1, month: 11 },
        { year: targetYear - 1, month: 12 },
        ...Array.from({ length: 9 }, (_, i) => ({ year: targetYear, month: i + 1 })),
      ];

      const monthly_data = monthWindow.map(({ year, month }) => ({
        year,
        month,
        n:  featureMap['nino']  ?? 0,
        An: featureMap['anino'] ?? 0,
        A:  featureMap['amo']   ?? 0,
        Io: featureMap['iod']   ?? 0,
      }));

      const res = await fetch('http://localhost:5328/predict', {
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
        setFeatures(prev => prev.map(f =>
          f.id === 'ismr' ? { ...f, value: Math.round(result.prediction) } : f
        ));
      }
    } catch (err) {
      console.error('Prediction error:', err);
    } finally {
      setLoading(false);
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  const mapTitle = isExperimentMode
    ? `Experiment · based on ${MONTHS_FULL.find(m => m.value === experimentMonth)?.label} ${experimentYear}`
    : `${currentMonthFull} ${selectedYear}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 px-4 py-6">
      <style>{`
        @keyframes spin-ring {
          to { transform: rotate(360deg); }
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none; width: 12px; height: 12px;
          border-radius: 50%; background: #fff; border: 2px solid #94a3b8;
          cursor: pointer; box-shadow: 0 1px 2px rgba(0,0,0,0.12); transition: border-color 0.15s;
        }
        input[type='range']:not(:disabled)::-webkit-slider-thumb { border-color: #f59e0b; }
        input[type='range']:disabled::-webkit-slider-thumb { cursor: not-allowed; }
        input[type='range']::-moz-range-thumb {
          width: 12px; height: 12px; border-radius: 50%;
          background: #fff; border: 2px solid #f59e0b; cursor: pointer;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto space-y-5">

        {/* Header */}
        <header className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Climate Oscillation Dashboard
              {isExperimentMode && (
                <span className="ml-2 text-sm text-amber-600 font-medium">· Experiment</span>
              )}
            </h1>
            <p className="text-slate-400 text-xs mt-0.5">
              {isExperimentMode ? 'Custom parameter configuration active' : 'Global climate indices · ISMR prediction'}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            {/* Global loading badge */}
            {loading && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"
                  style={{ animation: 'spin-ring 1.1s linear infinite' }}>
                  <circle cx="6" cy="6" r="4.5" stroke="#cbd5e1" strokeWidth="1.5" />
                  <circle cx="6" cy="6" r="4.5" stroke="#475569" strokeWidth="1.5"
                    strokeLinecap="round" strokeDasharray="16 12" />
                </svg>
                <span className="text-[9px] font-medium text-slate-500">Predicting…</span>
              </div>
            )}

            {/* Viz toggle */}
            <div className="flex border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm">
              {(['markers', 'shapley'] as const).map(mode => (
                <button key={mode} onClick={() => setVizMode(mode)}
                  disabled={loading}
                  className={`text-[10px] px-3 py-1.5 capitalize transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed
                    ${vizMode === mode ? 'bg-slate-800 text-white' : 'text-slate-500 hover:bg-slate-50'}`}>
                  {mode === 'shapley' ? 'Shapley' : 'Markers'}
                </button>
              ))}
            </div>

            {/* Links */}
            <select
              value={linkType}
              disabled={loading}
              onChange={e => setLinkType(e.target.value)}
              className="bg-white border border-slate-200 rounded-md px-2.5 py-1.5 text-[10px] text-slate-600 focus:outline-none shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
              className="bg-white border border-slate-200 px-2.5 py-1.5 rounded-md text-[10px] text-slate-700 focus:outline-none shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>

            {/* Month */}
            <select
              value={selectedMonth}
              onChange={e => handleMonthChange(+e.target.value)}
              disabled={isExperimentMode || loading}
              className="bg-white border border-slate-200 px-2.5 py-1.5 rounded-md text-[10px] text-slate-700 focus:outline-none shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {MONTHS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>
          </div>
        </header>

        {/* Three-column layout */}
        <div className="flex gap-4 items-start">

          {/* Left — Shapley panel or spacer */}
          {vizMode === 'shapley'
            ? <ShapleyPanel shapleyData={shapleyData} features={features} monthLabel={currentMonthFull} year={selectedYear} />
            : <div className="w-48 flex-shrink-0" />}

          {/* Center — Map */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {vizMode === 'shapley' ? `Shapley Contributions — ${mapTitle}` : `Global Climate Oscillations — ${mapTitle}`}
                </h2>
                <div className="flex items-center gap-2">
                  {loading && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 font-medium flex items-center gap-1">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none"
                        style={{ animation: 'spin-ring 1.1s linear infinite' }}>
                        <circle cx="5" cy="5" r="3.5" stroke="#cbd5e1" strokeWidth="1.2" />
                        <circle cx="5" cy="5" r="3.5" stroke="#64748b" strokeWidth="1.2"
                          strokeLinecap="round" strokeDasharray="12 10" />
                      </svg>
                      computing
                    </span>
                  )}
                  {vizMode === 'shapley' && !loading && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium">
                      SHAP · dummy data
                    </span>
                  )}
                </div>
              </div>

              {/* Map container — position relative so overlay can be absolute */}
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
                        <Geography key={geo.rsmKey} geography={geo} fill="#eeeeee" stroke="#d4d4d4" strokeWidth={0.5}
                          style={{ default: { outline: 'none' }, pressed: { outline: 'none' } }} />
                      ))}
                  </Geographies>
                  <ClimateMarkers climateData={climateData} shapleyData={shapleyData} linkType={linkType} vizMode={vizMode} />
                </ComposableMap>
              </section>

              {/* Legend */}
              <div className="mt-2.5 flex items-center justify-center gap-5 text-[9px] text-slate-400">
                {vizMode === 'markers' ? (
                  <>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-green-400" /><span>Positive Phase</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><span>Negative Phase</span></div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-blue-400" /><span>Positive contribution</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-orange-400" /><span>Negative contribution</span></div>
                    <span className="text-slate-300">Bar height ∝ |SHAP|</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right — Parameter panel */}
          <ParameterPanel
            features={features}
            isExperimentMode={isExperimentMode}
            isPanelExpanded={isPanelExpanded}
            onFeatureChange={handleFeatureChange}
            onToggleFix={toggleFix}
            onToggleExperimentMode={toggleExperimentMode}
            onToggleExpanded={handlePanelExpandedToggle}
            onSubmit={handleSubmit}
            loading={loading}
            prediction={prediction}
          />
        </div>

        <footer className="text-center text-[9px] text-slate-300">
          Climate oscillation indices · ISMR prediction via Top-5 Sequential MLP
        </footer>
      </div>
    </div>
  );
}