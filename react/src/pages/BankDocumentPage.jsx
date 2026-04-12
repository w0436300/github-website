import { dsSectionHead as SECTION, openSans } from '../styles/caseStudyTheme.js';

const ACCENT = '#0075BE';
const ACCENT_SOFT = '#c8dff0';
const ACCENT_FAINT = 'rgba(0, 117, 190, 0.14)';

const CHALLENGE = [
  {
    no: '01',
    title: 'No field logic in the original',
    body: 'Legacy InDesign templates had no clear data field structure — everything was static text.',
  },
  {
    no: '02',
    title: 'System fills, not users',
    body: 'The form is not filled by customers. Account number, rate, maturity date — all pre-populated by backend systems.',
  },
  {
    no: '03',
    title: 'Legal copy must stay complete',
    body: 'Regulatory text cannot be removed or shortened — but critical data still needs to be easy to find.',
  },
  {
    no: '04',
    title: 'Must scale to future forms',
    body: 'The same template logic needs to apply to subsequent disclosure forms — not just this one.',
  },
];

const PROCESS = [
  {
    n: '1',
    title: 'Understand the data before touching the layout',
    body: 'I started with the mapping document — not the old form. The real structure is defined by field relationships, format requirements, and conditional logic, not by how things looked before.',
  },
  {
    n: '2',
    title: 'Separate three content types',
    body: (
      <>
        Every element falls into one of three buckets: <strong className="text-slate-800">system pre-filled data</strong>,{' '}
        <strong className="text-slate-800">static legal copy</strong>, or <strong className="text-slate-800">conditional sections</strong>. This
        determines what gets highlighted, what stays as-is, and what only appears when data exists.
      </>
    ),
  },
  {
    n: '3',
    title: 'Match display pattern to content type',
    body: 'Dense legal copy → paragraph with highlighted fields. Key-value data → structured list. Comparative data → two-column table. Not every section needs the same treatment.',
  },
  {
    n: '4',
    title: 'Abstract into reusable rules',
    body: 'The goal was not to finish one form. I codified the header, section, content area, footer, field labels, and conditional block into a shared system — so future forms could follow the same logic.',
  },
];

const ROLE_LEFT = [
  'Read and interpret legacy forms and business mapping docs',
  'Identify field types, format rules, and conditional logic',
  'Explore and evaluate information display patterns',
];

const ROLE_RIGHT = [
  'Unify visual template and content hierarchy',
  'Define reusable field label conventions',
  'Design conditional section rendering rules',
];

/** Same heading stack as Context: SECTION h2 (label) + SECTION h3 (title), optional body line. */
function SectionIntro({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="text-center md:text-left mb-2">
        <h2 className={SECTION.h2} style={SECTION.h2Style}>
          {eyebrow}
        </h2>
        <h3 className={`${SECTION.h3} mt-1`} style={SECTION.h3Style}>
          {title}
        </h3>
      </div>
      {subtitle && (
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

export default function BankDocumentPage() {
  return (
    <div
      className="bank-document-page min-h-screen bg-white text-slate-900 selection:bg-sky-200 selection:text-slate-900 scroll-smooth pb-20"
      style={openSans}
    >
      {/* Overview / Hero */}
      <section id="Overview" className="pt-2 pb-0 px-0">
        <div className="px-6 py-10 md:py-14 md:px-12 bg-white text-black/85 relative ">
          <div className="max-w-7xl mx-auto relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/85 mb-4">
              UI Design · Document System · Banking · 2026
            </p>
            <h1 className="text-2xl md:text-4xl font-extrabold leading-[1.08] tracking-tight mb-4 max-w-3xl text-black/85">
              From print template to{' '}
              <span className="italic font-medium text-black/85">digital document system.</span>
            </h1>
            <p className="text-sm md:text-base text-black/85 max-w-2xl leading-relaxed mb-6">
              Rebuilding static InDesign bank forms into a system-ready digital template — with field logic, conditional rendering,
              and a reusable visual pattern.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {['UI Design', 'Document Systems', 'Print → Digital', 'Banking', 'Template Design'].map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-1 border border-gray-200 bg-gray-50 text-black/85 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
              {[
                ['Role', 'UI Designer'],
                ['Forms', 'Disclosure forms · Authorization forms'],
                ['Output', 'Digital mockups · Reusable patterns'],
                ['Tools', 'InDesign · Mapping documents · Specification notes'],
              ].map(([k, v]) => (
                <div key={k} className="md:pr-6 md:border-r md:border-gray-600 last:border-0 last:pr-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/85 mb-1.5">{k}</p>
                  <p className="text-xs text-black/85 leading-snug font-regular">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto">
        <section id="Reflection" className="py-1">
          <div className="text-center md:text-left mb-1">
            <h2 className={SECTION.h2} style={SECTION.h2Style}>
              Reflection
            </h2>
            <h3 className={`${SECTION.h3} mt-1`} style={SECTION.h3Style}>
              What I learned.
            </h3>
          </div>
          <div className="border border-gray-200 bg-white p-5 md:p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
            This project taught me that product design is not just about making things look better. In enterprise products, a big part of the work is translating business requirements, system logic, and legal constraints into something clear and usable.

            </p>
          
          </div>
        </section>

        {/* Context */}
        <section id="Context" className="py-12 md:py-16 ">
          <div className="text-center md:text-left mb-2">
            <h2 className={SECTION.h2} style={SECTION.h2Style}>
              Context
            </h2>
            <h3 className={`${SECTION.h3} mt-1`} style={SECTION.h3Style}>
              Old forms built for print. New forms need to work digitally.
            </h3>
          </div>
          <p className="text-sm text-slate-600 max-w-3xl mb-8 leading-relaxed">
            Legacy templates were static InDesign files designed for physical printing — no field logic, no data mapping. The new version
            needed to be auto-populated by backend systems and aligned to an updated brand direction.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            <div className="bg-white p-5 md:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-4">Legacy — print-era</p>
              <ul className="text-sm text-slate-600 space-y-2.5 list-none">
                {[
                  'Static layout, no field logic',
                  'Placeholder text mixed with body copy',
                  'No connection to system data fields',
                  'Inconsistent visual language across forms',
                  'Secondary holder section always visible',
                ].map((line) => (
                  <li key={line} className="flex gap-2 items-baseline">
                    <span className="text-gray-300 shrink-0">—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-5 md:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] mb-4" style={{ color: ACCENT }}>
                Digital — system-ready
              </p>
              <ul className="text-sm text-slate-600 space-y-2.5 list-none">
                {[
                  'Every field mapped to a named system variable',
                  'Auto-populated by backend — no manual entry',
                  'Unified visual system across all form types',
                  'Legal copy intact, key data scannable',
                  'Conditional sections render only when needed',
                ].map((line) => (
                  <li key={line} className="flex gap-2 items-baseline">
                    <span className="shrink-0" style={{ color: ACCENT }}>
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section id="Challenge" className="py-1 ">
          <SectionIntro
            eyebrow="Challenge"
            title="Not a visual refresh. A structural rebuild."
            subtitle="The difficulty was not aesthetics — it was establishing consistent rules across multiple competing constraints."
          />
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {CHALLENGE.map((c) => (
              <div key={c.no} className="bg-white p-5 md:p-6">
                <p className="text-3xl font-light leading-none mb-3" style={{ color: ACCENT_FAINT }}>
                  
                </p>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{c.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Role */}
        <section id="Role" className="py-10">
          <SectionIntro eyebrow="My Role" title="What I was responsible for." />
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-0 list-none">
              {ROLE_LEFT.map((item) => (
                <li
                  key={item}
                  className="text-sm text-slate-600 py-2 border-b border-gray-200 flex gap-2.5 items-baseline last:border-0"
                >
                 
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-0 list-none">
              {ROLE_RIGHT.map((item) => (
                <li
                  key={item}
                  className="text-sm text-slate-600 py-2 border-b border-gray-200 flex gap-2.5 items-baseline last:border-0"
                >
                  
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section id="Process" className="py-1 ">
          <SectionIntro eyebrow="Process" title="Four core questions, in order." />
          <div className="flex flex-col gap-px bg-gray-200 border border-gray-200">
            {PROCESS.map((step) => (
              <div key={step.n} className="grid grid-cols-[52px_1fr] md:grid-cols-[56px_1fr] bg-white">
                <div
                  className="flex items-center justify-center text-lg font-light text-white/60"
                  style={{ backgroundColor: ACCENT, fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {step.n}
                </div>
                <div className="p-4 md:p-5 border-l border-gray-200">
                  <p className="text-sm font-semibold text-slate-900 mb-1">{step.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Decisions */}
        <section id="Decisions" className="py-1">
          <SectionIntro
            eyebrow="Decisions"
            title="Format exploration and sign-off"
            subtitle="High-level only — the work was comparing how each block should read, not documenting every variant."
          />
          <div className="border border-gray-200 bg-white p-5 md:p-6 max-w-3xl">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              For many sections we started from plain body copy, then tried clearer structures: key values called out in the paragraph,
              short lists where steps or options read better as lines, or tables where comparing fields side by side helped. Some blocks
              stayed <strong className="text-slate-900">paragraph</strong> for legal continuity; others moved to <strong className="text-slate-900">table</strong> after we
              agreed the data justified it. A few tables needed a second pass—column alignment, header rhythm, and spacing—so the digital
              template matched how stakeholders expected to scan it.
            </p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5 mb-4">
              <li>Same underlying field mapping; only presentation (paragraph, emphasis, list, or table) changed where we iterated.</li>
              <li>Where layout shifted to a grid, we refined table styling when alignment or density felt off in the final frame.</li>
            </ul>
            <p className="text-sm text-slate-700 leading-relaxed">
              The <strong className="text-slate-900">design leader</strong> and <strong className="text-slate-900">BA</strong> were in the loop for
              review; we aligned on the shipped styles together so legal copy, data fields, and brand expectations stayed consistent.
            </p>
          </div>
        </section>

        {/* Mockup */}
        <section id="Mockup" className="py-10">
          <SectionIntro
            eyebrow="Final Mockup"
            title="The redesigned template — Page 1 of 2."
            subtitle="Unified header, section hierarchy, paragraph with highlighted fields, key-value list, and conditional section rendering."
          />
          <div className="border border-gray-200 bg-white text-[10px] text-slate-800 shadow-sm overflow-hidden">
            <div className="flex items-stretch min-h-[44px]" style={{ backgroundColor: ACCENT }}>
              <div className="flex items-center px-3 bg-white text-sm font-black tracking-widest shrink-0" style={{ color: ACCENT }}>
                BANK
              </div>
              <div className="flex-1 flex items-center justify-center text-white text-[11px] font-bold px-2">
                Financial Account Disclosure Document
              </div>
              <div className="w-[100px] md:w-[120px] shrink-0 flex items-center justify-end pr-2 text-white/70 text-[8px]">
                Bank Name N.A.
              </div>
            </div>
            <div className="h-4" style={{ background: 'linear-gradient(90deg,#b8cfe8,#d0e4f5,#dde9f5)' }} aria-hidden />
            <div className="px-4 md:px-6 py-4">
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-2">
                <div>
                  <p className="text-[8.5px] font-bold text-slate-600 mb-1">Account Title and Mailing Address</p>
                  <div className="border border-gray-300 min-h-[48px] w-full max-w-[270px] p-2 text-[8.5px] text-gray-400 leading-relaxed">
                    [Full Name]
                    <br />
                    [Street Address]
                    <br />
                    [City, State, ZIP]
                    <br />
                    [Country]
                  </div>
                </div>
                <div className="text-right text-[9px] space-y-2 shrink-0">
                  <div>
                    <span className="text-slate-500">Date: </span>
                    <span className="font-bold" style={{ color: ACCENT }}>
                      [DD/MM/YYYY]
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">Total Amount: </span>
                    <span className="font-bold">[Amount]</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 px-2 py-1 font-bold text-[9px]" style={{ backgroundColor: ACCENT_SOFT, color: ACCENT }}>
                Section A — Account Rate Details
              </div>
              <p className="text-[9px] leading-relaxed text-slate-700 py-2 px-0.5">
                Lorem ipsum dolor sit amet for account number <strong style={{ color: ACCENT }}>[XXXX-XXXX]</strong> at a rate of{' '}
                <strong style={{ color: ACCENT }}>[X.XXX%]</strong>, with an annual yield of <strong style={{ color: ACCENT }}>[X.XX%]</strong>,
                consectetur adipiscing elit until maturity date of <strong style={{ color: ACCENT }}>[DD/MM/YYYY]</strong>. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mt-1 px-2 py-1 font-bold text-[9px]" style={{ backgroundColor: ACCENT_SOFT, color: ACCENT }}>
                Section B — Balance Requirements
              </div>
              <div className="py-1 px-0.5 space-y-0">
                <div className="flex text-[9px] border-b border-slate-100 py-1">
                  <span className="flex-1 text-slate-600">Minimum threshold to initiate this account</span>
                  <span className="font-bold shrink-0" style={{ color: ACCENT }}>
                    [$X,XXX.XX]
                  </span>
                </div>
                <div className="flex text-[9px] py-1">
                  <span className="flex-1 text-slate-600">Minimum daily threshold to obtain listed yield</span>
                  <span className="font-bold shrink-0" style={{ color: ACCENT }}>
                    [$X,XXX.XX]
                  </span>
                </div>
              </div>
              <div className="mt-2 px-2 py-1 font-bold text-[9px]" style={{ backgroundColor: ACCENT_SOFT, color: ACCENT }}>
                Section F — Early Penalty Schedule
              </div>
              <table className="w-full border-collapse text-[9px] mt-1">
                <thead>
                  <tr>
                    <th className="text-left text-white font-bold p-1.5" style={{ backgroundColor: ACCENT }}>
                      Term length
                    </th>
                    <th className="text-left text-white font-bold p-1.5" style={{ backgroundColor: ACCENT }}>
                      Penalty applied
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Lorem ipsum (X to XX days)', 'Loss of [X] days interest'],
                    ['Dolor sit amet (XX–XXX days)', 'Loss of [XX] days interest'],
                  ].map(([a, b]) => (
                    <tr key={a} className="border-b border-slate-100">
                      <td className="p-1.5 bg-slate-50/80">{a}</td>
                      <td className="p-1.5">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between px-4 md:px-6 py-1.5 text-[8px] text-gray-500 border-t border-gray-300">
              <span className="font-bold" style={{ color: ACCENT }}>
                [form#]
              </span>
              <span>[DD/MM/YYYY]</span>
              <span>Page 1 of 2</span>
            </div>
            <div className="bg-gray-100 border-t border-gray-300 text-[7.5px] text-gray-500 px-4 md:px-6 py-1 flex flex-wrap gap-3">
              <span>ID#:[ ]</span>
              <span>By:[ ]</span>
              <span>Date:[DD/MM/YYYY HH:MM]</span>
              <span>Form:[FORM-CODE-XXXX]</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
