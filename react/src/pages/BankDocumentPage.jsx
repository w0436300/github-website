import { openSans, dsSectionHead as SECTION } from '../styles/caseStudyTheme.js';

const ACCENT = '#0075BE';

function Heading({ label, title, body }) {
  return (
    <header className="mb-7 max-w-3xl">
      <h2 className={SECTION.h2} style={SECTION.h2Style}>{label}</h2>
      <h3 className={SECTION.h3} style={SECTION.h3Style}>{title}</h3>
      {body && <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>}
    </header>
  );
}

export default function BankDocumentPage() {
  return (
    <div className="case-study-page min-h-screen bg-white pb-20 text-slate-900" style={openSans}>
      <section id="Overview" className="px-6 pb-12 pt-8 md:px-12 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">UI Design · Document Systems · Banking · 2026</p>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">From static bank forms to a system-ready digital template.</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">I translated print-era disclosure forms into reusable digital documents with mapped data, conditional sections, and clearer information hierarchy.</p>
          <div className="mt-9 grid grid-cols-2 border border-gray-200 md:grid-cols-4">
            {[
              ['Role', 'UI Designer'],
              ['Input', 'Legacy forms · mapping docs'],
              ['Output', 'Digital templates'],
              ['Focus', 'Logic · hierarchy · reuse'],
            ].map(([key, value]) => (
              <div key={key} className="border-b border-r border-gray-200 p-4 last:border-r-0 md:border-b-0"><p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{key}</p><p className="mt-1 text-sm font-semibold text-slate-800">{value}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 md:gap-20 md:px-12">
        <section id="Challenge" className="scroll-mt-24 border-t border-gray-200 pt-10">
          <Heading label="Challenge" title="This was a structural rebuild, not a visual refresh." body="The new documents had to preserve legal content while working with backend data and scaling across multiple form types." />
          <div className="grid gap-px border border-gray-200 bg-gray-200 md:grid-cols-3">
            {[
              ['System-generated data', 'Values are populated automatically, so every field needs a clear mapping and format.'],
              ['Legal continuity', 'Required copy must remain complete without burying the information customers scan for.'],
              ['Reusable logic', 'The solution must support new forms and conditional sections, not only one document.'],
            ].map(([title, body]) => <article key={title} className="bg-white p-5"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></article>)}
          </div>
        </section>

        <section id="Process" className="scroll-mt-24 border-t border-gray-200 pt-10">
          <Heading label="Process" title="Understand the data before designing the page." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Map', 'Read legacy forms and mapping documents to identify values, formats, and conditions.'],
              ['02', 'Structure', 'Separated legal copy, system data, and conditional content into distinct patterns.'],
              ['03', 'Standardize', 'Defined reusable headers, sections, labels, tables, and conditional blocks.'],
            ].map(([number, title, body]) => <article key={number} className="border border-gray-200 p-5"><span className="text-2xl font-light" style={{ color: ACCENT }}>{number}</span><h4 className="mt-5 font-semibold">{title}</h4><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></article>)}
          </div>
        </section>

        <section id="Decisions" className="scroll-mt-24 border-t border-gray-200 pt-10">
          <Heading label="Key decisions" title="Match the presentation to the content." body="The underlying data stayed the same; the display pattern changed only when it improved comprehension." />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Legal paragraphs', 'Kept continuous copy where wording and reading order were legally important.'],
              ['Highlighted values', 'Made account numbers, rates, dates, and amounts easier to locate.'],
              ['Tables', 'Used only when customers needed to compare related values side by side.'],
              ['Conditional blocks', 'Rendered secondary sections only when the mapped data required them.'],
            ].map(([title, body]) => <article key={title} className="border border-gray-200 bg-slate-50/40 p-5"><h4 className="font-semibold" style={{ color: ACCENT }}>{title}</h4><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></article>)}
          </div>
        </section>

        <section id="Final" className="scroll-mt-24 border-t border-gray-200 pt-10">
          <Heading label="Final design" title="A flexible disclosure template." body="The final structure makes system values visible, preserves legal text, and gives future forms a consistent framework." />
          <div className="overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="flex min-h-12 items-center text-white" style={{ background: ACCENT }}><strong className="bg-white px-5 py-4 tracking-widest" style={{ color: ACCENT }}>BANK</strong><span className="flex-1 text-center text-xs font-bold">Financial Account Disclosure</span><span className="pr-5 text-[9px] text-white/70">SYSTEM GENERATED</span></div>
            <div className="grid gap-6 p-6 md:grid-cols-[1.4fr_.6fr] md:p-8">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Account details</p>
                <div className="mt-3 grid grid-cols-[120px_1fr] border border-sky-100 text-xs"><span className="bg-slate-50 p-3 text-slate-500">Account</span><strong className="p-3" style={{ color: ACCENT }}>•••• •••• 4821</strong><span className="bg-slate-50 p-3 text-slate-500">Interest rate</span><strong className="p-3" style={{ color: ACCENT }}>4.25%</strong></div>
                <p className="mt-5 text-xs leading-6 text-slate-600">Your account terms apply until the mapped maturity date. Important system values remain visible inside the required disclosure text.</p>
                <div className="mt-5 border border-dashed border-sky-300 bg-sky-50 p-3 text-xs font-semibold" style={{ color: ACCENT }}>Conditional schedule appears when a maturity date is present.</div>
              </div>
              <aside className="border border-gray-200 bg-slate-50 p-4"><p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Mapped fields</p>{['account_number','interest_rate','maturity_date?'].map((field) => <div key={field} className="mt-3 flex items-center gap-2 border-b border-gray-200 pb-3 text-xs"><span className="h-2 w-2 rounded-sm" style={{ background: ACCENT }}/>{field}</div>)}</aside>
            </div>
          </div>
        </section>

        <section id="Outcome" className="scroll-mt-24 border-t border-gray-200 pt-10">
          <Heading label="Outcome" title="A clearer template and a reusable set of rules." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Clearer', 'Key customer information is easier to scan without weakening legal content.'],
              ['System-ready', 'Named fields and conditions connect the layout to backend logic.'],
              ['Reusable', 'Shared patterns support disclosure and authorization forms beyond the first template.'],
            ].map(([title, body]) => <article key={title} className="border border-gray-200 p-5"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></article>)}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-600"><strong className="text-slate-800">Reflection:</strong> Enterprise design often means translating business rules and technical constraints into an experience people can understand—not simply making an existing page look newer.</p>
        </section>
      </div>
    </div>
  );
}
