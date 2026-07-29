/** Organic hover masks for project cards — theme color + freeform brush strokes. */

export const HOVER_MASK_SHAPES = {
  /** Soft leaf sweep — wide coverage */
  leaf: {
    main: 'M-20 90 C 40 -20, 140 -30, 230 20 C 300 55, 360 -10, 430 40 C 450 80, 420 160, 300 150 C 200 140, 120 165, 40 145 C -10 130, -40 130, -20 90 Z',
    accent: 'M160 0 C 240 -20, 340 10, 390 55 C 330 40, 240 35, 160 0 Z',
    wash: 'M-30 20 C 80 -40, 280 -20, 440 50 C 460 120, 300 180, 100 160 C -20 145, -50 80, -30 20 Z',
  },
  /** Loose flower petals */
  flower: {
    main: 'M200 -10 C 270 -10, 330 35, 330 85 C 380 50, 450 70, 460 130 C 410 160, 350 145, 310 125 C 330 180, 260 210, 200 195 C 140 210, 70 175, 90 125 C 50 145, 0 155, -30 125 C -10 60, 80 40, 130 70 C 130 20, 150 -10, 200 -10 Z',
    accent: 'M180 40 C 220 20, 260 45, 250 85 C 230 110, 170 110, 155 80 C 145 50, 160 40, 180 40 Z',
    wash: 'M-40 40 C 60 -30, 250 -20, 450 60 C 470 140, 280 200, 60 170 C -30 150, -60 90, -40 40 Z',
  },
  /** Hand-drawn ink blot */
  blot: {
    main: 'M-10 70 C -20 10, 70 -25, 150 10 C 190 -25, 270 -30, 320 15 C 380 -15, 450 20, 460 80 C 470 140, 390 170, 310 145 C 250 175, 170 160, 120 135 C 60 170, -20 150, -10 70 Z',
    accent: 'M280 10 C 350 -10, 410 30, 390 85 C 350 70, 300 45, 280 10 Z',
    wash: 'M-40 30 C 50 -40, 260 -30, 450 40 C 470 130, 280 190, 40 160 C -40 140, -60 80, -40 30 Z',
  },
  /** Brush / ribbon stroke */
  brush: {
    main: 'M-30 100 C 50 20, 140 -15, 220 25 C 290 55, 340 0, 420 35 C 460 55, 470 105, 410 120 C 330 145, 250 95, 170 110 C 90 125, 30 160, -20 130 C -45 115, -50 130, -30 100 Z',
    accent: 'M60 30 C 140 0, 220 25, 250 70 C 180 60, 100 65, 60 30 Z',
    wash: 'M-40 40 C 70 -35, 260 -15, 450 55 C 470 130, 300 185, 50 155 C -30 140, -55 85, -40 40 Z',
  },
  /** Petal fan */
  petal: {
    main: 'M10 110 C 40 20, 130 -20, 200 25 C 230 -20, 310 -25, 360 30 C 410 -10, 470 25, 460 100 C 430 155, 340 140, 280 115 C 220 160, 140 155, 80 115 C 30 155, -20 145, 10 110 Z',
    accent: 'M140 10 C 190 -15, 250 10, 265 55 C 210 50, 155 45, 140 10 Z',
    wash: 'M-35 25 C 70 -40, 270 -25, 450 45 C 470 135, 290 190, 50 160 C -30 145, -55 80, -35 25 Z',
  },
  /** Free scribble cloud */
  scribble: {
    main: 'M20 85 C 5 25, 80 -15, 150 20 C 180 -20, 260 -25, 300 30 C 350 -10, 430 10, 450 75 C 470 125, 400 170, 330 150 C 280 180, 200 170, 160 140 C 100 175, 20 160, 0 120 C -20 130, 30 105, 20 85 Z',
    accent: 'M230 0 C 300 -20, 370 15, 355 70 C 300 50, 245 35, 230 0 Z',
    wash: 'M-40 35 C 60 -40, 260 -25, 450 50 C 470 140, 280 195, 45 165 C -35 145, -55 85, -40 35 Z',
  },
};

const THEME_BY_ID = {
  /** Ami only — soft cool wash (less glare than saturated green) */
  'cognitive-adaptive-ai-tutor': { color: '#eef5f5', accent: '#dce9ea', ink: '#2d6269', shape: 'leaf' },
  'design-standard-wcag': { color: '#bae6fd', accent: '#7dd3fc', ink: '#0075BE', shape: 'petal' },
  'bank-document-system': { color: '#bae6fd', accent: '#7dd3fc', ink: '#0075BE', shape: 'brush' },
  'ai-knowledge-base-engineering': { color: '#fed7aa', accent: '#fdba74', ink: '#c2410c', shape: 'flower' },
  'project-request-collaboration': { color: '#bbf7d0', accent: '#4ade80', ink: '#15803d', shape: 'scribble' },
  'medisupply-hub-ui': { color: '#fbcfe8', accent: '#f9a8d4', ink: '#be185d', shape: 'blot' },
};

const FALLBACK_THEMES = [
  { color: '#fde68a', accent: '#fcd34d', ink: '#a16207', shape: 'leaf' },
  { color: '#c7d2fe', accent: '#a5b4fc', ink: '#4338ca', shape: 'flower' },
  { color: '#a5f3fc', accent: '#67e8f9', ink: '#0e7490', shape: 'brush' },
  { color: '#fecaca', accent: '#fca5a5', ink: '#b91c1c', shape: 'petal' },
  { color: '#d9f99d', accent: '#bef264', ink: '#4d7c0f', shape: 'scribble' },
  { color: '#ddd6fe', accent: '#c4b5fd', ink: '#6d28d9', shape: 'blot' },
];

/** Jump-cue mark — long shaft + chevron, tinted via currentColor */
export function ProjectJumpArrow({ className = '', style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 44 28"
      width="44"
      height="28"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 14h26"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <path
        d="M24 6l12 8-12 8"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="14" r="2.25" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

function hashId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i += 1) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

export function getProjectHoverTheme(project) {
  if (THEME_BY_ID[project.id]) return THEME_BY_ID[project.id];
  if (project.hoverMask) return project.hoverMask;
  return FALLBACK_THEMES[hashId(project.id) % FALLBACK_THEMES.length];
}

export function OrganicHoverMask({ theme }) {
  const shape = HOVER_MASK_SHAPES[theme.shape] || HOVER_MASK_SHAPES.blot;
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full origin-[20%_50%] scale-[0.4] opacity-0 transition-all duration-500 ease-out group-hover:scale-[1.28] group-hover:opacity-100 group-focus-within:scale-[1.28] group-focus-within:opacity-100"
      viewBox="0 0 400 140"
      preserveAspectRatio="none"
      aria-hidden
    >
      {shape.wash && <path d={shape.wash} fill={theme.color} fillOpacity="0.55" />}
      <path d={shape.main} fill={theme.color} fillOpacity="0.95" />
      <path d={shape.accent} fill={theme.accent} fillOpacity="0.65" />
    </svg>
  );
}
