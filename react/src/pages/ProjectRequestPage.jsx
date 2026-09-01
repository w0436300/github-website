import { ArrowRight, Check, Lock, Search, Users } from 'lucide-react';
import PasswordGate from '../components/PasswordGate.jsx';
import { useProjectUnlock } from '../hooks/useProjectUnlock.js';
import { prSectionHead as SECTION, openSans } from '../styles/caseStudyTheme.js';

const PROJECT_ID = 'project-request-collaboration';
const ACCENT = '#5870e6';
const SOFT = '#f1f3ff';
const img = (name) => `${import.meta.env.BASE_URL || '/'}img/intake-tracker/${name}`;

function SectionTitle({ label, title, body }) {
  return <div className="mb-6"><h2 className={SECTION.h2} style={SECTION.h2Style}>{label}</h2><h3 className={SECTION.h3} style={SECTION.h3Style}>{title}</h3>{body && <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">{body}</p>}</div>;
}

function ProductImage({ src, alt, caption, className = '' }) {
  return <figure className={className}><div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_18px_60px_rgba(15,23,42,.08)]"><img src={img(src)} alt={alt} className="block w-full h-auto" loading="lazy" /></div>{caption && <figcaption className="mt-3 text-xs leading-5 text-slate-500">{caption}</figcaption>}</figure>;
}

function StatusFlow() {
  const steps = [['Raised', 'Request submitted'], ['In review', 'Scope confirmed'], ['In progress', 'Work produced'], ['Completed', 'Deliverable issued']];
  return <div className="grid md:grid-cols-4 border border-slate-200 rounded-xl overflow-hidden bg-white">{steps.map(([title, note], index) => <div key={title} className="relative p-5 border-b md:border-b-0 md:border-r border-slate-200 last:border-0"><div className="flex items-center justify-between gap-3"><span className="grid place-items-center w-7 h-7 rounded-full text-xs font-bold text-white" style={{ background: ACCENT }}>{index + 1}</span>{index < steps.length - 1 && <ArrowRight className="hidden md:block w-4 h-4 text-slate-300" />}</div><p className="mt-5 text-sm font-bold text-slate-900">{title}</p><p className="mt-1 text-xs text-slate-500">{note}</p></div>)}</div>;
}

function JourneyMap() {
  const rows = [['Requester', 'Explain the need', 'Wait for clarity', 'Track progress', 'Receive output'], ['Project lead', 'Triage scope', 'Assign owner', 'Remove blockers', 'Close request'], ['System', 'Capture context', 'Make ownership visible', 'Keep one record', 'Preserve history']];
  return <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white"><div className="min-w-[720px]"><div className="grid grid-cols-[140px_repeat(4,1fr)] bg-indigo-50 text-indigo-900 text-[10px] font-bold uppercase tracking-wider"><div className="p-4">Journey</div>{['Submit', 'Review', 'Produce', 'Deliver'].map((stage) => <div key={stage} className="p-4 border-l border-indigo-200">{stage}</div>)}</div>{rows.map((row, rowIndex) => <div key={row[0]} className="grid grid-cols-[140px_repeat(4,1fr)] text-xs border-t border-slate-200 first:border-t-0">{row.map((cell, index) => <div key={cell} className={`p-4 border-l border-slate-200 first:border-l-0 ${index === 0 ? 'font-bold text-slate-900' : 'text-slate-600'} ${rowIndex === 2 && index > 0 ? 'bg-indigo-50/60' : ''}`}>{cell}</div>)}</div>)}</div></div>;
}

function InformationArchitecture() {
  const branches = [
    { title: 'Dashboard', gate: 'View by status', pages: [
      ['Status summary', 'Counts by lifecycle state'],
      ['Assigned to me', 'Owner, members, recency'],
      ['Recent updates', 'Open request record'],
    ] },
    { title: 'All requests', gate: 'Search & filter', pages: [
      ['Request queue', 'Project, site, request no.'],
      ['Filter controls', 'Status, tag, member'],
      ['Result row', 'Open request record'],
    ] },
    { title: 'New request', gate: 'Step-by-step intake', pages: [
      ['01 · Request', 'Need, service, description'],
      ['02 · Project', 'Context, dates, files'],
      ['03 · Team & review', 'Owner, members, submit'],
    ] },
    { title: 'Request record', gate: 'Select a request', pages: [
      ['Overview', 'Progress, members, dates'],
      ['Request details', 'Project, scope, commercial'],
      ['Activity & comments', 'Discussion and change history'],
    ] },
  ];
  const sharedSystems = ['Search & filters', 'Lifecycle status', 'Ownership & roles', 'Notifications', 'Permissions & audit'];

  return <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-[#fafafa] p-5 md:p-8">
    <div className="mx-auto min-w-[980px] max-w-[1180px] pb-3">
      <div className="flex justify-center"><div className="rounded-md border border-slate-400 bg-white px-5 py-3 text-center shadow-sm"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-indigo-600">Product root</p><p className="mt-1 text-base font-bold text-slate-950">Intake Tracker</p></div></div>
      <div className="mx-auto h-8 w-px bg-slate-400" />
      <div className="mx-[11%] border-t border-slate-400" />
      <div className="grid grid-cols-4 gap-7">
        {branches.map((branch) => <div key={branch.title} className="relative pt-7 before:absolute before:left-1/2 before:top-0 before:h-7 before:w-px before:bg-slate-400">
          <div className="mx-auto w-fit rounded border border-indigo-300 bg-indigo-50 px-3 py-2 text-center text-xs font-bold text-indigo-800">{branch.title}</div>
          <div className="mx-auto h-5 w-px bg-slate-300" />
          <div className="mx-auto flex h-12 w-12 rotate-45 items-center justify-center border border-amber-400 bg-amber-100"><span className="-rotate-45 text-center text-[8px] font-semibold leading-3 text-amber-900">{branch.gate}</span></div>
          <div className="mx-auto h-5 w-px bg-slate-300" />
          <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-[0_8px_22px_rgba(15,23,42,.05)]"><p className="mb-3 text-sm font-bold text-slate-900">{branch.title}</p><div className="space-y-2">{branch.pages.map(([page, detail], index) => <div key={page} className={`rounded px-3 py-2 ${index === 0 ? 'bg-indigo-100' : 'bg-emerald-100'}`}><p className={`text-[10px] font-bold ${index === 0 ? 'text-indigo-800' : 'text-emerald-800'}`}>{page}</p><p className="mt-1 text-[8px] leading-3 text-slate-500">{detail}</p></div>)}</div></div>
        </div>)}
      </div>
      <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-[9px] uppercase tracking-[.14em] text-slate-400"><span className="border-t border-dashed border-slate-300" /><span>Dashboard and search results open the same request record</span><span className="border-t border-dashed border-slate-300" /></div>
      <div className="mt-5 rounded-lg border border-dashed border-indigo-300 bg-white/80 p-4"><div className="flex items-center gap-4"><p className="w-28 shrink-0 text-[9px] font-bold uppercase tracking-[.14em] text-indigo-600">Shared systems</p><div className="grid flex-1 grid-cols-5 gap-2">{sharedSystems.map(item => <div key={item} className="rounded bg-slate-100 px-2 py-2 text-center text-[9px] font-medium text-slate-600">{item}</div>)}</div></div></div>
    </div>
  </div>;
}

function CaseStudyContent() {
  return <article className="case-study-page bg-[#fffdf9] text-slate-900 pb-24" style={openSans}>
    <section id="Overview" className="px-6 pt-6 pb-16 md:pt-12"><div className="max-w-7xl mx-auto">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[.16em] text-slate-500"><span>Enterprise workflow · 2026</span><span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700"><Lock className="h-3 w-3" /> NDA case study</span></div>
      <div><p className="mb-3 text-sm font-semibold" style={{ color: ACCENT }}>Intake Tracker</p><h1 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-4xl">Turning scattered project requests into <span className="font-medium italic text-slate-500">an accountable delivery path.</span></h1><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">I designed the end-to-end experience for requesters, project leads, and contributors—bringing structured intake, status, ownership, files, and decisions into one shared workspace.</p><a href="https://w0436300.github.io/request/app.html" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100">View live demo ↗</a></div>
      <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-4">{[['Role', 'Product designer'], ['Scope', '0 → 1 product'], ['Team', 'Design + Engineering'], ['Delivery', 'Responsive web app']].map(([key, value]) => <div key={key} className="border-b border-r border-slate-200 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{key}</p><p className="mt-2 text-xs font-semibold text-slate-800 md:text-sm">{value}</p></div>)}</div>
      <ProductImage className="mt-8" src="dashboard.png" alt="Intake Tracker dashboard showing request status summaries and assigned work" caption="The dashboard gives project leads an immediate view of workload, status, ownership, and recency." />
    </div></section>

    <section id="Problem" className="px-6 py-14 md:py-20 border-t border-slate-200 bg-slate-50/60"><div className="max-w-6xl mx-auto"><SectionTitle label="01 · Problem" title="The work was trackable. The request lifecycle was not." body="Requests entered through inconsistent channels. The delivery team repeatedly reconstructed context, while requesters lacked a reliable answer to a simple question: what is happening now?" /><div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden">{[['Fragmented intake', 'Critical project and scope information arrived across forms, email, chat, and attachments.'], ['Unclear ownership', 'A requester could not see who was accountable—or whether anyone had accepted the work.'], ['Invisible decisions', 'Comments, revisions, and status changes were separated from the request they affected.']].map(([title, body], index) => <div key={title} className="bg-white p-6"><p className="text-xs font-bold" style={{ color: ACCENT }}>0{index + 1}</p><h3 className="mt-5 font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm text-slate-600 leading-6">{body}</p></div>)}</div></div></section>

    <section id="Research" className="px-6 py-14 md:py-20 border-t border-slate-200"><div className="max-w-6xl mx-auto"><SectionTitle label="02 · Research & framing" title="Design the handoffs, not just the form." body="I reframed the product as a shared service journey. Each stage needed a clear owner, a visible system response, and an explicit condition for moving forward." /><JourneyMap /><div className="grid md:grid-cols-3 gap-6 mt-8">{[[Search, 'Findability', 'Project, site, request number, tag, status, or member must all lead back to the same record.'], [Users, 'Shared awareness', 'Requesters and delivery teams need different detail, but they must see the same source of truth.'], [Check, 'Closure', 'Every status needs meaning: who owns the next action and what makes the request ready to advance.']].map(([Icon, title, body]) => <div key={title} className="flex gap-4"><div className="shrink-0 grid place-items-center w-10 h-10 rounded-lg" style={{ background: SOFT, color: ACCENT }}><Icon className="w-5 h-5" /></div><div><h3 className="text-sm font-bold">{title}</h3><p className="mt-1 text-xs text-slate-600 leading-5">{body}</p></div></div>)}</div></div></section>

    <section id="InformationArchitecture" className="px-6 py-14 md:py-20 border-t border-slate-200 bg-indigo-50/40"><div className="max-w-6xl mx-auto"><SectionTitle label="03 · Information architecture" title="A short path from overview to actionable detail." body="The structure keeps navigation shallow: users begin with workload, search, or a new submission, then enter one durable request record where status, context, files, and decisions stay connected." /><InformationArchitecture /></div></section>

    <section id="Flow" className="px-6 py-14 md:py-20 border-t border-slate-200 bg-slate-50/60"><div className="max-w-6xl mx-auto"><SectionTitle label="04 · Product model" title="One lifecycle, understood by every role." body="The status model became the product’s backbone. It connects the intake form, work queues, request detail, notifications, and completion history." /><StatusFlow /><div className="mt-10 grid lg:grid-cols-2 gap-8 items-start"><ProductImage src="all-requests.png" alt="All requests page with search and filters" caption="A filterable operational queue makes volume and ownership manageable across the whole team." /><div className="lg:pt-8"><p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Key decision</p><h3 className="mt-3 text-2xl font-bold tracking-tight">Make status useful, not decorative.</h3><p className="mt-4 text-sm text-slate-600 leading-7">Status appears consistently in summary cards, list rows, and the request record. Color supports scanning, while text and icons retain meaning without relying on color alone.</p><ul className="mt-6 space-y-3 text-sm text-slate-700">{['Counts reveal workload before users enter the queue.', 'Owner avatars connect work state to a responsible person.', 'Updated timestamps help leads prioritize stale requests.', 'Search and filters reduce the cost of returning to an existing request.'].map((item) => <li key={item} className="flex gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />{item}</li>)}</ul></div></div></div></section>

    <section id="Decisions" className="px-6 py-14 md:py-20 border-t border-slate-200"><div className="max-w-6xl mx-auto"><SectionTitle label="05 · Key decisions" title="Progressive detail without losing context." body="The experience separates overview, structured request data, and activity—so a lead can scan quickly, then move deeper without leaving the record." /><div className="space-y-14">
      <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-8 items-center"><div><p className="text-xs font-bold" style={{ color: ACCENT }}>01 · AT-A-GLANCE CONTROL</p><h3 className="mt-3 text-xl font-bold">Put the current state before the archive.</h3><p className="mt-3 text-sm text-slate-600 leading-7">The overview leads with progress, relationships, members, and release dates—the information required to act now.</p></div><ProductImage src="request-overview.png" alt="Request overview with progress, members, relationships and dates" /></div>
      <div className="grid lg:grid-cols-[1.28fr_.72fr] gap-8 items-center"><ProductImage src="request-details-clean.png" alt="Structured request details grouped into request, project, scope, commercial and files sections" /><div><p className="text-xs font-bold" style={{ color: ACCENT }}>02 · STRUCTURED SOURCE OF TRUTH</p><h3 className="mt-3 text-xl font-bold">Group detail by the questions people ask.</h3><p className="mt-3 text-sm text-slate-600 leading-7">Request, project, scope, commercial, and files mirror the delivery team’s mental model, making long records scannable.</p></div></div>
      <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-8 items-center"><div><p className="text-xs font-bold" style={{ color: ACCENT }}>03 · TRACEABLE COLLABORATION</p><h3 className="mt-3 text-xl font-bold">Keep conversation attached to the work.</h3><p className="mt-3 text-sm text-slate-600 leading-7">Comments and changes share one chronological stream. Filters let people isolate human discussion or system activity without losing the full audit trail.</p></div><ProductImage src="activity.png" alt="Request activity and comments timeline" /></div>
    </div></div></section>

    <section id="Solution" className="px-6 py-14 md:py-20 border-t border-slate-200 bg-indigo-50/60 text-slate-900"><div className="max-w-6xl mx-auto"><SectionTitle label="06 · Final experience" title="An intake flow that earns complexity step by step." body="Instead of presenting one intimidating form, the product divides submission into Request, Project, and Team & review. Users can save a draft, understand the submission state, and confirm ownership before committing." /><div className="grid lg:grid-cols-2 gap-6"><ProductImage src="new-request-project-en.png" alt="Project step in the new request flow" caption="Project context and attachments are collected together, with draft recovery available throughout." /><ProductImage src="new-request-review.png" alt="Team and review step in the new request flow" caption="The final step makes ownership and the initial In review state explicit before submission." /></div></div></section>

    <section id="Outcome" className="px-6 py-14 md:py-20 border-t border-slate-200"><div className="max-w-6xl mx-auto"><SectionTitle label="07 · Outcome & reflection" title="A shared operating picture for request-to-delivery work." /><div className="grid md:grid-cols-2 gap-8"><div className="rounded-xl p-6 md:p-8" style={{ background: SOFT }}><p className="text-xs font-bold uppercase tracking-wider" style={{ color: ACCENT }}>What changed</p><p className="mt-4 text-lg font-semibold leading-8 text-slate-900">The final design turns intake from a one-time submission into a durable collaboration record—searchable, accountable, and legible throughout delivery.</p></div><div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8"><h3 className="font-bold">What I would validate next</h3><ul className="mt-4 space-y-3 text-sm text-slate-600 leading-6">{['Time to submit and completeness of new requests.', 'Time from submission to an assigned owner.', 'Whether status language matches requester expectations.', 'Where notification preferences are needed to prevent overload.'].map((item) => <li key={item} className="flex gap-3"><span className="font-bold" style={{ color: ACCENT }}>→</span>{item}</li>)}</ul></div></div><p className="mt-10 text-xs text-slate-400">Project details and identifying information have been adapted for confidentiality.</p></div></section>
  </article>;
}

export default function ProjectRequestPage() {
  const { unlocked, unlockWithPassword, error, clearError } = useProjectUnlock(PROJECT_ID);
  if (!unlocked) return <PasswordGate title="Intake Tracker" subtitle="This freelance case study is under NDA. Enter the shared password to view the work." onUnlock={unlockWithPassword} error={error} onClearError={clearError} />;
  return <CaseStudyContent />;
}
