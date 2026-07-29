import { useEffect, useState } from 'react';
import { Lock, Eye, EyeOff, X, Mail } from 'lucide-react';
import { openSans } from '../styles/caseStudyTheme.js';
import { PASSWORD_REQUEST_EMAIL } from '../data/projectPasswords.js';

/**
 * Homepage modal for unlocking NDA / password-protected case studies.
 */
export default function PasswordModal({
  open,
  title,
  subtitle = 'This case study is under NDA. Enter the password to continue.',
  onUnlock,
  error,
  onClearError,
  onClose,
}) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    setPassword('');
    setShowPassword(false);
    onClearError?.();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onClearError]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    const ok = onUnlock(password);
    if (!ok) {
      setShake(true);
      window.setTimeout(() => setShake(false), 420);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/45 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="password-modal-title"
    >
      <div
        className="w-full max-w-md border border-sky-200 bg-white shadow-xl"
        style={openSans}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-sky-200 bg-[#f0f7ff] px-5 py-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center justify-center w-8 h-8 border border-sky-300 bg-white text-[#0075BE] shrink-0">
              <Lock size={16} strokeWidth={2.25} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Protected case study
              </p>
              <p className="text-xs text-slate-500">NDA · Freelance</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-5 py-6">
          <h2
            id="password-modal-title"
            className="text-xl font-extrabold tracking-tight text-slate-900 mb-2"
          >
            {title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-5">{subtitle}</p>

          <form
            onSubmit={submit}
            className={`space-y-4 ${shake ? 'animate-[gateShake_0.4s_ease]' : ''}`}
            noValidate
          >
            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600">
                Password
              </span>
              <div className="mt-2 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) onClearError?.();
                  }}
                  autoComplete="current-password"
                  autoFocus
                  className={`w-full border bg-white px-3 py-2.5 pr-11 text-sm text-slate-900 outline-none transition-colors focus:border-[#0075BE] focus:ring-1 focus:ring-[#0075BE] ${
                    error ? 'border-red-400' : 'border-sky-200'
                  }`}
                  placeholder="Enter password"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'password-modal-error' : 'password-modal-hint'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </label>

            {error && (
              <p id="password-modal-error" className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0075BE] text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-[#005a94] transition-colors"
            >
              <Lock size={14} aria-hidden />
              Unlock case study
            </button>
          </form>

          <p
            id="password-modal-hint"
            className="mt-5 pt-4 border-t border-sky-100 text-xs text-slate-500 leading-relaxed flex items-start gap-2"
          >
            <Mail size={14} className="mt-0.5 shrink-0 text-slate-400" aria-hidden />
            <span>
              Need the password? Contact{' '}
              <a
                href={`mailto:${PASSWORD_REQUEST_EMAIL}`}
                className="text-[#0075BE] font-medium underline underline-offset-2 hover:text-[#005a94]"
              >
                {PASSWORD_REQUEST_EMAIL}
              </a>
              .
            </span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes gateShake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
