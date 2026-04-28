import { useState } from 'react';
import { Marker, Line } from 'react-simple-maps';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ShapleyData {
  nao: number; amo: number; nino: number;
  pdo: number; iod: number; anino: number; ismr: number;
}

interface ClimateData {
  nao: number; amo: number; nino: number;
  pdo: number; iod: number; ismr: number; anino: number;
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
  mapWidth?: number;
  mapHeight?: number;
}

// ── Equal Earth Projection ────────────────────────────────────────────────────

const EE_A = [1.340264, -0.081106, 0.000893, 0.003796];
const EE_M = Math.sqrt(3) / 2;
const EE_X_EXTENT = 2.6350596 * 2;
const EE_Y_EXTENT = 1.3173627 * 2;

function geoToPixel(lon: number, lat: number, mapWidth: number, mapHeight: number): [number, number] {
  const lam = (lon * Math.PI) / 180;
  const phi = (lat * Math.PI) / 180;
  const theta = Math.asin(EE_M * Math.sin(phi));
  const t2 = theta * theta;
  const t6 = t2 * t2 * t2;
  const denom = EE_M * (EE_A[0] + 3 * EE_A[1] * t2 + t6 * (7 * EE_A[2] + 9 * EE_A[3] * t2));
  const x = (lam * Math.cos(theta)) / denom;
  const y = theta * (EE_A[0] + EE_A[1] * t2 + t6 * (EE_A[2] + EE_A[3] * t2));
  const scale = Math.min(mapWidth / EE_X_EXTENT, mapHeight / EE_Y_EXTENT);
  return [mapWidth / 2 + x * scale, mapHeight / 2 - y * scale];
}

// ── Node Helpers ──────────────────────────────────────────────────────────────

const SHAPLEY_POS_COLOR = '#3b82f6';
const SHAPLEY_NEG_COLOR = '#f97316';

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

function getRadius(value: number, isISMR: boolean): number {
  const normalized = isISMR ? clamp(Math.abs(value) / 1000, 0, 1) : clamp(Math.abs(value), 0, 1);
  return 6 + normalized * 14; // increased base radius and scale
}

function getColor(value: number): string {
  const alpha = 0.2 + Math.abs(value) * 0.8;
  if (value > 0) return `rgba(34,197,94,${alpha})`;
  if (value < 0) return `rgba(239,68,68,${alpha})`;
  return 'rgba(148,163,184,0.3)';
}

function getShapleyBarH(value: number): number {
  return clamp(Math.abs(value) * 70, 3, 36);
}

// ── Edge Styles ───────────────────────────────────────────────────────────────

type Strength = 1 | 2 | 3;

interface EdgeStyle { strokeWidth: number; opacity: number; dasharray: string; }

const STRENGTH_STYLES: Record<Strength, EdgeStyle> = {
  1: { strokeWidth: 3.2, opacity: 0.88, dasharray: '' },
  2: { strokeWidth: 2.2, opacity: 0.65, dasharray: '' },
  3: { strokeWidth: 1.4, opacity: 0.42, dasharray: '5 3' },
};

// ── Connection Definitions ────────────────────────────────────────────────────

interface Connection {
  from: string; to: string; color: string; arrow: boolean;
  strength: Strength; label?: string; curvature?: number; curvatureDir?: 1 | -1;
}

const PCMCI_CONNECTIONS: Connection[] = [
  { from: 'NINO', to: 'ISMR',  color: '#ef4444', arrow: true,  strength: 1, label: '1' },
  { from: 'PDO',  to: 'ISMR',  color: '#3b82f6', arrow: true,  strength: 1, label: '2', curvature: 0.20, curvatureDir: -1 },
  { from: 'AMO',  to: 'ISMR',  color: '#ef4444', arrow: true,  strength: 2, label: '3', curvature: 0.18, curvatureDir:  1 },
  { from: 'NAO',  to: 'AMO',   color: '#3b82f6', arrow: true,  strength: 2, curvature: 0.22, curvatureDir: -1 },
  { from: 'AMO',  to: 'PDO',   color: '#3b82f6', arrow: true,  strength: 2, curvature: 0.14, curvatureDir:  1 },
  { from: 'AMO',  to: 'NINO',  color: '#3b82f6', arrow: false, strength: 3, curvature: 0.22, curvatureDir: -1 },
  { from: 'AMO',  to: 'IOD',   color: '#3b82f6', arrow: false, strength: 3 },
  { from: 'AMO',  to: 'ANINO', color: '#ef4444', arrow: false, strength: 3, curvature: 0.20, curvatureDir:  1 },
  { from: 'NINO', to: 'IOD',   color: '#ef4444', arrow: false, strength: 3, curvature: 0.14, curvatureDir: -1 },
];

const GRANGER_LINEAR_CONNECTIONS: Connection[] = [
  { from: 'NINO', to: 'ISMR', color: '#4338ca', arrow: true,  strength: 1, label: '1',     curvature: 0.18, curvatureDir: -1 },
  { from: 'AMO',  to: 'ISMR', color: '#991b1b', arrow: true,  strength: 2, label: '2,1',   curvature: 0.22, curvatureDir:  1 },
  { from: 'PDO',  to: 'ISMR', color: '#0d9488', arrow: true,  strength: 1, label: '2,5,1,3', curvature: 0.32, curvatureDir: -1 },
  { from: 'NAO',  to: 'ISMR', color: '#0d9488', arrow: false, strength: 3, curvature: 0.20, curvatureDir: -1 },
];

const GRANGER_NONLINEAR_CONNECTIONS: Connection[] = [
  { from: 'NINO', to: 'ISMR', color: '#4338ca', arrow: true,  strength: 1, label: '1',   curvature: 0.18, curvatureDir: -1 },
  { from: 'AMO',  to: 'ISMR', color: '#991b1b', arrow: true,  strength: 2, label: '1,2', curvature: 0.28, curvatureDir:  1 },
  { from: 'AMO',  to: 'ISMR', color: '#991b1b', arrow: false, strength: 3, label: '3',   curvature: 0.10, curvatureDir:  1 },
];

// ── Bézier Helpers ────────────────────────────────────────────────────────────

function ctrlPoint(x1: number, y1: number, x2: number, y2: number, curvature: number, dir: number): [number, number] {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const off = curvature * len * dir;
  return [mx + (-dy / len) * off, my + (dx / len) * off];
}

function bezierAt(x1: number, y1: number, cpx: number, cpy: number, x2: number, y2: number, t: number): [number, number] {
  const mt = 1 - t;
  return [mt * mt * x1 + 2 * mt * t * cpx + t * t * x2, mt * mt * y1 + 2 * mt * t * cpy + t * t * y2];
}

function retract(sx: number, sy: number, tx: number, ty: number, r: number): [number, number] {
  const dx = tx - sx, dy = ty - sy;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  if (len <= r) return [sx, sy];
  return [tx - (dx / len) * r, ty - (dy / len) * r];
}

// ── Curved Edge Overlay ───────────────────────────────────────────────────────

interface CurvedEdgesProps {
  markers: ClimateMarker[];
  curvedConns: Connection[];
  mapWidth: number;
  mapHeight: number;
  nodeRadius: (id: string) => number;
  idPrefix?: string;
}

function CurvedEdges({ markers, curvedConns, mapWidth, mapHeight, nodeRadius, idPrefix = 'cm' }: CurvedEdgesProps) {
  const [ox, oy] = geoToPixel(0, 0, mapWidth, mapHeight);

  const localPx = (id: string): [number, number] | null => {
    const m = markers.find(m => m.id === id);
    if (!m) return null;
    const [ax, ay] = geoToPixel(m.coords[0], m.coords[1], mapWidth, mapHeight);
    return [ax - ox, ay - oy];
  };

  const colors = Array.from(new Set(curvedConns.map(c => c.color)));

  return (
    <Marker coordinates={[0, 0]}>
      <defs>
        {colors.map(col => {
          const safeId = col.replace('#', '');
          const markerId = `${idPrefix}-arr-${safeId}`;
          return (
            <marker key={markerId} id={markerId} viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="5" markerHeight="5" orient="auto" markerUnits="strokeWidth">
              <path d="M1 1L9 5L1 9" fill="none" stroke={col} strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          );
        })}
      </defs>

      {curvedConns.map((conn, i) => {
        const fp = localPx(conn.from), tp = localPx(conn.to);
        if (!fp || !tp) return null;
        const [x1, y1] = fp, [x2r, y2r] = tp;
        const [cpx, cpy] = ctrlPoint(x1, y1, x2r, y2r, conn.curvature!, conn.curvatureDir ?? 1);
        const [sx, sy] = retract(cpx, cpy, x1, y1, nodeRadius(conn.from) + 1);
        const [ex, ey] = retract(cpx, cpy, x2r, y2r, nodeRadius(conn.to) + 2);
        const d = `M ${sx} ${sy} Q ${cpx} ${cpy} ${ex} ${ey}`;
        const style = STRENGTH_STYLES[conn.strength];
        const arrowId = `url(#${idPrefix}-arr-${conn.color.replace('#', '')})`;
        const [lx, ly] = bezierAt(sx, sy, cpx, cpy, ex, ey, 0.5);

        return (
          <g key={`ce-${i}`}>
            <path d={d} fill="none" stroke={conn.color} strokeWidth={style.strokeWidth}
              strokeOpacity={style.opacity} strokeDasharray={style.dasharray || undefined}
              strokeLinecap="round" markerEnd={conn.arrow ? arrowId : undefined} />
            {conn.label && (
              <>
                <circle cx={lx} cy={ly} r={10} fill="white" fillOpacity={0.88} />
                <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central"
                  fontSize={11} fontWeight={700} fill={conn.color}>{conn.label}</text>
              </>
            )}
          </g>
        );
      })}
    </Marker>
  );
}

// ── Straight Edge Label ───────────────────────────────────────────────────────

function StraightEdgeLabel({ from, to, label, color }: {
  from: [number, number]; to: [number, number]; label: string; color: string;
}) {
  const mid: [number, number] = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2];
  return (
    <Marker coordinates={mid}>
      <circle r={10} fill="white" fillOpacity={0.88} />
      <text textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={700} fill={color}>
        {label}
      </text>
    </Marker>
  );
}

// ── Panel Title ───────────────────────────────────────────────────────────────

function PanelTitle({ label, title, coords }: { label: string; title: string; coords: [number, number] }) {
  return (
    <Marker coordinates={coords}>
      <text textAnchor="middle" fontSize={15} fontWeight={700} fill="#0f172a">
        {`(${label})  ${title}`}
      </text>
    </Marker>
  );
}

// ── Edge Set ──────────────────────────────────────────────────────────────────

interface EdgeSetProps {
  markers: ClimateMarker[];
  connections: Connection[];
  mapWidth: number;
  mapHeight: number;
  nodeRadius: (id: string) => number;
  idPrefix: string;
}

function EdgeSet({ markers, connections, mapWidth, mapHeight, nodeRadius, idPrefix }: EdgeSetProps) {
  const getCoords = (id: string): [number, number] | null =>
    markers.find(m => m.id === id)?.coords ?? null;

  const straightConns = connections.filter(c => !(c.curvature ?? 0));
  const curvedConns   = connections.filter(c =>  (c.curvature ?? 0) > 0);
  const straightColors = Array.from(new Set(straightConns.map(c => c.color)));

  return (
    <>
      {straightConns.length > 0 && (
        <Marker coordinates={[0, 0]}>
          <defs>
            {straightColors.map(col => {
              const safeId = col.replace('#', '');
              const markerId = `${idPrefix}-s-arr-${safeId}`;
              return (
                <marker key={markerId} id={markerId} viewBox="0 0 10 10" refX="8" refY="5"
                  markerWidth="5" markerHeight="5" orient="auto" markerUnits="strokeWidth">
                  <path d="M1 1L9 5L1 9" fill="none" stroke={col} strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              );
            })}
          </defs>
        </Marker>
      )}

      {straightConns.map((conn, i) => {
        const from = getCoords(conn.from), to = getCoords(conn.to);
        if (!from || !to) return null;
        const style = STRENGTH_STYLES[conn.strength];
        const arrowId = `url(#${idPrefix}-s-arr-${conn.color.replace('#', '')})`;
        return (
          <g key={`se-${i}`}>
            <Line from={from} to={to} stroke={conn.color} strokeWidth={style.strokeWidth}
              strokeLinecap="round" opacity={style.opacity}
              strokeDasharray={style.dasharray || undefined}
              markerEnd={conn.arrow ? arrowId : undefined} />
            {conn.label && <StraightEdgeLabel from={from} to={to} label={conn.label} color={conn.color} />}
          </g>
        );
      })}

      {curvedConns.length > 0 && (
        <CurvedEdges markers={markers} curvedConns={curvedConns}
          mapWidth={mapWidth} mapHeight={mapHeight} nodeRadius={nodeRadius} idPrefix={idPrefix} />
      )}
    </>
  );
}

// ── Granger Toggle ────────────────────────────────────────────────────────────

type GrangerMode = 'linear' | 'nonlinear';

function GrangerToggle({ grangerMode, onSelect }: { grangerMode: GrangerMode; onSelect: (m: GrangerMode) => void }) {
  const btnW = 120, btnH = 30, gap = 4;
  const totalW = btnW * 2 + gap + 8;
  const ACTIVE = '#1e293b', INACTIVE = '#f1f5f9', ACTIVE_T = '#ffffff', INACTIVE_T = '#64748b', BORDER = '#cbd5e1';

  return (
    <Marker coordinates={[-170, -72]}>
      <rect x={0} y={0} width={totalW} height={btnH + 8} rx={8} fill="white" stroke={BORDER} strokeWidth={1} fillOpacity={0.95} />
      <text x={totalW / 2} y={-10} textAnchor="middle" fontSize={10} fontWeight={600} fill="#94a3b8" letterSpacing={0.8}>
        GRANGER CAUSALITY
      </text>
      {(['linear', 'nonlinear'] as const).map((mode, idx) => {
        const x = 4 + idx * (btnW + gap);
        const active = grangerMode === mode;
        return (
          <g key={mode}>
            <rect x={x} y={4} width={btnW} height={btnH} rx={6}
              fill={active ? ACTIVE : INACTIVE} stroke={active ? ACTIVE : BORDER} strokeWidth={1}
              style={{ cursor: 'pointer' }} onClick={() => onSelect(mode)} />
            <text x={x + btnW / 2} y={4 + btnH / 2} textAnchor="middle" dominantBaseline="central"
              fontSize={11} fontWeight={600} fill={active ? ACTIVE_T : INACTIVE_T}
              style={{ cursor: 'pointer', userSelect: 'none' }} onClick={() => onSelect(mode)}>
              {mode === 'linear' ? 'Linear' : 'Non-linear'}
            </text>
          </g>
        );
      })}
    </Marker>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ClimateMarkers({
  climateData, shapleyData, linkType, vizMode,
  mapWidth = 800, mapHeight = 450,
}: ClimateMarkersProps) {
  const [grangerMode, setGrangerMode] = useState<GrangerMode>('linear');

  const markers: ClimateMarker[] = [
    { coords: [-30,  65], id: 'NAO',   value: climateData.nao   },
    { coords: [-50,  30], id: 'AMO',   value: climateData.amo   },
    { coords: [-10, -10], id: 'ANINO', value: climateData.anino },
    { coords: [170,  -5], id: 'NINO',  value: climateData.nino  },
    { coords: [170,  30], id: 'PDO',   value: climateData.pdo   },
    { coords: [ 78,   0], id: 'IOD',   value: climateData.iod   },
    { coords: [ 78,  22], id: 'ISMR',  value: climateData.ismr  },
  ];

  const nodeRadius = (id: string) => {
    const m = markers.find(m => m.id === id);
    return m ? getRadius(m.value, id === 'ISMR') : 8;
  };

  const showLinks = linkType !== 'none';
  const isGranger = linkType === 'granger';
  const isPCMCI   = linkType === 'pcmci';

  const activeGrangerConnections = grangerMode === 'linear' ? GRANGER_LINEAR_CONNECTIONS : GRANGER_NONLINEAR_CONNECTIONS;
  const grangerLabel  = grangerMode === 'linear' ? 'a' : 'b';
  const grangerTitle  = grangerMode === 'linear' ? 'Linear' : 'Non-linear';
  const grangerPrefix = grangerMode === 'linear' ? 'gl' : 'gnl';

  return (
    <>
      {/* ── Granger ─────────────────────────────────────────────────────── */}
      {showLinks && isGranger && (
        <>
          <GrangerToggle grangerMode={grangerMode} onSelect={setGrangerMode} />
          <PanelTitle label={grangerLabel} title={grangerTitle} coords={[20, 88]} />
          <EdgeSet markers={markers} connections={activeGrangerConnections}
            mapWidth={mapWidth} mapHeight={mapHeight} nodeRadius={nodeRadius} idPrefix={grangerPrefix} />

          {markers.map(m => {
            const isISMR = m.id === 'ISMR';
            const radius = getRadius(m.value, isISMR);
            return (
              <Marker key={`gr-${m.id}`} coordinates={m.coords}>
                <circle r={radius} fill={getColor(m.value)} fillOpacity={0.85} />
                <text y={-radius - 8} textAnchor="middle" fontSize={13} fontWeight={600} fill="#0f172a">{m.id}</text>
                <text y={radius + 14} textAnchor="middle" fontSize={11} fill="#475569">
                  {isISMR ? m.value.toFixed(0) : m.value.toFixed(2)}
                </text>
              </Marker>
            );
          })}

          <Marker coordinates={[140, -68]}>
            <defs>
              <marker id="leg-arrow" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="4" markerHeight="4" orient="auto" markerUnits="strokeWidth">
                <path d="M1 1L9 5L1 9" fill="none" stroke="#64748b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>
            <line x1={-30} y1={0} x2={0} y2={0} stroke="#64748b" strokeWidth={1.5}
              strokeDasharray="3 2" markerEnd="url(#leg-arrow)" />
            <text x={6} y={4} fontSize={11} fill="#64748b" fontWeight={500}>Lagged link</text>
          </Marker>
        </>
      )}

      {/* ── PCMCI ───────────────────────────────────────────────────────── */}
      {showLinks && isPCMCI && (
        <>
          <Marker coordinates={[0, 0]}>
            <defs>
              {(['#dc2626', '#2563eb'] as const).map(col => {
                const id = col === '#dc2626' ? 'cm-s-red' : 'cm-s-blue';
                return (
                  <marker key={id} id={id} viewBox="0 0 10 10" refX="8" refY="5"
                    markerWidth="5" markerHeight="5" orient="auto" markerUnits="strokeWidth">
                    <path d="M1 1L9 5L1 9" fill="none" stroke={col} strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </marker>
                );
              })}
            </defs>
          </Marker>

          {PCMCI_CONNECTIONS.filter(c => !(c.curvature ?? 0)).map((conn, i) => {
            const from = markers.find(m => m.id === conn.from)?.coords ?? null;
            const to   = markers.find(m => m.id === conn.to)?.coords ?? null;
            if (!from || !to) return null;
            const style = STRENGTH_STYLES[conn.strength];
            const arrowId = conn.color === '#ef4444' ? 'url(#cm-s-red)' : 'url(#cm-s-blue)';
            return (
              <g key={`pcmci-se-${i}`}>
                <Line from={from} to={to} stroke={conn.color} strokeWidth={style.strokeWidth}
                  strokeLinecap="round" opacity={style.opacity}
                  strokeDasharray={style.dasharray || undefined}
                  markerEnd={conn.arrow ? arrowId : undefined} />
                {conn.label && <StraightEdgeLabel from={from} to={to} label={conn.label} color={conn.color} />}
              </g>
            );
          })}

          <CurvedEdges markers={markers}
            curvedConns={PCMCI_CONNECTIONS.filter(c => (c.curvature ?? 0) > 0)}
            mapWidth={mapWidth} mapHeight={mapHeight} nodeRadius={nodeRadius} idPrefix="pcmci" />
        </>
      )}

      {/* ── Node Markers (non-Granger modes) ────────────────────────────── */}
      {!isGranger && markers.map(m => {
        const isISMR = m.id === 'ISMR';
        const shapVal = shapleyData[m.id.toLowerCase() as keyof ShapleyData] ?? 0;

        if (vizMode === 'shapley') {
          if (isISMR) return null;
          const barH = getShapleyBarH(shapVal);
          const barW = 18, baseR = 6;
          const barY = -(barH + baseR + 2);
          const barCol = shapVal >= 0 ? SHAPLEY_POS_COLOR : SHAPLEY_NEG_COLOR;

          return (
            <Marker key={m.id} coordinates={m.coords}>
              <circle r={baseR} fill="#94a3b8" fillOpacity={0.6} />
              <rect x={-barW / 2} y={barY} width={barW} height={barH} fill={barCol} rx={2} opacity={0.85} />
              <text y={barY - 24} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0f172a">{m.id}</text>
              <text y={barY - 6} textAnchor="middle" fontSize={10} fill={barCol} fontWeight={600}>
                {shapVal >= 0 ? '+' : ''}{shapVal.toFixed(2)}
              </text>
            </Marker>
          );
        }

        const radius = getRadius(m.value, isISMR);
        return (
          <Marker key={m.id} coordinates={m.coords}>
            <circle r={radius} fill={getColor(m.value)} fillOpacity={0.85} />
            <text y={-radius - 8} textAnchor="middle" fontSize={13} fontWeight={600} fill="#0f172a">{m.id}</text>
            <text y={radius + 14} textAnchor="middle" fontSize={11} fill="#475569">
              {isISMR ? m.value.toFixed(0) : m.value.toFixed(2)}
            </text>
          </Marker>
        );
      })}
    </>
  );
}