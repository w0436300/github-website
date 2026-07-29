import { useCallback, useState } from 'react';
import {
  getProjectPassword,
  isPasswordProtectedProject,
  isProjectUnlocked,
  unlockStorageKey,
} from '../data/projectPasswords.js';

/**
 * Session-scoped unlock for password-protected case studies.
 */
export function useProjectUnlock(projectId) {
  const [unlocked, setUnlocked] = useState(() => isProjectUnlocked(projectId));
  const [error, setError] = useState('');

  const unlockWithPassword = useCallback(
    (password) => {
      const expected = getProjectPassword(projectId);
      if (!expected) {
        setUnlocked(true);
        setError('');
        return true;
      }
      if (String(password).trim() === expected) {
        try {
          sessionStorage.setItem(unlockStorageKey(projectId), '1');
        } catch {
          /* ignore quota / private mode */
        }
        setUnlocked(true);
        setError('');
        if (typeof window !== 'undefined') {
          window.dispatchEvent(
            new CustomEvent('project-unlock', { detail: { projectId } })
          );
        }
        return true;
      }
      setError('Incorrect password. Please try again.');
      return false;
    },
    [projectId]
  );

  const clearError = useCallback(() => setError(''), []);

  return { unlocked, unlockWithPassword, error, clearError };
}

/** Standalone unlock helper for homepage modal (no React state required). */
export function tryUnlockProject(projectId, password) {
  if (!isPasswordProtectedProject(projectId)) return true;
  const expected = getProjectPassword(projectId);
  if (String(password).trim() !== expected) return false;
  try {
    sessionStorage.setItem(unlockStorageKey(projectId), '1');
  } catch {
    /* ignore */
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('project-unlock', { detail: { projectId } }));
  }
  return true;
}
