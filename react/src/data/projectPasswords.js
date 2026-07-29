/**
 * Soft client-side gates for NDA / freelance case studies.
 * Change passwords here anytime — values are checked only in the browser.
 */
export const PROJECT_PASSWORDS = {
  'ai-knowledge-base-engineering': 'claire2026',
  'project-request-collaboration': 'claire2026',
};

export const PASSWORD_REQUEST_EMAIL = 'xp.claire01@gmail.com';

export function getProjectPassword(projectId) {
  return PROJECT_PASSWORDS[projectId] || null;
}

export function isPasswordProtectedProject(projectId) {
  return Boolean(PROJECT_PASSWORDS[projectId]);
}

export function unlockStorageKey(projectId) {
  return `project-unlock:${projectId}`;
}

export function isProjectUnlocked(projectId) {
  if (!isPasswordProtectedProject(projectId)) return true;
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(unlockStorageKey(projectId)) === '1';
  } catch {
    return false;
  }
}
