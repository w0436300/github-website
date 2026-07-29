import { useState } from 'react';
import { Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { openSans } from '../styles/caseStudyTheme.js';

/**
 * Full-page password gate matching Design Standard / Bank case-study chrome.
 */
export default function PasswordGate({
  title,
  subtitle = 'This case study is password-protected. Enter the password to continue.',
  onUnlock,
  error,
  onClearError,
}) {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);

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
      className="min-h-[70vh] bg-white text-slate-900 selection:bg-sky-200 px-6 md:px-12 lg:px-20 py-16 md:py-24"
      style={openSans}
    >
      <div className="max-w-xl mx-auto">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-10"
        >
          <ArrowLeft size={16} aria-hidden />
          Back to work
        </button>

        <div className="border border-sky-200 bg-white">
          <div className="border-b border-sky-200 bg-[#f0f7ff] px-6 py-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 border border-sky-300 bg-white text-[#0075BE]">
              <Lock size={16} strokeWidth={2.25} aria-hidden />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Protected case study
              </p>
              <p className="text-xs text-slate-500">NDA · Freelance</p>
            </div>
          </div>

          <div className="px-6 py-8 md:px-8">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-3">
              {title}
            </h1>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8">{subtitle}</p>

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
                    className={`w-full border bg-white px-3 py-3 pr-11 text-sm text-slate-900 outline-none transition-colors focus:border-[#0075BE] focus:ring-1 focus:ring-[#0075BE] ${
                      error ? 'border-red-400' : 'border-sky-200'
                    }`}
                    placeholder="Enter password"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'password-error' : undefined}
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
                <p id="password-error" className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#0075BE] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-[#005a94] transition-colors"
              >
                <Lock size={14} aria-hidden />
                Unlock case study
              </button>
            </form>
          </div>
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
