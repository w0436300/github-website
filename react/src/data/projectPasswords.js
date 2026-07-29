/**
 * Soft client-side gates for NDA / internal case studies.
 * Change passwords here anytime — values are checked only in the browser.
 */
export const PROJECT_PASSWORDS = {
  'ai-knowledge-base-engineering': 'claire2026',
  'project-request-collaboration': 'claire2026',
};

export function getProjectPassword(projectId) {
  return PROJECT_PASSWORDS[projectId] || null;
}

export function isPasswordProtectedProject(projectId) {
  return Boolean(PROJECT_PASSWORDS[projectId]);
}

export function unlockStorageKey(projectId) {
  return `project-unlock:${projectId}`;
}
