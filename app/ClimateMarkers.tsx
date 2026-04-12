import { Marker, Line } from 'react-simple-maps';

interface ClimateMarker {
  coords: [number, number];
  id: string;
  value: number;
}

interface ClimateMarkersProps {
  climateData: {
    nao: number;
    amo: number;
    nino: number;
    pdo: number;
    iod: number;
    ismr: number;
    anino: number;
  };
  linkType: string;
}

/** Clamp helper */
const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

/** Radius scaling */
const getRadius = (value: number, isISMR: boolean) => {
  const MIN_R = 4;
  const MAX_R = 14;
  // normalize
  const normalized = isISMR
    ? clamp(Math.abs(value) / 1000, 0, 1) // ISMR scale
    : clamp(Math.abs(value), 0, 1);       // index scale (-1 → 1)
  return MIN_R + normalized * (MAX_R - MIN_R);
};

/** Color mapping */
const getColor = (value: number, max = 1) => {
  const alpha = 0.2 + (Math.abs(value) / max) * 0.8;
  if (value > 0) {
    // green
    return `rgba(34, 197, 94, ${alpha})`;
  }
  if (value < 0) {
    // red
    return `rgba(239, 68, 68, ${alpha})`;
  }
  // neutral
  return 'rgba(148, 163, 184, 0.3)';
};

const connections = [
  // NAO connections
  { from: 'NAO', to: 'AMO', color: '#3b82f6' },
  { from: 'NAO', to: 'ISMR', color: '#3b82f6' },
  // AMO connections
  { from: 'AMO', to: 'ANINO', color: '#ef4444' },
  { from: 'AMO', to: 'ISMR', color: '#3b82f6' },
  // NINO connections
  { from: 'NINO', to: 'PDO', color: '#ef4444' },
  { from: 'NINO', to: 'IOD', color: '#ef4444' },
  { from: 'NINO', to: 'ISMR', color: '#3b82f6' },
  // PDO connections
  { from: 'PDO', to: 'ISMR', color: '#3b82f6' },
  // IOD connections
  { from: 'IOD', to: 'ISMR', color: '#3b82f6' },
  { from: 'IOD', to: 'NINO', color: '#3b82f6' },
  // Atlantic Nino connections
  { from: 'ANINO', to: 'IOD', color: '#3b82f6' },
];

export default function ClimateMarkers({ climateData, linkType }: ClimateMarkersProps) {
  const markers: ClimateMarker[] = [
    { coords: [-30, 65], id: 'NAO', value: climateData.nao },
    { coords: [-50, 30], id: 'AMO', value: climateData.amo },
    { coords: [-10, -10], id: 'ANINO', value: climateData.anino },
    { coords: [170, -5], id: 'NINO', value: climateData.nino },
    { coords: [170, 30], id: 'PDO', value: climateData.pdo },
    { coords: [78, 0], id: 'IOD', value: climateData.iod },
    { coords: [78, 22], id: 'ISMR', value: climateData.ismr },
  ];

  // Helper function to find marker by ID
  const getMarkerById = (id: string) => markers.find(m => m.id === id);

  // Determine if links should be shown based on linkType
  const showLinks = linkType !== 'none';

  return (
    <>
      {/* Define arrowhead markers */}
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

      {/* Draw directed links if showLinks is true */}
      {showLinks && connections.map((connection, idx) => {
        const fromMarker = getMarkerById(connection.from);
        const toMarker = getMarkerById(connection.to);
        
        if (!fromMarker || !toMarker) return null;

        const from = fromMarker.coords;
        const to = toMarker.coords;

        // Determine which arrowhead marker to use
        const markerEnd = connection.color === '#ef4444' 
          ? 'url(#arrowhead-red)' 
          : 'url(#arrowhead-blue)';

        return (
          <Line
            key={`connection-${idx}`}
            from={from}
            to={to}
            stroke={connection.color}
            strokeWidth={2}
            strokeLinecap="round"
            opacity={0.6}
            markerEnd={markerEnd}
          />
        );
      })}

      {/* Draw markers on top of connections */}
      {markers.map((m) => {
        const isISMR = m.id === 'ISMR';
        const radius = getRadius(m.value, isISMR);
        return (
          <Marker key={m.id} coordinates={m.coords}>
            <circle
              r={radius}
              fill={getColor(m.value)}
              fillOpacity={0.85}
            />
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