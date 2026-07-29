import { Lock } from 'lucide-react';
import PasswordGate from '../components/PasswordGate.jsx';
import { useProjectUnlock } from '../hooks/useProjectUnlock.js';
import { dsSectionHead as SECTION, openSans } from '../styles/caseStudyTheme.js';

const PROJECT_ID = 'ai-knowledge-base-engineering';

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

function AbstractSearchUi() {
  return (
    <svg viewBox="0 0 640 280" className="w-full h-auto border border-sky-200 bg-white" fill="none" aria-hidden>
      <rect x="16" y="16" width="140" height="248" fill="#f0f9ff" stroke="#bae6fd" />
      <rect x="32" y="36" width="88" height="8" rx="1" fill="#0369a1" />
      <rect x="32" y="60" width="100" height="6" rx="1" fill="#94a3b8" />
      <rect x="32" y="76" width="84" height="6" rx="1" fill="#cbd5e1" />
      <rect x="32" y="92" width="92" height="6" rx="1" fill="#cbd5e1" />
      <rect x="32" y="124" width="100" height="6" rx="1" fill="#94a3b8" />
      <rect x="32" y="140" width="72" height="6" rx="1" fill="#cbd5e1" />
      <rect x="176" y="28" width="280" height="14" rx="1" fill="#0c4a6e" />
      <rect x="176" y="58" width="432" height="36" rx="2" fill="#f8fafc" stroke="#7dd3fc" />
      <rect x="188" y="70" width="200" height="8" rx="1" fill="#94a3b8" />
      <rect x="176" y="112" width="210" height="88" rx="2" fill="#fff" stroke="#bae6fd" />
      <rect x="190" y="128" width="120" height="8" rx="1" fill="#0369a1" />
      <rect x="190" y="148" width="160" height="6" rx="1" fill="#cbd5e1" />
      <rect x="190" y="164" width="140" height="6" rx="1" fill="#e2e8f0" />
      <rect x="400" y="112" width="208" height="88" rx="2" fill="#fff" stroke="#bae6fd" />
      <rect x="414" y="128" width="100" height="8" rx="1" fill="#0369a1" />
      <rect x="414" y="148" width="160" height="6" rx="1" fill="#cbd5e1" />
      <rect x="414" y="164" width="130" height="6" rx="1" fill="#e2e8f0" />
    </svg>
  );
}

function CaseStudyContent() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-200 scroll-smooth pb-20" style={openSans}>
      <section id="Overview" className="pt-2 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-[10px] uppercase tracking-widest text-slate-600">
            <span>Knowledge Systems · AI Assist · Engineering Enablement</span>
            <span className="inline-flex items-center gap-1 border border-sky-300 px-2 py-0.5 text-slate-700">
              <Lock className="w-3 h-3" aria-hidden /> NDA
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3 tracking-tight">
            AI Knowledge Base <span className="italic font-medium text-slate-600">for Engineering.</span>
          </h1>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
            Designed a knowledge experience that helps engineers find standards, patterns, and answers
            faster — combining curated structure with AI-assisted retrieval.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-sky-200 overflow-hidden text-[13px] bg-white mb-10">
            {[
              ['Role', 'Product Designer · Freelance'],
              ['Focus', 'IA · Search UX · Content model'],
              ['Users', 'Engineering teams'],
              ['Status', '✓ In progress'],
            ].map(([k, v]) => (
              <div key={k} className="border-r border-b border-sky-200 p-3 last:border-r-0 md:[&:nth-child(4n)]:border-r-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 mb-1">{k}</p>
                <p className={k === 'Status' ? 'text-emerald-700 font-medium' : 'text-slate-800'}>{v}</p>
              </div>
            ))}
          </div>

          <AbstractSearchUi />
        </div>
      </section>

      <section id="Problem" className="py-12 px-6 border-t border-sky-100">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            eyebrow="Problem"
            title="Knowledge existed — but finding it was the product problem."
            subtitle="Standards, runbooks, and decisions lived across tools. Engineers spent time hunting instead of applying."
          />
          <div className="grid md:grid-cols-3 gap-0 border border-sky-200">
            {[
              ['Fragmented sources', 'Docs, tickets, chats, and wikis held pieces of truth with no shared map.'],
              ['Weak entry points', 'People needed the right question before they could find the right answer.'],
              ['Trust gaps', 'AI answers without provenance risked shortcuts that ignored standards.'],
            ].map(([t, b]) => (
              <div key={t} className="border-r border-b border-sky-200 p-5 last:border-r-0 md:[&:nth-child(3n)]:border-r-0">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{t}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Approach" className="py-12 px-6 border-t border-sky-100">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            eyebrow="Approach"
            title="Structure first, then amplify with AI."
            subtitle="The system treats AI as an assistant over a curated knowledge model — not a replacement for ownership."
          />
          <ol className="space-y-4">
            {[
              ['Map the knowledge domains', 'Define the taxonomy engineers actually search: standards, patterns, ownership, decisions.'],
              ['Design dual entry', 'Support browse (nav + facets) and ask (AI search with citations and source links).'],
              ['Make trust visible', 'Surface provenance, freshness, and owner so answers can be verified quickly.'],
              ['Close the loop', 'Allow teams to flag gaps and route missing knowledge back into the curated corpus.'],
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
            title="A calmer path from question to trusted answer."
          />
          <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
            Screens and detailed flows remain confidential. This page summarizes the problem framing, information
            architecture direction, and interaction principles used to guide the knowledge base experience.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function AiKnowledgeBasePage() {
  const { unlocked, unlockWithPassword, error, clearError } = useProjectUnlock(PROJECT_ID);

  if (!unlocked) {
    return (
      <PasswordGate
        title="AI Knowledge Base for Engineering"
        subtitle="This freelance case study is under NDA. Enter the shared password to view the work."
        onUnlock={unlockWithPassword}
        error={error}
        onClearError={clearError}
      />
    );
  }

  return <CaseStudyContent />;
}
