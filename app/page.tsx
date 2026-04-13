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

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

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

// ============================================================================
// PARAMETER RANGE DEFINITIONS
// Typical observed ranges for each index based on the dataset.
// ============================================================================

interface ParamRange {
  min: number;
  max: number;
  step: number;
  unit?: string;
  description: string;
}

const PARAM_RANGES: Record<string, ParamRange> = {
  nao:   { min: -3.0,  max:  3.0,  step: 0.05, description: 'Typical: −3 to +3' },
  amo:   { min: -0.5,  max:  0.5,  step: 0.01, description: 'Typical: −0.5 to +0.5 °C' },
  nino:  { min: -3.0,  max:  3.0,  step: 0.05, description: 'Typical: −3 to +3 °C (SST anomaly)' },
  pdo:   { min: -3.0,  max:  3.0,  step: 0.05, description: 'Typical: −3 to +3' },
  iod:   { min: -1.5,  max:  1.5,  step: 0.05, description: 'Typical: −1.5 to +1.5 °C' },
  anino: { min: -1.5,  max:  1.5,  step: 0.05, description: 'Typical: −1.5 to +1.5 °C' },
  ismr:  { min:  200,  max:  1000, step: 5,    unit: 'mm', description: 'Typical: 200 – 1000 mm' },
};

// ============================================================================
// DUMMY SHAPLEY DATA
// ============================================================================

const DUMMY_SHAPLEY_DATABASE: Record<string, ShapleyData> = {
  default: {
    nao:   -0.18,
    amo:    0.42,
    nino:  -0.61,
    pdo:    0.27,
    iod:    0.55,
    anino: -0.12,
    ismr:   0.80,
  },
};

const getShapleyData = (year: number, month: number): ShapleyData => {
  const key = `${year}-${month}`;
  if (DUMMY_SHAPLEY_DATABASE[key]) return DUMMY_SHAPLEY_DATABASE[key];

  const seed = ((year - 2000) * 12 + month) / 180;
  const wave = (offset: number) =>
    parseFloat((Math.sin(seed * Math.PI * 2 + offset) * 0.5).toFixed(2));

  return {
    nao:   wave(0.0),
    amo:   wave(1.0),
    nino:  wave(2.0),
    pdo:   wave(3.0),
    iod:   wave(4.0),
    anino: wave(5.0),
    ismr:  wave(6.0),
  };
};

// ============================================================================
// SHAPLEY SIDE PANEL
// ============================================================================

function ShapleyPanel({
  shapleyData,
  features,
  currentMonthLabel,
  selectedYear,
}: {
  shapleyData: ShapleyData;
  features: ClimateFeature[];
  currentMonthLabel: string | undefined;
  selectedYear: number;
}) {
  const maxAbs = Math.max(
    ...Object.values(shapleyData).map(Math.abs),
    0.01,
  );

  return (
    <aside className="w-56 flex-shrink-0 flex flex-col gap-3">
      <div className="flex flex-col gap-0.5 mb-1">
        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
          Shapley Values
        </span>
        <span className="text-xs text-slate-500">
          {currentMonthLabel} {selectedYear}
        </span>
        <span className="text-[9px] text-slate-400 mt-0.5">
          Contribution to ISMR · dummy data
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {(Object.entries(shapleyData) as [keyof ShapleyData, number][])
          .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
          .map(([key, val]) => {
            const feature = features.find(f => f.id === key);
            const pct = (Math.abs(val) / maxAbs) * 100;
            const isPos = val >= 0;

            return (
              <div key={key} className="bg-white rounded-lg border border-slate-100 shadow-sm px-3 py-2">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-wide">
                    {key}
                  </span>
                  <span
                    className="text-xs font-semibold tabular-nums"
                    style={{ color: isPos ? '#1d4ed8' : '#c2410c' }}
                  >
                    {isPos ? '+' : ''}{val.toFixed(3)}
                  </span>
                </div>

                {/* Bar */}
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: isPos ? '#3b82f6' : '#f97316',
                    }}
                  />
                </div>

                <div className="text-[9px] text-slate-400 mt-1 leading-tight truncate">
                  {feature?.name ?? key}
                </div>
              </div>
            );
          })}
      </div>

      {/* Color legend */}
      <div className="mt-auto pt-2 flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-blue-500 flex-shrink-0" />
          <span className="text-[9px] text-slate-500">Positive contribution</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-orange-500 flex-shrink-0" />
          <span className="text-[9px] text-slate-500">Negative contribution</span>
        </div>
      </div>
    </aside>
  );
}

// ============================================================================
// PARAMETER SIDE PANEL
// Supports expanded (full sliders) and contracted (slim tab) states.
// ============================================================================

function ParameterPanel({
  features,
  isExperimentMode,
  isPanelExpanded,
  onFeatureChange,
  onToggleFix,
  onToggleExperimentMode,
  onToggleExpanded,
  onSubmit,
  loading,
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
}) {
  // ── Contracted state: slim vertical tab ────────────────────────────────────
  if (!isPanelExpanded) {
    return (
      <div className="flex-shrink-0 flex flex-col items-center">
        <button
          onClick={onToggleExpanded}
          title="Expand parameters panel"
          className={`
            flex flex-col items-center justify-center gap-2
            w-8 rounded-lg border shadow-sm py-4 transition-all duration-200
            ${isExperimentMode
              ? 'border-amber-300 bg-amber-50 hover:bg-amber-100'
              : 'border-slate-200 bg-white hover:bg-slate-50'}
          `}
        >
          {/* Chevron pointing left (open panel) */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
            <path
              d="M8 2L4 6L8 10"
              stroke={isExperimentMode ? '#d97706' : '#94a3b8'}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Vertical label */}
          <span
            className="text-[9px] font-bold tracking-widest uppercase leading-none select-none"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              color: isExperimentMode ? '#d97706' : '#94a3b8',
            }}
          >
            {isExperimentMode ? 'Experiment' : 'Parameters'}
          </span>

          {/* Active indicator dot */}
          {isExperimentMode && (
            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
          )}
        </button>
      </div>
    );
  }

  // ── Expanded state: full panel ─────────────────────────────────────────────
  return (
    <aside className="w-60 flex-shrink-0 flex flex-col gap-3">

      {/* Panel header with collapse button */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Parameters
          </span>
          <span className="text-[9px] text-slate-400">
            {isExperimentMode ? 'Experiment mode active' : 'Drag sliders to explore'}
          </span>
        </div>
        {/* Collapse button */}
        <button
          onClick={onToggleExpanded}
          title="Collapse parameters panel"
          className="p-1 rounded hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 flex-shrink-0 mt-0.5"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M4 2L8 6L4 10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Experiment toggle button */}
      <button
        onClick={onToggleExperimentMode}
        className={`text-xs px-3 py-1.5 rounded-md border transition-all duration-150 text-left font-medium ${
          isExperimentMode
            ? 'border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100'
            : 'border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50'
        }`}
      >
        {isExperimentMode ? '✕ Exit Experiment' : '⚗ Start Experiment'}
      </button>

      {/* Feature sliders */}
      <div className="flex flex-col gap-2">
        {features.map(f => {
          const range = PARAM_RANGES[f.id] ?? { min: -5, max: 5, step: 0.1, description: '' };
          const pct = ((f.value - range.min) / (range.max - range.min)) * 100;

          return (
            <div
              key={f.id}
              className={`rounded-lg border shadow-sm px-3 py-2.5 transition-all duration-200 ${
                !isExperimentMode
                  ? 'bg-white border-slate-100 opacity-80'
                  : f.fixed
                    ? 'bg-white border-slate-200'
                    : 'bg-amber-50/40 border-amber-300'
              }`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold font-mono text-slate-600 uppercase tracking-wide">
                    {f.abbreviation}
                  </span>
                  {isExperimentMode && !f.fixed && (
                    <span className="text-[8px] text-amber-600 font-medium bg-amber-100 px-1 rounded">
                      free
                    </span>
                  )}
                  {!isExperimentMode && (
                    <span className="text-[8px] text-slate-400 font-medium bg-slate-100 px-1 rounded">
                      locked
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold tabular-nums text-slate-700">
                    {f.id === 'ismr' ? f.value.toFixed(0) : f.value.toFixed(2)}
                    {range.unit ? ` ${range.unit}` : ''}
                  </span>
                  {/* Lock/unlock only meaningful inside experiment mode */}
                  {isExperimentMode && (
                    <button
                      onClick={() => onToggleFix(f.id)}
                      title={f.fixed ? 'Unlock to edit' : 'Lock value'}
                      className={`text-[9px] px-1.5 py-0.5 rounded border transition-colors ${
                        f.fixed
                          ? 'border-slate-200 text-slate-400 hover:border-slate-300 hover:bg-slate-50'
                          : 'border-amber-400 bg-amber-100 text-amber-700 hover:bg-amber-200'
                      }`}
                    >
                      {f.fixed ? '🔒' : '🔓'}
                    </button>
                  )}
                </div>
              </div>

              {/* Slider — disabled when not in experiment mode OR when locked */}
              <input
                type="range"
                min={range.min}
                max={range.max}
                step={range.step}
                value={f.value}
                disabled={!isExperimentMode || f.fixed}
                onChange={e => onFeatureChange(f.id, e.target.value)}
                className="w-full h-1.5 appearance-none rounded-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                style={{
                  background: (!isExperimentMode || f.fixed)
                    ? `linear-gradient(to right, #94a3b8 ${pct}%, #e2e8f0 ${pct}%)`
                    : `linear-gradient(to right, #f59e0b ${pct}%, #fde68a ${pct}%)`,
                }}
              />

              {/* Range labels */}
              <div className="flex justify-between mt-1">
                <span className="text-[8px] text-slate-400 tabular-nums">{range.min}</span>
                <span className="text-[8px] text-slate-400">{range.description}</span>
                <span className="text-[8px] text-slate-400 tabular-nums">{range.max}</span>
              </div>

              {/* Feature name */}
              <div className="text-[9px] text-slate-400 mt-0.5 leading-tight truncate">
                {f.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Apply button — only active in experiment mode */}
      <button
        onClick={onSubmit}
        disabled={loading || !isExperimentMode}
        title={!isExperimentMode ? 'Start Experiment to apply custom parameters' : undefined}
        className={`mt-auto px-4 py-2 rounded-md text-xs font-medium transition-all duration-200 shadow-sm ${
          isExperimentMode
            ? 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60'
            : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
        }`}
      >
        {loading ? 'Updating…' : 'Apply Parameters'}
      </button>
    </aside>
  );
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function Page() {
  // --------------------------------------------------------------------------
  // STATE
  // --------------------------------------------------------------------------

  const [selectedYear,  setSelectedYear]  = useState(2020);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [loading,       setLoading]       = useState(false);
  const [isExperimentMode, setIsExperimentMode] = useState(false);
  const [isPanelExpanded,  setIsPanelExpanded]  = useState(true);
  const [linkType,  setLinkType]  = useState<string>('none');
  const [vizMode,   setVizMode]   = useState<'markers' | 'shapley'>('markers');
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

  // --------------------------------------------------------------------------
  // CONSTANTS
  // --------------------------------------------------------------------------

  const years = Array.from({ length: 15 }, (_, i) => 2000 + i);
  const months = [
    { value: 1,  label: 'January'   },
    { value: 2,  label: 'February'  },
    { value: 3,  label: 'March'     },
    { value: 4,  label: 'April'     },
    { value: 5,  label: 'May'       },
    { value: 6,  label: 'June'      },
    { value: 7,  label: 'July'      },
    { value: 8,  label: 'August'    },
    { value: 9,  label: 'September' },
    { value: 10, label: 'October'   },
    { value: 11, label: 'November'  },
    { value: 12, label: 'December'  },
  ];

  // --------------------------------------------------------------------------
  // DERIVED STATE
  // --------------------------------------------------------------------------

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

  // --------------------------------------------------------------------------
  // EVENT HANDLERS
  // --------------------------------------------------------------------------

  const loadDataForYearMonth = (year: number, month: number) => {
    const dataPoint = mockClimateDatabase.find(
      d => d.year === year && d.month === month
    );
    if (dataPoint) {
      setFeatures(prev =>
        prev.map(f => ({
          ...f,
          value: dataPoint.data[f.id as keyof ClimateData] ?? f.value,
          fixed: true,
        }))
      );
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
    setFeatures(prev =>
      prev.map(f => (f.id === id ? { ...f, value: parseFloat(value) || 0 } : f))
    );
  };

  const toggleFix = (id: string) => {
    setFeatures(prev => {
      const updated = prev.map(f => (f.id === id ? { ...f, fixed: !f.fixed } : f));
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
      // Exit: restore dataset values, lock all features, reset experiment state,
      // and force the panel back to expanded so sliders are clearly visible & locked.
      loadDataForYearMonth(selectedYear, selectedMonth);
      setIsExperimentMode(false);
      setIsPanelExpanded(true);
      setExperimentYear(null);
      setExperimentMonth(null);
    } else {
      setExperimentYear(selectedYear);
      setExperimentMonth(selectedMonth);
      setIsExperimentMode(true);
      setIsPanelExpanded(true);
      setFeatures(prev => prev.map(f => ({ ...f, fixed: false })));
    }
  };

  const handlePanelExpandedToggle = () => {
    // Prevent collapsing while in experiment mode to avoid losing context
    if (!isPanelExpanded) {
      setIsPanelExpanded(true);
    } else {
      // Only allow collapsing outside experiment mode
      if (!isExperimentMode) setIsPanelExpanded(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/climate-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          year: selectedYear,
          month: selectedMonth,
          features: features.map(f => ({ id: f.id, value: f.value, fixed: f.fixed })),
        }),
      });
      if (!response.ok) throw new Error('API request failed');
      const result = await response.json();
      console.log('API Response:', result);
    } catch (error) {
      console.error('Error submitting data:', error);
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------------------------------
  // DERIVED UI LABELS
  // --------------------------------------------------------------------------

  const currentMonthLabel = months.find(m => m.value === selectedMonth)?.label;
  const mapTitle = isExperimentMode
    ? `Experiment (Based on ${months.find(m => m.value === experimentMonth)?.label} ${experimentYear})`
    : `${currentMonthLabel} ${selectedYear}`;

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 px-4 py-8">
      {/* Slider thumb styles injected globally */}
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #94a3b8;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
          transition: border-color 0.15s;
        }
        input[type='range']:not(:disabled)::-webkit-slider-thumb {
          border-color: #f59e0b;
        }
        input[type='range']::-moz-range-thumb {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #f59e0b;
          cursor: pointer;
        }
        input[type='range']:disabled::-webkit-slider-thumb {
          border-color: #94a3b8;
          cursor: not-allowed;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto space-y-6">

        {/* ================================================================ */}
        {/* HEADER                                                           */}
        {/* ================================================================ */}
        <header className="flex items-center justify-between pb-5 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Climate Oscillation Dashboard
              {isExperimentMode && (
                <span className="ml-3 text-base text-amber-600 font-medium">
                  • Experiment Mode
                </span>
              )}
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              {isExperimentMode
                ? 'Custom parameter configuration active'
                : 'Global climate indices visualization'}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-end">
            {/* Visualization mode toggle */}
            <div className="flex items-center gap-1 border border-slate-300 rounded-md overflow-hidden shadow-sm bg-white">
              <button
                onClick={() => setVizMode('markers')}
                className={`text-xs px-3 py-1.5 transition-colors ${
                  vizMode === 'markers'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Markers
              </button>
              <button
                onClick={() => setVizMode('shapley')}
                className={`text-xs px-3 py-1.5 transition-colors ${
                  vizMode === 'shapley'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Shapley Values
              </button>
            </div>

            {/* Links selector */}
            <span className="text-slate-600 text-sm font-medium">Links:</span>
            <select
              className="bg-white border border-slate-300 rounded-md px-3 py-1.5 text-slate-700 text-sm focus:border-blue-500 focus:outline-none"
              value={linkType}
              onChange={e => setLinkType(e.target.value)}
            >
              <option value="none">None</option>
              <option value="pcmci">PCMCI</option>
              <option value="granger">Granger Causality</option>
            </select>

            {/* Year / Month selectors */}
            <span className="text-slate-600 text-sm font-medium">YEAR:</span>
            <select
              value={selectedYear}
              onChange={e => handleYearChange(+e.target.value)}
              disabled={isExperimentMode}
              className="bg-white border border-slate-300 px-3 py-1.5 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:border-slate-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>

            <span className="text-slate-600 text-sm font-medium">MONTH:</span>
            <select
              value={selectedMonth}
              onChange={e => handleMonthChange(+e.target.value)}
              disabled={isExperimentMode}
              className="bg-white border border-slate-300 px-3 py-1.5 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:border-slate-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {months.map(m => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </header>

        {/* ================================================================ */}
        {/* THREE-COLUMN LAYOUT: Shapley | Map | Parameters                 */}
        {/* ================================================================ */}
        <div className="flex gap-4 items-start">

          {/* LEFT PANEL — Shapley values (only in shapley mode) */}
          {vizMode === 'shapley' ? (
            <ShapleyPanel
              shapleyData={shapleyData}
              features={features}
              currentMonthLabel={currentMonthLabel}
              selectedYear={selectedYear}
            />
          ) : (
            /* Placeholder to keep map centered when shapley is off */
            <div className="w-56 flex-shrink-0" />
          )}

          {/* CENTER — Map */}
          <div className="flex-1 min-w-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-slate-600 uppercase tracking-wider">
                  {vizMode === 'shapley'
                    ? `Shapley Contributions — ${mapTitle}`
                    : `Global Climate Oscillations — ${mapTitle}`}
                </h2>
                {vizMode === 'shapley' && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-medium">
                    SHAP · contribution to ISMR
                  </span>
                )}
              </div>

              <section className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <ComposableMap
                  projection="geoEqualEarth"
                  projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}
                >
                  <Sphere id="rsm-sphere" fill="#f8fafc" stroke="#E4E5E6" strokeWidth={0.5} />
                  <Graticule stroke="#E4E5E6" strokeWidth={0.5} />

                  <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                    {({ geographies }) =>
                      geographies.map(geo => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#eeeeeeff"
                          stroke="#dadadaff"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: 'none' },
                            pressed: { outline: 'none' },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  <ClimateMarkers
                    climateData={climateData}
                    shapleyData={shapleyData}
                    linkType={linkType}
                    vizMode={vizMode}
                  />
                </ComposableMap>
              </section>

              {/* Legend */}
              <div className="mt-3 flex items-center justify-center gap-6 text-xs text-slate-500">
                {vizMode === 'markers' ? (
                  <>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span>Positive Phase</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span>Negative Phase</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-blue-500" />
                      <span>Positive contribution to ISMR</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-orange-500" />
                      <span>Negative contribution to ISMR</span>
                    </div>
                    <span className="text-slate-400">Bar height ∝ |SHAP| · Dummy data</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — Parameter sliders */}
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
          />
        </div>

        {/* ================================================================ */}
        {/* FOOTER                                                           */}
        {/* ================================================================ */}
        <footer className="text-center text-xs text-slate-400 mt-4">
          Climate oscillation indices influence global weather systems
        </footer>

      </div>
    </div>
  );
}