import { Marker, Line } from 'react-simple-maps';

// ============================================================================
// TYPE DEFINITIONS (exported for use in page.tsx)
// ============================================================================

export interface ShapleyData {
  nao: number;
  amo: number;
  nino: number;
  pdo: number;
  iod: number;
  anino: number;
  ismr: number;
}

interface ClimateData {
  nao: number;
  amo: number;
  nino: number;
  pdo: number;
  iod: number;
  ismr: number;
  anino: number;
}

interface ClimateMarker {
  coords: [number, number];
  id: string;
  value: number;
}

interface ClimateMarkersProps {
  climateData: ClimateData;
  shapleyData: ShapleyData;
  linkType: string;
  vizMode: 'markers' | 'shapley';
}

// ============================================================================
// HELPERS
// ============================================================================

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

const getRadius = (value: number, isISMR: boolean): number => {
  const MIN_R = 4;
  const MAX_R = 14;
  const normalized = isISMR
    ? clamp(Math.abs(value) / 1000, 0, 1)
    : clamp(Math.abs(value), 0, 1);
  return MIN_R + normalized * (MAX_R - MIN_R);
};

const getColor = (value: number): string => {
  const alpha = 0.2 + (Math.abs(value)) * 0.8;
  if (value > 0) return `rgba(34, 197, 94, ${alpha})`;
  if (value < 0) return `rgba(239, 68, 68, ${alpha})`;
  return 'rgba(148, 163, 184, 0.3)';
};

/** Bar height proportional to |shapley value|, capped at MAX_BAR_H px */
const getShapleyBarHeight = (value: number): number => {
  const MAX_BAR_H = 30;
  return clamp(Math.abs(value) * MAX_BAR_H * 2, 2, MAX_BAR_H);
};

const SHAPLEY_POS_COLOR = '#3b82f6'; // blue  → pushes ISMR up
const SHAPLEY_NEG_COLOR = '#f97316'; // orange → pulls ISMR down

// Fixed vertical offset above the marker for all headings in shapley mode
const LABEL_ABOVE_OFFSET = 20;

// ============================================================================
// CONNECTIONS
// ============================================================================

const connections: { from: string; to: string; color: string }[] = [
  { from: 'NAO',   to: 'AMO',   color: '#3b82f6' },
  { from: 'NAO',   to: 'ISMR',  color: '#3b82f6' },
  { from: 'AMO',   to: 'ANINO', color: '#ef4444' },
  { from: 'AMO',   to: 'ISMR',  color: '#3b82f6' },
  { from: 'NINO',  to: 'PDO',   color: '#ef4444' },
  { from: 'NINO',  to: 'IOD',   color: '#ef4444' },
  { from: 'NINO',  to: 'ISMR',  color: '#3b82f6' },
  { from: 'PDO',   to: 'ISMR',  color: '#3b82f6' },
  { from: 'IOD',   to: 'ISMR',  color: '#3b82f6' },
  { from: 'IOD',   to: 'NINO',  color: '#3b82f6' },
  { from: 'ANINO', to: 'IOD',   color: '#3b82f6' },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function ClimateMarkers({
  climateData,
  shapleyData,
  linkType,
  vizMode,
}: ClimateMarkersProps) {
  const markers: ClimateMarker[] = [
    { coords: [-30,  65], id: 'NAO',   value: climateData.nao   },
    { coords: [-50,  30], id: 'AMO',   value: climateData.amo   },
    { coords: [-10, -10], id: 'ANINO', value: climateData.anino },
    { coords: [170,  -5], id: 'NINO',  value: climateData.nino  },
    { coords: [170,  30], id: 'PDO',   value: climateData.pdo   },
    { coords: [ 78,   0], id: 'IOD',   value: climateData.iod   },
    { coords: [ 78,  22], id: 'ISMR',  value: climateData.ismr  },
  ];

  const getMarkerById = (id: string) => markers.find(m => m.id === id);
  const showLinks = linkType !== 'none';

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* SVG DEFS — arrowheads                                              */}
      {/* ------------------------------------------------------------------ */}
      <defs>
        <marker
          id="arrowhead-red"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" opacity="0.6" />
        </marker>
        <marker
          id="arrowhead-blue"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" opacity="0.6" />
        </marker>
      </defs>

      {/* ------------------------------------------------------------------ */}
      {/* LINKS                                                              */}
      {/* ------------------------------------------------------------------ */}
      {showLinks &&
        connections.map((conn, idx) => {
          const from = getMarkerById(conn.from);
          const to   = getMarkerById(conn.to);
          if (!from || !to) return null;

          const markerEnd =
            conn.color === '#ef4444'
              ? 'url(#arrowhead-red)'
              : 'url(#arrowhead-blue)';

          return (
            <Line
              key={`conn-${idx}`}
              from={from.coords}
              to={to.coords}
              stroke={conn.color}
              strokeWidth={2}
              strokeLinecap="round"
              opacity={0.6}
              markerEnd={markerEnd}
            />
          );
        })}

      {/* ------------------------------------------------------------------ */}
      {/* MARKERS                                                            */}
      {/* ------------------------------------------------------------------ */}
      {markers.map((m) => {
        const isISMR  = m.id === 'ISMR';
        const shapVal = shapleyData[m.id.toLowerCase() as keyof ShapleyData] ?? 0;

        if (vizMode === 'shapley') {
          // Requirement 1: Hide ISMR entirely in Shapley mode
          if (isISMR) return null;

          // ---- Shapley bar chart view ----
          const barH   = getShapleyBarHeight(shapVal);
          const barW   = 16;
          const barCol = shapVal >= 0 ? SHAPLEY_POS_COLOR : SHAPLEY_NEG_COLOR;
          const baseR  = 5;

          // Bar always rises above the base circle
          const barY = -(barH + baseR + 2);

          return (
            <Marker key={m.id} coordinates={m.coords}>
              {/* Base circle */}
              <circle r={baseR} fill="#94a3b8" fillOpacity={0.6} />

              {/* Bar always rendered above the marker */}
              <rect
                x={-barW / 2}
                y={barY}
                width={barW}
                height={barH}
                fill={barCol}
                rx={2}
                opacity={0.85}
              />

              {/* Requirement 2: Label always positioned above the marker,
                  using a fixed offset independent of shapVal sign or bar height */}
              <text
                y={barY - LABEL_ABOVE_OFFSET}
                textAnchor="middle"
                fontSize={10}
                fontWeight={700}
                fill="#0f172a"
              >
                {m.id}
              </text>

              {/* Shapley value displayed just above the bar */}
              <text
                y={barY - 4}
                textAnchor="middle"
                fontSize={8}
                fill={barCol}
                fontWeight={600}
              >
                {shapVal >= 0 ? '+' : ''}{shapVal.toFixed(2)}
              </text>
            </Marker>
          );
        }

        // ---- Standard marker view ----
        const radius = getRadius(m.value, isISMR);
        return (
          <Marker key={m.id} coordinates={m.coords}>
            <circle r={radius} fill={getColor(m.value)} fillOpacity={0.85} />
            {/* Requirement 2: Label always above the marker */}
            <text
              y={-radius - 6}
              textAnchor="middle"
              fontSize={11}
              fontWeight={600}
              fill="#0f172a"
            >
              {m.id}
            </text>
            <text
              y={radius + 12}
              textAnchor="middle"
              fontSize={9}
              fill="#475569"
            >
              {isISMR ? m.value.toFixed(0) : m.value.toFixed(2)}
            </text>
          </Marker>
        );
      })}
    </>
  );
}