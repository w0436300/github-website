import { Lock } from 'lucide-react';
import { dsSectionHead as SECTION_HEAD, openSans } from '../styles/caseStudyTheme.js';

function FindingVisualAbstract({ variant }) {
  const c = 'w-full h-auto max-h-[92px] mx-auto block text-sky-300';
  if (variant === 0) {
    return (
      <svg viewBox="0 0 320 96" className={c} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="12" y="10" width="296" height="76" rx="2" stroke="currentColor" strokeWidth="1.2" fill="#fff" />
        <line x1="12" y1="28" x2="308" y2="28" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="158" y1="10" x2="158" y2="86" stroke="currentColor" strokeWidth="0.8" opacity="0.45" />
        <rect x="22" y="38" width="112" height="6" rx="1" fill="#94a3b8" />
        <rect x="22" y="52" width="84" height="6" rx="1" fill="#cbd5e1" />
        <rect x="250" y="38" width="52" height="6" rx="1" fill="#94a3b8" />
        <rect x="262" y="52" width="40" height="6" rx="1" fill="#cbd5e1" />
      </svg>
    );
  }
  if (variant === 1) {
    return (
      <svg viewBox="0 0 320 96" className={c} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="24" y="36" width="72" height="22" rx="3" stroke="#38bdf8" strokeWidth="1.2" fill="#f0f9ff" />
        <rect x="112" y="32" width="88" height="30" rx="3" stroke="#0ea5e9" strokeWidth="1.2" fill="#e0f2fe" />
        <rect x="216" y="28" width="88" height="38" rx="3" stroke="#0284c7" strokeWidth="1.2" fill="#e0f2fe" />
      </svg>
    );
  }
  if (variant === 2) {
    return (
      <svg viewBox="0 0 320 96" className={c} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="20" y="14" width="280" height="68" rx="2" stroke="currentColor" strokeWidth="1" fill="#fff" />
        <rect x="32" y="24" width="72" height="5" rx="1" fill="#94a3b8" />
        <rect x="32" y="34" width="120" height="14" rx="2" stroke="#7dd3fc" strokeWidth="1" fill="#f8fafc" />
        <rect x="32" y="58" width="64" height="5" rx="1" fill="#94a3b8" />
        <rect x="32" y="68" width="120" height="14" rx="2" stroke="#7dd3fc" strokeWidth="1" fill="#f8fafc" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 96" className={c} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="24" y="36" width="40" height="40" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <rect x="84" y="36" width="40" height="40" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <rect x="144" y="36" width="40" height="40" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <rect x="204" y="36" width="40" height="40" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <line x1="64" y1="56" x2="84" y2="56" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="124" y1="56" x2="144" y2="56" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="184" y1="56" x2="204" y2="56" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
  );
}

function LibraryPreviewAbstract({ variant }) {
  const c = 'w-full h-[180px] block';

  if (variant === 0) {
    return (
      <svg viewBox="0 0 320 180" className={c} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="10" y="10" width="300" height="160" rx="2" fill="#fff" stroke="#bae6fd" />
        <rect x="20" y="20" width="72" height="140" fill="#f8fafc" stroke="#e0f2fe" />
        <rect x="30" y="32" width="42" height="6" rx="1" fill="#94a3b8" />
        <rect x="30" y="48" width="32" height="5" rx="1" fill="#cbd5e1" />
        <rect x="30" y="60" width="28" height="5" rx="1" fill="#cbd5e1" />
        <rect x="30" y="84" width="36" height="5" rx="1" fill="#cbd5e1" />
        <rect x="30" y="96" width="26" height="5" rx="1" fill="#cbd5e1" />
        <rect x="108" y="24" width="84" height="10" rx="1" fill="#94a3b8" />
        <rect x="108" y="44" width="182" height="26" rx="2" fill="#f8fafc" stroke="#7dd3fc" />
        <rect x="108" y="82" width="182" height="26" rx="2" fill="#f8fafc" stroke="#7dd3fc" />
        <rect x="108" y="120" width="86" height="18" rx="2" fill="#e0f2fe" stroke="#38bdf8" />
        <rect x="204" y="120" width="86" height="18" rx="2" fill="#e0f2fe" stroke="#38bdf8" />
      </svg>
    );
  }

  if (variant === 1) {
    return (
      <svg viewBox="0 0 320 180" className={c} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="10" y="10" width="300" height="160" rx="2" fill="#fff" stroke="#bae6fd" />
        <rect x="24" y="24" width="114" height="12" rx="1" fill="#94a3b8" />
        <rect x="24" y="48" width="272" height="40" rx="2" fill="#f8fafc" stroke="#7dd3fc" />
        <circle cx="48" cy="112" r="16" fill="#e0f2fe" stroke="#38bdf8" />
        <rect x="74" y="102" width="88" height="6" rx="1" fill="#94a3b8" />
        <rect x="74" y="114" width="120" height="5" rx="1" fill="#cbd5e1" />
        <rect x="74" y="126" width="96" height="5" rx="1" fill="#cbd5e1" />
        <rect x="212" y="98" width="72" height="22" rx="3" fill="#f0f9ff" stroke="#38bdf8" />
        <rect x="212" y="128" width="84" height="18" rx="2" fill="#f8fafc" stroke="#7dd3fc" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 180" className={c} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="10" y="10" width="300" height="160" rx="2" fill="#fff" stroke="#bae6fd" />
      <rect x="24" y="24" width="126" height="10" rx="1" fill="#94a3b8" />
      <rect x="24" y="48" width="272" height="18" rx="2" fill="#f8fafc" stroke="#7dd3fc" />
      <rect x="24" y="78" width="82" height="8" rx="1" fill="#94a3b8" />
      <rect x="24" y="92" width="258" height="5" rx="1" fill="#cbd5e1" />
      <rect x="24" y="104" width="236" height="5" rx="1" fill="#cbd5e1" />
      <rect x="24" y="116" width="248" height="5" rx="1" fill="#cbd5e1" />
      <rect x="24" y="136" width="92" height="18" rx="2" fill="#e0f2fe" stroke="#38bdf8" />
      <rect x="124" y="136" width="80" height="18" rx="2" fill="#e0f2fe" stroke="#38bdf8" />
      <rect x="212" y="136" width="84" height="18" rx="2" fill="#e0f2fe" stroke="#38bdf8" />
    </svg>
  );
}

function DocumentationCard({ title, body }) {
  return (
    <div className="border border-sky-200 bg-white p-5 hover:bg-sky-50/80 transition-colors">
      <h4 className="text-sm font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-xs text-slate-700 leading-relaxed">{body}</p>
    </div>
  );
}

export default function DesignStandardPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-200 scroll-smooth pb-20" style={openSans}>
      <section id="Overview" className="pt-2 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-[10px] uppercase tracking-widest text-slate-600">
            <span>Design Standards · Legacy Audit · Internal Documentation</span>
            <span className="hidden sm:inline-flex items-center gap-1 border border-sky-300 px-2 py-0.5 text-slate-700">
              <Lock className="w-3 h-3" aria-hidden /> NDA
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3 tracking-tight">
            Design Standards <span className="italic font-medium text-slate-600">Documentation.</span>
          </h1>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
          Turned years of inconsistent UI decisions into a structured internal standards documentation system used to guide future design work.
          </p>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 border-t border-sky-200 pt-8">
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-0 border border-sky-200 overflow-hidden text-[13px] bg-white">
                {[
                  ['Role', 'Product Designer · BMO'],
                  ['Contribution', 'Audit · Synthesis · Standards Writing'],
                  ['Scope', '3 Platforms · 2022–Present'],
                  ['Status', '✓ Near Complete'],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="border-r border-b border-sky-200 p-3 last:border-r-0 [&:nth-child(2n)]:border-r-0 bg-white"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 mb-1">{k}</p>
                    <p className={k === 'Status' ? 'text-emerald-700 font-medium' : 'text-slate-800'}>{v}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-sky-200 divide-x divide-sky-200 bg-white">
                {[
                  ['1000+', 'Projects reviewed total'],
                  ['3', 'Platforms aligned'],
                  ['20+', 'Standards documented'],
                  ['1', 'Shared reference library'],
                ].map(([n, l]) => (
                  <div key={l} className="p-4 text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">{n}</p>
                    <p className="text-[9px] uppercase tracking-wider text-slate-600 mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 border border-sky-200 bg-white p-5 max-w-xl mx-auto w-full">
              <p className="text-[10px] uppercase tracking-wider text-slate-600 mb-2">
                Projects reviewed by platform
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Each archive was reviewed at the screen level (hundreds of shipped projects in total, not a fixed
                sample chart). The point was to see where teams repeatedly diverged — so new standards targeted real
                debt, not one-off quirks.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 leading-relaxed border-t border-sky-200 pt-4">
                <li>
                  <span className="font-semibold text-slate-900">eForms</span> — Strongest inconsistency signal of the
                  three; drove the largest share of new rules (components, states, spacing).
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Letters</span> — Moderate drift; more work already
                  followed older written guidance, so documentation focused on closing gaps instead of reinventing
                  patterns.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">eFes Lite Web</span> — High inconsistency, second only
                  to eForms; several clusters fed straight into the shared pattern library.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="Reflection" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#0075BE] mb-3">Reflection</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-left" style={SECTION_HEAD.h3Style}>
                What I learned
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mt-4">
                The work was thorough, but the documentation workflow could have been structured earlier.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mt-4">
                AI assistants also changed how I think about this project in hindsight. They lower the cost of generating
                layouts and copy drafts, which makes inconsistency easier to ship, not harder. A design system and written
                standards are where teams still negotiate what belongs in the product, how it should behave, and what can be
                reused—before those fast outputs pile up as silent drift across squads.
              </p>
            </div>
            <div className="space-y-3">
              {[
                [
                  'Standards as the slow, deliberate layer',
                  'When “how” gets faster, documentation is how you keep “what” and “why” legible for the next designer or developer.',
                ],
                ['Build a triage system earlier', 'Separate obvious fixes from discussion-heavy issues sooner.'],
                ['Version the documentation earlier', 'Capture decisions as they happen instead of consolidating later.'],
                ['Plan adoption, not just handoff', 'Pair the standards library with walkthroughs or quick-reference guidance.'],
              ].map(([title, body]) => (
                <div key={title} className="border border-sky-200 bg-white hover:bg-sky-50/80 px-4 py-3 transition-colors">
                  <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed mt-1">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="Challenge" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 border-t border-sky-200 pt-4">
            <h2 className={SECTION_HEAD.h2} style={SECTION_HEAD.h2Style}>Challenge</h2>
            <h3 className={SECTION_HEAD.h3} style={SECTION_HEAD.h3Style}>Outdated guidance, uneven detail
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['Legacy variation', 'Three platforms had accumulated different UI habits over time.'],
              ['Outdated standards', 'Some standards already existed, but they were outdated and not detailed enough to guide current components, patterns, spacing, and states.'],
              ['Hard to reuse consistently', 'Teams could not quickly check how components, patterns, or spacing should behave.'],
            ].map(([title, body]) => (
              <div key={title} className="border border-sky-200 bg-white p-5">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{title}</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Approach" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 border-t border-sky-200 pt-4">
            <h2 className={SECTION_HEAD.h2} style={SECTION_HEAD.h2Style}>Approach</h2>
            <h3 className={SECTION_HEAD.h3} style={SECTION_HEAD.h3Style}>From audit to standards library</h3>
            <p className="text-slate-700 text-sm text-left max-w-2xl mt-2">
              Review the archive, identify repeat patterns, align on rules, and document them in a reusable format.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                phase: 'Phase 01',
                title: 'Audit legacy files',
                body: 'Reviewed historical work across eForms, Letters, and eFes Lite Web.',
                tag: '✓ Complete',
                done: true,
              },
              {
                phase: 'Phase 02',
                title: 'Cluster repeat patterns',
                body: 'Grouped recurring inconsistencies in components, layout, and content patterns.',
                tag: '✓ Complete',
                done: true,
              },
              {
                phase: 'Phase 03',
                title: 'Align on standards',
                body: 'Worked with PO and BA to define clear standards for each platform.',
                tag: '✓ Complete',
                done: true,
              },
              {
                phase: 'Phase 04',
                title: 'Build the library',
                body: 'Turned decisions into structured standards pages for future use.',
                tag: '→ In progress',
                done: false,
              },
            ].map((step) => (
              <div key={step.phase} className="border border-sky-200 bg-white p-5 pt-6">
                <p className="text-[10px] uppercase tracking-wider text-slate-600 mb-2">{step.phase}</p>
                <h4 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">{step.body}</p>
                <span
                  className={`inline-block text-[9px] uppercase px-2 py-1 border ${
                    step.done ? 'border-sky-200 bg-sky-50 text-slate-800' : 'border-sky-200 bg-white text-[#0075BE]'
                  }`}
                >
                  {step.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Documentation" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 border-t border-sky-200 pt-4">
            <h2 className={SECTION_HEAD.h2} style={SECTION_HEAD.h2Style}>Documentation</h2>
            <h3 className={SECTION_HEAD.h3} style={SECTION_HEAD.h3Style}>What I actually produced</h3>
            <p className="text-slate-700 text-sm text-left max-w-3xl mt-2">
              The deliverable was not just an audit summary. It became a structured internal documentation system organizing reusable rules for components, patterns, standard blocks, and layout behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DocumentationCard title="Component standards" body="Documented reusable UI parts such as buttons, toggles, checkboxes, tables, banners, and modals." />
            <DocumentationCard title="Pattern standards" body="Defined larger recurring structures such as hyperlinks, bullets, standard text, and section patterns." />
            <DocumentationCard title="Standard blocks" body="Captured repeated content structures like address fields, summaries, and profile search blocks." />
            <DocumentationCard title="Page taxonomy" body="Organized the library so teams could browse standards by category rather than search through old files." />
          </div>
        </div>
      </section>

      <section id="Structure" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-10 items-start border border-sky-200 bg-white p-6 md:p-8">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#0075BE] mb-3">Standards structure</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-left" style={SECTION_HEAD.h3Style}>
                A repeatable page format
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mt-4">
                Each standards page followed the same structure so designers could quickly understand what the item was, how it should be used, and what spacing or layout rules applied.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                ['Overview', 'Purpose, usage context, and quick guidance.'],
                ['Anatomy', 'Labeled breakdown of component or pattern structure.'],
                ['Specifications', 'Spacing, padding, typography, and visual rules.'],
                ['States / Variants', 'Default, hover, focus, disabled, and alternate versions.'],
                ['Placement & spacing', 'How the rule appears inside actual layouts and flows.'],
                ['Examples', 'Reference examples showing intended application.'],
              ].map(([title, body]) => (
                <DocumentationCard key={title} title={title} body={body} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="LibraryExamples" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 border-t border-sky-200 pt-4">
            <h2 className={SECTION_HEAD.h2} style={SECTION_HEAD.h2Style}>
              Examples from the standards library
            </h2>
            <h3 className={SECTION_HEAD.h3} style={SECTION_HEAD.h3Style}>
              How the documentation was structured in practice
            </h3>
            <p className="text-slate-700 text-sm text-left max-w-3xl mt-2">
              Beyond identifying inconsistencies, I translated decisions into a browsable standards library. Each
              page documented reusable rules for components, patterns, and standard blocks in a consistent format.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Library index',
                label: 'Information architecture',
                body: 'Organized standards into component, layout, pattern, and standard block categories so teams could browse the library as a reference system.',
                variant: 0,
              },
              {
                title: 'Component page example',
                label: 'Buttons / inputs / tables',
                body: 'Each component page defined anatomy, specifications, variants, states, placement, and spacing rules in one repeatable layout.',
                variant: 1,
              },
              {
                title: 'Pattern page example',
                label: 'Banners / hyperlinks / standard text',
                body: 'Larger recurring UI and content patterns were documented with structure, examples, and usage guidance for real screen contexts.',
                variant: 2,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-sky-200 bg-white overflow-hidden hover:bg-sky-50/60 transition-colors"
              >
                <div className="border-b border-sky-200 bg-slate-50 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">{item.label}</p>
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                </div>

                <div className="p-4">
                  <div className="border border-dashed border-sky-200 bg-white mb-4 overflow-hidden">
                    <LibraryPreviewAbstract variant={item.variant} />
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-slate-700">
            Actual standards pages are NDA-protected. Examples shown here focus on page structure, taxonomy, and
            documentation format rather than product-specific content.
          </div>
        </div>
      </section>

      <section id="Examples" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:text-left">
            <h2 className={SECTION_HEAD.h2} style={SECTION_HEAD.h2Style}>Selected examples</h2>
            <h3 className={SECTION_HEAD.h3} style={SECTION_HEAD.h3Style}>Sample rules captured in the library</h3>
            <p className="text-slate-600 text-sm mt-2">
              Representative examples only — many more pages exist in the standards library, but actual project screens are NDA protected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-sky-200 border border-sky-200 overflow-hidden">
            {[
              {
                tag: '✓ Standard set',
                freq: 'High-frequency issue',
                name: 'Table content alignment',
                body: 'The most common issue. Alignment rules varied from screen to screen.',
                rule: 'Text & labels left-align · Numbers & currency right-align · No centre in data tables',
              },
              {
                tag: '✓ Standard set',
                freq: 'Repeated across components',
                name: 'Button padding & sizing',
                body: 'Button sizes were inconsistent, with multiple padding versions used for the same component.',
                rule: 'S: 4/10 · M: 7/16 · L: 10/22 · defined once, applied everywhere',
              },
              {
                tag: '✓ Standard set',
                freq: 'Found in forms',
                name: 'Form label placement',
                body: 'Label placement varied between inline and top-stacked without a clear rule.',
                rule: 'Labels above input · 4px gap · left-aligned · inline only for very short rows',
              },
              {
                tag: '✓ Standard set',
                freq: 'Pervasive across pages',
                name: 'Section & block spacing',
                body: 'Spacing was inconsistent across screens, with no shared rhythm or scale.',
                rule: '4px base scale · gaps use 4, 8, 16, 24, 32 · no freeform values',
              },
            ].map((f, i) => (
              <div key={f.name} className="bg-white p-6 hover:bg-sky-50/80 transition-colors">
                <div className="flex justify-between items-start gap-2 mb-4">
                  <span className="text-[9px] uppercase px-2 py-0.5 border border-emerald-200 bg-emerald-50 text-emerald-800">{f.tag}</span>
                  <span className="text-[9px] text-slate-500 text-right">{f.freq}</span>
                </div>
                <div className="border border-dashed border-sky-200 bg-white p-3 mb-4 overflow-hidden">
                  <FindingVisualAbstract variant={i % 4} />
                  <span className="sr-only">Visual comparison abstracted (NDA)</span>
                </div>
                <h4 className="text-base font-semibold text-slate-900 mb-2">{f.name}</h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">{f.body}</p>
                <p className="text-[11px] text-[#0075BE] leading-snug border border-sky-200 bg-sky-50 px-2 py-2">
                  → {f.rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Collaboration" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 border border-sky-200 overflow-hidden bg-white">
            <div className="p-6 md:p-10 lg:border-r border-sky-200">
              <p className="text-[10px] uppercase tracking-wider text-[#0075BE] mb-3">Collaboration</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                How audit findings became standards
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                I surfaced recurring inconsistencies, documented the variants, and brought options into alignment discussions. PO and BA made the final call; I translated those decisions into reusable standards pages.
              </p>
              <div className="border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-slate-800 leading-relaxed">
                My role was to make drift visible, structure the rules clearly, and turn decisions into a reference the team could actually use.
              </div>
            </div>
            <div className="p-6 md:p-10 bg-sky-50/50">
              <ul className="space-y-0 divide-y divide-sky-200">
                {[
                  { who: 'me', title: 'Audited historical work', desc: 'Compared many projects side by side across years of files.', tag: 'My contribution' },
                  { who: 'me', title: 'Structured the variations', desc: 'Grouped repeated differences into decision-ready categories.', tag: 'My contribution' },
                  { who: 'me', title: 'Prepared rule options', desc: 'Summarized possible approaches and trade-offs.', tag: 'My contribution' },
                  { who: 'team', title: 'Aligned with PO & BA', desc: 'Confirmed the rules that best fit business and product needs.', tag: 'Product Owner + BA' },
                  { who: 'me', title: 'Documented the outcome', desc: 'Converted agreed decisions into reusable standards documentation.', tag: 'My contribution' },
                ].map((row) => (
                  <li key={row.title} className="flex gap-3 py-4 first:pt-0">
                    <span className={`shrink-0 w-8 h-8 flex items-center justify-center text-[9px] border ${row.who === 'me' ? 'bg-white border-sky-200 text-[#0075BE]' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>
                      {row.who === 'me' ? 'me' : 'PO'}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{row.title}</p>
                      <p className="text-xs text-slate-700 leading-relaxed mt-1">{row.desc}</p>
                      <span className="inline-block mt-2 text-[9px] uppercase px-2 py-0.5 border border-sky-200 text-slate-600">{row.tag}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="Outcome" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto overflow-hidden border border-sky-200 bg-white text-slate-900">
          <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#0075BE] mb-3">Outcome</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-slate-900">
                From scattered files,
                <br />
                <span className="italic font-light text-[#0075BE]">to clear platform-specific references.</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The result was a reusable internal documentation framework, with standards maintained separately for eForms, Letters, and eFes Lite Web.
              </p>
            </div>
            <div className="space-y-0 divide-y divide-sky-200">
              {[
                { display: <>1000<span className="text-[#0075BE]">+</span></>, title: 'Projects reviewed in total', sub: 'Historical files across 3 platforms' },
                { display: <>20<span className="text-[#0075BE]">+</span></>, title: 'Standards pages documented', sub: 'Components · patterns · standard blocks · and more' },
                { display: '3', title: 'Platform standards tracks', sub: 'eForms · Letters · eFes Lite Web' },
                { display: '1', title: 'Documentation framework', sub: 'One method, maintained as separate platform standards' },
              ].map((row) => (
                <div key={row.title} className="flex flex-wrap items-baseline justify-between gap-4 py-5 first:pt-0">
                  <span className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 tabular-nums">{row.display}</span>
                  <div className="text-right md:max-w-xs">
                    <p className="text-sm font-medium text-slate-900">{row.title}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{row.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      
    </div>
    
  );
}
