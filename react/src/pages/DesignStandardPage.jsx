import { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';
import { dsSectionHead as SECTION_HEAD, openSans } from '../styles/caseStudyTheme.js';

function DotGrid({ issueRate, resolvedRate, total = 60 }) {
  const [dots, setDots] = useState([]);
  useEffect(() => {
    const out = [];
    for (let i = 0; i < total; i++) {
      const r = Math.random();
      let kind = 'reviewed';
      if (r < issueRate) kind = 'issue';
      else if (r < issueRate + resolvedRate) kind = 'resolved';
      out.push(kind);
    }
    setDots(out);
  }, [issueRate, resolvedRate, total]);

  return (
    <div className="flex flex-wrap gap-0.5 mb-1">
      {dots.map((k, i) => (
        <div
          key={i}
          className={`w-[7px] h-[7px] ${
            k === 'reviewed' ? 'bg-slate-800' : k === 'issue' ? 'bg-red-600' : 'bg-emerald-600'
          }`}
        />
      ))}
    </div>
  );
}

function BarRow({ label, widthPct, tone }) {
  const bg =
    tone === 'red' ? 'bg-red-600' : tone === 'blue' ? 'bg-blue-600' : 'bg-slate-800';
  return (
    <div className="flex items-center gap-2 text-[10px]" style={openSans}>
      <span className="w-16 shrink-0 uppercase tracking-wider text-slate-600">{label}</span>
      <div className="flex-1 h-2 bg-sky-200 overflow-hidden">
        <div className={`h-full ${bg} transition-all duration-700`} style={{ width: `${widthPct}%` }} />
      </div>
      <span className="w-8 text-right text-slate-600">{tone === 'red' ? 'High' : 'Med'}</span>
    </div>
  );
}

export default function DesignStandardPage() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900 selection:bg-sky-200 scroll-smooth pb-20"
      style={openSans}
    >
      {/* Overview */}
      <section id="Overview" className="pt-2 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-[10px] uppercase tracking-widest text-slate-600">
            <span>Design System · Audit of 2022–Present Files · Standards from 2025 </span>
            <span className="hidden sm:inline-flex items-center gap-1 border border-sky-300 px-2 py-0.5 text-slate-700">
              <Lock className="w-3 h-3" aria-hidden /> NDA
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3 tracking-tight">
            Design <span className="italic font-medium text-slate-600">Standard.</span>
          </h1>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
            Reviewed hundreds of projects per platform — eForms, Letters, and eFeslite web — spanning 2022 to
            present. Each platform had accumulated its own design habits and inconsistencies over three years of
            work by different designers. The task: look across all of it, find what diverged, bring it to the team,
            and write it down as a standard that works across all three.
          </p>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 border-t border-sky-200 pt-8">
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-0 border border-sky-200 overflow-hidden text-[13px] bg-white">
                {[
                  ['My Role', 'Junior Designer'],
                  ['Scope', '2022 – Present · 3 Platforms'],
                  ['Volume', '100s per platform'],
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
                  ['3', 'Platforms · 100s each'],
                  ['3 yrs', 'Of work audited · 2022–now'],
                  ['1', 'Unified standard created'],
                ].map(([n, l]) => (
                  <div key={l} className="p-4 text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">{n}</p>
                    <p className="text-[9px] uppercase tracking-wider text-slate-600 mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 border border-sky-200 bg-white p-5 max-w-xl mx-auto w-full">
              <p className="text-[10px] uppercase tracking-wider text-slate-600 mb-4">
                Projects reviewed by platform — each dot = a project
              </p>
              {[
                { name: 'eForms', issue: 0.38, resolved: 0.28 },
                { name: 'Letters', issue: 0.22, resolved: 0.32 },
                { name: 'eFeslite Web', issue: 0.32, resolved: 0.24 },
              ].map((row) => (
                <div key={row.name} className="mb-4">
                  <div className="flex justify-between text-[10px] uppercase mb-1">
                    <span className="text-slate-900">{row.name}</span>
                    <span className="text-slate-600">100s reviewed</span>
                  </div>
                  <DotGrid issueRate={row.issue} resolvedRate={row.resolved} />
                </div>
              ))}
              <div className="flex flex-wrap gap-4 text-[9px] text-slate-600 mb-4">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-slate-800" /> Reviewed
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-600" /> Inconsistency
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-600" /> Resolved
                </span>
              </div>
              <div className="border-t border-sky-200 pt-4 space-y-2">
                <p className="text-[10px] uppercase text-slate-600 mb-2">Inconsistency frequency by platform</p>
                <BarRow label="eForms" widthPct={88} tone="red" />
                <BarRow label="Letters" widthPct={64} tone="blue" />
                <BarRow label="eFeslite" widthPct={76} tone="red" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="Process" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 border-t border-sky-200 pt-4">
            <h2 className={SECTION_HEAD.h2} style={SECTION_HEAD.h2Style}>
              Process
            </h2>
            <h3 className={SECTION_HEAD.h3} style={SECTION_HEAD.h3Style}>
              The Process — 4 phases
            </h3>
            <p className="text-slate-700 text-sm text-left max-w-2xl mt-2">
              Platform-by-platform review, then cross-platform patterns, alignment with PO &amp; BA, and one unified
              document.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                phase: 'Phase 01',
                title: 'Review each platform separately',
                body: 'Went through hundreds of projects per platform — eForms, Letters, and eFeslite web — from 2022 to present. Each platform was reviewed independently first.',
                tag: '✓ Complete',
                done: true,
              },
              {
                phase: 'Phase 02',
                title: 'Find patterns within & across platforms',
                body: 'Identified inconsistencies within each platform first, then compared across all three. Cross-cutting issues became highest priority.',
                tag: '✓ Complete',
                done: true,
              },
              {
                phase: 'Phase 03',
                title: 'Discuss with PO & BA',
                body: 'Brought the inconsistency list to alignment meetings. Cross-platform conflicts needed extra care when the right answer differed by platform.',
                tag: '✓ Complete',
                done: true,
              },
              {
                phase: 'Phase 04',
                title: 'Document one unified standard',
                body: 'Writing rules that work across all three platforms — noting consistent behaviour and intentional exceptions. One document covering eForms, Letters, and eFeslite.',
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
                    step.done
                      ? 'border-sky-200 bg-sky-50 text-slate-800'
                      : 'border-blue-200 bg-blue-50 text-blue-800'
                  }`}
                >
                  {step.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Findings */}
      <section id="Findings" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:text-left">
            <h2 className={SECTION_HEAD.h2} style={SECTION_HEAD.h2Style}>
              Findings
            </h2>
            <h3 className={SECTION_HEAD.h3} style={SECTION_HEAD.h3Style}>
              What the review found
            </h3>
            <p className="text-slate-600 text-xs md:text-right md:float-right md:max-w-xs md:clear-both">
              Abstracted examples — actual project screens are NDA protected
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-sky-200 border border-sky-200 overflow-hidden">
            {[
              {
                tag: '✓ Standard set',
                freq: 'Found across majority of projects',
                name: 'Table content alignment',
                body: 'The most frequent inconsistency. Each designer had a different instinct — some centred everything, others mixed alignment within the same table.',
                rule: 'Text & labels left-align · Numbers & currency right-align · No centre in data tables',
              },
              {
                tag: '✓ Standard set',
                freq: 'Found across majority of projects',
                name: 'Button padding & sizing',
                body: 'No size system existed — designers set padding by eye or by copying from the nearest screen. Four or more padding variants for the “same” button.',
                rule: 'S: 4/10 · M: 7/16 · L: 10/22 (vertical/horizontal) · defined once, applied everywhere',
              },
              {
                tag: '✓ Standard set',
                freq: 'Found across forms & eForms',
                name: 'Form label placement',
                body: 'Inline labels in some eForms, top-stacked in others. Both were valid — the conflict was both appearing in the same product without intent.',
                rule: 'Labels always above input · 4px gap · left-aligned · inline only for very short 2-field rows',
              },
              {
                tag: '✓ Standard set',
                freq: 'Pervasive — all platforms',
                name: 'Section & block spacing',
                body: 'Gaps were set by eye. Reviewing many projects at once made the inconsistency undeniable — no two screens used the same rhythm.',
                rule: '4px base scale · all gaps multiples: 4, 8, 16, 24, 32 · no freeform values',
              },
            ].map((f) => (
              <div key={f.name} className="bg-white p-6 hover:bg-sky-50/80 transition-colors">
                <div className="flex justify-between items-start gap-2 mb-4">
                  <span className="text-[9px] uppercase px-2 py-0.5 border border-emerald-200 bg-emerald-50 text-emerald-800">
                    {f.tag}
                  </span>
                  <span className="text-[9px] text-slate-500 text-right">{f.freq}</span>
                </div>
                <div className="border border-dashed border-sky-200 bg-sky-50 p-3 mb-4 text-[10px] text-slate-600 text-center">
                  Visual comparison abstracted (NDA)
                </div>
                <h4 className="text-base font-semibold text-slate-900 mb-2">{f.name}</h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">{f.body}</p>
                <p className="text-[11px] text-blue-800 leading-snug border border-sky-200 bg-sky-50 px-2 py-2">
                  → {f.rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section id="Collaboration" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 border border-sky-200 overflow-hidden bg-white">
            <div className="p-6 md:p-10 lg:border-r border-sky-200">
              <p className="text-[10px] uppercase tracking-wider text-blue-800 mb-3">Collaboration</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                How each inconsistency became a rule
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Reviewing three years of work meant some inconsistencies were recent habits, while others had been
                baked in since 2022. The challenge wasn&apos;t just finding them — it was presenting each one with
                enough context that the team could decide whether to change it, keep it, or understand why it had
                happened.
              </p>
              <div className="border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-slate-800 leading-relaxed">
                My job was to make years of invisible drift visible, and give the team everything they needed to make
                a call. The decision itself belonged to the PO and BA.
              </div>
            </div>
            <div className="p-6 md:p-10 bg-sky-50/50">
              <ul className="space-y-0 divide-y divide-sky-200">
                {[
                  { who: 'me', title: 'I spotted the pattern across projects', desc: 'Only by reviewing many projects together did certain inconsistencies become obvious. The scale made the problem clear.', tag: 'My contribution' },
                  { who: 'me', title: 'I documented the variants found', desc: 'Catalogued all the different ways the same component appeared. Grouped visually so the range of variation was immediately readable.', tag: 'My contribution' },
                  { who: 'me', title: 'I listed the options with trade-offs', desc: 'For each inconsistency, 2–3 possible resolutions with rationale — so the meeting had something concrete to discuss.', tag: 'My contribution' },
                  { who: 'team', title: 'PO & BA aligned and decided', desc: 'With context from product requirements and business needs, the team chose the approach that would work across use cases.', tag: 'Product Owner + BA' },
                  { who: 'me', title: 'I documented and applied the decision', desc: 'Wrote up the rule with rationale and examples, applied it in new wireframes, added it to the growing standard document.', tag: 'My contribution' },
                ].map((row) => (
                  <li key={row.title} className="flex gap-3 py-4 first:pt-0">
                    <span
                      className={`shrink-0 w-8 h-8 flex items-center justify-center text-[9px] border ${
                        row.who === 'me'
                          ? 'bg-blue-50 border-blue-200 text-blue-800'
                          : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      }`}
                    >
                      {row.who === 'me' ? 'me' : 'PO'}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{row.title}</p>
                      <p className="text-xs text-slate-700 leading-relaxed mt-1">{row.desc}</p>
                      <span className="inline-block mt-2 text-[9px] uppercase px-2 py-0.5 border border-sky-200 text-slate-600">
                        {row.tag}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insight */}
      <section id="Insight" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-10 items-start">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-blue-800 mb-3">Key insight</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-left" style={SECTION_HEAD.h3Style}>
                What reviewing at scale taught me
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mt-4">
                Reviewing one or two recent projects wouldn&apos;t have shown how deeply inconsistency was embedded.
                Going back to 2022 revealed that many patterns had been drifting for years — quietly, invisibly, across
                every designer who&apos;d worked on the product.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ['01', 'Drift is invisible from inside a project', 'Each project from 2022 looked fine on its own. Lining up three years of work side by side made divergence impossible to ignore.'],
                ['02', 'Frequency across time is stronger evidence', 'A misaligned table in one project is noise. The same misalignment in hundreds of projects over three years is proof a rule was never written down.'],
                ['03', 'Cross-platform conflicts are the hardest to resolve', 'Some rules that worked for eForms didn\'t translate cleanly to eFeslite web. Discussion had to go beyond “which looks better.”'],
                ['04', 'Documentation is the only thing that outlasts people', 'Designers who made the original calls in 2022 may not be on the team now. A written standard means the next person doesn\'t reverse-engineer undocumented decisions.'],
              ].map(([num, title, body]) => (
                <div key={num} className="border border-sky-200 bg-white p-5 hover:bg-sky-50/80 transition-colors">
                  <p className="text-[10px] text-slate-500 mb-3">{num}</p>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">{title}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section id="Outcome" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto overflow-hidden border border-sky-200 bg-white text-slate-900">
          <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-blue-800 mb-3">Where it lands</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-slate-900">
                One team,
                <br />
                <span className="italic font-light text-blue-700">one standard.</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Three platforms. Three years. Hundreds of projects each. Different designers, different habits, no
                shared rules — inconsistencies had quietly compounded across the entire archive. This project made
                them visible, resolved them, and produced one standard that works across all three.
              </p>
            </div>
            <div className="space-y-0 divide-y divide-sky-200">
              {[
                { display: <>1000<span className="text-blue-600">+</span></>, title: 'Projects reviewed in total', sub: 'Hundreds per platform · 2022 to present' },
                { display: '3', title: 'Platforms audited', sub: 'eForms · Letters · eFeslite Web' },
                { display: <>5<span className="text-blue-600">+</span></>, title: 'Inconsistency types resolved', sub: 'Table · Button · Label · Spacing · Sections' },
                { display: '1', title: 'Unified standard across all 3 platforms', sub: 'Written rules + wireframes · Near complete' },
              ].map((row) => (
                <div key={row.title} className="flex flex-wrap items-baseline justify-between gap-4 py-5 first:pt-0">
                  <span className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 tabular-nums">
                    {row.display}
                  </span>
                  <div className="text-right md:max-w-xs">
                    <p className="text-sm font-medium text-slate-900">{row.title}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{row.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section id="Reflection" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-blue-800 mb-3">Reflection</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-left" style={SECTION_HEAD.h3Style}>
                What I&apos;d do differently
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mt-4">
                Going through hundreds of projects alone was thorough, but slow. Looking back, I&apos;d think
                differently about how to structure the work.
              </p>
              <div className="mt-6 border border-sky-200 bg-white p-4">
                <p className="text-[10px] uppercase text-blue-800 mb-2">Biggest takeaway</p>
                <p className="text-sm text-slate-900 leading-relaxed">
                  &ldquo;Three years of undocumented decisions don&apos;t disappear — they just become the next
                  designer&apos;s confusion. Writing them down was the whole point.&rdquo;
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                ['Build a triage system earlier', 'Not every inconsistency across three years needs a meeting. I\'d categorise into “obviously fix,” “needs discussion,” and “was intentional at the time” before bringing anything to the team.'],
                ['Review within platform before across platforms', 'I\'d audit each platform\'s full history independently first, then a second pass comparing across all three. Mixing from the start made it harder to tell platform convention from inconsistency.'],
                ['Version the standard from day one', 'I\'d start the document on day one and add as decisions were made, rather than capturing everything at the end — earlier visibility for the team.'],
                ['Plan for how the standard gets handed over', 'Three years distilled into one document is a lot to absorb. I\'d plan a short walkthrough or quick-reference card, not just hand over the file.'],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="border border-sky-200 bg-white hover:bg-sky-50/80 px-4 py-3 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed mt-1">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-sky-200 pt-6 text-[10px] uppercase tracking-wider text-slate-600">
            <span className="text-slate-900 font-semibold">Design Standard</span>
            <span>Junior Designer · Case study · Product / UX portfolio</span>
            <span className="inline-flex items-center gap-1 border border-sky-200 px-2 py-1">
              <Lock className="w-3 h-3" aria-hidden /> NDA · Visuals abstracted
            </span>
          </footer>
        </div>
      </section>
    </div>
  );
}
