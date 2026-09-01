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

/** AI Knowledge Base — product violet */
export const kbAccentRgb = '91 83 196'; // #5b53c4
export const kbSectionHead = {
  h2: 'text-sm font-medium text-left uppercase',
  h2Style: { ...openSans, color: `rgb(${kbAccentRgb})`, backgroundColor: 'rgb(245, 243, 255)' },
  h3: 'text-xl font-medium text-left tracking-tight',
  h3Style: { ...openSans, color: `rgb(${kbAccentRgb} / 0.9)`, backgroundColor: 'rgb(255, 247, 237)' },
};
export const kbAccent = '#c2410c';
export const kbAccentSoft = '#ea580c';

/** Project Request — product indigo */
export const prAccentRgb = '88 112 230'; // #5870e6
export const prSectionHead = {
  h2: 'text-sm font-medium text-left uppercase',
  h2Style: { ...openSans, color: `rgb(${prAccentRgb})`, backgroundColor: 'rgb(241, 243, 255)' },
  h3: 'text-xl font-medium text-left tracking-tight',
  h3Style: { ...openSans, color: `rgb(${prAccentRgb} / 0.9)`, backgroundColor: 'rgb(241, 243, 255)' },
};
export const prAccent = '#5870e6';
export const prAccentSoft = '#6b80ea';

/** Ami — muted teal accent (WCAG AA on white; avoids neon mint glare) */
export const amiAccentRgb = '45 98 105'; // #2d6269 ≈ 5.5:1 on #fff
export const amiAccentSoftBg = '245 248 248'; // cool neutral wash

export const amiSectionHead = {
  h2: 'text-sm font-medium text-left uppercase',
  h2Style: { ...openSans, color: `rgb(${amiAccentRgb})`, backgroundColor: `rgb(${amiAccentSoftBg})` },
  h3: 'text-xl font-medium text-left tracking-tight',
  h3Style: { ...openSans, color: `rgb(${amiAccentRgb} / 0.92)`, backgroundColor: `rgb(${amiAccentSoftBg})` },
};

/** Structural borders — neutral gray; theme color reserved for key accents */
export const amiBorder = 'border-gray-200';
export const amiBorderSubtle = 'border-gray-200';
export const dsBorder = 'border-gray-200';
export const dsBorderStrong = 'border-gray-200';
export const kbBorder = 'border-gray-200';
export const kbBorderStrong = 'border-gray-200';
export const prBorder = 'border-gray-200';
export const prBorderStrong = 'border-gray-200';
