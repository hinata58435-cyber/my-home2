type Props = {
  kind: ProductKind;
  className?: string;
  label?: string;
};

export type ProductKind =
  | 'sofa'
  | 'bed'
  | 'bedCozy'
  | 'bedKing'
  | 'dining'
  | 'diningNour'
  | 'wardrobe'
  | 'chair'
  | 'tv'
  | 'nightstand'
  | 'nightstandAmal'
  | 'carpet';

// New store palette
const C = {
  sage: '#829582',
  sageDark: '#566755',
  sageLight: '#A7B3A4',
  beige: '#E9E1D2',
  beigeDark: '#D0C4AE',
  ivory: '#FAF8F3',
  wood: '#B69B7D',
  woodDark: '#8A7359',
  woodLight: '#D8C9B4',
  dark: '#454D43',
  cream: '#F2EEE3',
  terracotta: '#C2856A',
  shadow: 'rgba(69, 77, 67, 0.18)',
  glow: '#F5E6C8',
};

function Frame({
  children,
  label,
  bg = 'ivory',
}: {
  children: React.ReactNode;
  label?: string;
  bg?: 'ivory' | 'beige' | 'sage' | 'dark';
}) {
  const bgFill =
    bg === 'sage'
      ? 'url(#sageBg)'
      : bg === 'beige'
        ? 'url(#beigeBg)'
        : bg === 'dark'
          ? '#454D43'
          : 'url(#ivoryBg)';
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
        <linearGradient id="ivoryBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.ivory} />
          <stop offset="100%" stopColor={C.beige} />
        </linearGradient>
        <linearGradient id="beigeBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.beige} />
          <stop offset="100%" stopColor={C.beigeDark} />
        </linearGradient>
        <linearGradient id="sageBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.sageLight} />
          <stop offset="100%" stopColor={C.sage} />
        </linearGradient>
        <linearGradient id="woodG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.wood} />
          <stop offset="100%" stopColor={C.woodDark} />
        </linearGradient>
        <linearGradient id="sageG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.sage} />
          <stop offset="100%" stopColor={C.sageDark} />
        </linearGradient>
        <linearGradient id="fabricG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.beige} />
          <stop offset="100%" stopColor={C.beigeDark} />
        </linearGradient>
        <radialGradient id="glowG" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={C.glow} stopOpacity="0.7" />
          <stop offset="100%" stopColor={C.glow} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill={bgFill} />
      {children}
    </svg>
  );
}

function Sofa() {
  return (
    <Frame label="كنبة" bg="ivory">
      {/* floor line */}
      <rect x="0" y="520" width="800" height="80" fill={C.beige} opacity="0.5" />
      <ellipse cx="400" cy="540" rx="280" ry="20" fill={C.shadow} />
      {/* base */}
      <rect x="140" y="370" width="520" height="110" rx="22" fill="url(#sageG)" />
      {/* back */}
      <rect x="140" y="250" width="520" height="130" rx="26" fill={C.sageDark} />
      <rect x="160" y="265" width="480" height="100" rx="20" fill={C.sage} opacity="0.7" />
      {/* arms */}
      <rect x="120" y="265" width="64" height="220" rx="26" fill={C.sageDark} />
      <rect x="616" y="265" width="64" height="220" rx="26" fill={C.sageDark} />
      {/* cushions */}
      <rect x="205" y="335" width="150" height="72" rx="18" fill={C.cream} />
      <rect x="325" y="335" width="150" height="72" rx="18" fill={C.cream} />
      <rect x="445" y="335" width="150" height="72" rx="18" fill={C.cream} />
      {/* legs */}
      <rect x="165" y="480" width="22" height="46" rx="6" fill="url(#woodG)" />
      <rect x="613" y="480" width="22" height="46" rx="6" fill="url(#woodG)" />
      {/* throw pillows */}
      <rect x="180" y="295" width="64" height="64" rx="16" fill={C.terracotta} transform="rotate(-12 212 327)" />
      <rect x="556" y="295" width="64" height="64" rx="16" fill={C.woodLight} transform="rotate(12 588 327)" />
      {/* side table + plant */}
      <rect x="700" y="420" width="60" height="70" rx="8" fill="url(#woodG)" />
      <path d="M715 400 L745 400 L740 370 L720 370 Z" fill={C.sage} />
      <rect x="725" y="360" width="10" height="40" fill={C.woodDark} />
    </Frame>
  );
}

function Bed() {
  return (
    <Frame label="سرير" bg="beige">
      <ellipse cx="400" cy="540" rx="270" ry="18" fill={C.shadow} />
      {/* headboard */}
      <rect x="170" y="150" width="460" height="220" rx="30" fill="url(#woodG)" />
      <rect x="190" y="170" width="420" height="180" rx="22" fill={C.woodLight} opacity="0.5" />
      {/* frame */}
      <rect x="140" y="365" width="520" height="56" rx="12" fill="url(#woodG)" />
      {/* mattress */}
      <rect x="160" y="315" width="480" height="70" rx="16" fill={C.cream} />
      {/* blanket */}
      <rect x="160" y="375" width="480" height="90" rx="18" fill="url(#sageG)" />
      <rect x="160" y="375" width="480" height="28" rx="18" fill={C.sageDark} />
      {/* pillows */}
      <rect x="200" y="285" width="150" height="50" rx="22" fill="#fff" />
      <rect x="450" y="285" width="150" height="50" rx="22" fill="#fff" />
      {/* legs */}
      <rect x="160" y="421" width="22" height="44" rx="6" fill={C.woodDark} />
      <rect x="618" y="421" width="22" height="44" rx="6" fill={C.woodDark} />
    </Frame>
  );
}

function BedCozy() {
  return (
    <Frame label="غرفة نوم دافئة" bg="ivory">
      {/* warm wall */}
      <rect x="0" y="0" width="800" height="250" fill={C.beige} />
      {/* wall shelf */}
      <rect x="80" y="160" width="200" height="14" rx="4" fill={C.wood} />
      <rect x="110" y="118" width="32" height="42" rx="4" fill={C.sageDark} />
      <rect x="160" y="108" width="26" height="52" rx="4" fill={C.cream} />
      <rect x="210" y="128" width="36" height="32" rx="4" fill={C.terracotta} />
      {/* framed art */}
      <rect x="360" y="80" width="90" height="120" rx="6" fill="#fff" stroke={C.wood} strokeWidth="6" />
      <path d="M374 170 L405 120 L425 150 L434 130 L438 170 Z" fill={C.sage} opacity="0.7" />
      <circle cx="428" cy="108" r="10" fill={C.terracotta} opacity="0.6" />
      {/* arched headboard */}
      <path d="M200 320 Q400 190 600 320 L600 360 L200 360 Z" fill={C.sageDark} />
      <path d="M222 318 Q400 222 578 318 L578 350 L222 350 Z" fill={C.sage} opacity="0.6" />
      {/* bed frame */}
      <rect x="160" y="360" width="480" height="40" rx="10" fill={C.wood} />
      {/* duvet */}
      <rect x="180" y="330" width="440" height="50" rx="14" fill={C.cream} />
      <path d="M180 380 Q400 360 620 380 L620 475 Q400 495 180 475 Z" fill="url(#fabricG)" />
      <path d="M400 380 L620 380 L620 475 Q510 488 400 475 Z" fill={C.beigeDark} opacity="0.5" />
      {/* folded blanket */}
      <rect x="180" y="442" width="440" height="24" rx="10" fill={C.sageDark} />
      {/* pillows */}
      <rect x="220" y="300" width="130" height="48" rx="22" fill="#fff" />
      <rect x="450" y="300" width="130" height="48" rx="22" fill="#fff" />
      {/* lamp glow */}
      <circle cx="670" cy="245" r="46" fill="url(#glowG)" />
      <rect x="660" y="250" width="20" height="84" rx="4" fill={C.woodDark} />
      <path d="M628 250 L712 250 L696 206 L644 206 Z" fill={C.cream} stroke={C.woodDark} strokeWidth="3" />
      {/* rug */}
      <ellipse cx="400" cy="540" rx="250" ry="22" fill={C.beigeDark} opacity="0.6" />
    </Frame>
  );
}

function BedKing() {
  return (
    <Frame label="سرير سحار كينج" bg="beige">
      <ellipse cx="400" cy="545" rx="290" ry="18" fill={C.shadow} />
      {/* tufted headboard */}
      <rect x="150" y="110" width="500" height="210" rx="28" fill={C.sageDark} />
      <rect x="172" y="132" width="456" height="168" rx="22" fill={C.sage} />
      {Array.from({ length: 3 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => (
          <circle
            key={`t-${r}-${c}`}
            cx={252 + c * 76}
            cy={168 + r * 48}
            r="6"
            fill={C.sageDark}
            opacity="0.45"
          />
        )),
      )}
      {/* frame */}
      <rect x="130" y="320" width="540" height="50" rx="10" fill="url(#woodG)" />
      <rect x="125" y="362" width="550" height="16" rx="6" fill={C.woodDark} />
      {/* mattress */}
      <rect x="150" y="290" width="500" height="50" rx="14" fill={C.cream} />
      {/* king duvet */}
      <path d="M150 340 L650 340 L650 470 Q400 490 150 470 Z" fill="url(#fabricG)" />
      <path d="M400 340 L650 340 L650 470 Q525 484 400 470 Z" fill={C.beigeDark} opacity="0.4" />
      <rect x="150" y="430" width="500" height="20" rx="8" fill={C.sageDark} />
      {/* pillows */}
      <rect x="185" y="262" width="120" height="44" rx="20" fill="#fff" />
      <rect x="320" y="262" width="120" height="44" rx="20" fill="#fff" />
      <rect x="495" y="262" width="120" height="44" rx="20" fill="#fff" />
      <rect x="360" y="262" width="120" height="44" rx="20" fill={C.cream} />
      {/* bolster */}
      <rect x="200" y="238" width="400" height="22" rx="11" fill={C.terracotta} opacity="0.8" />
      {/* legs */}
      <rect x="155" y="378" width="24" height="50" rx="6" fill={C.woodDark} />
      <rect x="621" y="378" width="24" height="50" rx="6" fill={C.woodDark} />
    </Frame>
  );
}

function Dining() {
  return (
    <Frame label="طاولة طعام" bg="ivory">
      <ellipse cx="400" cy="540" rx="280" ry="18" fill={C.shadow} />
      {/* tabletop */}
      <rect x="140" y="340" width="520" height="30" rx="8" fill="url(#woodG)" />
      <rect x="140" y="338" width="520" height="12" rx="6" fill={C.woodLight} opacity="0.6" />
      {/* legs */}
      <rect x="180" y="370" width="24" height="160" rx="6" fill={C.dark} />
      <rect x="596" y="370" width="24" height="160" rx="6" fill={C.dark} />
      <rect x="200" y="500" width="400" height="14" rx="6" fill={C.dark} />
      {/* chairs */}
      <g>
        <rect x="230" y="400" width="70" height="120" rx="10" fill={C.sageDark} />
        <rect x="230" y="360" width="70" height="60" rx="10" fill={C.sage} />
        <rect x="235" y="520" width="10" height="40" rx="4" fill="url(#woodG)" />
        <rect x="285" y="520" width="10" height="40" rx="4" fill="url(#woodG)" />
      </g>
      <g>
        <rect x="500" y="400" width="70" height="120" rx="10" fill={C.sageDark} />
        <rect x="500" y="360" width="70" height="60" rx="10" fill={C.sage} />
        <rect x="505" y="520" width="10" height="40" rx="4" fill="url(#woodG)" />
        <rect x="555" y="520" width="10" height="40" rx="4" fill="url(#woodG)" />
      </g>
      {/* centerpiece vase */}
      <rect x="380" y="306" width="40" height="34" rx="8" fill={C.terracotta} />
      <path d="M388 306 Q400 280 412 306" fill="none" stroke={C.sage} strokeWidth="4" />
    </Frame>
  );
}

function DiningNour() {
  return (
    <Frame label="طاولة طعام نور" bg="beige">
      {/* warm circle backdrop */}
      <circle cx="400" cy="200" r="130" fill={C.sageLight} opacity="0.3" />
      {/* pendant lamp */}
      <line x1="400" y1="30" x2="400" y2="110" stroke={C.woodDark} strokeWidth="4" />
      <path d="M356 110 L444 110 L422 176 L378 176 Z" fill="url(#woodG)" />
      <circle cx="400" cy="166" r="20" fill="url(#glowG)" />
      {/* tabletop perspective */}
      <path d="M150 360 L650 360 L610 402 L190 402 Z" fill="url(#woodG)" />
      <path d="M160 358 L640 358 L605 398 L195 398 Z" fill={C.woodLight} opacity="0.5" />
      {/* pedestal */}
      <path d="M384 402 L416 402 L421 522 L379 522 Z" fill={C.woodDark} />
      <ellipse cx="400" cy="527" rx="74" ry="14" fill={C.wood} />
      {/* 4 chairs */}
      <g>
        <rect x="248" y="392" width="64" height="120" rx="10" fill={C.sageDark} />
        <rect x="248" y="350" width="64" height="56" rx="10" fill={C.sage} />
      </g>
      <g>
        <rect x="488" y="392" width="64" height="120" rx="10" fill={C.sageDark} />
        <rect x="488" y="350" width="64" height="56" rx="10" fill={C.sage} />
      </g>
      <g>
        <rect x="334" y="218" width="70" height="50" rx="10" fill={C.sage} />
        <rect x="334" y="198" width="70" height="30" rx="10" fill={C.sageDark} />
      </g>
      <g>
        <rect x="396" y="218" width="70" height="50" rx="10" fill={C.sage} />
        <rect x="396" y="198" width="70" height="30" rx="10" fill={C.sageDark} />
      </g>
      {/* table setting */}
      <circle cx="400" cy="381" r="26" fill={C.cream} stroke={C.wood} strokeWidth="3" />
      <rect x="388" y="369" width="24" height="24" rx="4" fill={C.terracotta} opacity="0.7" />
      <rect x="442" y="373" width="30" height="6" rx="3" fill={C.dark} />
      <rect x="328" y="373" width="30" height="6" rx="3" fill={C.dark} />
    </Frame>
  );
}

function Wardrobe() {
  return (
    <Frame label="خزانة" bg="ivory">
      <ellipse cx="400" cy="540" rx="240" ry="18" fill={C.shadow} />
      <rect x="200" y="110" width="400" height="390" rx="16" fill="url(#woodG)" />
      <rect x="220" y="130" width="360" height="350" rx="10" fill={C.woodDark} />
      {/* doors */}
      <rect x="220" y="130" width="175" height="350" rx="10" fill="url(#woodG)" />
      <rect x="405" y="130" width="175" height="350" rx="10" fill="url(#woodG)" />
      <line x1="400" y1="130" x2="400" y2="480" stroke={C.woodDark} strokeWidth="4" />
      {/* handles */}
      <rect x="370" y="290" width="10" height="60" rx="4" fill={C.woodLight} />
      <rect x="420" y="290" width="10" height="60" rx="4" fill={C.woodLight} />
      {/* mirrors */}
      <rect x="240" y="150" width="140" height="120" rx="6" fill="#cfd8e3" opacity="0.7" />
      <rect x="420" y="150" width="140" height="120" rx="6" fill="#cfd8e3" opacity="0.7" />
      {/* base */}
      <rect x="190" y="500" width="420" height="20" rx="6" fill={C.woodDark} />
      {/* plant on top */}
      <rect x="540" y="80" width="30" height="32" rx="6" fill={C.terracotta} />
      <path d="M548 80 Q555 50 562 80 M555 80 Q560 56 568 80" fill="none" stroke={C.sage} strokeWidth="3" />
    </Frame>
  );
}

function Chair() {
  return (
    <Frame label="كرسي" bg="beige">
      <ellipse cx="400" cy="545" rx="180" ry="16" fill={C.shadow} />
      {/* seat */}
      <rect x="280" y="340" width="240" height="70" rx="20" fill={C.sage} />
      {/* back */}
      <rect x="280" y="175" width="240" height="175" rx="24" fill={C.sage} />
      <rect x="300" y="195" width="200" height="135" rx="18" fill={C.sageDark} opacity="0.5" />
      {/* legs */}
      <rect x="305" y="410" width="20" height="140" rx="6" fill="url(#woodG)" transform="rotate(8 315 480)" />
      <rect x="475" y="410" width="20" height="140" rx="6" fill="url(#woodG)" transform="rotate(-8 485 480)" />
      <rect x="290" y="410" width="20" height="140" rx="6" fill={C.woodDark} transform="rotate(-6 300 480)" />
      <rect x="490" y="410" width="20" height="140" rx="6" fill={C.woodDark} transform="rotate(6 500 480)" />
      {/* cushion */}
      <rect x="300" y="320" width="200" height="30" rx="12" fill={C.cream} opacity="0.8" />
    </Frame>
  );
}

function Tv() {
  return (
    <Frame label="وحدة تلفاز" bg="ivory">
      <ellipse cx="400" cy="540" rx="280" ry="16" fill={C.shadow} />
      {/* cabinet */}
      <rect x="160" y="320" width="480" height="170" rx="14" fill="url(#woodG)" />
      <rect x="180" y="340" width="200" height="130" rx="8" fill={C.woodDark} />
      <rect x="420" y="340" width="200" height="130" rx="8" fill={C.woodDark} />
      <line x1="280" y1="340" x2="280" y2="470" stroke={C.woodLight} strokeWidth="3" opacity="0.5" />
      <line x1="520" y1="340" x2="520" y2="470" stroke={C.woodLight} strokeWidth="3" opacity="0.5" />
      {/* handles */}
      <rect x="270" y="400" width="20" height="8" rx="3" fill={C.woodLight} />
      <rect x="510" y="400" width="20" height="8" rx="3" fill={C.woodLight} />
      {/* tv */}
      <rect x="300" y="165" width="200" height="125" rx="10" fill={C.dark} />
      <rect x="312" y="177" width="176" height="101" rx="6" fill="#5a6357" />
      {/* decorative vase on cabinet */}
      <rect x="620" y="280" width="30" height="40" rx="6" fill={C.terracotta} />
      {/* legs */}
      <rect x="180" y="490" width="20" height="30" rx="4" fill={C.woodDark} />
      <rect x="600" y="490" width="20" height="30" rx="4" fill={C.woodDark} />
    </Frame>
  );
}

function Nightstand() {
  return (
    <Frame label="طاولة سرير" bg="beige">
      <ellipse cx="400" cy="545" rx="170" ry="14" fill={C.shadow} />
      <rect x="280" y="250" width="240" height="230" rx="12" fill="url(#woodG)" />
      <rect x="300" y="270" width="200" height="90" rx="8" fill={C.woodDark} />
      <rect x="300" y="380" width="200" height="80" rx="8" fill={C.woodDark} />
      {/* handles */}
      <rect x="390" y="305" width="20" height="8" rx="3" fill={C.woodLight} />
      <rect x="390" y="410" width="20" height="8" rx="3" fill={C.woodLight} />
      {/* lamp */}
      <rect x="390" y="200" width="20" height="50" rx="4" fill={C.woodDark} />
      <path d="M370 200 L430 200 L415 165 L385 165 Z" fill={C.cream} stroke={C.woodDark} strokeWidth="3" />
      {/* top */}
      <rect x="275" y="245" width="250" height="14" rx="6" fill={C.woodLight} />
      {/* legs */}
      <rect x="290" y="480" width="18" height="40" rx="4" fill={C.woodDark} />
      <rect x="492" y="480" width="18" height="40" rx="4" fill={C.woodDark} />
    </Frame>
  );
}

function NightstandAmal() {
  return (
    <Frame label="طاولة سرير أمل" bg="beige">
      {/* soft wall */}
      <rect x="0" y="0" width="800" height="300" fill={C.beigeDark} opacity="0.5" />
      {/* wall frame */}
      <rect x="320" y="70" width="160" height="120" rx="6" fill="#fff" stroke={C.wood} strokeWidth="6" />
      <circle cx="400" cy="130" r="26" fill={C.sage} opacity="0.5" />
      <path d="M376 150 L400 110 L414 132 L424 118 L426 150 Z" fill={C.sageDark} opacity="0.6" />
      {/* cabinet body */}
      <rect x="270" y="250" width="260" height="230" rx="14" fill="url(#woodG)" />
      <rect x="285" y="265" width="230" height="200" rx="10" fill={C.woodDark} />
      {/* drawer + door */}
      <rect x="300" y="280" width="200" height="80" rx="8" fill="url(#woodG)" />
      <rect x="300" y="375" width="200" height="80" rx="8" fill="url(#woodG)" />
      {/* knobs */}
      <circle cx="480" cy="320" r="8" fill={C.woodLight} />
      <circle cx="480" cy="415" r="8" fill={C.woodLight} />
      {/* top surface */}
      <rect x="265" y="244" width="270" height="16" rx="6" fill={C.woodLight} />
      {/* lamp with glow */}
      <circle cx="400" cy="195" r="40" fill="url(#glowG)" />
      <rect x="392" y="198" width="16" height="50" rx="4" fill={C.woodDark} />
      <path d="M366 198 L434 198 L420 160 L380 160 Z" fill={C.cream} stroke={C.woodDark} strokeWidth="3" />
      {/* book + cup */}
      <rect x="305" y="230" width="50" height="14" rx="2" fill={C.sageDark} />
      <rect x="455" y="226" width="28" height="18" rx="4" fill="#fff" stroke={C.woodDark} strokeWidth="2" />
      {/* legs */}
      <rect x="285" y="480" width="20" height="45" rx="4" fill={C.woodDark} />
      <rect x="495" y="480" width="20" height="45" rx="4" fill={C.woodDark} />
      <ellipse cx="400" cy="545" rx="170" ry="14" fill={C.shadow} />
    </Frame>
  );
}

function Carpet() {
  return (
    <Frame label="سجادة" bg="ivory">
      <ellipse cx="400" cy="520" rx="300" ry="20" fill={C.shadow} />
      <rect x="140" y="190" width="520" height="300" rx="24" fill={C.sageDark} />
      <rect x="170" y="220" width="460" height="240" rx="18" fill={C.sage} />
      <rect x="200" y="250" width="400" height="180" rx="12" fill="none" stroke={C.cream} strokeWidth="6" strokeDasharray="20 14" />
      <path d="M360 340 L400 295 L440 340 L400 385 Z" fill={C.terracotta} opacity="0.8" />
      <circle cx="260" cy="300" r="14" fill={C.cream} opacity="0.6" />
      <circle cx="540" cy="380" r="14" fill={C.cream} opacity="0.6" />
      <circle cx="260" cy="380" r="10" fill={C.terracotta} opacity="0.5" />
      <circle cx="540" cy="300" r="10" fill={C.terracotta} opacity="0.5" />
      {/* fringe */}
      <g stroke={C.cream} strokeWidth="3">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`t${i}`} x1={150 + i * 28} y1={190} x2={150 + i * 28} y2={173} />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`b${i}`} x1={150 + i * 28} y1={490} x2={150 + i * 28} y2={507} />
        ))}
      </g>
    </Frame>
  );
}

const RENDERERS: Record<ProductKind, () => React.ReactElement> = {
  sofa: Sofa,
  bed: Bed,
  bedCozy: BedCozy,
  bedKing: BedKing,
  dining: Dining,
  diningNour: DiningNour,
  wardrobe: Wardrobe,
  chair: Chair,
  tv: Tv,
  nightstand: Nightstand,
  nightstandAmal: NightstandAmal,
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
