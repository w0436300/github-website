import { useCallback, useState } from 'react';
import {
  getProjectPassword,
  isPasswordProtectedProject,
  unlockStorageKey,
} from '../data/projectPasswords.js';

function readUnlocked(projectId) {
  if (typeof window === 'undefined') return false;
  if (!isPasswordProtectedProject(projectId)) return true;
  try {
    return sessionStorage.getItem(unlockStorageKey(projectId)) === '1';
  } catch {
    return false;
  }
}

/**
 * Session-scoped unlock for password-protected case studies.
 * Returns [unlocked, unlockWithPassword, error, clearError].
 */
export function useProjectUnlock(projectId) {
  const [unlocked, setUnlocked] = useState(() => readUnlocked(projectId));
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
