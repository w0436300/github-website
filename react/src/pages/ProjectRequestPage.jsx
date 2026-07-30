import { Lock } from 'lucide-react';
import PasswordGate from '../components/PasswordGate.jsx';
import { useProjectUnlock } from '../hooks/useProjectUnlock.js';
import { prSectionHead as SECTION, prAccent, openSans } from '../styles/caseStudyTheme.js';

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
    <svg viewBox="0 0 640 260" className="w-full h-auto border border-gray-200 bg-white" fill="none" aria-hidden>
      <rect x="0" y="0" width="640" height="44" fill="#15803d" />
      <rect x="16" y="14" width="120" height="16" rx="2" fill="#fff" opacity="0.9" />
      <rect x="24" y="64" width="180" height="10" rx="1" fill="#94a3b8" />
      <rect x="24" y="88" width="180" height="56" rx="2" fill="#f9fafb" stroke="#e5e7eb" />
      <rect x="36" y="102" width="100" height="8" rx="1" fill="#15803d" />
      <rect x="36" y="118" width="140" height="6" rx="1" fill="#94a3b8" />
      <rect x="24" y="156" width="180" height="56" rx="2" fill="#fff" stroke="#e8eef0" />
      <rect x="230" y="64" width="180" height="10" rx="1" fill="#94a3b8" />
      <rect x="230" y="88" width="180" height="72" rx="2" fill="#f3f4f6" stroke="#e5e7eb" />
      <rect x="242" y="104" width="110" height="8" rx="1" fill="#15803d" />
      <rect x="242" y="122" width="140" height="6" rx="1" fill="#64748b" />
      <rect x="242" y="138" width="64" height="12" rx="2" fill="#fff" stroke="#e5e7eb" />
      <rect x="436" y="64" width="180" height="10" rx="1" fill="#94a3b8" />
      <rect x="436" y="88" width="180" height="56" rx="2" fill="#fff" stroke="#e8eef0" />
      <rect x="436" y="156" width="180" height="72" rx="2" fill="#f9fafb" stroke="#e5e7eb" />
      <rect x="448" y="172" width="120" height="8" rx="1" fill="#15803d" />
      <rect x="448" y="192" width="64" height="16" rx="2" fill="#15803d" />
    </svg>
  );
}

function CaseStudyContent() {
  return (
    <div className="case-study-page min-h-screen bg-white text-slate-900 selection:bg-gray-200 scroll-smooth pb-20" style={openSans}>
      <section id="Overview" className="pt-2 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-[10px] uppercase tracking-widest text-slate-600">
            <span>Intake · Workflow · Cross-team Collaboration</span>
            <span className="inline-flex items-center gap-1 border border-gray-200 px-2 py-0.5 text-slate-700">
              <Lock className="w-3 h-3" aria-hidden /> NDA
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3 tracking-tight">
            Project Request &amp; <span className="italic font-medium text-slate-600">Collaboration Platform.</span>
          </h1>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
            Redesigned an internal request-to-delivery system for a mid-size commercial fit-out / civil company
            mid digital transformation — replacing a confusing engineering-built tool with a clearer intake,
            status, and collaboration experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 overflow-hidden text-[13px] bg-white mb-10">
            {[
              ['Role', 'UX · Product Designer'],
              ['Partners', 'PM · IT department lead'],
              ['Company', 'Fit-out / civil · 11–50'],
              ['Status', '✓ Near complete'],
            ].map(([k, v]) => (
              <div key={k} className="border-r border-b border-gray-200 p-3 last:border-r-0 md:[&:nth-child(4n)]:border-r-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 mb-1">{k}</p>
                <p className={k === 'Status' ? 'text-green-800 font-medium' : 'text-slate-800'}>{v}</p>
              </div>
            ))}
          </div>

          <AbstractBoardUi />
        </div>
      </section>

      <section id="Background" className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            eyebrow="Background"
            title="A traditional delivery company trying to digitize how work gets requested."
            subtitle="An 11–50 person commercial fit-out / interior design and civil engineering firm. Teams already delivered projects — collaboration tooling had not caught up."
          />
          <div className="grid md:grid-cols-3 gap-0 border border-gray-200 mb-8">
            {[
              [
                'Fragmented tooling',
                'Excel, Jira, Monday, and more — each group ran its own collaboration stack, so there was no shared request record across the company.',
              ],
              [
                'Digital transformation push',
                'Leadership wanted one internal system for submitting and tracking project requests as part of a broader digitization effort.',
              ],
              [
                'Engineering-first build',
                'Programmers shipped a request submission system without UX involvement. Feedback was poor: hard to understand, confusing to use, and costly in wasted work time.',
              ],
            ].map(([t, b]) => (
              <div key={t} className="border-r border-b border-gray-200 p-5 last:border-r-0 md:[&:nth-child(3n)]:border-r-0">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{t}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
            I joined as UX / Product Designer at this inflection point — partnering primarily with the PM and
            the IT department lead to rethink intake, ownership, and how people actually move requests forward.
          </p>
        </div>
      </section>

      <section id="Challenge" className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            eyebrow="Challenge"
            title="The system existed — but people could not use it with confidence."
            subtitle="Adoption failed because the product did not match how teams request, hand off, and track work across disciplines."
          />
          <div className="grid md:grid-cols-2 gap-0 border border-gray-200">
            {[
              ['Unclear mental model', 'Users did not understand how the tool worked or what to do next after submitting a request.'],
              ['Chaotic usage', 'Without shared conventions, each team improvised — creating inconsistent records and follow-ups.'],
              ['Time wasted', 'Finding status, owners, and missing information cost more time than the previous messy spreadsheets.'],
              ['Tool sprawl persisted', 'Excel, Jira, and Monday still held pieces of truth, so the new system never became the source of record.'],
            ].map(([t, b]) => (
              <div key={t} className="border-r border-b border-gray-200 p-5 md:[&:nth-child(2n)]:border-r-0">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{t}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Process" className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            eyebrow="Process"
            title="Rebuild understanding with PM and IT before redesigning screens."
            subtitle="The brief was not a visual refresh — it was to make the request lifecycle understandable for people used to Excel, Jira, and Monday."
          />
          <ol className="space-y-4">
            {[
              ['Map the real request journey', 'Worked with PM and IT to interview requesters and delivery partners — where work stalled across tools and teams.'],
              ['Define status with meaning', 'Each stage answers: who owns it, what is needed, and what unlocks the next step.'],
              ['Design progressive intake', 'Collect only what is needed up front; deepen detail as the request advances — so the form feels usable, not bureaucratic.'],
              ['Anchor collaboration to the record', 'Comments, decisions, and artifacts stay attached to the request — reducing reliance on side-channel tools.'],
            ].map(([t, b], i) => (
              <li key={t} className="flex gap-4 border border-gray-200 p-4 bg-white">
                <span className="text-[11px] font-bold tabular-nums shrink-0" style={{ color: prAccent }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{t}</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="Outcome" className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            eyebrow="Outcome"
            title="A shared operating picture for request-to-delivery work."
          />
          <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
            Detailed screens remain confidential under NDA. This summary covers the company context, why the
            first engineering-built system failed, and the intake / status / collaboration principles that
            shaped the redesign with PM and IT.
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
