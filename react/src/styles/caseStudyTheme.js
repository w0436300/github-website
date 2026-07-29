/** Shared typography for case study pages (Open Sans is loaded in index.html). */
export const openSans = { fontFamily: '"Open Sans", sans-serif' };

/** Home hero + About (`/blog`) — overrides global Merriweather/Open Sans on headings/body. */
export const sourceSansPro = {
  fontFamily: '"Source Sans Pro", ui-sans-serif, system-ui, sans-serif',
};

/** Design Standard — blue section titles */
export const dsAccentRgb = '0 117 190'; // #0075BE
export const dsSectionHead = {
  h2: 'text-sm font-medium text-left uppercase',
  h2Style: { ...openSans, color: `rgb(${dsAccentRgb})`, backgroundColor: "rgb(240, 247, 255)" },
  h3: 'text-xl font-medium text-left tracking-tight',
  h3Style: { ...openSans, color: `rgb(${dsAccentRgb} / 0.9)`, backgroundColor: "rgb(240, 247, 255)" },
};

/** AI Knowledge Base — orange */
export const kbAccentRgb = '194 65 12'; // #c2410c
export const kbSectionHead = {
  h2: 'text-sm font-medium text-left uppercase',
  h2Style: { ...openSans, color: `rgb(${kbAccentRgb})`, backgroundColor: 'rgb(255, 247, 237)' },
  h3: 'text-xl font-medium text-left tracking-tight',
  h3Style: { ...openSans, color: `rgb(${kbAccentRgb} / 0.9)`, backgroundColor: 'rgb(255, 247, 237)' },
};
export const kbAccent = '#c2410c';
export const kbAccentSoft = '#ea580c';

/** Project Request — green */
export const prAccentRgb = '21 128 61'; // #15803d
export const prSectionHead = {
  h2: 'text-sm font-medium text-left uppercase',
  h2Style: { ...openSans, color: `rgb(${prAccentRgb})`, backgroundColor: 'rgb(240, 253, 244)' },
  h3: 'text-xl font-medium text-left tracking-tight',
  h3Style: { ...openSans, color: `rgb(${prAccentRgb} / 0.9)`, backgroundColor: 'rgb(240, 253, 244)' },
};
export const prAccent = '#15803d';
export const prAccentSoft = '#16a34a';

/** Ami — muted teal accent (WCAG AA on white; avoids neon mint glare) */
export const amiAccentRgb = '45 98 105'; // #2d6269 ≈ 5.5:1 on #fff
export const amiAccentSoftBg = '245 248 248'; // cool neutral wash

export const amiSectionHead = {
  h2: 'text-sm font-medium text-left uppercase',
  h2Style: { ...openSans, color: `rgb(${amiAccentRgb})`, backgroundColor: `rgb(${amiAccentSoftBg})` },
  h3: 'text-xl font-medium text-left tracking-tight',
  h3Style: { ...openSans, color: `rgb(${amiAccentRgb} / 0.92)`, backgroundColor: `rgb(${amiAccentSoftBg})` },
};

/** Ami content borders (Design Standard uses border-sky-200) */
export const amiBorder = 'border-gray-300';
export const amiBorderSubtle = 'border-gray-300';
