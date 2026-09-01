import { Lock } from 'lucide-react';
import { dsSectionHead as SECTION, openSans } from '../styles/caseStudyTheme.js';

const steps = [
  ['01', 'Audit', 'Reviewed existing products and identified repeated inconsistencies.'],
  ['02', 'Define', 'Turned recurring decisions into clear rules, examples, and accessibility guidance.'],
  ['03', 'Document', 'Organized the guidance into a searchable, reusable standards library.'],
];

const libraryItems = [
  ['Components', 'Buttons, inputs, tables, banners, modals, and their states.'],
  ['Patterns', 'Recurring content, navigation, links, lists, and layout behavior.'],
  ['Standard blocks', 'Reusable structures such as addresses, summaries, and search results.'],
  ['Accessibility', 'Contrast, focus, labels, spacing, and usage guidance built into each rule.'],
];

function Heading({ label, title, body }) {
  return (
    <header className="mb-7 max-w-3xl">
      <h2 className={SECTION.h2} style={SECTION.h2Style}>{label}</h2>
      <h3 className={SECTION.h3} style={SECTION.h3Style}>{title}</h3>
      {body && <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>}
    </header>
  );
}

export default function DesignStandardPage() {
  return (
    <div className="case-study-page min-h-screen bg-white pb-20 text-slate-900" style={openSans}>
      <section id="Overview" className="px-6 pb-12 pt-8 md:px-12 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            <span>Enterprise Design Standards · Confidential client · 2025</span>
            <span className="inline-flex items-center gap-1 border border-gray-200 px-2 py-1 text-slate-600"><Lock size={11}/> NDA</span>
          </div>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            I designed an enterprise Design Standards library.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            The project demonstrates how I structure a design system—from foundations and components to patterns, usage guidance, and accessibility requirements.
          </p>
          <div className="mt-9 grid grid-cols-2 border border-gray-200 md:grid-cols-4">
            {[
              ['Role', 'Product Designer'],
              ['Scope', '3 platforms'],
              ['Contribution', 'System thinking · standards · documentation'],
              ['Deliverable', '20+ standards pages'],
            ].map(([key, value]) => (
              <div key={key} className="border-b border-r border-gray-200 p-4 last:border-r-0 md:border-b-0">
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{key}</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 md:gap-20 md:px-12">
        <section id="Challenge" className="scroll-mt-24 border-t border-gray-200 pt-10">
          <Heading label="Challenge" title="Similar interfaces were being designed in different ways." body="Teams needed one clear place to understand what to use, how to use it, and why." />
          <div className="grid gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-3">
            {[
              ['Legacy variation', 'Years of shipped work had created conflicting UI conventions.'],
              ['Guidance gaps', 'Existing standards did not cover current states, spacing, and patterns.'],
              ['Slow decisions', 'Designers repeatedly searched old files or reopened settled questions.'],
            ].map(([title, body]) => (
              <article key={title} className="bg-white p-5"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></article>
            ))}
          </div>
        </section>

        <section id="Approach" className="scroll-mt-24 border-t border-gray-200 pt-10">
          <Heading label="Approach" title="Understand the product, define the rule, show the usage." body="I combined product evidence, design-system thinking, and cross-functional feedback—including SWAG reviews—to create guidance teams could apply quickly." />
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(([number, title, body]) => (
              <article key={number} className="border border-gray-200 p-5">
                <span className="text-2xl font-light text-[#0075BE]">{number}</span>
                <h4 className="mt-5 font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="Solution" className="scroll-mt-24 border-t border-gray-200 pt-10">
          <Heading label="Solution" title="A clear, reusable Design Standards library." body="The library connects four layers of a design system: foundations, components, patterns, and guidelines." />
          <figure className="mb-8 overflow-hidden rounded-2xl border border-[#ddd9f3] bg-[#faf8f3] p-2 shadow-[0_18px_50px_rgba(23,36,75,0.10)] md:p-3">
            <div className="flex items-center justify-between gap-3 px-3 py-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">
                <Lock size={11} /> De-identified · Sensitive details removed
              </span>
              <span className="hidden text-[10px] text-slate-400 sm:inline">Portfolio reconstruction</span>
            </div>
            <img src="/img/design-standards-colour-system.png" alt="De-identified colour system standards showing tokens, application rules, and accessibility checks" className="h-auto w-full rounded-xl" />
            <figcaption className="px-3 py-3 text-xs leading-relaxed text-slate-500">De-identified and reconstructed for portfolio use. Colour tokens, cross-platform application rules, and WCAG accessibility criteria are shown as one connected system.</figcaption>
          </figure>
          <div className="grid gap-4 sm:grid-cols-2">
            {libraryItems.map(([title, body]) => (
              <article key={title} className="border border-gray-200 bg-slate-50/40 p-5">
                <h4 className="font-semibold text-[#005a94]">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 overflow-hidden border border-sky-200 bg-[#eff8ff] p-5 md:p-7">
            <div className="grid gap-5 md:grid-cols-[180px_1fr_1fr]">
              <div><p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Standard page</p><p className="mt-2 text-xl font-bold text-[#005a94]">Input field</p></div>
              <div><p className="text-xs font-bold text-slate-700">Usage</p><p className="mt-2 text-sm text-slate-600">Purpose, anatomy, states, and content guidance.</p></div>
              <div><p className="text-xs font-bold text-slate-700">Requirements</p><p className="mt-2 text-sm text-slate-600">Labels, focus, errors, spacing, and contrast.</p></div>
            </div>
          </div>
        </section>

        <section id="Outcome" className="scroll-mt-24 border-t border-gray-200 pt-10">
          <Heading label="Outcome" title="One shared reference for consistent product design." />
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
            <div className="grid grid-cols-2 border border-gray-200">
              {[['1000+', 'legacy projects reviewed'], ['3', 'platforms covered'], ['20+', 'standards documented'], ['1', 'shared framework']].map(([value, label]) => (
                <div key={label} className="border-b border-r border-gray-200 p-4"><p className="text-2xl font-bold">{value}</p><p className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">{label}</p></div>
              ))}
            </div>
            <div className="border border-gray-200 p-6">
              <h4 className="font-semibold">What I learned</h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">This project strengthened my understanding of how design systems connect decisions across tokens, components, patterns, content, and accessibility—not just how individual UI elements look.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
