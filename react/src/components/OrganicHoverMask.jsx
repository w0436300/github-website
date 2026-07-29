/** Project card hover wash — solid theme color (no brush strokes). */

const THEME_BY_ID = {
  'cognitive-adaptive-ai-tutor': { color: '#bbf7d0', accent: '#86efac', ink: '#1c532f', shape: 'leaf' },
  'design-standard-wcag': { color: '#bae6fd', accent: '#7dd3fc', ink: '#0369a1', shape: 'petal' },
  'bank-document-system': { color: '#bfdbfe', accent: '#93c5fd', ink: '#1d4ed8', shape: 'brush' },
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
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
      style={{ backgroundColor: theme.color }}
      aria-hidden
    />
  );
}
