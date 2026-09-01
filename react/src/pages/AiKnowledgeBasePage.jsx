import { ArrowRight, Check, FileSearch, FolderKanban, Lock, MessageSquareText, ShieldCheck } from 'lucide-react';
import PasswordGate from '../components/PasswordGate.jsx';
import { useProjectUnlock } from '../hooks/useProjectUnlock.js';
import { kbSectionHead as SECTION, openSans } from '../styles/caseStudyTheme.js';

const PROJECT_ID = 'ai-knowledge-base-engineering';

function SectionHeading({ label, title, body }) {
  return <div className="mb-6"><h2 className={SECTION.h2} style={SECTION.h2Style}>{label}</h2><h3 className={SECTION.h3} style={SECTION.h3Style}>{title}</h3>{body && <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">{body}</p>}</div>;
}

function ProductImage({ src, alt, caption, className = '' }) {
  return <figure className={className}><div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_18px_60px_rgba(15,23,42,.08)]"><img src={src} alt={alt} className="block w-full h-auto" loading="lazy" /></div>{caption && <figcaption className="mt-3 text-xs leading-5 text-slate-500">{caption}</figcaption>}</figure>;
}

function KnowledgeArchitecture() {
  const branches = [
    { title: 'Home', gate: 'Choose a starting point', pages: [
      ['Ask the hub', 'Begin with a natural-language question'],
      ['My pins', 'Return to controlled, frequently used sources'],
      ['Recent chats', 'Resume context and follow-up questions'],
    ] },
    { title: 'Projects', gate: 'Select project scope', pages: [
      ['All projects', 'Owner, document count, source health'],
      ['Project sources', 'Drawings, reports, specifications'],
      ['Scoped chat', 'Ask across one or several projects'],
    ] },
    { title: 'Search library', gate: 'Search & filter', pages: [
      ['Results', 'Project, type, keyword and relevance'],
      ['Multi-select', 'Choose exact documents as context'],
      ['Source preview', 'Version, owner, date and status'],
    ] },
    { title: 'Knowledge workspace', gate: 'Define answer scope', pages: [
      ['Conversation', 'Questions and contextual follow-ups'],
      ['Sources in use', 'Visible and editable retrieval boundary'],
      ['Document viewer', 'Citations, annotations and actions'],
    ] },
  ];
  const sharedLayer = ['Firm standards', 'Project documents', 'Drawings', 'Annotations', 'Version & owner', 'Permissions'];

  return <div className="mb-10 overflow-x-auto rounded-2xl border border-slate-200 bg-[#fafafa] p-5 md:p-8">
    <div className="mx-auto min-w-[1020px] max-w-[1200px] pb-3">
      <div className="flex justify-center"><div className="rounded-md border border-slate-400 bg-white px-5 py-3 text-center shadow-sm"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-violet-600">Product root</p><p className="mt-1 text-base font-bold text-slate-950">AI Knowledge Hub</p></div></div>
      <div className="mx-auto h-8 w-px bg-slate-400" />
      <div className="mx-[11%] border-t border-slate-400" />
      <div className="grid grid-cols-4 gap-7">
        {branches.map((branch) => <div key={branch.title} className="relative pt-7 before:absolute before:left-1/2 before:top-0 before:h-7 before:w-px before:bg-slate-400">
          <div className="mx-auto w-fit rounded border border-violet-300 bg-violet-50 px-3 py-2 text-center text-xs font-bold text-violet-800">{branch.title}</div>
          <div className="mx-auto h-5 w-px bg-slate-300" />
          <div className="mx-auto flex h-12 w-12 rotate-45 items-center justify-center border border-sky-300 bg-sky-50"><span className="-rotate-45 text-center text-[8px] font-semibold leading-3 text-sky-900">{branch.gate}</span></div>
          <div className="mx-auto h-5 w-px bg-slate-300" />
          <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-[0_8px_22px_rgba(15,23,42,.05)]"><p className="mb-3 text-sm font-bold text-slate-900">{branch.title}</p><div className="space-y-2">{branch.pages.map(([page, detail], index) => <div key={page} className={`rounded px-3 py-2 ${index === 0 ? 'bg-violet-100' : 'bg-emerald-100'}`}><p className={`text-[10px] font-bold ${index === 0 ? 'text-violet-800' : 'text-emerald-800'}`}>{page}</p><p className="mt-1 text-[8px] leading-3 text-slate-500">{detail}</p></div>)}</div></div>
        </div>)}
      </div>
      <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-[9px] uppercase tracking-[.14em] text-slate-400"><span className="border-t border-dashed border-slate-300" /><span>Browse and ask resolve through the same governed retrieval layer</span><span className="border-t border-dashed border-slate-300" /></div>
      <div className="mt-5 rounded-lg border border-dashed border-violet-300 bg-white/80 p-4"><div className="flex items-center gap-4"><p className="w-32 shrink-0 text-[9px] font-bold uppercase tracking-[.14em] text-violet-600">Shared knowledge layer</p><div className="grid flex-1 grid-cols-6 gap-2">{sharedLayer.map(item => <div key={item} className="rounded bg-slate-100 px-2 py-2 text-center text-[9px] font-medium text-slate-600">{item}</div>)}</div></div></div>
    </div>
  </div>;
}

function CaseStudyContent() {
  const img = (name) => `${import.meta.env.BASE_URL}img/knowledge-hub/${name}`;
  const journey = [
    ['01', 'Discover', 'Start from a pinned source, project, or keyword.'],
    ['02', 'Scope', 'Choose firm standards, projects, or specific documents.'],
    ['03', 'Ask', 'Use natural language without learning a query syntax.'],
    ['04', 'Verify', 'Inspect citations, versions, owners, and source status.'],
    ['05', 'Reuse', 'Pin, annotate, download, or continue the conversation.'],
  ];

  return <main className="case-study-page min-h-screen bg-white text-slate-900 pb-24" style={openSans}>
    <section id="Overview" className="px-6 pt-6 pb-16 md:pt-12"><div className="mx-auto max-w-7xl">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[.16em] text-slate-500"><span>Enterprise knowledge · Search · GenAI</span><span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700"><Lock className="h-3 w-3" /> NDA case study</span></div>
      <div><p className="mb-3 text-sm font-semibold text-violet-700">AI Knowledge Hub</p><h1 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-4xl">Turning scattered project files into <span className="font-medium italic text-slate-500">trusted answers.</span></h1><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">I designed an AI-assisted knowledge experience for an interior design practice—helping teams find standards, trace decisions, and ask questions without losing source context.</p><a href="https://w0436300.github.io/request/knowledge-hub/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-100">View live demo ↗</a></div>
      <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-4">{[['Role','Lead Product Designer'],['Scope','Research · IA · UX/UI'],['Team','PM · Engineers · Domain experts'],['Delivery','Responsive web product']].map(([key,value]) => <div key={key} className="border-b border-r border-slate-200 p-4 md:p-5"><p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{key}</p><p className="mt-2 text-xs font-semibold text-slate-800 md:text-sm">{value}</p></div>)}</div>
      <ProductImage className="mt-8" src={img('home.png')} alt="Knowledge Hub home screen with an AI question field and pinned documents" caption="The home experience balances a fast AI entry point with familiar, retrievable source material." />
    </div></section>

    <section id="Background" className="border-t border-slate-200 bg-white px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl">
      <SectionHeading label="Background" title="A knowledge assistant for a 50-person engineering consultancy." />
      <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div className="max-w-3xl space-y-7 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
          <p>The internal AI knowledge tool was created to replace <strong className="font-semibold text-slate-950">ad-hoc colleague-to-colleague knowledge transfer</strong> with instant search across the firm’s project files and standards. Because engineers need to trust an answer before acting on it, every response needed a reliable, inspectable source.</p>
          <p>I joined after the engineering team had already shipped Version 2 without design input. The tool had organically expanded into a broad project-management workspace—combining project trackers, task tickets, issue logs, content generation, and AI document annotation—even though internal feedback showed that users had not asked for those workflows.</p>
          <p>My role was to bring the product back to its actual job: <strong className="font-semibold text-slate-950">define real requirements, re-scope the feature set, and rebuild the information architecture and design system from the ground up.</strong></p>
        </div>
        <aside className="rounded-2xl border border-violet-200 bg-violet-50 p-6 md:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-violet-700">The product’s real job</p>
          <p className="mt-5 text-2xl font-semibold leading-snug text-slate-950">Help an engineer find, understand, and verify internal knowledge before making a decision.</p>
          <div className="mt-8 space-y-4">
            {['File and source search', 'Document summarization', 'Source-verified questions and answers'].map((item, index) => <div key={item} className="flex items-center gap-4 rounded-xl border border-violet-200 bg-white px-4 py-3"><span className="text-xs font-bold text-violet-700">0{index + 1}</span><span className="text-sm font-semibold text-slate-800">{item}</span></div>)}
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <div className="mb-6"><h2 className={SECTION.h2} style={SECTION.h2Style}>When I joined · V2</h2><h3 className={SECTION.h3} style={SECTION.h3Style}>Feature breadth had overtaken user value.</h3><p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">The existing dashboard looked capable, but placed six different AI jobs, project utilities, prompts, conversations, and sources on one screen. The issue was not visual polish—it was an undefined product boundary.</p></div>
        <ProductImage src={img('engineering-v2.png')} alt="Engineering team Version 2 dashboard with many AI and project-management features" caption="Version 2, created before design joined: a broad AI workspace that had grown beyond the validated needs of its internal users." />
      </div>

      <div className="mt-14 grid overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-3">
        {[['V2 · Expansion','Engineering-led growth added project tracking, tickets, issue logs, drafting, brainstorming, comparison, and action items.'],['V3 · Reset','User feedback and team alignment returned the product to a focused, chat-based knowledge assistant.'],['V3+ · Refinement','Multiple discussion and feedback rounds improved search, scope control, source verification, and overall usability.']].map(([title, body], index) => <article key={title} className="border-b border-r border-slate-200 p-6 md:p-7"><span className="text-xs font-bold text-violet-700">0{index + 1}</span><h3 className="mt-6 text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}
      </div>
    </div></section>

    <section id="Challenge" className="border-t border-slate-200 bg-white px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl">
      <SectionHeading label="01 · Challenge" title="The real problem was not a lack of knowledge. It was a lack of confidence in finding the right version." body="Project knowledge lived across drawings, reports, standards, email threads, and individual memory. Search alone could return a file; it could not tell someone whether that file was current, relevant, or safe to act on." />
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-3">{[['Fragmented context','A decision might exist in a drawing note, a report, or a teammate’s memory—with no shared path between them.'],['High cost of a wrong answer','Outdated dimensions or specifications can create rework, procurement delays, and coordination conflicts.'],['Low trust in black-box AI','A fluent answer is not enough. Teams need to see the source, version, owner, and exact evidence.']].map(([title,body],index) => <article key={title} className="border-b border-r border-slate-200 p-6 md:p-8"><span className="text-xs font-bold text-violet-700">0{index+1}</span><h3 className="mt-8 text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
    </div></section>

    <section id="Research" className="border-t border-slate-200 px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl">
  <SectionHeading label="02 · Research" title="I reframed search as a trust journey." body="Search needed to move users from uncertainty to a decision they could defend." />
  <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
    <div className="border-l-2 border-violet-300 py-1 pl-5">
      <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-violet-700">Core insight</p>
      <blockquote className="mt-3 max-w-md text-lg font-medium leading-7 text-slate-800">“People trust an answer when they can trace it back to evidence.”</blockquote>
    </div>
    <div className="grid gap-5 sm:grid-cols-3">
      {[
        ['Mental model', 'Knowledge is organized by project and document type.'],
        ['Verification', 'Version, owner, and citations support decisions.'],
        ['Continuity', 'Visible scope carries context into follow-up questions.'],
      ].map(([title, body]) => (
        <article key={title} className="border-t border-slate-200 pt-4">
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-xs leading-5 text-slate-500">{body}</p>
        </article>
      ))}
    </div>
  </div>
    </div></section>

    <section id="Journey" className="border-y border-slate-200 bg-violet-50/60 px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl">
      <SectionHeading label="03 · Experience strategy" title="One continuous path from question to verifiable action." body="The experience supports both retrieval and conversation while keeping users oriented to what the AI is allowed to use." />
      <div className="grid overflow-hidden rounded-2xl border border-violet-200 bg-white md:grid-cols-5">{journey.map(([no,title,body],index) => <div key={title} className="border-b border-r border-violet-200 p-5 md:min-h-52 md:p-6"><div className="flex items-center justify-between"><span className="text-xs font-bold text-violet-700">{no}</span>{index < journey.length-1 && <ArrowRight className="h-4 w-4 text-violet-300" />}</div><h3 className="mt-9 text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 text-xs leading-5 text-slate-600">{body}</p></div>)}</div>
    </div></section>

    <section id="InformationArchitecture" className="bg-white px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl">
      <SectionHeading label="04 · Information architecture" title="Two entry points, one knowledge model." body="Browse and ask are not competing features. They are two ways into the same indexed system of projects, controlled standards, drawings, reports, and annotations." />
      <KnowledgeArchitecture />
      <div className="grid gap-8 lg:grid-cols-2"><ProductImage src={img('project-index.png')} alt="All projects screen with owners, document counts, and conflict status" caption="Projects provide the organizational map and surface document health at a glance." /><ProductImage src={img('library.png')} alt="Search library screen with project and type filters" caption="The library supports precise retrieval through project, type, keyword, and selection tools." /></div>
    </div></section>

    <section id="Decisions" className="border-y border-slate-200 px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl">
      <SectionHeading label="05 · Key decisions" title="Designing AI as a transparent layer over controlled knowledge." />
      <div className="space-y-20">
        <div className="grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-center"><article><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><FolderKanban className="h-5 w-5" /></span><h3 className="mt-5 text-2xl font-bold">Let users define the answer boundary.</h3><p className="mt-4 text-sm leading-7 text-slate-600">Users can scope a conversation to firm-wide standards, selected projects, or exact documents. A persistent source rail makes that boundary visible and editable.</p><p className="mt-4 border-l-2 border-violet-400 pl-4 text-sm font-semibold text-slate-800">Why it matters: scope turns an invisible retrieval rule into a user-controlled product decision.</p></article><ProductImage src={img('scoped-chat.png')} alt="Chat screen scoped to three selected documents" caption="Selected documents remain visible beside the conversation, so context never disappears after selection." /></div>
        <div className="grid gap-9 lg:grid-cols-[1.28fr_.72fr] lg:items-center"><ProductImage src={img('cited-answer.png')} alt="AI answer with inline citations and a sources panel" caption="Inline evidence connects each claim to a specific standard or project note." /><article><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><ShieldCheck className="h-5 w-5" /></span><h3 className="mt-5 text-2xl font-bold">Make trust inspectable, not decorative.</h3><p className="mt-4 text-sm leading-7 text-slate-600">Citations sit inside the response where a claim is made. The source panel exposes document type, project, revision, and update date, while a detail card adds ownership and controlled-document status.</p><div className="mt-6 flex flex-wrap gap-2">{['Inline citation','Version','Owner','Freshness','Source status'].map(tag => <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">{tag}</span>)}</div></article></div>
        <div className="grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-center"><article><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><FileSearch className="h-5 w-5" /></span><h3 className="mt-5 text-2xl font-bold">Connect answers back to working documents.</h3><p className="mt-4 text-sm leading-7 text-slate-600">The source viewer keeps decisions, cautions, and resolved questions attached to the drawing itself. Teams can pin, annotate, download, or ask about that exact artifact.</p></article><ProductImage src={img('annotations.png')} alt="Drawing viewer with decision, caution, and question annotations" caption="Structured annotations preserve the why behind a project decision—not only the final file." /></div>
      </div>
    </div></section>

    <section id="FinalExperience" className="bg-white px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl">
      <SectionHeading label="06 · Final experience" title="The final product behaves like a knowledge workspace—not a chatbot with a file picker." body="Search, project navigation, conversational retrieval, source inspection, and annotation form a connected system that supports different levels of user certainty." />
      <ProductImage src={img('multi-select.png')} alt="Search results with three documents selected for a scoped chat" caption="Users can move directly from search results into a focused conversation without rebuilding context." />
      <div className="mt-8 grid gap-4 md:grid-cols-4">{[[MessageSquareText,'Ask naturally','Questions can begin from the home screen, a project, selected files, or a source viewer.'],[FolderKanban,'Keep context','Scope stays visible and persists across follow-up questions.'],[ShieldCheck,'Verify quickly','Every answer is grounded in inspectable source metadata.'],[FileSearch,'Act on knowledge','People can pin, annotate, download, and reuse what they find.']].map(([Icon,title,body]) => <article key={title} className="rounded-2xl border border-slate-200 p-5"><Icon className="h-5 w-5 text-violet-700" /><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{body}</p></article>)}</div>
    </div></section>

    <section id="Outcome" className="border-t border-slate-200 bg-white px-6 py-16 text-slate-900 md:py-24"><div className="mx-auto max-w-7xl">
      <SectionHeading label="07 · Outcome & reflection" title="A clearer relationship between AI speed and professional accountability." body="The concept established a scalable interaction model for combining firm standards and live project knowledge. Because the work remains under NDA, outcome statements focus on design value rather than confidential business metrics." />
      <div className="grid gap-8 md:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-violet-50 p-7"><p className="text-xs font-bold uppercase tracking-widest text-violet-700">What the design enabled</p><ul className="mt-6 space-y-4">{['Faster movement from an open question to relevant evidence','Clearer boundaries around what the AI is using','A shared source of truth for project decisions and annotations','A reusable pattern for search, chat, and document workflows'].map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-violet-600" />{item}</li>)}</ul></div><div className="rounded-2xl border border-violet-200 bg-violet-50/50 p-7 text-slate-900"><p className="text-xs font-semibold uppercase tracking-widest text-violet-700">Reflection</p><p className="mt-5 text-xl font-medium leading-8 text-slate-800">In high-stakes knowledge work, good AI makes the right complexity easy to inspect.</p><p className="mt-5 text-sm leading-6 text-slate-600">Provenance, scope, and ownership became core interaction elements—not details revealed only when something goes wrong.</p></div></div>
    </div></section>
  </main>;
}

export default function AiKnowledgeBasePage() {
  const { unlocked, unlockWithPassword, error, clearError } = useProjectUnlock(PROJECT_ID);
  if (!unlocked) return <PasswordGate title="AI Knowledge Hub" subtitle="This freelance case study is under NDA. Enter the shared password to view the work." onUnlock={unlockWithPassword} error={error} onClearError={clearError} />;
  return <CaseStudyContent />;
}
