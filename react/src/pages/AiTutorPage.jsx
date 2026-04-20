import { useEffect, useState } from 'react';
import { amiSectionHead as AMI, amiAccentRgb, openSans, amiBorder, amiBorderSubtle } from '../styles/caseStudyTheme.js';

/** Nielsen Norman-style heuristics — how we applied them in this product (not a checklist; a design lens). */
const UX_PRINCIPLES_LENS = [
  {
    principle: 'Match between system and the real world',
    application:
      'FSLSM stays in the engine; learners see plain behavioral labels so vocabulary matches how people describe themselves, not the paper.',
  },
  {
    principle: 'Visibility of system status',
    application:
      'Skill gap review shows reasoning and confidence; sessions surface where answers come from so the system never feels like a black box.',
  },
  {
    principle: 'User control and freedom',
    application:
      'Optional resume, adjustable levels, include/ignore, and editable profile give exits and corrections without punishing early choices.',
  },
  {
    principle: 'Recognition rather than recall',
    application:
      'One decision per onboarding screen and a scannable skill list with a detail panel reduce memory load compared to long forms or blank fields.',
  },
  {
    principle: 'Help users recognize, diagnose, and recover from errors',
    application:
      'Reviewing inferred gaps before path generation turns “wrong AI” into a fixable moment instead of silent mistrust.',
  },
];

const RESEARCH_SUMMARY =
  'Research highlighted three issues: early onboarding friction, invisible AI trust gaps, and a mismatch between model language and user mental models.';

const RESEARCH_FINDINGS = [
  {
    no: '01',
    title: 'The product asked for trust before it earned it.',
    body: 'The highest-friction moment was onboarding: users were expected to provide inputs and preferences before the system had shown enough value to justify that effort.',
  },
  {
    no: '02',
    title: 'Hidden AI felt harder to trust than complex content.',
    body: 'Learners were less concerned with whether the system was advanced, and more concerned with whether they could understand and challenge its reasoning.',
  },
  {
    no: '03',
    title: 'Research-backed logic needed learner-facing language.',
    body: "FSLSM was useful inside the system, but not meaningful in the interface. The model didn't need replacement; it needed translation.",
  },
];

const DECISION_SUMMARIES = [
  {
    no: '01',
    label: 'Learning Style Translation',
    title: 'Translate learning-style theory into behavioral labels.',
    intro:
      'Instead of asking learners to describe themselves in abstract terms or exposing academic categories, I mapped the model to plain-language options such as Interactive, Textual, Visual, Concise, and Balanced.',
    why: 'Preserved pedagogical rigor while making onboarding faster and more self-recognizable.',
  },
  {
    no: '02',
    label: 'Skill Gap Review',
    title: 'Show AI skill-gap analysis before generating the path.',
    intro:
      'Rather than silently inferring ability and locking users into a path, I introduced a review step where learners could inspect reasoning, confidence, and levels before proceeding.',
    why: 'Trust increased when inference became collaborative instead of hidden.',
  },
  {
    no: '03',
    label: 'Chatbot Scope',
    title: 'Limit the chatbot to active learning sessions.',
    intro:
      'I chose not to make the chatbot globally available. Instead, it appears only when a learner is inside a lesson, where it has topic, skill, and session context.',
    why: 'Protected focus during setup and made AI support more relevant when it did appear.',
  },
  {
    no: '04',
    label: 'Content Citations',
    title: 'Make citations visible inside the session.',
    intro:
      'Because hallucination was a core trust risk, I surfaced source attribution and page-level citations directly in the learning experience.',
    why: 'Shifted trust from brand claims to checkable behavior.',
  },
  {
    no: '05',
    label: 'Guided Onboarding Flow',
    title: 'Break onboarding into guided steps.',
    intro:
      'I separated onboarding into three decisions: goal → learning style → resume (optional).',
    why: 'Users could focus on one decision at a time, reducing cognitive load without sacrificing personalization quality.',
  },
];

const FINAL_EXPERIENCE_HIGHLIGHTS = [
  {
    eyebrow: 'Personalized onboarding',
    title: 'Lightweight, guided first-time setup',
    body: 'Learners begin with a lightweight, guided flow that captures their goal, learning preference, and optional background information without overwhelming them on first use.',
  },
  {
    eyebrow: 'Collaborative adaptation',
    title: 'AI inference becomes reviewable',
    body: 'Instead of hiding AI inference, Ami surfaces skill-gap analysis before path generation, allowing learners to review, adjust, and shape the system’s understanding of them.',
  },
  {
    eyebrow: 'Contextual learning support',
    title: 'Help that only appears when it fits',
    body: 'Once a session begins, lesson format adapts to the learner’s preference through text, visuals, audio, or video, while the chatbot appears only where it can provide relevant, in-context help.',
  },
  {
    eyebrow: 'Visible trust signals',
    title: 'Legible system behavior over time',
    body: 'Citations, progress updates, profile controls, and AI transparency cues work together to make the system’s behavior legible over time.',
  },
];

const FINAL_EXPERIENCE_BLOCKS = [
  {
    title: 'Research-backed learner model',
    media: 'ami-onboarding.gif',
    body: 'How the system learns about the learner with low friction — goal, style, and optional resume feed a model grounded in FSLSM without exposing academic terms.',
  },
  {
    title: 'Adaptive session experience',
    media: 'ami-session.gif',
    body: 'How learning adapts in real time without losing focus — format flexes between text, visuals, audio, and video while the chatbot stays scoped to the active session.',
  },
  {
    title: 'Trust by design',
    media: 'ami-verified-content.gif',
    body: 'How trust stays visible and checkable across the product — citations, verified content, and transparency cues make AI reasoning inspectable, not opaque.',
  },
];

const SOLUTION_STEPS = [
  {
    badge: 'Step 1',
    title: 'Onboarding',
    media: 'ami-onboarding.gif',
    body: 'Split into 3 steps, one question per screen. Resume upload is optional to reduce startup friction.',
    chips: ['Enter goal', 'Learning style', 'Resume (optional)'],
    uxPrinciple:
      'Progressive disclosure + recognition over recall — staged questions and labeled choices instead of one dense screen or free-text guesswork.',
  },
  {
    badge: 'Step 2',
    title: 'Skill Gap Review',
    media: 'ami-skillgap.png',
    body: 'AI explains inferred gaps with confidence and rationale. Learners can adjust levels, ignore skills, or proceed.',
    chips: ['AI suggests + explains', 'Learner adjusts levels', 'Include / Ignore'],
    uxPrinciple:
      'Visibility of system status + user control — show inference before commitment so learners can correct the model, not fight it.',
  },
  {
    badge: 'Steps 3 & 4',
    title: 'Learning Path & Session',
    media: 'ami-session.gif',
    body: 'Path structure adapts to learning style. Session delivery adapts format in real time with contextual chatbot support.',
    chips: ['Text', 'Diagram', 'Video', 'Audio'],
    uxPrinciple:
      'Flexibility and efficiency of use + consistency — format and pacing flex to style while session patterns stay predictable.',
  },
  {
    badge: 'Step 5',
    title: 'Quiz & Continuous Adaptation',
    media: 'ami-quiz.gif',
    body: 'Three triggers keep learner profile data fresh without additional burden.',
    chips: ['Quiz result', 'Chatbot behavior', 'Manual profile updates'],
    uxPrinciple:
      'Visibility of system status — outcomes and behavior quietly refresh the model so the product stays aligned without extra homework.',
  },
  {
    badge: 'Step 6',
    title: 'Profile, Analytics & AI Transparency',
    media: 'ami-profile.gif',
    body: 'Trust remains visible through profile controls, progress analytics, citation behavior, and transparency commitments.',
    chips: ['Profile', 'Analytics', 'AI Transparency'],
    uxPrinciple:
      'Error prevention and recovery at scale — explicit data use, checkable sources, and disclosed limits turn trust into sustained behavior.',
  },
];

const REFLECTION_INTRO =
  'This project changed how I think about AI product design. Trust does not come from model sophistication alone. It comes from whether users can understand system behavior, verify outputs, and recover when the system gets something wrong.';

const REFLECTION_BULLETS = [
  'Translating a model is a UX problem, not just a content problem.',
  'Adding the right friction can reduce overall uncertainty.',
  'Trust grows when the system stays legible over time.',
];

const OVERVIEW_WORKFLOW_STEPS = [
  'Problem Definition',
  'UX Structure in Figma',
  'AI-Assisted Build with Cursor + Claude Code',
  'Interactive Prototype in React + TypeScript',
  'Client Feedback & Refinement',
];

const SLIDE_SECTIONS = [
  { id: 'Project-Background', label: 'Project Background' },
  { id: 'Challenges-Constraints', label: 'Challenges' },
  { id: 'Thinking-Strategy', label: 'Strategy' },
  { id: 'Outputs-Validation', label: 'Outputs' },
  { id: 'Reflection-Takeaways', label: 'Reflection' },
  { id: 'Video', label: 'Video' },
];

export default function AiTutorPage() {
  const amiImg = (name) => `${import.meta.env.BASE_URL}img/ami/${name}`;
  const [isSlideMode, setIsSlideMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedDecision, setExpandedDecision] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [uxLensExpanded, setUxLensExpanded] = useState(false);

  useEffect(() => {
    const syncSlideModeFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const enabled = params.get('mode') === 'slide';
      setIsSlideMode(enabled);
      window.dispatchEvent(new CustomEvent('aitutor-slide-mode-change', { detail: enabled }));
    };

    syncSlideModeFromUrl();
    window.addEventListener('popstate', syncSlideModeFromUrl);
    return () => window.removeEventListener('popstate', syncSlideModeFromUrl);
  }, []);

  useEffect(() => {
    if (!isSlideMode) return;

    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goToSlide(activeSlide + 1);
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(activeSlide - 1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isSlideMode, activeSlide]);

  const setSlideModeInUrl = (enabled) => {
    const url = new URL(window.location.href);
    if (enabled) {
      url.searchParams.set('mode', 'slide');
    } else {
      url.searchParams.delete('mode');
    }
    window.history.replaceState({}, '', url.toString());
    setIsSlideMode(enabled);
    window.dispatchEvent(new CustomEvent('aitutor-slide-mode-change', { detail: enabled }));
    if (enabled) {
      setActiveSlide(0);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const goToSlide = (nextIdx) => {
    const safeIdx = Math.max(0, Math.min(nextIdx, SLIDE_SECTIONS.length - 1));
    setActiveSlide(safeIdx);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div
      className={`ai-tutor-page min-h-screen bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900 scroll-smooth pb-2 ${isSlideMode ? 'slide-mode' : ''}`}
      style={openSans}
    >
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        {!isSlideMode ? (
          <button
            type="button"
            onClick={() => setSlideModeInUrl(true)}
            className="border border-gray-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm hover:bg-slate-50"
          >
            Slide Mode
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => goToSlide(activeSlide - 1)}
              className="border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-40"
              disabled={activeSlide === 0}
            >
              Prev
            </button>
            <div className="border border-gray-300 bg-white px-3 py-2 text-sm font-semibold tracking-wide text-slate-700 shadow-sm">
              {activeSlide + 1} / {SLIDE_SECTIONS.length}
            </div>
            <button
              type="button"
              onClick={() => goToSlide(activeSlide + 1)}
              className="border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-40"
              disabled={activeSlide === SLIDE_SECTIONS.length - 1}
            >
              Next
            </button>
            <button
              type="button"
              onClick={() => setSlideModeInUrl(false)}
              className="border border-gray-300 bg-white px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Exit
            </button>
          </>
        )}
      </div>
      {isSlideMode && (() => {
        const TOP_NAV_GROUPS = [
          { label: 'Background', indices: [0] },
          { label: 'Challenges', indices: [1] },
          { label: 'Strategy', indices: [2] },
          { label: 'Outputs', indices: [3] },
          { label: 'Reflection', indices: [4] },
          { label: 'Video', indices: [5] },
        ];
        return (
          <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)] overflow-x-auto border border-gray-300 bg-white/95 px-2 py-1.5 shadow-sm backdrop-blur">
            <div className="flex items-center gap-1">
              {TOP_NAV_GROUPS.map((g) => {
                const isActive = g.indices.includes(activeSlide);
                const activePos = isActive ? g.indices.indexOf(activeSlide) + 1 : 0;
                return (
                  <button
                    key={g.label}
                    type="button"
                    onClick={() => goToSlide(g.indices[0])}
                    title={SLIDE_SECTIONS[activeSlide]?.label}
                    className={`whitespace-nowrap px-3 py-1.5 text-xs uppercase tracking-[0.14em] transition-colors ${
                      isActive
                        ? 'bg-gray-700 text-white font-bold'
                        : 'text-slate-900 hover:font-bold font-medium'
                    }`}
                  >
                    {g.label}
                    {isActive && g.indices.length > 1 && (
                      <span className="ml-1.5 opacity-70">
                        {activePos}/{g.indices.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })()}

      {isSlideMode && (
        <SlideDeck
          activeSlide={activeSlide}
          amiImg={amiImg}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      )}

      <section id="Overview" className={`pt-2 pb-10 px-6 ${isSlideMode ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-600 mb-4">
            AI-Powered Education · UX Case Study · 2026
          </div>
          <h1 className="text-2xl md:text-2xl font-extrabold leading-[1.05] tracking-tight mb-4">
            Designing trust into an AI tutor, 
         
            <span className="italic font-medium text-slate-600" style={{ color: `rgb(${amiAccentRgb})` }}> from the ground up.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-4xl leading-relaxed mb-4">
            Ami is an adaptive learning platform built on a research-backed AI baseline. The design
            challenge was not only to make personalization work, but to make learners understand,
            verify, and trust how the system adapts to them.
          </p>
          <div
            className=" mb-0 rounded-[2px] p-2 text-xs"
            style={{ borderWidth: "0px", borderColor: "rgba(0, 0, 0, 0)", borderStyle: "none", borderImage: "none" }}
          >
            <p className="text-sm md:text-base text-[rgba(52,118,128,1)] leading-relaxed font-medium">
              Over a 12-week end-to-end process, I translated a technically strong tutoring model into a
              learner-facing experience through UX research, product design, and front-end prototyping.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-1 text-xs md:text-sm">
              {OVERVIEW_WORKFLOW_STEPS.map((step, idx) => (
                <div key={step} className="inline-flex items-center gap-1">
                  <span className="inline-flex rounded-1 border border-[rgba(52,118,128,0.55)] bg-green-50 px-3 py-1 text-slate-700">
                    {step}
                  </span>
                  {idx < OVERVIEW_WORKFLOW_STEPS.length - 1 && (
                    <span className="text-[rgba(52,118,128,0.9)]" aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-white p-4 md:p-6 mb-8`}>
            <img
              src={amiImg('overview.gif')}
              alt="Ami product overview"
              className={`w-full md:w-2/3 h-auto border-2 border-gray-300 ${amiBorderSubtle}`}
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

      <section id="Problem" className={`py-1 px-6 pb-12 ${isSlideMode ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-5">
            <h2 className={AMI.h2} style={AMI.h2Style}>Problem</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
              The system was technically strong, but learner trust was undefined.
            </h3>
          </div>

          <div className="max-w-4xl space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
            <p>
              The original brief described model behavior, curriculum intelligence, and personalization
              logic. But from a product perspective, the core risk was trust: if learners could not
              understand why the system assessed them, adapted content, or generated a path, they would
              hesitate early, disengage, or never return.
            </p>
            <p
              className="border-l-4 pl-4"
              style={{ borderColor: `rgb(${amiAccentRgb} / 0.6)`, color: `rgb(${amiAccentRgb})` }}
            >
              This reframed the challenge from <em>"How do we build adaptive tutoring?"</em> to{' '}
              <em>"How do we make adaptive tutoring feel understandable, editable, and trustworthy?"</em>
            </p>
          </div>
        </div>
      </section>

      <section id="Research" className={`py-1 px-6 pb-12 ${isSlideMode ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Research</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
              Landscape, journey maps, then synthesis into product direction.
            </h3>
          </div>

          <p className="text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed mb-10">
            {RESEARCH_SUMMARY}
          </p>

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
                Ami combines FSLSM + SOLO + RAG-grounded content with a UX layer designed for real learners.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Journey mapping</p>
            <h4 className="text-lg font-semibold mb-3">Mapping emotional cost before and after Ami</h4>
            <p className="text-sm text-slate-600 mb-4">
              The steepest drop happened during setup and tool-switching, not during difficult content. This
              insight directly shaped onboarding and trust-related decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className={`border ${amiBorder} bg-white p-3`}>
                <img
                  src={amiImg('current-journey-map.png')}
                  alt="Current journey map without Ami"
                  className="w-full h-auto"
                />
                <p className="text-xs text-slate-500 italic mt-2">
                  Without Ami: emotional arc declines from hopeful to discouraged due to high cognitive load
                  and unclear progress.
                </p>
              </div>
              <div className={`border ${amiBorder} bg-white p-3`}>
                <img
                  src={amiImg('future-journey-map.png')}
                  alt="Future journey map with Ami"
                  className="w-full h-auto"
                />
                <p className="text-xs text-slate-500 italic mt-2">
                  With Ami: arc rises from clear direction to trust building through staged support and visible
                  reasoning.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Research findings</p>
            <h4 className="text-lg font-semibold text-slate-900 mb-6">Three findings shaped the product direction.</h4>
            <div className="grid md:grid-cols-3 gap-3">
              {RESEARCH_FINDINGS.map((item) => (
                <div key={item.no} className={`border ${amiBorderSubtle} bg-white p-5`}>
                  <p className="text-3xl leading-none mb-3" style={{ color: `rgb(${amiAccentRgb} / 0.32)` }}>
                    {item.no}
                  </p>
                  <h4 className="font-bold text-sm mb-2 text-slate-800 leading-snug">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="Decisions" className={`py-1 px-6 pb-12 ${isSlideMode ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Key Design Decisions</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
              Key decisions that turned technical capability into learner trust.
            </h3>
            <p className="text-slate-600 text-sm mt-3">
              Click any decision to expand the full trade-off study, iterations, and final design.
            </p>
          </div>

          <div className={`mb-8 border ${amiBorderSubtle} bg-slate-50/90 p-5 md:p-6`}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                UX principles as a research lens
              </p>
              {uxLensExpanded && (
                <button
                  type="button"
                  onClick={() => setUxLensExpanded(false)}
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 hover:text-slate-800"
                >
                  Collapse
                </button>
              )}
            </div>
            {!uxLensExpanded ? (
              <button
                type="button"
                onClick={() => setUxLensExpanded(true)}
                className="w-full text-left rounded-sm border border-transparent hover:border-gray-300 hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(52_118_128/0.5)] transition-colors p-0"
              >
                <p className="text-sm text-slate-600 max-w-4xl leading-relaxed line-clamp-2 mb-3">
                  Research findings were triangulated against Nielsen Norman usability heuristics; those same
                  heuristics became the shared language in design reviews when we weighed fewer steps versus
                  more transparency — arguing in learner terms, not only feasibility.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {UX_PRINCIPLES_LENS.map((row) => (
                    <span
                      key={row.principle}
                      className={`inline-flex max-w-full truncate border ${amiBorderSubtle} bg-white px-2 py-0.5 text-[10px] text-slate-600`}
                      title={row.principle}
                    >
                      {row.principle}
                    </span>
                  ))}
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: 'rgb(52 118 128 / 0.88)' }}
                >
                  Expand full lens →
                </span>
              </button>
            ) : (
              <>
                <p className="text-sm text-slate-600 mb-4 max-w-4xl leading-relaxed">
                  Research findings were triangulated against Nielsen Norman usability heuristics; those same
                  heuristics became the shared language in design reviews when we weighed fewer steps versus
                  more transparency — arguing in learner terms, not only feasibility.
                </p>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {UX_PRINCIPLES_LENS.map((row) => (
                    <div key={row.principle} className={`border ${amiBorderSubtle} bg-white p-4`}>
                      <p className="text-[11px] font-bold text-slate-800 leading-snug mb-2">{row.principle}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{row.application}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="grid md:grid-cols-5 gap-3 mb-6">
            {DECISION_SUMMARIES.map((d, idx) => {
              const isOpen = expandedDecision === idx;
              return (
                <button
                  key={d.no}
                  type="button"
                  onClick={() => setExpandedDecision(isOpen ? null : idx)}
                  className={`group text-left border bg-white p-4 flex flex-col gap-2 transition-all ${
                    isOpen
                      ? 'border-[rgba(52,118,128,0.88)] shadow-sm'
                      : 'border-gray-300 hover:border-[rgba(52,118,128,0.55)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-8 h-8 border border-gray-300 text-xs font-bold flex items-center justify-center ${
                        isOpen ? 'text-white' : ''
                      }`}
                      style={{
                        color: isOpen ? '#fff' : 'rgb(52 118 128 / 0.88)',
                        backgroundColor: isOpen ? 'rgb(52 118 128 / 0.88)' : '#fff',
                      }}
                    >
                      {d.no}
                    </span>
                    <span
                      className="text-lg leading-none select-none"
                      style={{ color: 'rgb(52 118 128 / 0.88)' }}
                      aria-hidden
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{d.label}</p>
                  <h4 className="text-sm font-semibold text-slate-900 leading-snug">{d.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-auto">
                    <span className="font-semibold text-slate-800">Why it mattered · </span>
                    {d.why}
                  </p>
                </button>
              );
            })}
          </div>

          <div className={`space-y-5 ${expandedDecision === null ? 'hidden' : ''}`}>
            {expandedDecision === 0 && (
            <article className={`border ${amiBorderSubtle} bg-white p-5 md:p-6`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="w-9 h-9 bg-white border border-gray-300 text-xs font-bold flex items-center justify-center" style={{ color: 'rgb(52 118 128 / 0.88)' }}>01</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Learning Style Translation</p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Translate FSLSM into behavioral labels learners actually recognize.
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

                </div>

                <div className="space-y-3">
                  <div className={`border ${amiBorder} bg-white p-3`}>
                    <img src={amiImg('ami-onboarding.gif')} alt="Final onboarding flow — goal, style, resume" className="w-full h-auto" />
                    <p className="text-xs text-slate-500 italic mt-2">
                      Final design — 3 guided steps, one question per screen, with learner-facing language instead of academic labels.
                    </p>
                  </div>

                  <div className={`border ${amiBorder} bg-white p-3`}>
                    <img src={amiImg('ami-profile.gif')} alt="Profile page showing behavioral style labels" className="w-full h-auto" />
                    <p className="text-xs text-slate-500 italic mt-2">
                      Profile — behavioral style labels stay visible and editable; FSLSM remains in the engine.
                    </p>
                  </div>

                  <div className={`border ${amiBorderSubtle} bg-white p-4 text-sm text-slate-600`}>
                    <p className="font-semibold text-slate-800 mb-1">Profile — the trust safety net</p>
                    Learning style and resume stay editable in Profile, so AI understanding is revisable, not fixed.
                  </div>
                </div>
              </div>
            </article>
            )}

            {expandedDecision === 1 && (
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
            )}

            {expandedDecision === 2 && (
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
                <div className="space-y-3">
                  <div className={`border ${amiBorder} bg-white p-3`}>
                    <img src={amiImg('ami-chatbot.gif')} alt="Session-scoped chatbot with full learning context" className="w-full h-auto" />
                    <p className="text-xs text-slate-500 italic mt-2">
                      Chatbot appears only inside an active learning session, carrying topic + style context.
                    </p>
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
              </div>
            </article>
            )}

            {expandedDecision === 3 && (
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
                  <div className={`border-b ${amiBorderSubtle} bg-white p-3`}>
                    <img
                      src={amiImg('ami-verified-content.gif')}
                      alt="Verified content with citation source and page references"
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-slate-500 italic mt-2">
                      In-session citation view: answers include source and page-level references learners can verify.
                    </p>
                  </div>
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
            )}

            {expandedDecision === 4 && (
            <article className={`border ${amiBorderSubtle} bg-white p-5 md:p-6`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="w-9 h-9 bg-white border border-gray-300 text-xs font-bold flex items-center justify-center" style={{ color: 'rgb(52 118 128 / 0.88)' }}>05</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">Guided Onboarding Flow</p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Split onboarding into guided steps: learning goal → learning style → resume.
                  </h4>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Problem · Decision · Outcome</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Problem:</span> Putting all onboarding inputs on one screen created cognitive load and drop-off.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Decision:</span> Sequence inputs into three guided steps: learning goal, learning style, then resume.</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold text-slate-800">Outcome:</span> Users focus on one decision at a time, with lower friction and clearer intent capture.</p>
                  </div>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Flow logic</p>
                    <p className="text-sm text-slate-600 mb-1">
                      1) <span className="font-semibold text-slate-800">Learning goal</span> sets direction.
                    </p>
                    <p className="text-sm text-slate-600 mb-1">
                      2) <span className="font-semibold text-slate-800">Learning style</span> tunes delivery.
                    </p>
                    <p className="text-sm text-slate-600">
                      3) <span className="font-semibold text-slate-800">Resume</span> enriches personalization (optional).
                    </p>
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
                    <img src={amiImg('ami-onboarding.gif')} alt="Guided onboarding flow — goal, style, resume" className="w-full h-auto" />
                    <p className="text-xs text-slate-500 italic mt-2">
                      Goal → Style → Resume — progressive disclosure, one decision per step.
                    </p>
                  </div>
                  <div className={`border ${amiBorderSubtle} bg-white p-4`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2">Why this works</p>
                    <p className="text-sm text-slate-600 mb-3">
                      The order mirrors learner mental models: start with intention, then preference, then optional depth.
                    </p>
                    <div className={`border ${amiBorderSubtle} bg-slate-50 p-3`}>
                      <p className="text-sm italic" style={{ color: 'rgb(52 118 128 / 0.88)' }}>
                        "Progressive disclosure works when each step answers one clear learner question."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            )}
          </div>
        </div>
      </section>

      <section id="Solution" className={`py-1 px-6 pb-12 ${isSlideMode ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Final Experience</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
              An end-to-end learning experience shaped by transparent AI decisions.
            </h3>
            <p className="text-slate-600 text-sm md:text-base max-w-4xl mt-3 leading-relaxed">
              The final product experience was designed to make AI personalization feel understandable,
              editable, and trustworthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {FINAL_EXPERIENCE_HIGHLIGHTS.map((h) => (
              <div key={h.title} className={`border ${amiBorderSubtle} bg-white p-5`}>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2"
                  style={{ color: 'rgb(52 118 128 / 0.88)' }}
                >
                  {h.eyebrow}
                </p>
                <h4 className="text-base font-semibold text-slate-900 mb-2">{h.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>

          <p
            className="mb-8 border-l-4 pl-4 text-sm md:text-base max-w-4xl leading-relaxed"
            style={{ borderColor: `rgb(${amiAccentRgb} / 0.6)`, color: `rgb(${amiAccentRgb})` }}
          >
            Together, these decisions turned a technically strong tutoring model into a product experience
            learners could understand, verify, and grow with.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {FINAL_EXPERIENCE_BLOCKS.map((b) => (
              <div key={b.title} className={`border ${amiBorder} bg-white flex flex-col`}>
                <div className={`border-b ${amiBorderSubtle} bg-white p-3`}>
                  <img src={amiImg(b.media)} alt={b.title} className="w-full h-auto" />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-slate-900">{b.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="VisualDirection" className={`py-1 px-6 pb-12 ${isSlideMode ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Visual Direction</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
              Step through the learner flow, one screen at a time.
            </h3>
            <p className="text-slate-600 text-sm mt-3">
              Click any step on the left to preview the corresponding screen and design note.
            </p>
          </div>

          <div className={`border ${amiBorder} bg-white grid md:grid-cols-[220px_1fr]`}>
            <div className={`border-b md:border-b-0 md:border-r ${amiBorderSubtle} flex md:flex-col overflow-x-auto`}>
              {SOLUTION_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`group text-left px-4 py-4 border-gray-200 md:border-b last:border-b-0 transition-colors shrink-0 md:shrink ${
                      isActive
                        ? 'bg-white'
                        : 'bg-slate-50 hover:bg-white'
                    }`}
                    style={
                      isActive
                        ? { borderLeft: '3px solid rgb(52 118 128 / 0.88)', paddingLeft: 'calc(1rem - 3px)' }
                        : { borderLeft: '3px solid transparent', paddingLeft: 'calc(1rem - 3px)' }
                    }
                  >
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em] mb-1"
                      style={{ color: isActive ? 'rgb(52 118 128 / 0.88)' : '#64748b' }}
                    >
                      {step.badge}
                    </p>
                    <p
                      className={`text-sm leading-snug ${isActive ? 'font-semibold text-slate-900' : 'text-slate-700'}`}
                    >
                      {step.title}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="p-4 md:p-6">
              {(() => {
                const step = SOLUTION_STEPS[activeStep];
                return (
                  <div>
                    <div className={`border ${amiBorderSubtle} bg-white p-3 mb-4`}>
                      <img
                        src={amiImg(step.media)}
                        alt={step.title}
                        className="w-full h-auto max-h-[440px] object-contain"
                      />
                    </div>
                    <span
                      className="inline-flex bg-white border border-gray-300 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3"
                      style={{ color: 'rgb(52 118 128 / 0.88)' }}
                    >
                      {step.badge}
                    </span>
                    <h4 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">{step.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.chips.map((chip) => (
                        <span
                          key={chip}
                          className={`inline-flex border ${amiBorderSubtle} bg-white px-3 py-1 text-xs text-slate-600`}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      <section id="Reflection" className={`py-1 px-6 pb-12 ${isSlideMode ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Reflection</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
              Trust is not a feature. It is a system of visible decisions.
            </h3>
          </div>

          <div className="max-w-4xl mb-8">
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">{REFLECTION_INTRO}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {REFLECTION_BULLETS.map((line, i) => (
              <div key={line} className={`border ${amiBorderSubtle} bg-white p-5`}>
                <p className="text-3xl leading-none mb-3" style={{ color: `rgb(${amiAccentRgb} / 0.32)` }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Video" className={`py-1 px-6 pb-12 ${isSlideMode ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className={AMI.h2} style={AMI.h2Style}>Vedio</h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>Live walkthrough.</h3>
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
        /* Decisions: global style.css uses Merriweather for headings + article p — force Open Sans here */
        #Decisions,
        #Decisions * {
          font-family: "Open Sans", sans-serif !important;
        }
        .ai-tutor-page.slide-mode .slide-deck-section {
          min-height: calc(100vh - 80px);
        }
      `}</style>
    </div>
  );
}

function SlideDeck({ activeSlide, amiImg, activeStep, setActiveStep }) {
  const accent = `rgb(${amiAccentRgb})`;
  const accentSoft = `rgb(${amiAccentRgb} / 0.12)`;

  const SlideFrame = ({ eyebrow, title, subtitle, children, wide = false }) => (
    <section className="slide-deck-section flex items-start px-8 md:px-16 pt-24 pb-10">
      <div className={`w-full ${wide ? 'max-w-7xl' : 'max-w-6xl'} mx-auto`}>
        {eyebrow && (
          <p
            className="text-xs md:text-sm font-bold uppercase tracking-[0.24em] mb-3"
            style={{ color: accent }}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.08] text-slate-900 mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-slate-600 max-w-4xl leading-relaxed mb-6">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );

  const PointCard = ({ index, title, body, highlight }) => (
    <div
      className={`border ${highlight ? '' : 'border-gray-300'} bg-white p-4`}
      style={highlight ? { borderColor: accent } : undefined}
    >
      {index !== undefined && (
        <p
          className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] mb-2"
          style={{ color: accent }}
        >
          {String(index + 1).padStart(2, '0')}
        </p>
      )}
      <p className="text-base md:text-lg font-semibold text-slate-900 mb-1">{title}</p>
      <p className="text-base text-slate-600 leading-relaxed">{body}</p>
    </div>
  );

  const Figure = ({ src, alt, caption }) => (
    <figure className="border border-gray-300 bg-white p-3">
      <img src={src} alt={alt} className="w-full h-auto max-h-[60vh] object-contain" />
      {caption && (
        <figcaption className="text-sm text-slate-500 italic mt-2">{caption}</figcaption>
      )}
    </figure>
  );

  switch (activeSlide) {
    case 0:
      return (
        <SlideFrame
          eyebrow="Slide 1 · Project Background"
          title="AMI — Designing trust into an AI tutor"
          subtitle="What existed, what was missing, and the core product challenge."
          wide
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-6">
            <Figure
              src={amiImg('overview.gif')}
              alt="AMI product overview"
              caption="Onboarding, session, and profile together show the learner-facing system."
            />
            <div className="grid grid-cols-1 gap-3 self-start">
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">What AMI already had</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>Research-backed learner model</li>
                  <li>AI-driven skill gap analysis</li>
                  <li>RAG-grounded course content</li>
                  <li>Personalized learning path generation</li>
                </ul>
              </div>
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">What was still missing</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>Why the system assessed them that way</li>
                  <li>Why it generated a certain path</li>
                  <li>How AI adapted over time</li>
                </ul>
              </div>
              <div className="border border-gray-300 p-4" style={{ backgroundColor: accentSoft }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: accent }}>
                  Core product challenge
                </p>
                <p className="text-base font-semibold leading-snug text-slate-900">
                  Turn a model-driven AI tutor into an experience that feels understandable, editable, and trustworthy.
                </p>
              </div>
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">My role</p>
                <p className="text-sm text-slate-700">
                  UX Research<br />
                  Product Design<br />
                  Front-end Prototyping<br />
                  Built key flows in React + TypeScript using Cursor + Claude
                </p>
              </div>
            </div>
          </div>
        </SlideFrame>
      );

    case 1:
      return (
        <SlideFrame
          eyebrow="Slide 2 · Challenges and Constraints"
          title="The challenge was not only interface design. It was trust design."
          wide
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-6">
            <div className="grid grid-cols-1 gap-4 self-start">
              <Figure
                src={amiImg('current-journey-map.png')}
                alt="Journey map showing friction and emotional drop-off"
                caption="Journey map: the steepest emotional drop happened during setup and tool-switching, not difficult learning."
              />
              <Figure
                src={amiImg('Competitive-positioning-matrix.png')}
                alt="Competitive positioning matrix"
                caption="Competitive review: Ami aimed for the under-served space between pedagogical rigor and usability."
              />
            </div>
            <div className="grid grid-cols-1 gap-3 self-start">
              <PointCard
                index={0}
                title="System logic did not match learner language"
                body="FSLSM worked inside the platform, but academic theory was not meaningful in the interface."
              />
              <PointCard
                index={1}
                title="Trust was weak by default"
                body="If learners could not see how AI reasoned, the product felt like a black box."
              />
              <PointCard
                index={2}
                title="Speed and trust had to be balanced"
                body="Fewer steps vs. more transparency. Faster onboarding vs. better personalization."
              />
              <PointCard
                index={3}
                title="Static screens were not enough"
                body="This was an adaptive experience, so I had to design both interface and behavior."
                highlight
              />
            </div>
          </div>
        </SlideFrame>
      );

    case 2:
      return (
        <SlideFrame
          eyebrow="Slide 3 · Thinking and Strategy"
          title="I reframed the design question, then mapped each trust problem to a product move."
          wide
        >
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-6">
            <div className="grid grid-cols-2 gap-3 self-start">
              <Figure src={amiImg('ami-onboarding.gif')} alt="Onboarding flow" caption="Translate theory into learner language." />
              <Figure src={amiImg('ami-skillgap.png')} alt="Skill gap review" caption="Make AI inference reviewable." />
              <Figure src={amiImg('ami-chatbot.gif')} alt="Chatbot in session" caption="Scope the chatbot to the right context." />
              <Figure src={amiImg('ami-verified-content.gif')} alt="Verified content citations" caption="Make trust visible in-session." />
            </div>
            <div className="grid grid-cols-1 gap-3 self-start">
              <div className="border border-gray-300 p-4" style={{ backgroundColor: accentSoft }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: accent }}>
                  Reframe
                </p>
                <p className="text-base font-semibold text-slate-900 leading-snug">
                  Not “How do we build adaptive tutoring?” but “How do we make adaptive tutoring feel understandable, editable, and trustworthy?”
                </p>
              </div>
              <PointCard
                index={0}
                title="Translate theory into learner language"
                body="FSLSM → Interactive, Textual, Visual, Concise, Balanced."
              />
              <PointCard
                index={1}
                title="Make AI inference reviewable"
                body="Added Skill Gap Review so learners could inspect and adjust the model."
              />
              <PointCard
                index={2}
                title="Scope the chatbot to the right context"
                body="Available only during active learning sessions."
              />
              <PointCard
                index={3}
                title="Make trust visible"
                body="Added citations and source references directly into the session experience."
              />
            </div>
          </div>
        </SlideFrame>
      );

    case 3:
      return (
        <SlideFrame
          eyebrow="Slide 4 · Key Outputs and Validation"
          title="The output was not just polished screens. It was a testable product behavior."
          wide
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-6">
            <div className="border border-gray-300 bg-white p-3 self-start">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {SOLUTION_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] border transition-colors ${
                        isActive
                          ? 'border-gray-700 bg-gray-700 text-white'
                          : 'border-gray-300 bg-white text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {step.badge}
                    </button>
                  );
                })}
              </div>
              <Figure
                src={amiImg(SOLUTION_STEPS[activeStep].media)}
                alt={SOLUTION_STEPS[activeStep].title}
                caption={SOLUTION_STEPS[activeStep].body}
              />
              <div className="mt-3 border border-gray-300 bg-slate-50 p-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Current page
                </p>
                <p className="text-base md:text-lg font-semibold text-slate-900">{SOLUTION_STEPS[activeStep].title}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {SOLUTION_STEPS[activeStep].chips.map((chip) => (
                    <span key={chip} className="inline-flex border border-gray-300 bg-white px-2.5 py-1 text-xs text-slate-600">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 self-start">
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Key outputs</p>
                <ul className="space-y-2 text-base md:text-lg text-slate-700">
                  <li>Guided onboarding: Goal → Style → Resume (optional)</li>
                  <li>Skill Gap Review with reasoning, confidence, and editable levels</li>
                  <li>Contextual learning session across text, visuals, audio, and video</li>
                  <li>Multi-layer trust system: profile, reasoning, citations, transparency</li>
                </ul>
              </div>
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">How I validated the work</p>
                <ul className="space-y-2 text-base md:text-lg text-slate-700">
                  <li>Used research findings and journey mapping to locate trust gaps</li>
                  <li>Compared multiple interaction approaches before choosing the final flow</li>
                  <li>Built interactive prototypes with Cursor + Claude</li>
                  <li>Used prototypes to validate product behavior, not just UI screens</li>
                </ul>
              </div>
            </div>
          </div>
        </SlideFrame>
      );

    case 4:
      return (
        <SlideFrame
          eyebrow="Slide 5 · Reflection and Takeaways"
          title="Trust is not a feature. It is a system of visible decisions."
          wide
        >
          <div className="grid md:grid-cols-[1.05fr_1fr] gap-6">
            <Figure
              src={amiImg('ami-profile.gif')}
              alt="Profile and trust-related product screen"
              caption="Trust stays visible when learners can inspect, verify, and adjust the system over time."
            />
            <div className="grid grid-cols-1 gap-3 self-start">
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">What I learned</p>
                <ul className="space-y-2 text-base md:text-lg text-slate-700">
                  <li>A designer’s role is not just to make AI usable — it is to make AI understandable.</li>
                  <li>Fewer steps are not always better — the right friction can increase trust.</li>
                  <li>Trust is not one feature — it is built through a system of visible decisions.</li>
                </ul>
              </div>
              <div className="border border-gray-300 p-4" style={{ backgroundColor: accentSoft }}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: accent }}>
                  Biggest takeaway
                </p>
                <p className="text-xl md:text-2xl font-semibold leading-snug text-slate-900">
                  Trust is not a feature. It is a system of visible decisions.
                </p>
              </div>
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">How this changed me</p>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  I now think more about product logic, not just interface design. I pay more attention to how users understand, verify, and adjust AI behavior.
                </p>
              </div>
            </div>
          </div>
        </SlideFrame>
      );

    case 5:
      return (
        <SlideFrame
          eyebrow="Video"
          title="Live walkthrough."
          subtitle="Happy to deep-dive on any decision, flow, or trade-off."
          wide
        >
          <div className="border border-gray-300 bg-white p-3 max-w-4xl">
            <video className="w-full h-auto" controls preload="metadata">
              <source src={amiImg('Final Demo.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SlideFrame>
      );

    case 6:
      return (
        <SlideFrame
          eyebrow="Decision 01 · Learning Style Translation"
          title="Translate FSLSM into behavioral labels learners recognize."
          subtitle="FSLSM stayed in the engine. The UI exposed five plain-language options learners could actually map to themselves."
          wide
        >
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-5">
            <div className="space-y-4 self-start">
              <Figure
                src={amiImg('ami-onboarding.gif')}
                alt="Guided onboarding with behavioral style selection"
                caption="One decision per step, learner-facing language."
              />
              <Figure
                src={amiImg('ami-profile.gif')}
                alt="Profile page exposing behavioral style labels"
                caption="Profile — behavioral labels stay visible and editable; FSLSM stays in the engine."
              />
            </div>
            <div className="grid grid-cols-1 gap-3 self-start">
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Problem · Decision · Outcome</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Problem:</span> Academic terms (FSLSM) missed learner mental models.</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Decision:</span> Expose 5 behavioral labels, keep FSLSM internal.</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Outcome:</span> Learner-recognizable inputs, rigor preserved.</p>
              </div>
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">How it evolved</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✕ Free text → inconsistent FSLSM inference</li>
                  <li>✕ Long questionnaire → too much friction</li>
                  <li>✕ Persona cards → felt distant</li>
                  <li style={{ color: accent }}>✓ Behavioral labels mapped to FSLSM</li>
                </ul>
              </div>
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">5 options → FSLSM mapping</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex border border-gray-300 px-2 py-1 text-xs text-slate-700">Interactive</span>
                  <span className="inline-flex border border-gray-300 px-2 py-1 text-xs text-slate-700">Textual</span>
                  <span className="inline-flex border border-gray-300 px-2 py-1 text-xs" style={{ color: accent }}>Visual ✓</span>
                  <span className="inline-flex border border-gray-300 px-2 py-1 text-xs text-slate-700">Concise</span>
                  <span className="inline-flex border border-gray-300 px-2 py-1 text-xs text-slate-700">Balanced</span>
                </div>
                <p className="text-sm text-slate-700">
                  Users never see FSLSM terms; they feel it through session structure, pacing, and format.
                </p>
              </div>
            </div>
          </div>
        </SlideFrame>
      );

    case 7:
      return (
        <SlideFrame
          eyebrow="Decision 02 · Skill Gap Review"
          title="Show the AI's reasoning. Let users adjust it."
          subtitle="Adding a step increased trust and completion — useful friction."
          wide
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-5">
            <Figure
              src={amiImg('ami-skillgap.png')}
              alt="Skill gap analysis view"
              caption="Left: scannable list. Right: reasoning, dual sliders, include/ignore."
            />
            <div className="grid grid-cols-1 gap-3 self-start">
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Problem · Decision · Outcome</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Problem:</span> Hidden inference felt arbitrary.</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Decision:</span> Surface reasoning, allow level edits.</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Outcome:</span> Users correct AI before path lock-in.</p>
              </div>
              <div className="grid grid-cols-2 border border-gray-300">
                <div className="p-3 border-r border-gray-300">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-1">✕ Skip it</p>
                  <p className="text-xs text-slate-600">No visibility, no recourse.</p>
                </div>
                <div className="p-3" style={{ backgroundColor: accentSoft }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: accent }}>✓ Show & adjust</p>
                  <p className="text-xs" style={{ color: accent }}>Reasoning + editable levels.</p>
                </div>
              </div>
            </div>
          </div>
        </SlideFrame>
      );

    case 8:
      return (
        <SlideFrame
          eyebrow="Decision 03 · Chatbot Scope"
          title="Session-only, not global."
          subtitle="Placement is meaning. The chatbot became pedagogical once scoped to active sessions."
          wide
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-5">
            <Figure
              src={amiImg('ami-chatbot.gif')}
              alt="Session-scoped chatbot with full learning context"
              caption="Chatbot appears only inside a learning session, with full topic and style context."
            />
            <div className="grid grid-cols-1 gap-3 self-start">
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Problem · Decision · Outcome</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Problem:</span> Global chatbot distracted during setup/review.</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Decision:</span> Restrict to learning sessions.</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Outcome:</span> Focused early flow, richer context later.</p>
              </div>
              <p className="text-sm italic border border-gray-300 bg-white p-3" style={{ color: accent }}>
                "This wasn't a feature decision. It was an information architecture decision."
              </p>
              <div className="border border-gray-300 bg-white">
                <div className="p-3 border-b border-gray-300">
                  <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500">Onboarding</p>
                  <p className="text-sm text-red-600">🚫 Not available — needs focus.</p>
                </div>
                <div className="p-3 border-b border-gray-300">
                  <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-slate-500">Skill gap review</p>
                  <p className="text-sm text-red-600">🚫 Not available — review requires focus.</p>
                </div>
                <div className="p-3" style={{ backgroundColor: accentSoft }}>
                  <p className="text-[10px] uppercase tracking-[0.16em] font-bold" style={{ color: accent }}>Learning session</p>
                  <p className="text-sm" style={{ color: accent }}>✓ Persistent sidebar with full session context.</p>
                </div>
              </div>
            </div>
          </div>
        </SlideFrame>
      );

    case 9:
      return (
        <SlideFrame
          eyebrow="Decision 04 · Content Citations"
          title="Trust becomes checkable behavior."
          subtitle="RAG grounds answers. Citations + page numbers make them verifiable."
          wide
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-5">
            <Figure
              src={amiImg('ami-verified-content.gif')}
              alt="Verified content with citation source and page references"
              caption="Each answer ties back to source + page in the course materials."
            />
            <div className="grid grid-cols-1 gap-3 self-start">
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Problem · Decision · Outcome</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Problem:</span> Unverifiable answers = no trust calibration.</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Decision:</span> Show source + page citations in-session.</p>
                <p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Outcome:</span> Trust shifts from claims to behavior.</p>
              </div>
              <div className="border border-gray-300 bg-white">
                <div className="p-3 border-b border-gray-300 bg-slate-50">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700">Four-layer trust architecture</p>
                </div>
                <div className="p-3 border-b border-gray-300">
                  <p className="text-[10px] uppercase font-bold text-slate-500">Skill gap review</p>
                  <p className="text-xs text-slate-600">Reasoning + confidence.</p>
                </div>
                <div className="p-3 border-b border-gray-300">
                  <p className="text-[10px] uppercase font-bold text-slate-500">Profile page</p>
                  <p className="text-xs text-slate-600">Explicit data use.</p>
                </div>
                <div className="p-3 border-b border-gray-300" style={{ backgroundColor: accentSoft }}>
                  <p className="text-[10px] uppercase font-bold" style={{ color: accent }}>Session citations</p>
                  <p className="text-xs" style={{ color: accent }}>Source + page number.</p>
                </div>
                <div className="p-3">
                  <p className="text-[10px] uppercase font-bold text-slate-500">Transparency page</p>
                  <p className="text-xs text-slate-600">Bias audits + safeguards.</p>
                </div>
              </div>
            </div>
          </div>
        </SlideFrame>
      );

    case 10:
      return (
        <SlideFrame
          eyebrow="Decision 05 · Guided Flow"
          title="Goal → Style → Resume."
          subtitle="One question per step. Each step answers one clear learner question."
          wide
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-5">
            <Figure
              src={amiImg('ami-onboarding.gif')}
              alt="Guided onboarding flow — goal, style, resume"
              caption="Progressive disclosure mirrors the learner's mental model."
            />
            <div className="grid grid-cols-1 gap-3 self-start">
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Flow logic</p>
                <p className="text-sm text-slate-700 mb-1">
                  1) <span className="font-semibold text-slate-900">Learning goal</span> — sets direction.
                </p>
                <p className="text-sm text-slate-700 mb-1">
                  2) <span className="font-semibold text-slate-900">Learning style</span> — tunes delivery.
                </p>
                <p className="text-sm text-slate-700">
                  3) <span className="font-semibold text-slate-900">Resume</span> — enriches personalization (optional).
                </p>
              </div>
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Why this works</p>
                <p className="text-sm text-slate-700">
                  Start with intention, then preference, then optional depth. Friction drops, intent capture improves.
                </p>
              </div>
              <div className="border border-gray-300 bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">MVP failure — and what it meant</p>
                <p className="text-sm text-slate-700 mb-2">
                  ✕ MVP put goal + style + resume on one screen. Drop-off came from unclear context, not length.
                </p>
                <p className="text-sm italic" style={{ color: accent }}>
                  "A good design principle should support user behavior. When they conflict, reinterpret the principle."
                </p>
              </div>
            </div>
          </div>
        </SlideFrame>
      );

    case 11:
      return (
        <SlideFrame
          eyebrow="Final Experience"
          title="One end-to-end learning experience, shaped by visible AI decisions."
          subtitle="Personalization stays understandable, editable, and trustworthy across the flow."
          wide
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-6">
            <Figure
              src={amiImg('overview.gif')}
              alt="Ami end-to-end flow"
              caption="Goal capture, learner modeling, adaptive sessions, and visible trust signals work as one flow."
            />
            <div className="grid grid-cols-1 gap-3 self-start">
              {FINAL_EXPERIENCE_HIGHLIGHTS.map((item) => (
                <div key={item.eyebrow} className="border border-gray-300 bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-1">
                    {item.eyebrow}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 mb-1">{item.title}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </SlideFrame>
      );

    case 12:
      return (
        <SlideFrame
          eyebrow="Reflection"
          title="Trust is not a feature. It is a system of visible decisions."
          wide
        >
          <div className="border border-gray-300 bg-slate-50 p-5 mb-5 max-w-4xl" style={{ backgroundColor: accentSoft }}>
            <p className="text-sm md:text-base text-slate-800 leading-relaxed">{REFLECTION_INTRO}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {REFLECTION_BULLETS.map((line, i) => (
              <div key={line} className="border border-gray-300 bg-white p-5">
                <p
                  className="text-3xl leading-none mb-3 font-extrabold"
                  style={{ color: `rgb(${amiAccentRgb} / 0.32)` }}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </SlideFrame>
      );

    default:
      return (
        <SlideFrame
          eyebrow="Video"
          title="Live walkthrough."
          subtitle="Happy to deep-dive on any decision, flow, or trade-off."
          wide
        >
          <div className="border border-gray-300 bg-white p-3 max-w-4xl">
            <video className="w-full h-auto" controls preload="metadata">
              <source src={amiImg('Final Demo.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SlideFrame>
      );
  }
}

