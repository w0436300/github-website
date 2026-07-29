import { Lock } from 'lucide-react';
import PasswordGate from '../components/PasswordGate.jsx';
import { useProjectUnlock } from '../hooks/useProjectUnlock.js';
import { dsSectionHead as SECTION, openSans } from '../styles/caseStudyTheme.js';

const PROJECT_ID = 'project-request-collaboration';

function SectionIntro({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className={SECTION.h2} style={SECTION.h2Style}>
        {eyebrow}
      </h2>
      <h3 className={`${SECTION.h3} mt-1`} style={SECTION.h3Style}>
        {title}
      </h3>
      {subtitle && <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">{subtitle}</p>}
    </div>
  );
}

function AbstractBoardUi() {
  return (
    <svg viewBox="0 0 640 260" className="w-full h-auto border border-sky-200 bg-white" fill="none" aria-hidden>
      <rect x="0" y="0" width="640" height="44" fill="#0075BE" />
      <rect x="16" y="14" width="120" height="16" rx="2" fill="#fff" opacity="0.9" />
      <rect x="24" y="64" width="180" height="10" rx="1" fill="#94a3b8" />
      <rect x="24" y="88" width="180" height="56" rx="2" fill="#f0f9ff" stroke="#7dd3fc" />
      <rect x="36" y="102" width="100" height="8" rx="1" fill="#0369a1" />
      <rect x="36" y="118" width="140" height="6" rx="1" fill="#94a3b8" />
      <rect x="24" y="156" width="180" height="56" rx="2" fill="#fff" stroke="#e2e8f0" />
      <rect x="230" y="64" width="180" height="10" rx="1" fill="#94a3b8" />
      <rect x="230" y="88" width="180" height="72" rx="2" fill="#e0f2fe" stroke="#38bdf8" />
      <rect x="242" y="104" width="110" height="8" rx="1" fill="#0369a1" />
      <rect x="242" y="122" width="140" height="6" rx="1" fill="#64748b" />
      <rect x="242" y="138" width="64" height="12" rx="2" fill="#fff" stroke="#7dd3fc" />
      <rect x="436" y="64" width="180" height="10" rx="1" fill="#94a3b8" />
      <rect x="436" y="88" width="180" height="56" rx="2" fill="#fff" stroke="#e2e8f0" />
      <rect x="436" y="156" width="180" height="72" rx="2" fill="#f0f9ff" stroke="#7dd3fc" />
      <rect x="448" y="172" width="120" height="8" rx="1" fill="#0369a1" />
      <rect x="448" y="192" width="64" height="16" rx="2" fill="#0075BE" />
    </svg>
  );
}

function CaseStudyContent() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-200 scroll-smooth pb-20" style={openSans}>
      <section id="Overview" className="pt-2 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-[10px] uppercase tracking-widest text-slate-600">
            <span>Intake · Workflow · Cross-team Collaboration</span>
            <span className="inline-flex items-center gap-1 border border-sky-300 px-2 py-0.5 text-slate-700">
              <Lock className="w-3 h-3" aria-hidden /> NDA
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3 tracking-tight">
            Project Request &amp; <span className="italic font-medium text-slate-600">Collaboration Platform.</span>
          </h1>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
            Designed a request-to-delivery experience that clarifies intake, ownership, and handoffs between
            requesters, design, and engineering.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-sky-200 overflow-hidden text-[13px] bg-white mb-10">
            {[
              ['Role', 'Product Designer · Freelance'],
              ['Focus', 'Intake · Status model · Collaboration'],
              ['Users', 'Design · Eng · Stakeholders'],
              ['Status', '✓ Near complete'],
            ].map(([k, v]) => (
              <div key={k} className="border-r border-b border-sky-200 p-3 last:border-r-0 md:[&:nth-child(4n)]:border-r-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 mb-1">{k}</p>
                <p className={k === 'Status' ? 'text-emerald-700 font-medium' : 'text-slate-800'}>{v}</p>
              </div>
            ))}
          </div>

          <AbstractBoardUi />
        </div>
      </section>

      <section id="Challenge" className="py-12 px-6 border-t border-sky-100">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            eyebrow="Challenge"
            title="Requests arrived — ownership and next steps did not."
            subtitle="Teams needed a shared language for priority, readiness, and who moves the work forward."
          />
          <div className="grid md:grid-cols-2 gap-0 border border-sky-200">
            {[
              ['Ambiguous intake', 'Requests arrived incomplete, so discovery restarted on every thread.'],
              ['Invisible status', 'Stakeholders could not tell what was blocked, waiting, or in progress.'],
              ['Scattered conversation', 'Decisions lived in email and chat, disconnected from the request record.'],
              ['Uneven handoffs', 'Design and engineering lacked a clear ready-for-handoff checklist.'],
            ].map(([t, b]) => (
              <div key={t} className="border-r border-b border-sky-200 p-5 md:[&:nth-child(2n)]:border-r-0">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{t}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Process" className="py-12 px-6 border-t border-sky-100">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            eyebrow="Process"
            title="Make the lifecycle legible before optimizing the UI."
          />
          <ol className="space-y-4">
            {[
              ['Map the real request journey', 'Interviewed requesters and delivery partners to capture where work stalled.'],
              ['Define status with meaning', 'Each stage answers: who owns it, what is needed, and what unlocks the next step.'],
              ['Design progressive intake', 'Collect only what is needed up front; deepen detail as the request advances.'],
              ['Anchor collaboration to the record', 'Comments, decisions, and artifacts stay attached to the request — not lost in side channels.'],
            ].map(([t, b], i) => (
              <li key={t} className="flex gap-4 border border-sky-200 p-4 bg-white">
                <span className="text-[11px] font-bold text-[#0075BE] tabular-nums shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{t}</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="Outcome" className="py-12 px-6 border-t border-sky-100">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            eyebrow="Outcome"
            title="A shared operating picture for request-to-delivery work."
          />
          <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
            Detailed screens remain confidential under NDA. This summary covers the problem framing, status model,
            and collaboration principles that shaped the platform.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function ProjectRequestPage() {
  const { unlocked, unlockWithPassword, error, clearError } = useProjectUnlock(PROJECT_ID);

  if (!unlocked) {
    return (
      <PasswordGate
        title="Project Request & Collaboration Platform"
        subtitle="This freelance case study is under NDA. Enter the shared password to view the work."
        onUnlock={unlockWithPassword}
        error={error}
        onClearError={clearError}
      />
    );
  }

  return <CaseStudyContent />;
}
