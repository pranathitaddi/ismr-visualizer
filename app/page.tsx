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
    { id: 'anino', name: 'Atlantic Nino',                     value: 85,   fixed: true, abbreviation: 'ANINO' },
    { id: 'ismr',  name: 'Indian Summer Monsoon Rainfall',    value: 300,  fixed: true, abbreviation: 'ISMR'  },
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
      loadDataForYearMonth(selectedYear, selectedMonth);
      setIsExperimentMode(false);
      setExperimentYear(null);
      setExperimentMonth(null);
    } else {
      setExperimentYear(selectedYear);
      setExperimentMonth(selectedMonth);
      setIsExperimentMode(true);
      setFeatures(prev => prev.map(f => ({ ...f, fixed: false })));
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
    <div className="min-h-screen bg-slate-50 text-slate-800 px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* ================================================================ */}
        {/* HEADER                                                           */}
        {/* ================================================================ */}
        <header className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Climate Oscillation Dashboard
              {isExperimentMode && (
                <span className="ml-3 text-lg text-amber-600 font-medium">
                  • Experiment Mode
                </span>
              )}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {isExperimentMode
                ? 'Custom parameter configuration active'
                : 'Global climate indices visualization'}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-end">
            {/* Experiment toggle */}
            <button
              onClick={toggleExperimentMode}
              className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                isExperimentMode
                  ? 'border-amber-400 bg-amber-50 text-amber-700'
                  : 'border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              {isExperimentMode ? 'Exit Experiment' : 'Start Experiment'}
            </button>

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
            <span className="text-slate-600 text-sm font-medium tracking-wide">Links:</span>
            <select
              className="bg-white border border-slate-300 rounded-md px-4 py-2 text-slate-700 text-sm focus:border-blue-500 focus:outline-none"
              value={linkType}
              onChange={e => setLinkType(e.target.value)}
            >
              <option value="none">None</option>
              <option value="pcmci">PCMCI</option>
              <option value="granger">Granger Causality</option>
            </select>

            {/* Year / Month selectors */}
            <span className="text-slate-600 text-sm font-medium tracking-wide">YEAR:</span>
            <select
              value={selectedYear}
              onChange={e => handleYearChange(+e.target.value)}
              disabled={isExperimentMode}
              className="bg-white border border-slate-300 px-4 py-2 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:border-slate-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>

            <span className="text-slate-600 text-sm font-medium tracking-wide">MONTH:</span>
            <select
              value={selectedMonth}
              onChange={e => handleMonthChange(+e.target.value)}
              disabled={isExperimentMode}
              className="bg-white border border-slate-300 px-4 py-2 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:border-slate-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {months.map(m => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </header>

        {/* ================================================================ */}
        {/* MAP                                                              */}
        {/* ================================================================ */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-600 uppercase tracking-wider">
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

          <section className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
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
          <div className="mt-4 flex items-center justify-center gap-8 text-sm text-slate-500">
            {vizMode === 'markers' ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <span>Positive Phase</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500" />
                  <span>Negative Phase</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-500" />
                  <span>Positive contribution to ISMR</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-orange-500" />
                  <span>Negative contribution to ISMR</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Bar height ∝ |SHAP value| · Dummy data</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ================================================================ */}
        {/* SHAPLEY TABLE                                                    */}
        {/* ================================================================ */}
        {vizMode === 'shapley' && (
          <section className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
            <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Shapley Values — {currentMonthLabel} {selectedYear}
              </h3>
              <span className="text-xs text-slate-400">Dummy data · replace with real SHAP output</span>
            </div>
            <div className="divide-y divide-slate-100">
              {(Object.entries(shapleyData) as [keyof ShapleyData, number][])
                .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
                .map(([key, val]) => {
                  const feature = features.find(f => f.id === key);
                  const pct = Math.abs(val) * 100;
                  return (
                    <div key={key} className="flex items-center gap-4 px-5 py-3">
                      <div className="w-14 text-xs font-mono font-semibold text-slate-600 uppercase">
                        {key}
                      </div>
                      <div className="flex-1 text-sm text-slate-700">
                        {feature?.name ?? key}
                      </div>
                      <div className="w-40 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: val >= 0 ? '#3b82f6' : '#f97316',
                          }}
                        />
                      </div>
                      <div
                        className="w-14 text-right text-sm font-medium tabular-nums"
                        style={{ color: val >= 0 ? '#1d4ed8' : '#c2410c' }}
                      >
                        {val >= 0 ? '+' : ''}{val.toFixed(3)}
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        )}

        {/* ================================================================ */}
        {/* SUBMIT BUTTON                                                    */}
        {/* ================================================================ */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:bg-blue-400 shadow-sm"
          >
            {loading ? 'Updating…' : 'Apply Parameters'}
          </button>
        </div>

        {/* ================================================================ */}
        {/* FEATURE CONTROLS                                                 */}
        {/* ================================================================ */}
        <section className="border border-slate-200 rounded-xl divide-y divide-slate-200 bg-white shadow-sm">
          {features.map(f => (
            <div key={f.id} className="flex items-center gap-4 p-4">
              <div className="w-12 text-xs text-slate-600 font-mono font-medium">
                {f.abbreviation}
              </div>
              <div className="flex-1 text-sm text-slate-800">{f.name}</div>
              <input
                type="number"
                step="0.1"
                value={f.value}
                disabled={f.fixed}
                onChange={e => handleFeatureChange(f.id, e.target.value)}
                className="w-28 bg-white border border-slate-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 shadow-sm"
              />
              <button
                onClick={() => toggleFix(f.id)}
                className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                  f.fixed
                    ? 'border-amber-400 bg-amber-50 text-amber-700'
                    : 'border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                {f.fixed ? 'Locked' : 'Lock'}
              </button>
            </div>
          ))}
        </section>

        {/* ================================================================ */}
        {/* FOOTER                                                           */}
        {/* ================================================================ */}
        <footer className="text-center text-xs text-slate-500 mt-8">
          Climate oscillation indices influence global weather systems
        </footer>

      </div>
    </div>
  );
}