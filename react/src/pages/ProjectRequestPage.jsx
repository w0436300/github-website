import { ArrowUpRight, Check, Lock } from 'lucide-react';
import PasswordGate from '../components/PasswordGate.jsx';
import { useProjectUnlock } from '../hooks/useProjectUnlock.js';
import { openSans } from '../styles/caseStudyTheme.js';

const PROJECT_ID = 'project-request-collaboration';
const img = (name) => `${import.meta.env.BASE_URL || '/'}img/fieldwork/${name}`;

function Section({ id, number, label, title, body, children, tinted = false }) {
  return <section id={id} className={`scroll-mt-24 border-t border-slate-200 px-5 py-14 md:px-8 md:py-20 ${tinted ? 'bg-[#f2f3fa]' : ''}`}>
    <div className="mx-auto max-w-6xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-indigo-600">{number} / {label}</p>
      <h2 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight text-slate-950 md:text-3xl">{title}</h2>
      {body && <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">{body}</p>}
      <div className="mt-9">{children}</div>
    </div>
  </section>;
}

function ProductImage({ src, alt, caption, priority = false }) {
  return <figure className="min-w-0">
    <a href={img(src)} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`} className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,.06)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">
      <img src={img(src)} alt={alt} width="1233" height="675" className="block h-auto w-full transition-opacity group-hover:opacity-95" loading={priority ? 'eager' : 'lazy'} decoding="async" />
    </a>
    <figcaption className="mt-3 text-xs leading-5 text-slate-500">{caption}</figcaption>
  </figure>;
}

function Points({ items }) {
  return <ul className="mt-5 space-y-3">{items.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><Check className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />{item}</li>)}</ul>;
}

function Decision({ number, title, body, points, src, alt, caption }) {
  return <div className="space-y-6">
    <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
      <div><p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Design decision {number}</p><h3 className="mt-3 text-xl font-bold leading-snug text-slate-950 md:text-2xl">{title}</h3></div>
      <div><p className="text-sm leading-7 text-slate-600">{body}</p>{points && <Points items={points} />}</div>
    </div>
    <ProductImage src={src} alt={alt} caption={caption} />
  </div>;
}

const phases = [
  ['Scoping', 'Agree the brief and appoint a project lead.'],
  ['Design', 'Complete required design outcomes and confirm readiness.'],
  ['Pre-construction', 'Clear site, equipment and authority requirements.'],
  ['Construction', 'Complete required works and inspections.'],
  ['Commissioning & Acceptance', 'Record testing and acceptance outcomes.'],
  ['Handover', 'Complete required milestones before project closure.'],
];

function CaseStudyContent() {
  return <article className="case-study-page bg-[#fffdf9] pb-20 text-slate-900" style={openSans}>
    <section id="Overview" className="px-5 pb-14 pt-8 md:px-8 md:pb-20 md:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[.16em] text-slate-500"><span>Product design · Internal operations · 2026</span><span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1"><Lock className="h-3 w-3" /> NDA case study</span></div>
        <p className="mb-4 mt-9 text-sm font-bold text-indigo-600">Fieldwork</p>
        <h1 className="max-w-4xl text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-950 md:text-4xl">See the risk.<br /><span className="text-indigo-500">Know who moves it forward.</span></h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">Redesigning a design-engineering studio’s delivery platform around the decisions people make every day—from qualifying an enquiry to coordinating specialist work and handing over a site.</p>
        <a href="https://w0436300.github.io/request/app.html" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 underline underline-offset-4 transition-colors hover:text-indigo-800">Explore the live prototype <ArrowUpRight className="h-4 w-4" /></a>
        <dl className="my-9 grid grid-cols-2 gap-6 border-y border-slate-200 py-6 md:grid-cols-4">{[['Role', 'Product designer'], ['Context', 'Banshan Design Engineering'], ['Scope', 'Existing platform redesign'], ['Focus', 'Workflow, ownership & visibility']].map(([label, value]) => <div key={label}><dt className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{label}</dt><dd className="mt-2 text-sm font-semibold text-slate-800">{value}</dd></div>)}</dl>
        <ProductImage src="latest-projects.png" alt="Fieldwork Projects with active, at-risk, on-hold and completed summaries, city and client grouping, and project health" caption="An operational starting point: scan portfolio health, then investigate the projects that need attention." priority />
      </div>
    </section>

    <Section id="Background" number="01" label="Context" title="One studio. Many ways a project can get stuck." body="Banshan Design Engineering delivers commercial interiors across cities and sectors. Cinema, veterinary and medical projects bring different specialists, approvals and equipment dependencies. Design-only commissions and full design & build projects also need different delivery plans.">
      <div className="grid gap-7 md:grid-cols-2"><div><h3 className="text-lg font-bold">The starting point</h3><p className="mt-3 text-sm leading-7 text-slate-600">A generic project-management tool did not map cleanly to the studio’s work. An internal first version brought intake, milestones and reporting together, but its feature-heavy structure made daily priorities hard to read. I joined to reshape the experience around the studio’s delivery workflow.</p></div><div className="rounded-xl border border-indigo-100 bg-indigo-50 p-6"><p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">The design question</p><p className="mt-4 text-xl font-semibold leading-8">How can a project lead move from “something is delayed” to a clear next action, an accountable person and the context they need?</p></div></div>
    </Section>

    <Section id="Problem" number="02" label="Problem & framing" title="A status is only useful when it explains what to do next." body="The redesign connects three levels of detail: the portfolio that needs attention, the work that is blocking progress, and the person responsible for moving it forward." tinted>
      <div className="grid gap-6 md:grid-cols-3">{[
        ['Visibility', 'Where should I look first?', 'A phase tells a lead where a project is in its lifecycle. It does not, on its own, explain whether that project needs intervention.'],
        ['Ownership', 'Who owns the next move?', 'A single project status hides the different leads, contributors and milestones inside specialist work packages.'],
        ['Evidence', 'What are we waiting for?', 'Internal review, supplier information and client confirmation need explicit context. A generic blocked label leaves too much to follow-up conversations.'],
      ].map(([label,title,body]) => <div key={label} className="rounded-xl border border-slate-200 bg-white p-6"><p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">{label}</p><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{body}</p></div>)}</div>
    </Section>

    <Section id="InformationArchitecture" number="03" label="Information architecture" title="Separate daily work from the context that supports it." body="The navigation gives operational tasks a clear home, while team coverage, locations and delivery standards remain available as shared studio context.">
      <div className="grid gap-5 md:grid-cols-3">{[
        ['Work', [['Projects', 'Health, grouping, preview and full project records'], ['Enquiries', 'Incoming work, missing information and qualification'], ['Schedule', 'Cross-project milestones, dates and owners']]],
        ['Company', [['Team', 'Roles, access tiers, coverage and assignments'], ['Locations', 'Active projects and pipeline grouped by city'], ['Delivery Standards', 'Sector templates, lifecycle and responsibilities']]],
        ['Connected context', [['Project record', 'Delivery, project brief and activity'], ['Weekly reports', 'A supporting reporting entry point'], ['Knowledge Hub', 'Relevant standards linked from delivery work']]],
      ].map(([group, entries]) => <div key={group} className="rounded-xl border border-slate-200 bg-white p-6"><h3 className="border-b border-slate-200 pb-4 text-sm font-bold uppercase tracking-wider text-indigo-600">{group}</h3><dl className="mt-5 space-y-5">{entries.map(([title,body]) => <div key={title}><dt className="text-sm font-bold">{title}</dt><dd className="mt-1 text-xs leading-6 text-slate-500">{body}</dd></div>)}</dl></div>)}</div>
      <p className="mt-6 text-sm leading-7 text-slate-500">The same project can be reached through a portfolio row, a scheduled milestone or a location. These are different routes into one delivery record.</p>
    </Section>

    <Section id="Decisions" number="04" label="Portfolio to action" title="Start broad. Reveal detail when the decision needs it." body="The overview supports rapid scanning; the preview supports triage; the full record supports delivery work. Each layer answers a different question." tinted>
      <div className="space-y-16">
        <Decision number="01" title="Put operational health before lifecycle detail." body="Active projects, At risk, On hold and Completed form the top-level overview. Phase remains visible in each row, alongside project lead and health, while city and client grouping help leads read the same portfolio from different angles." points={['Health and phase answer different questions; keep both visible.', 'Search, filters and due-date sorting support focused follow-up.']} src="latest-projects.png" alt="Current Fieldwork portfolio with health summaries and project grouping controls" caption="The current overview prioritizes operational condition; phase is retained as project context." />
        <Decision number="02" title="Keep the portfolio in view while investigating." body="Selecting a project opens a side preview with its lifecycle position, next milestone, people and scope. A lead can check urgency and responsibility before choosing to open the full project." points={['A clear “Open full project” action separates triage from deeper work.', 'The next milestone connects a health signal to a concrete checkpoint.']} src="latest-preview.png" alt="Yuanhong Cinema side preview beside the project table with next milestone and people" caption="A preview provides the next layer of information without losing the surrounding project list." />
        <Decision number="03" title="Make the schedule a shared action queue." body="Schedule brings milestones across projects into one date-led view. Overdue, This week, Next week and Later filters focus attention; each row connects the milestone to a project, city, work package, phase, owner and status." src="latest-schedule.png" alt="Schedule view with timeframe filters and cross-project milestone rows" caption="A date alone is not enough: the schedule carries the context needed to identify who should act." />
      </div>
    </Section>

    <Section id="Flow" number="05" label="Delivery model" title="One lifecycle, with responsibility at the right level." body="The shared model now spans six delivery phases. Sector and service templates adapt the milestones within that structure; closure follows completion of the required handover work.">
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{phases.map(([title,body],index) => <li key={title} className="rounded-xl border border-slate-200 bg-white p-5"><span className="text-xs font-bold text-indigo-500">0{index+1}</span><h3 className="mt-3 text-sm font-bold">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-500">{body}</p></li>)}</ol>
      <div className="mt-12 space-y-16">
        <Decision number="04" title="Break complex delivery into owned work packages." body="A veterinary hospital combines MRI / CT, radiation shielding, MEP coordination and interior fit-out. Work packages give each stream its own lead, collaborators, phase, progress and next milestone while keeping it inside the parent project." src="latest-work-packages.png" alt="Paws and Care project split into four work packages with leads, progress, milestones and health" caption="Specialist work can progress at different rates. The parent project preserves the shared context." />
        <Decision number="05" title="Distinguish doing the work from waiting on someone else." body="Milestones expose the internal owner and can name an external dependency such as an equipment supplier. Dependency context and external outcomes sit alongside the plan, so a blocked item can explain both the waiting party and the person following up internally." points={['Review requirements and deliverable references make the expected handoff explicit.', 'Relevant standards are linked from the milestone to support the work in context.']} src="latest-dependency.png" alt="Milestone editor showing internal owner, external equipment supplier dependency and context" caption="MRI / CT requirements: one milestone connects an internal owner with the external information it depends on." />
        <ProductImage src="latest-milestones.png" alt="Project milestones showing completed, in-progress, blocked and ready-for-review states" caption="Completion, review readiness and external waiting are readable as different conditions in the delivery record." />
      </div>
    </Section>

    <Section id="Solution" number="06" label="Intake & project context" title="Carry the brief into delivery." body="Enquiries remain a distinct pipeline until they are ready to become project work. The three-step intake separates Brief, Client & site, and Qualification, with a draft option for incomplete information." tinted>
      <div className="grid gap-8 lg:grid-cols-2"><ProductImage src="latest-enquiries.png" alt="Enquiry queue with active intake statuses, city, service, area and budget" caption="The queue distinguishes new, under-review, needs-information and ready-to-scope work." /><ProductImage src="latest-intake.png" alt="New enquiry Brief step with project name, service, client, brief and save draft controls" caption="The first step starts with the essentials: what the work is, who it is for and which service is needed." /></div>
      <div className="mt-12"><Decision number="06" title="Keep scope and commercial context close to delivery." body="The project record separates Delivery, Project brief and Activity. The brief retains scope, client and site information; the delivery view brings programme and commercial fields into the same workspace as the lifecycle and milestones." src="latest-brief.png" alt="Project brief with scope, client and site, programme and commercial information" caption="The brief remains a reference during delivery, rather than disappearing after intake." /></div>
      <div className="mt-9"><ProductImage src="latest-delivery.png" alt="Project delivery view with programme and commercial fields and lifecycle" caption="Explicit “Not set” values distinguish missing programme or commercial information from confirmed values." /></div>
    </Section>

    <Section id="Operations" number="07" label="Studio-wide context" title="Connect the work to people, places and standards." body="A project lead needs more than a task list. Team coverage, the local pipeline and sector-specific requirements all shape the next delivery decision.">
      <div className="space-y-10"><ProductImage src="latest-locations.png" alt="Locations cards grouping active projects and enquiry pipeline by city" caption="Locations brings incoming and active work together by city, with sectors and direct links to the underlying records." /><div className="grid gap-8 lg:grid-cols-2"><ProductImage src="latest-team.png" alt="Team directory with roles, access tiers, supported cities, open assignments and waiting reviews" caption="Team distinguishes professional roles from access tiers and shows assignments, reviews and geographic coverage." /><ProductImage src="latest-standards.png" alt="Delivery Standards with sector milestone templates, service selection and owner roles" caption="Sector and service templates make expected milestones and owner roles visible before they are applied to project work." /></div></div>
    </Section>

    <Section id="Outcome" number="08" label="Reflection & validation" title="From a collection of features to a readable delivery model." tinted>
      <div className="grid gap-10 md:grid-cols-2"><div><h3 className="text-lg font-bold">What the redesign makes possible</h3><p className="mt-4 text-sm leading-7 text-slate-600">The experience connects portfolio risk to work-package ownership, milestone evidence and shared studio context. The design principle is consistent throughout: show enough to support the next decision, then provide a clear path to the underlying record.</p><p className="mt-4 text-xs leading-6 text-slate-500">The screens shown here are captured from the current interactive prototype. Counts, dates and progress values are demonstration data, not measured business outcomes.</p></div><div><h3 className="text-lg font-bold">What I would validate next</h3><Points items={['Can a lead identify the highest-priority project and its next action without opening every record?', 'Can a contributor distinguish an internal review from an external dependency and identify who owns follow-up?', 'Do work-package leads and milestone owners match how the studio actually allocates responsibility?', 'Do sector and service templates reduce setup effort without introducing irrelevant milestones?']} /></div></div>
      <p className="mt-10 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">Project details and identifying information have been adapted for confidentiality. Screenshots reflect the current demo and can be opened at full size.</p>
    </Section>
  </article>;
}

export default function ProjectRequestPage() {
  const { unlocked, unlockWithPassword, error, clearError } = useProjectUnlock(PROJECT_ID);
  if (!unlocked) return <PasswordGate title="Fieldwork" subtitle="This freelance case study is under NDA. Enter the shared password to view the work." onUnlock={unlockWithPassword} error={error} onClearError={clearError} />;
  return <CaseStudyContent />;
}
