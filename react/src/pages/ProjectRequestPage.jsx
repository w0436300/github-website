import { ArrowRight, Check, Layers, Lock, Search, Users } from 'lucide-react';
import PasswordGate from '../components/PasswordGate.jsx';
import { useProjectUnlock } from '../hooks/useProjectUnlock.js';
import { prSectionHead as SECTION, openSans } from '../styles/caseStudyTheme.js';

const PROJECT_ID = 'project-request-collaboration';
const ACCENT = '#5870e6';
const SOFT = '#f1f3ff';
const img = (name) => `${import.meta.env.BASE_URL || '/'}img/fieldwork/${name}`;

function SectionTitle({ label, title, body }) {
  return <div className="mb-6"><h2 className={SECTION.h2} style={SECTION.h2Style}>{label}</h2><h3 className={SECTION.h3} style={SECTION.h3Style}>{title}</h3>{body && <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">{body}</p>}</div>;
}

function ProductImage({ src, alt, caption, className = '', isGif = false }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_18px_60px_rgba(15,23,42,.08)]">
        <img src={img(src)} alt={alt} className="block w-full h-auto" loading="lazy" />
      </div>
      {caption && <figcaption className="mt-3 text-xs leading-5 text-slate-500">{caption}{isGif ? ' (animated demo)' : ''}</figcaption>}
    </figure>
  );
}

function PhaseFlow() {
  const steps = [
    ['Scoping', 'Qualify scope and commercial fit'],
    ['Design', 'Produce and review deliverables'],
    ['Construction', 'Coordinate site delivery'],
    ['Acceptance', 'Validate against brief'],
    ['Handover', 'Transfer to client operations'],
    ['Closed', 'Archive and learn'],
  ];
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-6 border border-slate-200 rounded-xl overflow-hidden bg-white">
      {steps.map(([title, note], index) => (
        <div key={title} className="relative p-4 border-b md:border-b-0 md:border-r border-slate-200 last:border-0">
          <div className="flex items-center justify-between gap-2">
            <span className="grid place-items-center w-7 h-7 rounded-full text-xs font-bold text-white" style={{ background: ACCENT }}>{index + 1}</span>
            {index < steps.length - 1 && <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300" />}
          </div>
          <p className="mt-4 text-sm font-bold text-slate-900">{title}</p>
          <p className="mt-1 text-[11px] text-slate-500 leading-4">{note}</p>
        </div>
      ))}
    </div>
  );
}

function JourneyMap() {
  const rows = [
    ['Project lead', 'Review pipeline', 'Scope enquiry', 'Assign delivery team', 'Track milestones', 'Close and report'],
    ['Contributor', 'See assigned work', 'Accept brief', 'Update progress', 'Flag blockers', 'Hand over deliverables'],
    ['Director', 'Scan portfolio health', 'Approve sector gates', 'Review weekly reports', 'Intervene on risk', 'Read delivery standards'],
    ['System', 'Aggregate by phase', 'Convert enquiry to project', 'Apply sector templates', 'Surface overdue work', 'Preserve audit trail'],
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <div className="min-w-[760px]">
        <div className="grid grid-cols-[140px_repeat(5,1fr)] bg-indigo-50 text-indigo-900 text-[10px] font-bold uppercase tracking-wider">
          <div className="p-4">Journey</div>
          {['Discover', 'Scope', 'Deliver', 'Assure', 'Close'].map((stage) => <div key={stage} className="p-4 border-l border-indigo-200">{stage}</div>)}
        </div>
        {rows.map((row, rowIndex) => (
          <div key={row[0]} className="grid grid-cols-[140px_repeat(5,1fr)] text-xs border-t border-slate-200">
            {row.map((cell, index) => (
              <div key={cell} className={`p-4 border-l border-slate-200 first:border-l-0 ${index === 0 ? 'font-bold text-slate-900' : 'text-slate-600'} ${rowIndex === 3 && index > 0 ? 'bg-indigo-50/60' : ''}`}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function InformationArchitecture() {
  const branches = [
    { title: 'Projects', gate: 'Filter by phase', pages: [
      ['Phase summary', 'Active, scoping, design, construction…'],
      ['Project table', 'Client, lead, issues, due dates'],
      ['Project record', 'Delivery, brief, activity'],
    ] },
    { title: 'Enquiries', gate: 'Triage incoming work', pages: [
      ['Enquiry queue', 'Service, client, wait time'],
      ['Qualification', 'Scope and commercial fit'],
      ['Convert to project', 'Appoint lead and milestones'],
    ] },
    { title: 'Milestones', gate: 'Cross-project timeline', pages: [
      ['Due this week', 'Grouped milestone list'],
      ['Sector gates', 'Template-driven checkpoints'],
      ['Owner & phase', 'Lead and delivery context'],
    ] },
    { title: 'Company', gate: 'Standards & reporting', pages: [
      ['Weekly reports', 'Sources, done, next week'],
      ['Delivery standards', 'Lifecycle and sector gates'],
      ['Roles & authority', 'Owner, contributor, viewer'],
    ] },
  ];
  const sharedSystems = ['Phase model', 'Sector templates', 'Ownership & roles', 'Milestones', 'Weekly reporting', 'Permissions & audit'];

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-[#fafafa] p-5 md:p-8">
      <div className="mx-auto min-w-[980px] max-w-[1180px] pb-3">
        <div className="flex justify-center"><div className="rounded-md border border-slate-400 bg-white px-5 py-3 text-center shadow-sm"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-indigo-600">Product root</p><p className="mt-1 text-base font-bold text-slate-950">Fieldwork</p></div></div>
        <div className="mx-auto h-8 w-px bg-slate-400" />
        <div className="mx-[11%] border-t border-slate-400" />
        <div className="grid grid-cols-4 gap-7">
          {branches.map((branch) => (
            <div key={branch.title} className="relative pt-7 before:absolute before:left-1/2 before:top-0 before:h-7 before:w-px before:bg-slate-400">
              <div className="mx-auto w-fit rounded border border-indigo-300 bg-indigo-50 px-3 py-2 text-center text-xs font-bold text-indigo-800">{branch.title}</div>
              <div className="mx-auto h-5 w-px bg-slate-300" />
              <div className="mx-auto flex h-12 w-12 rotate-45 items-center justify-center border border-amber-400 bg-amber-100"><span className="-rotate-45 text-center text-[8px] font-semibold leading-3 text-amber-900">{branch.gate}</span></div>
              <div className="mx-auto h-5 w-px bg-slate-300" />
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-[0_8px_22px_rgba(15,23,42,.05)]">
                <p className="mb-3 text-sm font-bold text-slate-900">{branch.title}</p>
                <div className="space-y-2">{branch.pages.map(([page, detail], index) => (
                  <div key={page} className={`rounded px-3 py-2 ${index === 0 ? 'bg-indigo-100' : 'bg-emerald-100'}`}>
                    <p className={`text-[10px] font-bold ${index === 0 ? 'text-indigo-800' : 'text-emerald-800'}`}>{page}</p>
                    <p className="mt-1 text-[8px] leading-3 text-slate-500">{detail}</p>
                  </div>
                ))}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-[9px] uppercase tracking-[.14em] text-slate-400"><span className="border-t border-dashed border-slate-300" /><span>Enquiries convert into projects that share one delivery record</span><span className="border-t border-dashed border-slate-300" /></div>
        <div className="mt-5 rounded-lg border border-dashed border-indigo-300 bg-white/80 p-4">
          <div className="flex items-center gap-4">
            <p className="w-28 shrink-0 text-[9px] font-bold uppercase tracking-[.14em] text-indigo-600">Shared systems</p>
            <div className="grid flex-1 grid-cols-3 md:grid-cols-6 gap-2">{sharedSystems.map((item) => <div key={item} className="rounded bg-slate-100 px-2 py-2 text-center text-[9px] font-medium text-slate-600">{item}</div>)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyContent() {
  return (
    <article className="case-study-page bg-[#fffdf9] text-slate-900 pb-24" style={openSans}>
      <section id="Overview" className="px-6 pt-6 pb-16 md:pt-12"><div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[.16em] text-slate-500">
          <span>Enterprise delivery · Interior design practice · 2026</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700"><Lock className="h-3 w-3" /> NDA case study</span>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold" style={{ color: ACCENT }}>Fieldwork</p>
          <h1 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-4xl">Turning scattered project work into <span className="font-medium italic text-slate-500">a governed delivery system.</span></h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">I designed Fieldwork for Banshan Design Engineering—a studio platform that connects enquiries, phased delivery, sector gate templates, milestones, and weekly reporting in one accountable workspace.</p>
          <a href="https://w0436300.github.io/request/app.html" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100">View live demo ↗</a>
        </div>
        <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-4">
          {[['Role', 'Product designer'], ['Scope', '0 → 1 platform'], ['Team', 'Design + Engineering'], ['Delivery', 'Responsive web app']].map(([key, value]) => (
            <div key={key} className="border-b border-r border-slate-200 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{key}</p><p className="mt-2 text-xs font-semibold text-slate-800 md:text-sm">{value}</p></div>
          ))}
        </div>
        <ProductImage className="mt-8" src="projects-dashboard.png" alt="Fieldwork projects dashboard with phase counts and filterable project table" caption="The projects dashboard gives leads a portfolio view—phase counts, client filters, and issue signals before anyone opens a record." />
      </div></section>

      <section id="Problem" className="px-6 py-14 md:py-20 border-t border-slate-200 bg-slate-50/60"><div className="max-w-6xl mx-auto">
        <SectionTitle label="01 · Problem" title="Projects were tracked. Delivery standards were not." body="Work arrived as enquiries, lived in spreadsheets, and fragmented across chat. Leads could see tasks, but not whether a cinema fit-out and a medical imaging suite should follow the same gate sequence—or who was accountable for the next milestone." />
        <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden">
          {[['Unstructured intake', 'Enquiries carried uneven briefs, attachments, and commercial context—making scoping slow and inconsistent.'], ['Implicit delivery rules', 'Sector-specific gate sequences lived in senior memory instead of a shared, inspectable standard.'], ['Siloed reporting', 'Weekly status lived outside the project record, so directors could not connect progress to risk.']].map(([title, body], index) => (
            <div key={title} className="bg-white p-6"><p className="text-xs font-bold" style={{ color: ACCENT }}>0{index + 1}</p><h3 className="mt-5 font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm text-slate-600 leading-6">{body}</p></div>
          ))}
        </div>
      </div></section>

      <section id="Research" className="px-6 py-14 md:py-20 border-t border-slate-200"><div className="max-w-6xl mx-auto">
        <SectionTitle label="02 · Research & framing" title="Design the operating model, not just the queue." body="I reframed the product around how a design-engineering studio actually delivers: qualify incoming work, run it through a shared lifecycle, apply sector templates, and make reporting part of the record." />
        <JourneyMap />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[[Search, 'Portfolio findability', 'Phase, client, sector, lead, and issue filters must all resolve to the same project record.'], [Layers, 'Sector standards', 'Cinema, pet hospital, and medical imaging projects need different gate sequences—but the same lifecycle language.'], [Users, 'Role-aware visibility', 'Owners manage lifecycle and commercial decisions; contributors update assigned work; directors read portfolio health.']].map(([Icon, title, body]) => (
            <div key={title} className="flex gap-4"><div className="shrink-0 grid place-items-center w-10 h-10 rounded-lg" style={{ background: SOFT, color: ACCENT }}><Icon className="w-5 h-5" /></div><div><h3 className="text-sm font-bold">{title}</h3><p className="mt-1 text-xs text-slate-600 leading-5">{body}</p></div></div>
          ))}
        </div>
      </div></section>

      <section id="InformationArchitecture" className="px-6 py-14 md:py-20 border-t border-slate-200 bg-indigo-50/40"><div className="max-w-6xl mx-auto">
        <SectionTitle label="03 · Information architecture" title="One platform from enquiry to closed project." body="Navigation separates operational work (projects, enquiries, milestones) from company standards (weekly reports, delivery standards). Every path converges on a durable project record." />
        <InformationArchitecture />
      </div></section>

      <section id="Flow" className="px-6 py-14 md:py-20 border-t border-slate-200 bg-slate-50/60"><div className="max-w-6xl mx-auto">
        <SectionTitle label="04 · Product model" title="A six-phase lifecycle everyone can read." body="Scoping through Closed became the backbone of dashboards, milestone planning, sector templates, and project detail. Phase is never decorative—it defines what “done” means at each gate." />
        <PhaseFlow />
        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          <ProductImage src="projects-phase-filter.gif" alt="Animated demo of filtering the projects dashboard by delivery phase" caption="Phase boxes act as a fast portfolio lens—leads can scan workload by lifecycle stage without building a custom report." isGif />
          <div className="lg:pt-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Key decision</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">Make phase the primary organizing principle.</h3>
            <p className="mt-4 text-sm text-slate-600 leading-7">Counts on the dashboard, rows in the project table, and milestones on the delivery tab all speak the same lifecycle language—reducing translation cost between ops, design, and leadership.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {['Issue signals (overdue, on hold) surface before a record is opened.', 'Client and sector filters support multi-studio portfolios.', 'Enquiry triage converts into a project without re-entering context.', 'Delivery standards document exit criteria for every phase.'].map((item) => (
                <li key={item} className="flex gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <ProductImage src="enquiries.png" alt="Enquiries queue with triage status and wait metadata" caption="Enquiries stay separate from in-flight projects until scope is qualified and a lead is appointed." />
          <ProductImage src="delivery-standards.png" alt="Delivery standards page showing lifecycle phases and sector gate templates" caption="Delivery standards encode the studio’s operating model—lifecycle phases, sector gate sequences, and role authority." />
        </div>
      </div></section>

      <section id="Decisions" className="px-6 py-14 md:py-20 border-t border-slate-200"><div className="max-w-6xl mx-auto">
        <SectionTitle label="05 · Key decisions" title="Progressive detail across list, preview, and full record." body="The experience separates portfolio scanning, quick triage, and deep delivery work—so leads can compare projects at a glance without losing context every time they check a status." />
        <div className="space-y-14">
          <div className="grid lg:grid-cols-[1.28fr_.72fr] gap-8 items-center">
            <ProductImage src="project-peek.png" alt="Project row selected with side peek preview showing phase stepper, next milestone, people, and scope summary" caption="Selecting a row opens a peek panel beside the table—the list stays in view for side-by-side comparison." />
            <div>
              <p className="text-xs font-bold" style={{ color: ACCENT }}>01 · UX DECISION · PEEK PREVIEW</p>
              <h3 className="mt-3 text-xl font-bold">Open a preview, not a new page.</h3>
              <p className="mt-3 text-sm text-slate-600 leading-7">Clicking a project row opens a side peek with phase position, next milestone, people, and scope summary—instead of navigating away to the full project workspace. Leads scanning dozens of active jobs can compare rows, dismiss, and move on without back-and-forth routing.</p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                {['The table remains visible so context is never lost.', '“Open full project” is explicit—deep work is a deliberate choice.', 'Peek content mirrors the highest-signal fields from the full record.'].map((item) => (
                  <li key={item} className="flex gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-8 items-center">
            <div>
              <p className="text-xs font-bold" style={{ color: ACCENT }}>02 · UX DECISION · ACTION-FIRST PREVIEW</p>
              <h3 className="mt-3 text-xl font-bold">Lead with what is due next.</h3>
              <p className="mt-3 text-sm text-slate-600 leading-7">Inside the peek, the phase stepper and next milestone appear before scope metadata. A lead triaging the portfolio sees “Client sign-off · Due today” immediately—not after opening tabs or scrolling through the brief. Urgency drives the hierarchy; reference detail stays one click away.</p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                {['Phase progress is visual—Acceptance reads faster than a text label.', 'Milestone due dates surface risk before a record is fully opened.', 'People and scope follow, supporting assignment decisions.'].map((item) => (
                  <li key={item} className="flex gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />{item}</li>
                ))}
              </ul>
            </div>
            <ProductImage src="milestones.png" alt="Milestones view surfacing due dates across projects" caption="Cross-project milestones reinforce the same urgency signal—what is due, and when." />
          </div>
          <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-8 items-center">
            <div>
              <p className="text-xs font-bold" style={{ color: ACCENT }}>03 · DELIVERY CONTROL</p>
              <h3 className="mt-3 text-xl font-bold">Show phase progress and sector milestones together.</h3>
              <p className="mt-3 text-sm text-slate-600 leading-7">The delivery tab connects lifecycle position to template-driven gates—site survey, design package, equipment install—so contributors know which checkpoint is next.</p>
            </div>
            <ProductImage src="project-delivery.png" alt="Project delivery tab with phase progress and sector milestone gates" />
          </div>
          <div className="grid lg:grid-cols-[1.28fr_.72fr] gap-8 items-center">
            <ProductImage src="project-brief.png" alt="Structured project brief with scope, commercial, and file sections" />
            <div>
              <p className="text-xs font-bold" style={{ color: ACCENT }}>04 · STRUCTURED BRIEF</p>
              <h3 className="mt-3 text-xl font-bold">Keep the agreed scope adjacent to delivery work.</h3>
              <p className="mt-3 text-sm text-slate-600 leading-7">Project brief groups client, site, scope, commercial, and files—the questions people ask when validating whether delivery is still aligned.</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-8 items-center">
            <div>
              <p className="text-xs font-bold" style={{ color: ACCENT }}>05 · TRACEABLE COLLABORATION</p>
              <h3 className="mt-3 text-xl font-bold">Attach decisions to the project they affect.</h3>
              <p className="mt-3 text-sm text-slate-600 leading-7">Activity keeps comments, assignments, and system events in one stream—preserving context when leads change or a project moves phase.</p>
            </div>
            <ProductImage src="project-activity.png" alt="Project activity feed with comments and system events" />
          </div>
        </div>
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <ProductImage src="milestones.png" alt="Cross-project milestones timeline grouped by due date" caption="Milestones provide a cross-project timeline—surfacing due work before it becomes an overdue issue." />
          <ProductImage src="weekly-reports.png" alt="Weekly reports submission and team rollup view" caption="Weekly reports capture sources, progress, and next-week intent—giving directors a lightweight portfolio pulse." />
        </div>
      </div></section>

      <section id="Solution" className="px-6 py-14 md:py-20 border-t border-slate-200 bg-indigo-50/60 text-slate-900"><div className="max-w-6xl mx-auto">
        <SectionTitle label="06 · Final experience" title="An enquiry flow that earns complexity step by step." body="New enquiries move through Brief, Client & site, and Qualification—collecting attachments early, qualifying commercial fit, and appointing a project lead before work enters the delivery pipeline." />
        <div className="grid lg:grid-cols-2 gap-6">
          <ProductImage src="new-enquiry-flow.gif" alt="Animated demo stepping through the new enquiry intake flow" caption="The intake wizard separates brief capture, site context, and qualification—so scoping starts with complete information." isGif />
          <ProductImage src="new-enquiry.png" alt="New enquiry form first step with brief fields and file drop zone" caption="File drop, parent project linking, and milestone planning appear when they add value—not on a single overwhelming screen." />
        </div>
      </div></section>

      <section id="Outcome" className="px-6 py-14 md:py-20 border-t border-slate-200"><div className="max-w-6xl mx-auto">
        <SectionTitle label="07 · Outcome & reflection" title="A shared operating picture for studio delivery." />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl p-6 md:p-8" style={{ background: SOFT }}>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ACCENT }}>What changed</p>
            <p className="mt-4 text-lg font-semibold leading-8 text-slate-900">Fieldwork turns delivery from ad-hoc coordination into a governed system—enquiries become projects, projects follow sector templates, and reporting stays attached to the work.</p>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
            <h3 className="font-bold">What I would validate next</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 leading-6">
              {['Time from enquiry to scoped project with an appointed lead.', 'Whether sector templates reduce rework across similar building types.', 'How often weekly reports are read vs. written—and by whom.', 'Where notification thresholds should differ for owners and contributors.'].map((item) => (
                <li key={item} className="flex gap-3"><span className="font-bold" style={{ color: ACCENT }}>→</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-400">Project details and identifying information have been adapted for confidentiality.</p>
      </div></section>
    </article>
  );
}

export default function ProjectRequestPage() {
  const { unlocked, unlockWithPassword, error, clearError } = useProjectUnlock(PROJECT_ID);
  if (!unlocked) return <PasswordGate title="Fieldwork" subtitle="This freelance case study is under NDA. Enter the shared password to view the work." onUnlock={unlockWithPassword} error={error} onClearError={clearError} />;
  return <CaseStudyContent />;
}
