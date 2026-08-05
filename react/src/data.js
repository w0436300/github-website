import { projects as mainProjects } from './data/projects.js';

const toWorldProject = (project) => ({
  ...project,
  tag: project.tags?.[0] || project.category,
  text: project.description,
  href: project.demoUrl || project.externalUrl || project.repoUrl || null,
});

const byCategory = (category) => mainProjects
  .filter((project) => project.category === category)
  .map(toWorldProject);

export const projects = mainProjects;

export const islands = [
  { id: 'ux', title: 'UX Design', subtitle: 'Research-led product experiences, accessibility and design systems.', accent: '#7257ff', type: 'glasshouse', position: [-3.75, 0, -3.35], projects: byCategory('design') },
  { id: 'development', title: 'Development', subtitle: 'Full-stack applications and thoughtful interactive prototypes.', accent: '#19b979', type: 'techpod', position: [0, 0, -4.65], projects: byCategory('fullstack') },
  { id: 'data', title: 'Data Visualization', subtitle: 'Dashboards, analytics, mapping and visual data stories.', accent: '#ef5479', type: 'gallery', position: [3.75, 0, -3.35], projects: byCategory('Data Visualization') },
  { id: 'featured', title: 'Featured Work', subtitle: 'A selection of recent multidisciplinary portfolio work.', accent: '#ff8a2b', type: 'workshop', position: [7.45, 0, -3.05], projects: mainProjects.slice(0, 6).map(toWorldProject) },
];

export const about = { id: 'about', title: 'About Me', subtitle: 'Learn about Claire’s journey and creative practice.', position: [-7.35, 0, 0.7] };
