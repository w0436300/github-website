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
  { id: 'featured', title: 'Featured Work', subtitle: 'A selection of recent multidisciplinary portfolio work.', accent: '#ff8a2b', type: 'workshop', position: [-3, 0, -1.5], rotation: [0, Math.PI * 0.06, 0], projects: mainProjects.slice(0, 6).map(toWorldProject) },
  { id: 'ux', title: 'UX Design', subtitle: 'Research-led product experiences, accessibility and design systems.', accent: '#7257ff', type: 'glasshouse', position: [-6.6, 0, -4.4], rotation: [0, Math.PI * 0.12, 0], projects: byCategory('design') },
  { id: 'development', title: 'Development', subtitle: 'Full-stack applications and thoughtful interactive prototypes.', accent: '#19b979', type: 'techpod', position: [3, 0, -1.5], rotation: [0, -Math.PI * 0.06, 0], projects: byCategory('fullstack') },
  { id: 'data', title: 'Data Visualization', subtitle: 'Dashboards, analytics, mapping and visual data stories.', accent: '#ef5479', type: 'gallery', position: [6.6, 0, -4.4], rotation: [0, -Math.PI * 0.12, 0], projects: byCategory('Data Visualization') },
];

export const about = { id: 'about', title: 'About Me', subtitle: 'Learn about Claire’s journey and creative practice.', position: [0, 0, -5.8] };

export const breakIsland = { id: 'break', title: 'Take a Break', subtitle: 'Pause for a quick Three in a Row game.', position: [4.5, 0, 4.8] };
