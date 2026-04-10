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
                <div>
                  <div className={`border ${amiBorderSubtle} p-4 mb-3`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">How onboarding evolved</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>Stage 1: free-text self-description made style inference hard and inconsistent.</li>
                      <li>Stage 2: questionnaire improved data quality but violated low-friction startup goals.</li>
                      <li>Stage 3: persona portraits felt indirect and distancing.</li>
                      <li className="text-slate-800 font-medium">Stage 4 (final): five behavioral labels mapping to FSLSM internally.</li>
                    </ul>
                  </div>
                  <p className="text-sm bg-white border border-gray-300 p-3 mb-3 italic" style={{ color: 'rgb(52 118 128 / 0.88)' }}>
                    "Simple is not fewer steps. Simple is one clear decision at a time."
                  </p>
                  <p className="text-sm text-slate-600">
                    Resume upload stayed optional: better skill-gap quality when provided, but no hard block
                    when omitted.
                  </p>
                </div>
                <div>
                  <div className={`border ${amiBorder} bg-white p-3 mb-3`}>
                    <img src={amiImg('ami-onboarding.png')} alt="Onboarding step 2" className="w-full h-auto" />
                    <p className="text-xs text-slate-500 italic mt-2">
                      One question per screen with learner-facing language: Interactive, Textual, Visual,
                      Concise, Balanced.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 text-sm text-slate-600">
                    Learning style and resume can be changed later in Profile, so AI understanding remains
                    revisable instead of fixed.
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
                <div>
                  <div className={`grid md:grid-cols-2 border ${amiBorderSubtle} mb-3`}>
                    <div className="p-3 border-b md:border-b-0 md:border-r border-gray-300">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-1">Option A</p>
                      <p className="text-sm text-slate-600">Skip review for fewer steps, but users cannot challenge wrong inferences.</p>
                    </div>
                    <div className="p-3 bg-white border border-gray-300">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: 'rgb(52 118 128 / 0.88)' }}>Chosen: Option B</p>
                      <p className="text-sm" style={{ color: 'rgb(52 118 128 / 0.88)' }}>Show reasoning and allow edits before path generation.</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Final layout used split panels: left side for scan speed, right side for evidence,
                    confidence, and granular controls.
                  </p>
                </div>
                <div className={`border ${amiBorder} bg-white p-3`}>
                  <img src={amiImg('ami-skillgap.png')} alt="Skill gap analysis view" className="w-full h-auto" />
                  <p className="text-xs text-slate-500 italic mt-2">
                    Required Level and Current Level are separate sliders, enabling precise learner
                    correction instead of one blunt override.
                  </p>
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
                <div>
                  <p className="text-sm text-slate-600 mb-3">
                    Global availability increased distraction during onboarding and review. Session-only
                    placement preserved flow focus and improved context quality for chatbot responses.
                  </p>
                  <p className="text-sm bg-white border border-gray-300 p-3 italic" style={{ color: 'rgb(52 118 128 / 0.88)' }}>
                    Same feature, different meaning based on placement. This was an IA decision, not only
                    a feature decision.
                  </p>
                </div>
                <div className={`border ${amiBorderSubtle} bg-white`}>
                  <div className="p-3 border-b border-gray-300">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500 mb-1">Onboarding</p>
                    <p className="text-sm text-red-600">Not available: keeps attention on setup decisions.</p>
                  </div>
                  <div className="p-3 border-b border-gray-300">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500 mb-1">Skill gap review</p>
                    <p className="text-sm text-red-600">Not available: prevents escape from review task.</p>
                  </div>
                  <div className="p-3 bg-white border border-gray-300">
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold mb-1" style={{ color: 'rgb(52 118 128 / 0.88)' }}>Learning session</p>
                    <p className="text-sm" style={{ color: 'rgb(52 118 128 / 0.88)' }}>Available: persistent sidebar with full session context.</p>
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
                <div>
                  <p className="text-sm text-slate-600 mb-3">
                    Sessions are RAG-grounded to instructor-uploaded PDFs. Claims include source and page
                    numbers so learners can verify evidence.
                  </p>
                  <div className={`border ${amiBorderSubtle} p-3`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Why this is UX, not only engineering</p>
                    <p className="text-sm text-slate-600">
                      Surfacing citations changes the product relationship: from "AI tells me" to "AI shows
                      me where this came from."
                    </p>
                  </div>
                </div>
                <div className={`border ${amiBorderSubtle} bg-white`}>
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

