import { amiSectionHead as AMI, amiAccentRgb, openSans, amiBorder, amiBorderSubtle } from '../styles/caseStudyTheme.js';

const RESEARCH_FINDINGS = [
  {
    no: '01',
    title: 'Drop-off happens at setup',
    body: "Across tools, the biggest abandonment point wasn't hard content. It was onboarding with too many decisions and too little visible payoff.",
  },
  {
    no: '02',
    title: 'Users distrust invisible AI',
    body: "Most products don't explain why they assess a learner's level. Opacity, not capability, was the real trust blocker.",
  },
  {
    no: '03',
    title: 'Academic terms miss user mental models',
    body: 'FSLSM (a research-based framework for classifying learning styles) is pedagogically valid, but terms like sequential-global are not learner-facing language. The model needed translation, not replacement.',
  },
];

const SOLUTION_STEPS = [
  {
    badge: 'Step 1',
    title: 'Onboarding',
    media: 'ami-onboarding.gif',
    body: 'Split into 3 steps, one question per screen. Resume upload is optional to reduce startup friction.',
    chips: ['Enter goal', 'Learning style', 'Resume (optional)'],
  },
  {
    badge: 'Step 2',
    title: 'Skill Gap Review',
    media: 'ami-skillgap.png',
    body: 'AI explains inferred gaps with confidence and rationale. Learners can adjust levels, ignore skills, or proceed.',
    chips: ['AI suggests + explains', 'Learner adjusts levels', 'Include / Ignore'],
  },
  {
    badge: 'Steps 3 & 4',
    title: 'Learning Path & Session',
    media: 'ami-session.gif',
    body: 'Path structure adapts to learning style. Session delivery adapts format in real time with contextual chatbot support.',
    chips: ['Text', 'Diagram', 'Video', 'Audio'],
  },
  {
    badge: 'Step 5',
    title: 'Quiz & Continuous Adaptation',
    media: 'ami-quiz.gif',
    body: 'Three triggers keep learner profile data fresh without additional burden.',
    chips: ['Quiz result', 'Chatbot behavior', 'Manual profile updates'],
  },
  {
    badge: 'Step 6',
    title: 'Profile, Analytics & AI Transparency',
    media: 'ami-ai-transparency.gif',
    body: 'Trust remains visible through profile controls, progress analytics, citation behavior, and transparency commitments.',
    chips: ['Profile', 'Analytics', 'AI Transparency'],
  },
];

const REFLECTIONS = [
  {
    no: '01',
    title: 'Translating a model is a design problem',
    body: 'FSLSM did not need replacement. It needed a UX translation layer so technical rigor and user clarity could coexist.',
  },
  {
    no: '02',
    title: 'Adding a step can reduce friction',
    body: 'Skill gap review added one step but increased confidence and completion. Useful friction can improve outcomes.',
  },
  {
    no: '03',
    title: 'Scope defines feature meaning',
    body: 'The chatbot became pedagogically meaningful when constrained to sessions rather than exposed globally.',
  },
  {
    no: '04',
    title: 'Trust is a system, not a feature',
    body: 'Explanations, profile transparency, source citations, and bias disclosure work together as a trust architecture.',
  },
];

export default function AiTutorPage() {
  const amiImg = (name) => `${import.meta.env.BASE_URL}img/ami/${name}`;

  return (
    <div
      className="ai-tutor-page min-h-screen bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900 scroll-smooth pb-20"
      style={openSans}
    >
      <section id="Overview" className="pt-2 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-600 mb-4">
            AI-Powered Education · UX Case Study · 2026
          </div>
          <h1 className="text-2xl md:text-2xl font-extrabold leading-[1.05] tracking-tight mb-4">
            Designing trust into an AI tutor, 
         
            <span className="italic font-medium text-slate-600" style={{ color: `rgb(${amiAccentRgb})` }}> from the ground up.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-4xl leading-relaxed mb-8">
            Ami is an adaptive learning platform built on a research AI baseline. The core challenge was
            to transform a technically strong system into something learners can understand, trust, and
            return to.
          </p>

          <div className={`bg-white p-4 md:p-6 mb-8`}>
            <img
              src={amiImg('overview.gif')}
              alt="Ami product overview"
              className={`w-2/3 h-auto border-2 border-gray-300 ${amiBorderSubtle}`}
            />
          </div>

          <div className={`grid md:grid-cols-4 gap-4`}>
            <div className="md:pr-4 md:border-r md:border-gray-300">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">My Role</p>
              <p className="text-sm text-slate-700">UX Research<br />Product Design<br />Frontend Engineering</p>
            </div>
            <div className="md:px-4 md:border-r md:border-gray-300">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">Team</p>
              <p className="text-sm text-slate-700">6-person cross-functional<br />1 PM · 2 Backend<br />1 Learning Analytics
              <br />2 UX Designers <br />1 User Research</p>
            </div>
            <div className="md:px-4 md:border-r md:border-gray-300">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">Timeline</p>
              <p className="text-sm text-slate-700">Jan - April 2026<br />12 weeks end-to-end</p>
            </div>
            <div className="md:px-4 md:border-r md:border-gray-300">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">Client & Technical advisor
              </p>
              <p className="text-sm text-slate-700">Dr. Ali Abbas — CEO of Smart Digital Medicin. <br />Ismaeel Al-Ridhawi — Associate Professor, School of Electrical Engineering and Computer Science, uOttawa</p>
            </div>
            
          </div>
        </div>
      </section>

      <section id="Problem" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <h2 className={AMI.h2} style={AMI.h2Style}>Problem</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>The brief said nothing about users.</h3>
            <p className="text-slate-600 text-sm text-left mt-3">
              The original specification described architecture and model behavior, but not user
              experience or trust mechanisms.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 md:p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold style={AMI.h2Style} mb-3">
              Original client brief - verbatim
            </p>
            <p className="text-xs md:text-sm style={AMI.h3Style} leading-relaxed mb-3 font-mono">
              "This project develops a personalized AI tutoring system that adapts its teaching style to
              individual learners. Rather than delivering uniform content, the system identifies cognitive
              preferences and learning gaps through interaction patterns and assessment data."
            </p>
            <p className="text-xs md:text-sm style={AMI.h3Style} leading-relaxed mb-3 font-mono">
              "The tutor is powered by LLMs connected to a curriculum knowledge graph, enabling
              prerequisite-aware lesson sequencing and targeted practice generation."
            </p>
            <p className="text-xs style={AMI.h3Style} italic border-t border-gray-300 pt-3">
              Ethical considerations listed: bias, transparency, and the role of AI in pedagogy, with no
              product-level specification.
            </p>
          </div>

          <p className={`mt-4 text-sm text-slate-600 border-l-4 border-gray-300 pl-4`}>
            The first design decision was to close the gap between technical capability and learner
            experience.
          </p>
        </div>
      </section>

      <section id="Research" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Research</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>Three findings that drove every decision.</h3>
            <p className="text-slate-600 text-sm text-left mt-3">
              We ran competitive analysis, journey mapping, and architecture review of the GenMentor
              baseline before designing the interaction layer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mb-10">
            {RESEARCH_FINDINGS.map((item) => (
              <div key={item.no} className={`border ${amiBorderSubtle} bg-white p-4`}>
                <p className="text-3xl leading-none mb-2" style={{ color: `rgb(${amiAccentRgb} / 0.32)` }}>
                  {item.no}
                </p>
                <h4 className="font-bold text-sm mb-2 text-slate-800">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Competitive positioning</p>
            <h4 className="text-lg font-semibold mb-3">The white space no tool was occupying</h4>
            <p className="text-sm text-slate-600 mb-4">
              Existing products often optimize for either pedagogical rigor or usability. Ami targeted the
              high-rigor, high-usability quadrant.
            </p>
            <div className={`border ${amiBorder} bg-white p-4`}>
              <img
                src={amiImg('Competitive-positioning-matrix.png')}
                alt="Competitive positioning matrix"
                className="w-full h-auto object-contain"
              />
              <p className="text-xs text-slate-500 italic mt-3">
                Ami combines FSLSM + SOLO + RAG-grounded content with a UX layer designed for real
                learners.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Journey mapping</p>
            <h4 className="text-lg font-semibold mb-3">Mapping emotional cost before and after Ami</h4>
            <p className="text-sm text-slate-600 mb-4">
              The steepest drop happened during setup and tool-switching, not during difficult content.
              This insight directly shaped onboarding and trust-related decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className={`border ${amiBorder} bg-white p-3`}>
                <img src={amiImg('current-journey-map.png')} alt="Current journey map without Ami" className="w-full h-auto" />
                <p className="text-xs text-slate-500 italic mt-2">
                  Without Ami: emotional arc declines from hopeful to discouraged due to high cognitive
                  load and unclear progress.
                </p>
              </div>
              <div className={`border ${amiBorder} bg-white p-3`}>
                <img src={amiImg('future-journey-map.png')} alt="Future journey map with Ami" className="w-full h-auto" />
                <p className="text-xs text-slate-500 italic mt-2">
                  With Ami: arc rises from clear direction to trust building through staged support and
                  visible reasoning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Decisions" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Design Decisions</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>Four decisions that defined the product.</h3>
            <p className="text-slate-600 text-sm text-left mt-3">
              Each decision involved a real trade-off. The goal was not fewer features, but better
              learning behavior and higher trust.
            </p>
          </div>

          <div className="space-y-5">
            <article className={`border ${amiBorderSubtle} bg-white p-5 md:p-6`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="w-9 h-9 bg-white border border-gray-300 text-xs font-bold flex items-center justify-center" style={{ color: 'rgb(52 118 128 / 0.88)' }}>01</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Onboarding</p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    When a design principle conflicts with user behavior, interrogate the principle.
                  </h4>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Problem · Decision · Outcome</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Problem:</span> Early onboarding asked too much before users trusted the product.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Decision:</span> Replace abstract inputs with behavioral labels and keep resume optional.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Outcome:</span> Lower startup friction while preserving FSLSM rigor.</p>
                  </div>
                  <div className={`border ${amiBorderSubtle} p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">How the onboarding evolved</p>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">✕ Stage 1 — Free-text input, AI identifies FSLSM</p>
                        <p>
                          Users struggled to describe learning preferences in a blank field, so AI inference was inconsistent.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">✕ Stage 2 — Questionnaire (education, work background...)</p>
                        <p>
                          Better data quality, but too much startup friction. It broke the "start learning fast" requirement.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">✕ Stage 3 — Illustrated persona portraits</p>
                        <p>
                          Persona cards looked polished but felt distant. Users related less to a character than to themselves.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1" style={{ color: 'rgb(52 118 128 / 0.88)' }}>✓ Stage 4 — Behavioral style labels mapping to FSLSM</p>
                        <p>
                          Five plain-language options map to FSLSM internally. The model stays; the language becomes human.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Resume — quality vs. friction</p>
                    <p className="text-sm text-slate-600">
                      Resume improves skill-gap quality, but required upload adds friction. We kept it optional and made the trade-off explicit.
                    </p>
                  </div>

                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">MVP failure — and what it meant</p>
                    <p className="text-sm text-slate-600 mb-2">
                      ✕ MVP put goal + style + resume on one screen. Drop-off came from unclear context, not length.
                    </p>
                    <p className="text-sm italic" style={{ color: 'rgb(52 118 128 / 0.88)' }}>
                      "A good design principle should support user behavior. When they conflict, reinterpret the principle."
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className={`border ${amiBorder} bg-white p-3`}>
                    <img src={amiImg('ami-onboarding.png')} alt="Onboarding step 2" className="w-full h-auto" />
                    <p className="text-xs text-slate-500 italic mt-2">
                      Final design — Step 2 of 3: one question per screen, with learner-facing language instead of academic labels.
                    </p>
                  </div>

                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">5 options → FSLSM mapping</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`inline-flex border ${amiBorderSubtle} px-2 py-1 text-xs text-slate-700`}>Interactive</span>
                      <span className={`inline-flex border ${amiBorderSubtle} px-2 py-1 text-xs text-slate-700`}>Textual</span>
                      <span className={`inline-flex border ${amiBorderSubtle} px-2 py-1 text-xs`} style={{ color: 'rgb(52 118 128 / 0.88)' }}>Visual ✓</span>
                      <span className={`inline-flex border ${amiBorderSubtle} px-2 py-1 text-xs text-slate-700`}>Concise</span>
                      <span className={`inline-flex border ${amiBorderSubtle} px-2 py-1 text-xs text-slate-700`}>Balanced</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Users never see FSLSM terms; they feel it through session structure, pacing, and format.
                    </p>
                  </div>

                  <div className={`border ${amiBorderSubtle} bg-white p-4 text-sm text-slate-600`}>
                    <p className="font-semibold text-slate-800 mb-1">Profile — the trust safety net</p>
                    Learning style and resume stay editable in Profile, so AI understanding is revisable, not fixed.
                  </div>
                </div>
              </div>
            </article>

            <article className={`border ${amiBorderSubtle} bg-white p-5 md:p-6`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="w-9 h-9 bg-white border border-gray-300 text-xs font-bold flex items-center justify-center" style={{ color: 'rgb(52 118 128 / 0.88)' }}>02</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Skill Gap Review</p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Should we show AI skill-gap analysis and let users adjust it?
                  </h4>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Problem · Decision · Outcome</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Problem:</span> Hidden inference makes learning paths feel arbitrary.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Decision:</span> Add a review step with reasoning and editable levels.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Outcome:</span> Users can correct AI before committing to a path.</p>
                  </div>
                  <p className="text-sm text-slate-600">
                      After onboarding, Ami infers skills and levels. Show it, or skip straight to path generation?
                  </p>
                  <p className="text-sm bg-white border border-gray-300 p-3 italic" style={{ color: 'rgb(52 118 128 / 0.88)' }}>
                    "If the path feels wrong and users have no recourse, they have no reason to trust it — or return."
                  </p>
                  <div className={`grid md:grid-cols-2 border ${amiBorderSubtle}`}>
                    <div className="p-3 border-b md:border-b-0 md:border-r border-gray-300">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-1">✕ Option A — Skip it</p>
                      <p className="text-sm text-slate-600">Fewer steps, but no visibility and no way to challenge AI assumptions.</p>
                    </div>
                    <div className="p-3 bg-white border border-gray-300">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: 'rgb(52 118 128 / 0.88)' }}>✓ Option B — Show it, let them adjust</p>
                      <p className="text-sm" style={{ color: 'rgb(52 118 128 / 0.88)' }}>One extra step: see reasoning, adjust levels, then confirm path.</p>
                    </div>
                  </div>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Layout iterations</p>
                    <p className="text-sm text-slate-600 mb-2">
                      ✕ MVP: one long page of sliders felt like a form and overloaded users.
                    </p>
                    <p className="text-sm" style={{ color: 'rgb(52 118 128 / 0.88)' }}>
                      ✓ Final: split panel. Left = scan list. Right = reasoning, dual sliders, confidence, include/ignore.
                    </p>
                  </div>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Why two sliders?</p>
                    <p className="text-sm text-slate-600">
                      Two sliders separate "what is needed" from "where I am now."
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className={`border ${amiBorder} bg-white p-3`}>
                    <img src={amiImg('ami-skillgap.png')} alt="Skill gap analysis view" className="w-full h-auto" />
                    <p className="text-xs text-slate-500 italic mt-2">
                      Final design — Skill Gap Analysis: left scannable list, right detail panel with AI reasoning and adjustable controls.
                    </p>
                  </div>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Required Level vs. Current Level</p>
                    <p className="text-sm text-slate-600">
                      This makes review collaborative, not final.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className={`border ${amiBorderSubtle} bg-white p-5 md:p-6`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="w-9 h-9 bg-white border border-gray-300 text-xs font-bold flex items-center justify-center" style={{ color: 'rgb(52 118 128 / 0.88)' }}>03</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Chatbot Scope</p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Should the chatbot be global, or only available during sessions?
                  </h4>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Problem · Decision · Outcome</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Problem:</span> Global chatbot access distracted users in setup and review.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Decision:</span> Restrict chatbot to active learning sessions only.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Outcome:</span> Better focus early, richer context when chatbot appears.</p>
                  </div>
                  <p className="text-sm text-slate-600">
                    The chatbot could be global, or limited to sessions with learning context.
                  </p>
                  <p className="text-sm bg-white border border-gray-300 p-3 italic" style={{ color: 'rgb(52 118 128 / 0.88)' }}>
                    "This wasn't a feature decision. It was an information architecture decision."
                  </p>
                  <div className={`grid md:grid-cols-2 border ${amiBorderSubtle}`}>
                    <div className="p-3 border-b md:border-b-0 md:border-r border-gray-300">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-1">✕ Option A — Global chatbot</p>
                      <p className="text-sm text-slate-600">Always available, but distracts users during setup and review.</p>
                    </div>
                    <div className="p-3 bg-white border border-gray-300">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: 'rgb(52 118 128 / 0.88)' }}>✓ Option B — Session-only</p>
                      <p className="text-sm" style={{ color: 'rgb(52 118 128 / 0.88)' }}>Protects focus and keeps chatbot pedagogical, not generic support.</p>
                    </div>
                  </div>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Scope shaped quality</p>
                    <p className="text-sm text-slate-600">
                      Session-only access carries topic, style, and quiz context, so responses are more relevant.
                    </p>
                  </div>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">The broader principle</p>
                    <p className="text-sm text-slate-600">
                      Placement changes meaning. IA is part of product behavior.
                    </p>
                  </div>
                </div>
                <div className={`border ${amiBorderSubtle} bg-white`}>
                  <div className="p-3 border-b border-gray-300">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500 mb-1">Onboarding</p>
                    <p className="text-sm text-red-600">🚫 Not available — user needs focused attention.</p>
                  </div>
                  <div className="p-3 border-b border-gray-300">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500 mb-1">Skill gap review</p>
                    <p className="text-sm text-red-600">🚫 Not available — review requires focused decisions.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold mb-1" style={{ color: 'rgb(52 118 128 / 0.88)' }}>Learning session</p>
                    <p className="text-sm" style={{ color: 'rgb(52 118 128 / 0.88)' }}>✓ Available — persistent sidebar with full session context.</p>
                  </div>
                  <div className="p-3 text-sm text-slate-600">
                    Chatbot appears after learning starts, with full session context.
                  </div>
                </div>
              </div>
            </article>

            <article className={`border ${amiBorderSubtle} bg-white p-5 md:p-6`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="w-9 h-9 bg-white border border-gray-300 text-xs font-bold flex items-center justify-center" style={{ color: 'rgb(52 118 128 / 0.88)' }}>04</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Content Citations</p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Ground AI outputs in verifiable sources by design, not as an afterthought.
                  </h4>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Problem · Decision · Outcome</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Problem:</span> Learners cannot trust explanations they cannot verify.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Decision:</span> Surface source citations and page numbers in-session.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Outcome:</span> Trust becomes checkable behavior, not brand messaging.</p>
                  </div>
                  <p className="text-sm text-slate-600">
                    Hallucination is the main trust risk in AI tutoring, so we designed for verification from day one.
                  </p>
                  <p className="text-sm bg-white border border-gray-300 p-3 italic" style={{ color: 'rgb(52 118 128 / 0.88)' }}>
                    "If a learner can't verify where the AI's explanation came from, they have no way to calibrate trust."
                  </p>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">The approach — RAG with visible attribution</p>
                    <p className="text-sm text-slate-600">
                      Sessions use RAG over uploaded course PDFs. Claims include source + page number for direct checks.
                    </p>
                  </div>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'rgb(52 118 128 / 0.88)' }}>✓ Verified Course Content</p>
                    <p className="text-sm text-slate-600">
                      AI is bounded to instructor materials, reducing off-scope generation.
                    </p>
                  </div>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'rgb(52 118 128 / 0.88)' }}>✓ Citations with page numbers — checkable, not decorative</p>
                    <p className="text-sm text-slate-600">
                      Citations are meant to be checked, not just displayed.
                    </p>
                  </div>
                  <div className={`border ${amiBorderSubtle} p-3`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Why this is a UX decision, not only technical</p>
                    <p className="text-sm text-slate-600">
                      RAG alone was not enough. Visible citations changed the experience from "AI tells me" to "AI shows me."
                    </p>
                  </div>
                </div>
                <div className={`border ${amiBorderSubtle} bg-white`}>
                  <div className="p-3 border-b border-gray-300 bg-slate-50">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">The four-layer trust architecture</p>
                  </div>
                  <div className="p-3 border-b border-gray-300">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500">Skill gap review</p>
                    <p className="text-sm text-slate-600">Why does AI think I need this skill? Reasoning + confidence shown.</p>
                  </div>
                  <div className="p-3 border-b border-gray-300">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500">Profile page</p>
                    <p className="text-sm text-slate-600">How is my data used? Behavioral commitments are explicit.</p>
                  </div>
                  <div className="p-3 border-b border-gray-300 bg-white">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold" style={{ color: 'rgb(52 118 128 / 0.88)' }}>Session citations</p>
                    <p className="text-sm" style={{ color: 'rgb(52 118 128 / 0.88)' }}>Where did this explanation come from? Source + page number.</p>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500">AI transparency page</p>
                    <p className="text-sm text-slate-600">Bias audits and safeguards disclosed.</p>
                  </div>
                  <div className="p-3 border-t border-gray-300 text-sm text-slate-600">
                    No single screen makes AI trustworthy. These four layers work together, each answering a
                    different learner trust question.
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="Solution" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Solution</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>The product those decisions built.</h3>
            <p className="text-slate-600 text-sm text-left mt-3">
              Each decision maps directly to the learner experience from onboarding to continuous
              adaptation.
            </p>
          </div>

          <div className={`border ${amiBorder} bg-white p-4 md:p-6`}>
            <div className="space-y-7">
              {SOLUTION_STEPS.map((step) => (
                <div key={step.title} className={`grid lg:grid-cols-2 gap-5 pb-6 border-b ${amiBorderSubtle} last:border-b-0 last:pb-0`}>
                  <div className={`border border-dashed ${amiBorderSubtle} bg-white p-3`}>
                    <img src={amiImg(step.media)} alt={step.title} className="w-full h-auto max-h-[280px] object-contain" />
                  </div>
                  <div>
                    <span className="inline-flex bg-white border border-gray-300 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: 'rgb(52 118 128 / 0.88)' }}>
                      {step.badge}
                    </span>
                    <h4 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">{step.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.chips.map((chip) => (
                        <span key={chip} className={`inline-flex border ${amiBorderSubtle} bg-white px-3 py-1 text-xs text-slate-600`}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="Reflection" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Reflection</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>Four lessons that shaped how I design AI experiences.</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {REFLECTIONS.map((lesson) => (
              <div key={lesson.no} className={`p-5 bg-slate-50 border ${amiBorderSubtle}`}>
                <p className="text-3xl leading-none mb-2" style={{ color: `rgb(${amiAccentRgb} / 0.32)` }}>
                  {lesson.no}
                </p>
                <h4 className="font-bold text-sm mb-2 text-slate-900">{lesson.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{lesson.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Video" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Vedio</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>End-to-end product walkthrough.</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className={`border ${amiBorder} bg-white p-4 md:p-6`}>
            <p
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: 'rgb(52 118 128 / 0.88)' }}
              >
                DEMO
              </p>
              <video
                className={`w-full h-auto border ${amiBorderSubtle}`}
                controls
                preload="metadata"
              >
                <source src={amiImg('Final Demo.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`border ${amiBorder} bg-white p-4 md:p-6`}>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: 'rgb(52 118 128 / 0.88)' }}
              >
                Full presentation
              </p>
              <div className={`w-full aspect-video border ${amiBorderSubtle}`}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/X_UXuYaqbr4"
                  title="Ami full presentation"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .ai-tutor-page *::selection {
          background: #e2e8f0;
          color: #0f172a;
        }
        .ai-tutor-page *::-moz-selection {
          background: #e2e8f0;
          color: #0f172a;
        }
      `}</style>
    </div>
  );
}

