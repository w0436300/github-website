/** Shared typography for case study pages (Open Sans is loaded in index.html). */
export const openSans = { fontFamily: '"Open Sans", sans-serif' };

/** Design Standard — blue section titles */
export const dsAccentRgb = '0 117 190'; // #0075BE
export const dsSectionHead = {
  h2: 'text-sm font-medium text-left uppercase',
  h2Style: { ...openSans, color: `rgb(${dsAccentRgb})` },
  h3: 'text-xl font-medium text-left tracking-tight',
  h3Style: { ...openSans, color: `rgb(${dsAccentRgb} / 0.9)` },
};

/** Ami — soft blue‑green section titles (cyan, less “grass green” than old teal) */
export const amiAccentRgb = '52 118 128';

export const amiSectionHead = {
  h2: 'text-sm font-medium text-left uppercase',
  h2Style: { ...openSans, color: `rgb(${amiAccentRgb})` },
  h3: 'text-xl font-medium text-left tracking-tight',
  h3Style: { ...openSans, color: `rgb(${amiAccentRgb} / 0.88)` },
};

/** Ami content borders (Design Standard uses border-sky-200) */
export const amiBorder = 'border-gray-300';
export const amiBorderSubtle = 'border-gray-300';
