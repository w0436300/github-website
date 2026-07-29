/** Organic hover masks for project cards — theme color + freeform shape. */

export const HOVER_MASK_SHAPES = {
  /** Soft leaf sweep */
  leaf: {
    main: 'M12 88 C 40 20, 120 -10, 210 28 C 280 58, 340 18, 388 48 C 400 70, 360 118, 280 112 C 200 106, 140 124, 70 110 C 30 102, 0 110, 12 88 Z',
    accent: 'M220 20 C 260 8, 310 18, 340 42 C 300 36, 250 40, 220 20 Z',
  },
  /** Loose flower petals */
  flower: {
    main: 'M200 10 C 240 10, 270 40, 270 70 C 300 50, 350 60, 360 95 C 330 110, 300 100, 280 90 C 290 120, 250 140, 200 130 C 150 140, 110 120, 120 90 C 100 100, 70 110, 40 95 C 50 60, 100 50, 130 70 C 130 40, 160 10, 200 10 Z',
    accent: 'M190 55 C 210 45, 230 55, 225 75 C 215 90, 185 90, 175 75 C 170 55, 180 50, 190 55 Z',
  },
  /** Hand-drawn ink blot */
  blot: {
    main: 'M30 70 C 20 30, 80 5, 140 25 C 170 5, 230 0, 270 30 C 320 10, 380 35, 390 75 C 395 110, 340 125, 290 110 C 250 130, 190 120, 150 105 C 100 125, 40 115, 30 70 Z',
    accent: 'M300 35 C 340 25, 370 50, 355 80 C 330 70, 305 55, 300 35 Z',
  },
  /** Brush / ribbon stroke */
  brush: {
    main: 'M0 95 C 60 40, 120 15, 190 35 C 250 52, 300 20, 360 45 C 395 60, 400 90, 360 100 C 300 115, 240 85, 180 95 C 120 105, 60 130, 10 110 C -5 100, -10 110, 0 95 Z',
    accent: 'M80 50 C 130 30, 180 45, 200 70 C 150 65, 100 70, 80 50 Z',
  },
  /** Petal fan */
  petal: {
    main: 'M40 100 C 60 40, 120 10, 180 40 C 200 10, 260 5, 300 45 C 340 15, 390 40, 385 90 C 360 120, 300 110, 260 95 C 220 125, 160 120, 120 95 C 80 125, 30 120, 40 100 Z',
    accent: 'M160 35 C 190 20, 230 30, 240 60 C 200 55, 170 55, 160 35 Z',
  },
  /** Free scribble cloud */
  scribble: {
    main: 'M50 80 C 40 40, 90 15, 140 35 C 160 10, 220 5, 250 40 C 290 15, 350 25, 370 65 C 390 95, 350 125, 300 115 C 270 135, 210 130, 180 110 C 140 135, 80 125, 55 100 C 35 105, 55 95, 50 80 Z',
    accent: 'M250 25 C 290 15, 330 35, 320 65 C 285 50, 255 45, 250 25 Z',
  },
};

const THEME_BY_ID = {
  'cognitive-adaptive-ai-tutor': { color: '#bbf7d0', accent: '#86efac', shape: 'leaf' },
  'design-standard-wcag': { color: '#bae6fd', accent: '#7dd3fc', shape: 'petal' },
  'bank-document-system': { color: '#bfdbfe', accent: '#93c5fd', shape: 'brush' },
  'ai-knowledge-base-engineering': { color: '#fed7aa', accent: '#fdba74', shape: 'flower' },
  'project-request-collaboration': { color: '#bbf7d0', accent: '#4ade80', shape: 'scribble' },
  'medisupply-hub-ui': { color: '#fbcfe8', accent: '#f9a8d4', shape: 'blot' },
};

const FALLBACK_THEMES = [
  { color: '#fde68a', accent: '#fcd34d', shape: 'leaf' },
  { color: '#c7d2fe', accent: '#a5b4fc', shape: 'flower' },
  { color: '#a5f3fc', accent: '#67e8f9', shape: 'brush' },
  { color: '#fecaca', accent: '#fca5a5', shape: 'petal' },
  { color: '#d9f99d', accent: '#bef264', shape: 'scribble' },
  { color: '#ddd6fe', accent: '#c4b5fd', shape: 'blot' },
];

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
      className="pointer-events-none absolute inset-0 z-10 h-full w-full origin-left scale-[0.35] opacity-0 transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:opacity-100 group-focus-within:scale-[1.08] group-focus-within:opacity-100"
      viewBox="0 0 400 140"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d={shape.main} fill={theme.color} fillOpacity="0.92" />
      <path d={shape.accent} fill={theme.accent} fillOpacity="0.55" />
    </svg>
  );
}
