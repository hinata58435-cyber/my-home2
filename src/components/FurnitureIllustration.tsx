type Props = {
  kind: ProductKind;
  className?: string;
  label?: string;
};

export type ProductKind =
  | 'sofa'
  | 'bed'
  | 'dining'
  | 'wardrobe'
  | 'chair'
  | 'tv'
  | 'nightstand'
  | 'carpet';

const COLORS = {
  bg: '#f6f4ef',
  bg2: '#ece6d8',
  wood: '#a88d5e',
  woodDark: '#735a36',
  woodLight: '#d9ccb3',
  fabric: '#c1ab85',
  fabricDark: '#8f7346',
  cream: '#ece6d8',
  green: '#7d8a6f',
  metal: '#9a9a9a',
  shadow: 'rgba(115,90,54,0.18)',
};

function Frame({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.bg} />
          <stop offset="100%" stopColor={COLORS.bg2} />
        </linearGradient>
        <linearGradient id="woodGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.wood} />
          <stop offset="100%" stopColor={COLORS.woodDark} />
        </linearGradient>
        <linearGradient id="fabricGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.fabric} />
          <stop offset="100%" stopColor={COLORS.fabricDark} />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgGrad)" />
      <ellipse cx="400" cy="560" rx="300" ry="28" fill={COLORS.shadow} />
      {children}
    </svg>
  );
}

function Sofa() {
  return (
    <Frame label="كنبة">
      {/* base */}
      <rect x="150" y="360" width="500" height="120" rx="20" fill="url(#fabricGrad)" />
      {/* back */}
      <rect x="150" y="250" width="500" height="130" rx="24" fill={COLORS.fabricDark} />
      {/* arms */}
      <rect x="130" y="270" width="60" height="220" rx="24" fill={COLORS.fabricDark} />
      <rect x="610" y="270" width="60" height="220" rx="24" fill={COLORS.fabricDark} />
      {/* cushions */}
      <rect x="215" y="330" width="150" height="70" rx="16" fill={COLORS.cream} />
      <rect x="325" y="330" width="150" height="70" rx="16" fill={COLORS.cream} />
      <rect x="435" y="330" width="150" height="70" rx="16" fill={COLORS.cream} />
      {/* legs */}
      <rect x="175" y="480" width="22" height="50" rx="6" fill="url(#woodGrad)" />
      <rect x="603" y="480" width="22" height="50" rx="6" fill="url(#woodGrad)" />
      {/* throw pillows */}
      <rect x="185" y="300" width="60" height="60" rx="14" fill={COLORS.green} transform="rotate(-12 215 330)" />
      <rect x="555" y="300" width="60" height="60" rx="14" fill={COLORS.woodLight} transform="rotate(12 585 330)" />
    </Frame>
  );
}

function Bed() {
  return (
    <Frame label="سرير">
      {/* headboard */}
      <rect x="170" y="160" width="460" height="220" rx="30" fill="url(#woodGrad)" />
      <rect x="190" y="180" width="420" height="180" rx="22" fill={COLORS.woodLight} opacity="0.5" />
      {/* frame */}
      <rect x="140" y="370" width="520" height="60" rx="12" fill="url(#woodGrad)" />
      {/* mattress */}
      <rect x="160" y="320" width="480" height="70" rx="16" fill={COLORS.cream} />
      {/* blanket */}
      <rect x="160" y="380" width="480" height="90" rx="18" fill={COLORS.fabric} />
      <rect x="160" y="380" width="480" height="30" rx="18" fill={COLORS.fabricDark} />
      {/* pillows */}
      <rect x="200" y="290" width="150" height="50" rx="20" fill="#fff" />
      <rect x="450" y="290" width="150" height="50" rx="20" fill="#fff" />
      {/* legs */}
      <rect x="160" y="430" width="22" height="45" rx="6" fill={COLORS.woodDark} />
      <rect x="618" y="430" width="22" height="45" rx="6" fill={COLORS.woodDark} />
    </Frame>
  );
}

function Dining() {
  return (
    <Frame label="طاولة طعام">
      {/* tabletop */}
      <rect x="140" y="340" width="520" height="30" rx="8" fill="url(#woodGrad)" />
      <rect x="140" y="338" width="520" height="12" rx="6" fill={COLORS.woodLight} opacity="0.6" />
      {/* legs */}
      <rect x="180" y="370" width="24" height="160" rx="6" fill={COLORS.metal} />
      <rect x="596" y="370" width="24" height="160" rx="6" fill={COLORS.metal} />
      <rect x="200" y="500" width="400" height="14" rx="6" fill={COLORS.metal} />
      {/* chairs (2 visible) */}
      <g>
        <rect x="230" y="400" width="70" height="120" rx="10" fill={COLORS.fabricDark} />
        <rect x="230" y="360" width="70" height="60" rx="10" fill={COLORS.fabric} />
        <rect x="235" y="520" width="10" height="40" rx="4" fill="url(#woodGrad)" />
        <rect x="285" y="520" width="10" height="40" rx="4" fill="url(#woodGrad)" />
      </g>
      <g>
        <rect x="500" y="400" width="70" height="120" rx="10" fill={COLORS.fabricDark} />
        <rect x="500" y="360" width="70" height="60" rx="10" fill={COLORS.fabric} />
        <rect x="505" y="520" width="10" height="40" rx="4" fill="url(#woodGrad)" />
        <rect x="555" y="520" width="10" height="40" rx="4" fill="url(#woodGrad)" />
      </g>
      {/* centerpiece */}
      <rect x="380" y="310" width="40" height="30" rx="6" fill={COLORS.green} />
    </Frame>
  );
}

function Wardrobe() {
  return (
    <Frame label="خزانة">
      <rect x="200" y="120" width="400" height="380" rx="16" fill="url(#woodGrad)" />
      <rect x="220" y="140" width="360" height="340" rx="10" fill={COLORS.woodDark} />
      {/* doors */}
      <rect x="220" y="140" width="175" height="340" rx="10" fill="url(#woodGrad)" />
      <rect x="405" y="140" width="175" height="340" rx="10" fill="url(#woodGrad)" />
      <line x1="400" y1="140" x2="400" y2="480" stroke={COLORS.woodDark} strokeWidth="4" />
      {/* handles */}
      <rect x="370" y="290" width="10" height="60" rx="4" fill={COLORS.woodLight} />
      <rect x="420" y="290" width="10" height="60" rx="4" fill={COLORS.woodLight} />
      {/* mirrors */}
      <rect x="240" y="160" width="140" height="120" rx="6" fill="#cfd8e3" opacity="0.7" />
      <rect x="420" y="160" width="140" height="120" rx="6" fill="#cfd8e3" opacity="0.7" />
      {/* base */}
      <rect x="190" y="500" width="420" height="20" rx="6" fill={COLORS.woodDark} />
    </Frame>
  );
}

function Chair() {
  return (
    <Frame label="كرسي">
      {/* seat */}
      <rect x="280" y="340" width="240" height="70" rx="20" fill={COLORS.green} />
      {/* back */}
      <rect x="280" y="180" width="240" height="170" rx="24" fill={COLORS.green} />
      <rect x="300" y="200" width="200" height="130" rx="18" fill="#8a967b" opacity="0.6" />
      {/* legs */}
      <rect x="305" y="410" width="20" height="140" rx="6" fill="url(#woodGrad)" transform="rotate(8 315 480)" />
      <rect x="475" y="410" width="20" height="140" rx="6" fill="url(#woodGrad)" transform="rotate(-8 485 480)" />
      <rect x="290" y="410" width="20" height="140" rx="6" fill={COLORS.woodDark} transform="rotate(-6 300 480)" />
      <rect x="490" y="410" width="20" height="140" rx="6" fill={COLORS.woodDark} transform="rotate(6 500 480)" />
    </Frame>
  );
}

function Tv() {
  return (
    <Frame label="وحدة تلفاز">
      {/* cabinet */}
      <rect x="160" y="320" width="480" height="170" rx="14" fill="url(#woodGrad)" />
      <rect x="180" y="340" width="200" height="130" rx="8" fill={COLORS.woodDark} />
      <rect x="420" y="340" width="200" height="130" rx="8" fill={COLORS.woodDark} />
      {/* drawer lines */}
      <line x1="280" y1="340" x2="280" y2="470" stroke={COLORS.woodLight} strokeWidth="3" opacity="0.5" />
      <line x1="520" y1="340" x2="520" y2="470" stroke={COLORS.woodLight} strokeWidth="3" opacity="0.5" />
      {/* handles */}
      <rect x="270" y="400" width="20" height="8" rx="3" fill={COLORS.woodLight} />
      <rect x="510" y="400" width="20" height="8" rx="3" fill={COLORS.woodLight} />
      {/* tv */}
      <rect x="300" y="170" width="200" height="120" rx="10" fill="#2e261e" />
      <rect x="312" y="182" width="176" height="96" rx="6" fill="#4a4038" />
      {/* legs */}
      <rect x="180" y="490" width="20" height="30" rx="4" fill={COLORS.woodDark} />
      <rect x="600" y="490" width="20" height="30" rx="4" fill={COLORS.woodDark} />
    </Frame>
  );
}

function Nightstand() {
  return (
    <Frame label="طاولة سرير">
      <rect x="280" y="250" width="240" height="230" rx="12" fill="url(#woodGrad)" />
      <rect x="300" y="270" width="200" height="90" rx="8" fill={COLORS.woodDark} />
      <rect x="300" y="380" width="200" height="80" rx="8" fill={COLORS.woodDark} />
      {/* handles */}
      <rect x="390" y="305" width="20" height="8" rx="3" fill={COLORS.woodLight} />
      <rect x="390" y="410" width="20" height="8" rx="3" fill={COLORS.woodLight} />
      {/* lamp */}
      <rect x="390" y="200" width="20" height="50" rx="4" fill={COLORS.woodDark} />
      <path d="M370 200 L430 200 L415 165 L385 165 Z" fill={COLORS.cream} stroke={COLORS.woodDark} strokeWidth="3" />
      {/* top */}
      <rect x="275" y="245" width="250" height="14" rx="6" fill={COLORS.woodLight} />
      {/* legs */}
      <rect x="290" y="480" width="18" height="40" rx="4" fill={COLORS.woodDark} />
      <rect x="492" y="480" width="18" height="40" rx="4" fill={COLORS.woodDark} />
    </Frame>
  );
}

function Carpet() {
  return (
    <Frame label="سجادة">
      <rect x="140" y="200" width="520" height="280" rx="24" fill={COLORS.fabricDark} />
      <rect x="170" y="230" width="460" height="220" rx="18" fill={COLORS.fabric} />
      <rect x="200" y="260" width="400" height="160" rx="12" fill="none" stroke={COLORS.cream} strokeWidth="6" strokeDasharray="20 14" />
      <path d="M360 340 L400 300 L440 340 L400 380 Z" fill={COLORS.green} opacity="0.8" />
      <circle cx="260" cy="300" r="14" fill={COLORS.cream} opacity="0.6" />
      <circle cx="540" cy="380" r="14" fill={COLORS.cream} opacity="0.6" />
      {/* fringe */}
      <g stroke={COLORS.cream} strokeWidth="3">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`t${i}`} x1={150 + i * 28} y1={200} x2={150 + i * 28} y2={185} />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`b${i}`} x1={150 + i * 28} y1={480} x2={150 + i * 28} y2={495} />
        ))}
      </g>
    </Frame>
  );
}

const RENDERERS: Record<ProductKind, () => React.ReactElement> = {
  sofa: Sofa,
  bed: Bed,
  dining: Dining,
  wardrobe: Wardrobe,
  chair: Chair,
  tv: Tv,
  nightstand: Nightstand,
  carpet: Carpet,
};

export default function FurnitureIllustration({ kind, className, label }: Props) {
  const Render = RENDERERS[kind];
  return (
    <div className={className} aria-label={label ?? kind}>
      <Render />
    </div>
  );
}
