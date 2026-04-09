import { useState } from 'react';
import AmiUserFlowDiagram from '../components/AmiUserFlowDiagram.jsx';
import {
  amiSectionHead as AMI,
  amiAccentRgb,
  openSans,
  amiBorder,
  amiBorderSubtle,
} from '../styles/caseStudyTheme.js';
import {
  Target,
  ArrowRight,
  Play,
  Image as ImageIcon,
  GraduationCap,
  Microscope,
  ShieldCheck,
  ArrowDown,
  Code,
  Terminal,
  Layers,
} from 'lucide-react';

const PortfolioImage = ({ src, alt, className, description }) => {
  const [error, setError] = useState(false);
  return (
    <div
      className={`relative overflow-hidden bg-white flex items-center justify-center border border-slate-200 ${className}`}
    >
      {error ? (
        <div className="flex flex-col items-center text-slate-400 p-8 text-center">
          <ImageIcon className="w-12 h-12 mb-3 opacity-20" />
          <p className="text-sm font-semibold">{alt}</p>
          <p className="text-[10px] uppercase tracking-wider mt-2 opacity-60">
            {description || 'System Screenshot'}
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

export default function AiTutorPage() {
  const [activeBaselineTab, setActiveBaselineTab] = useState(0);

  const amiImg = (name) => `${import.meta.env.BASE_URL}img/ami/${name}`;
  const baselineTabs = ['Onboarding', 'Skill Gap', 'Learning Path', 'Session', 'Profile'];
  const genMentorImages = [
    'genmentor-onboarding.png',
    'genmentor-skillgap.png',
    'genmentor-learningpath.png',
    'genmentor-learningsession.png',
    'genmentor-profile.png',
  ];
  const genMentorCaptions = [
    'Long-form onboarding with occupation dropdown, text fields, and mandatory resume upload. High cognitive load before any learning begins.',
    'Skill-gap review is list-heavy and difficult to scan. Evidence and rationale are not visible enough for confident decisions.',
    'Learning-path setup is functional but rigid. Limited structure for balancing sequence, learner preference, and confidence.',
    'Session view is text-forward and fragmented. Weak visual hierarchy makes guidance and next actions harder to follow.',
    'Profile controls are basic and not tightly connected to real-time adaptation, learning history, or transparent AI behavior.',
  ];
  const amiCaptions = [
    '3-step onboarding. Step 2: choose learning style - sets the FSLSM baseline in one click. One question per step.',
    'Skill-gap panel explains why each gap matters, with adjustable levels and clear include/ignore controls before plan generation.',
    'Learning path supports structured sequence while keeping global visibility, so learners understand both immediate and long-term direction.',
    'Session combines multimodal content with a persistent mentor chatbot, reducing friction while keeping context and support always available.',
    'Profile and analytics stay accessible for continuous updates, progress review, and transparent AI behavior over time.',
  ];
  const amiImages = [
    'ami-onboarding.png',
    'ami-skillgap.png',
    'ami-learningpath.png',
    'ami-session.png',
    'ami-profile.png',
  ];
  const allAmiMedia = [
    'ami-ai-transparency.gif',
    'ami-chatbot.gif',
    'ami-onboarding.gif',
    'ami-profile.gif',
    'ami-quiz.gif',
    'ami-session-audio.gif',
    'ami-session-vedio.gif',
    'ami-verified-content.gif',
    'Competitive-positioning-matrix.png',
    'current-journey-map.png',
    'future-journey-map.png',
    'genmentor-learningpath.png',
    'genmentor-learningsession.png',
    'genmentor-onboarding.png',
    'genmentor-profile.png',
    'genmentor-skillgap.png',
    'overview.png',
    'ami-onboarding.png',
    'ami-skillgap.png',
    'ami-learningpath.png',
    'ami-session.png',
    'ami-session.gif',
    'ami-profile.png',
    'ami-ai-transparency.png',
    'ami-chatbot.png',
    'ami-quiz.png',
    'ami-session-audio.png',
  ];
  const designFlowSteps = [
    { n: '1', t: 'Onboarding', d: '3-step guided', hi: false },
    { n: '2', t: 'Skill Gap', d: 'AI + human override', hi: true },
    { n: '3', t: 'Learning Path', d: 'FSLSM-adapted', hi: false },
    { n: '4', t: 'Session', d: 'Multimodal', hi: true },
    { n: '5', t: 'Quiz & Adapt', d: 'Continuous', hi: false },
    { n: '6', t: 'Profile & Analytics', d: 'Trust layer', hi: false },
  ];
  const designBlocks = [
    {
      badge: 'Step 1',
      title: 'Onboarding',
      media: 'Onboarding flow',
      body: 'Onboarding was split into 3 simple steps to reduce cognitive load and make each decision easier.',
      mediaFile: 'ami-onboarding.gif',
      list: [
        ' Enter goal',
        ' Learning style',
        ' Resume (optional)',
      ],
    },
    {
      badge: 'Step 2',
      title: 'Skill Gap Review',
      media: 'Skill gap review',
      mediaFile: 'ami-skillgap.png',
      body: 'AI suggests skill gaps with clear reasoning, while learners can edit, remove, or accept each recommendation.',
      list: ['AI suggests', 'Learners can edit'],
    },
    {
      badge: 'Steps 3 & 4',
      title: 'Learning Path & Session',
      media: 'Learning path + session delivery',
      mediaFile: 'ami-session.gif',
      body: 'Path structure adapts each learner\'s profile and learning style. Content format adapts to learning style. Session overview top-right, Ami chat bottom-right.',
      list: ['Text', 'Diagram', 'Video', 'Audio'],
    },
    {
      badge: 'Steps 5',
      title: 'Quiz & Adaptation',
      media: 'Quiz & adaptation',
      mediaFile: 'ami-quiz.gif',
      body: 'Three triggers keep the profile current without asking the learner to do anything extra.',
      list: ['Quiz result', 'Chatbot query', 'Manual'],
    },
    {
      badge: 'Step 6',
      title: 'Profile, Analytics & AI Transparency',
      media: 'Profile, Analytics & AI Transparency',
      mediaFile: 'ami-ai-transparency.gif',
      body: 'Trust was designed as an always-visible layer, supported by profile controls, progress analytics, and AI transparency.',
    list: ['Profile', 'Analytics', 'AI Transparency'],
    },
  ];

  return (
    <div
      className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100 scroll-smooth pb-20"
      style={openSans}
    >
      <section id="Overview" className="pt-2 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
          
            <div className="flex flex-wrap items-center gap-2 mb-3 text-[10px] uppercase tracking-widest text-slate-600">
            <span>AI-Powered Education · UX Case Study · 2026</span>
          </div>
            
            <h1 className="text-xl md:text-3xl font-extrabold leading-[0.9] mb-2 tracking-tighter">
              Ami: Human-AI Cognitive Co-Learning. <br />
            </h1>
            <p className="text-md text-slate-500 px-1 py-1 mb-8 leading-relaxed font-medium max-w-4xl">
              We didn&apos;t redesign an interface. We redesigned the question: why would a learner trust
              an AI to assess their skills and design their entire education?
            </p>

            <div className={`flex flex-col gap-8 border-t ${amiBorder} pt-8`}>
              <div className="w-full">
                <img
                  src={amiImg('overview.png')}
                  alt="Ami product overview"
                  className="h-auto w-2/3 -mx-4 object-contain"
                />
              </div>

              <div className="space-y-4 w-full">
                {/* Small screens: role/tools/skills/timeline/team in one row (horizontal scroll) */}
                <div className="overflow-x-auto md:hidden">
                  <div className="grid min-w-[920px] grid-cols-5 divide-x divide-cyan-200">
                    <div className="pr-4">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Role</p>
                      <p className="text-[13px] leading-relaxed text-slate-700">
                        UX Researcher
                        <br />
                        Product Designer
                        <br />
                        Frontend Engineer
                      </p>
                    </div>
                    <div className="px-4">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Tools</p>
                      <p className="text-[13px] leading-relaxed text-slate-700">
                        Figma
                        <br />
                        React + Streamlit
                        <br />
                        OpenAI API
                        <br />
                        GitHub
                      </p>
                    </div>
                    <div className="px-4">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Skills</p>
                      <p className="text-[13px] leading-relaxed text-slate-700">
                        Product Design
                        <br />
                        Frontend Engineering
                        <br />
                        User Research
                      </p>
                    </div>
                    <div className="px-4">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Timeline</p>
                      <p className="text-[13px] leading-relaxed text-slate-700">
                        Jan-April 2026
                        <br />
                        Discovery &amp; Research
                        <br />
                        Design &amp; Development
                        <br />
                        Testing &amp; Deployment
                        <br />
                        Launch &amp; Maintenance
                      </p>
                    </div>
                    <div className="pl-4">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Team (6)</p>
                      <p className="text-[13px] leading-relaxed text-slate-700">
                        1 PM
                        <br />
                        2 Backend
                        <br />
                        1 Learning Analytics
                        <br />
                        1 Frontend (me)
                        <br />
                        2 Product Designer (me)
                        <br />
                        2 UX Researcher (me)
                      </p>
                    </div>
                  </div>
                </div>

                {/* md and above: single row — Role, Tools, Skills, Timeline, Team */}
                <div className="hidden md:grid md:grid-cols-5 md:divide-x md:divide-cyan-200">
                  <div className="pr-4 min-w-0">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Role</p>
                    <p className="text-[13px] leading-relaxed text-slate-700">
                      UX Researcher
                      <br />
                      Product Designer
                      <br />
                      Frontend Engineer
                    </p>
                  </div>
                  <div className="px-4 min-w-0">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Tools</p>
                    <p className="text-[13px] leading-relaxed text-slate-700">
                      Figma
                      <br />
                      React + Streamlit
                      <br />
                      OpenAI API
                      <br />
                      GitHub
                    </p>
                  </div>
                  <div className="px-4 min-w-0">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Skills</p>
                    <p className="text-[13px] leading-relaxed text-slate-700">
                      Product Design
                      <br />
                      Frontend Engineering
                      <br />
                      User Research
                    </p>
                  </div>
                  <div className="px-4 min-w-0">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Timeline</p>
                    <p className="text-[13px] leading-relaxed text-slate-700">
                      Jan-April 2026
                      <br />
                      Discovery &amp; Research
                      <br />
                      Design &amp; Development
                      <br />
                      Testing &amp; Deployment
                      <br />
                      Launch &amp; Maintenance
                    </p>
                  </div>
                  <div className="pl-4 min-w-0">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">Team (6)</p>
                    <p className="text-[13px] leading-relaxed text-slate-700">
                      1 PM
                      <br />
                      2 Backend
                      <br />
                      1 Learning Analytics
                      <br />
                      1 Frontend (me)
                      <br />
                      2 Product Designer (me)
                      <br />
                      2 UX Researcher (me)
                    </p>
                  </div>
                </div>

                <div className={`border-t ${amiBorderSubtle} pt-3`}>
                  <p className="text-[11px] font-medium leading-relaxed text-slate-700">
                    <span className="font-semibold text-slate-700">Client &amp; Technical advisor</span>
                    <br />
                    Dr. Ali Abbas — CEO of Smart Digital Medicine, Adjunct Professor at uOttawa
                    <br />
                    Prof. Ismaeel Al-Ridhawi — Associate Professor, School of Electrical Engineering and
                    Computer Science, uOttawa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Problem" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className={AMI.h2} style={AMI.h2Style}>
              Problem
            </h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
              How should an AI tutor adapt to every learner — without overwhelming them?
            </h3>
            <p className="text-slate-600 text-sm text-left">
            Current AI tutoring tools provide a one-size-fits-all approach — reactive, generic content that ignores cognitive style or prior knowledge. Worse, they hallucinate with no content verification or ethical oversight.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-2 items-top">
              <div className="p-4 bg-white border border-cyan-100">
                <h4 className="font-bold text-sm mb-4">UX Strategy</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                Mapping the gap between a research baseline and a real user experience — then closing it.
                </p>
              </div>
              <div className="p-4 bg-white border border-cyan-100">
                <h4 className="font-bold text-sm mb-4">Product Design</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                Designing a 3-step onboarding, adjustable skill gap review, and multimodal session delivery.
                </p>
              </div>
              <div className="p-4 bg-white border border-cyan-100">
                <h4 className="font-bold text-sm mb-4">Trust Design</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                Making AI reasoning visible: skill gap explanations, RAG citations, bias audits, and an AI Transparency page.
                </p>
              </div>
              
            </div>
            <p className="text-slate-600 text-sm text-left mt-4 pl-2 pr-2 bg-white border border-cyan-100">
              <span className="texr-sm text-slate-500">
                As a UX designer on a 6-person cross-functional team, our goal was to ship a pedagogically rigorous, ethically grounded adaptive AI tutor without sacrificing usability.
              </span>
            </p>

        </div>
      </section>

      <section id="Research" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className={AMI.h2} style={AMI.h2Style}>
               Research 
            </h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
              How we understood the problem before designing anything
            </h3>
            <p className="text-slate-600 text-sm text-left mt-2">
              Current AI tutoring tools provide a one-size-fits-all approach — reactive, generic content
              that ignores cognitive style or prior knowledge. Worse, they hallucinate with no content
              verification or ethical oversight.
            </p>
          </div>

          {/* a · Competitive positioning matrix */}
          <div className="mb-16">
            <h4
              className="text-sm font-semibold text-slate-900 mb-3"
              style={openSans}
            >
              a · Competitive positioning matrix
            </h4>
            <div className="border border-cyan-200 overflow-hidden bg-white p-4 md:p-6 overflow-hidden w-3/4">
              <img
                src={amiImg('Competitive-positioning-matrix.png')}
                alt="Competitive positioning matrix comparing Ami to other AI tutoring approaches"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* b · Journey maps — side by side */}
          <div>
            <h4
              className="text-sm font-semibold text-slate-900 mb-6"
              style={openSans}
            >
              b · Current journey map — without Ami and Future journey map — with Ami
            </h4>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
              {/* Current — without Ami */}
              <div className="space-y-4">
                <h5 className="font-bold text-slate-900 text-base">Current journey map — without Ami</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-700">Emotional arc: </span>
                  Overwhelmed → Hopeful → Confused → Frustrated → Short relief → Discouraged
                </p>
                <div className="border border-cyan-200 overflow-hidden bg-white overflow-hidden">
                  <img
                    src={amiImg('current-journey-map.png')}
                    alt="Current learner journey map without Ami"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Future — with Ami */}
              <div className="space-y-4">
                <h5 className="font-bold text-slate-900 text-base">Future journey map — with Ami</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-700">Emotional arc: </span>
                  Clear direction → Confident start → Supported → In control → Motivated → Trust building
                </p>
                <div className="border border-cyan-200 overflow-hidden bg-white overflow-hidden">
                  <img
                    src={amiImg('future-journey-map.png')}
                    alt="Future learner journey map with Ami"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-2 items-top mt-4">
              <div className="p-4 rounded-1 bg-white border border-slate-100">
                <h4 className="font-bold text-xs mb-4">No personalization</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                Same content for everyone. <br /></p>
                <p className="text-slate-500 text-xs leading-relaxed">
                ------------------------------------</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                Ami uses FSLSM + SOLO to personalize every session.</p>
              </div>
              <div className="p-4 rounded-1 bg-white border border-slate-100">
                <h4 className="font-bold text-xs mb-4">High cognitive load</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                Too many decisions upfront — where to learn, what to trust. <br /></p>
                <p className="text-slate-500 text-xs leading-relaxed">
                ------------------------------------</p>
                <p className="text-slate-500 text-xs  leading-relaxed">
                Ami's 3-step onboarding uses progressive disclosure.</p>
              </div>
              <div className="p-4 rounded-1 bg-white border border-slate-100">
                <h4 className="font-bold text-xs mb-4">Inconsistent quality</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                AI help lacks pedagogical structure. <br /></p>
                <p className="text-slate-500 text-xs leading-relaxed">
                ------------------------------------</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                Ami grounds all content in verified course PDFs via RAG.</p>
              </div>
              <div className="p-4 rounded-1 bg-white border border-slate-100">
                <h4 className="font-bold text-xs mb-4"> Unclear progress</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
               No reliable dashboard.<br /></p>
                <p className="text-slate-500 text-xs leading-relaxed">
                ------------------------------------</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                Analytics page tracks skill mastery and goal progress in real time.</p>
              </div>
             
            </div>

            {/* c · User flow — complete learner journey */}
            <div className="mt-16 md:mt-20">
              <h4
                className="text-sm font-semibold text-slate-900 mb-2"
                style={openSans}
              >
                c · User flow — the complete learner journey
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-3xl">
                From first goal input to continuous adaptation — every step designed to minimize
                friction while maximizing personalization depth.
              </p>
              <AmiUserFlowDiagram />
            </div>

          </div>
        </div>
      </section>

      <section id="Baseline" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className={AMI.h2} style={AMI.h2Style}>
              Baseline
            </h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
            We didn’t build from scratch. We found what was missing.
            </h3>
                        <p className="text-slate-600 text-sm text-left">
Ami is built on GenMentor (WWW 2025), an open-source research baseline. GenMentor proved multi-agent tutoring was technically feasible. Our job was to build the UX and pedagogical layer on top.

            </p>
          </div>

          <div className="border border-cyan-200 overflow-hidden overflow-hidden">
            {/* Header */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-cyan-200 border-b border-cyan-200">
              <div className="bg-white px-5 py-4 flex items-center gap-3">
                <span className="inline-flex rounded-full border border-slate-300 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                  GenMentor - Baseline
                </span>
                <span className="text-sm text-slate-600">The original Streamlit interface</span>
              </div>
              <div className="bg-white px-5 py-4 flex items-center gap-3">
                <span className="inline-flex border border-cyan-400 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Ami - Our Design
                </span>
                <span className="text-sm text-cyan-700/80">The React experience we built</span>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-cyan-200 border-b border-cyan-200">
              <div className="bg-white px-5 py-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {baselineTabs.map((tab, i) => (
                    <button
                      type="button"
                      key={tab}
                      onClick={() => setActiveBaselineTab(i)}
                      className={`border px-2.5 py-1 text-[10px] font-medium ${
                        i === activeBaselineTab
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-500 border-cyan-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="border border-cyan-200 bg-white p-3">
                  <img
                    src={amiImg(genMentorImages[activeBaselineTab])}
                    alt={`GenMentor ${baselineTabs[activeBaselineTab]} view`}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  {genMentorCaptions[activeBaselineTab]}
                </p>
              </div>

              <div className="bg-white px-5 py-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {baselineTabs.map((tab, i) => (
                    <button
                      type="button"
                      key={tab}
                      onClick={() => setActiveBaselineTab(i)}
                      className={`border px-2.5 py-1 text-[10px] font-medium ${
                        i === activeBaselineTab
                          ? 'bg-cyan-700 text-white border-cyan-700'
                          : 'bg-white text-cyan-700 border-cyan-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="border border-cyan-200 bg-white p-3">
                  <img
                    src={amiImg(amiImages[activeBaselineTab])}
                    alt={`Ami ${baselineTabs[activeBaselineTab]} view`}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {amiCaptions[activeBaselineTab]}
                </p>
              </div>
            </div> 
          </div>
        </div>
      </section>

      {/* what i learned */}
      <section id="Design" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className={AMI.h2} style={AMI.h2Style}>
              What I Learned
            </h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
            How Ami works
            </h3>
                        <p className="text-slate-600 text-sm text-left max-w-3xl">
            This section is reserved for final reflections and trade-offs after validation rounds.
            </p>
          </div>

          <div className={`border ${amiBorder} overflow-hidden bg-white p-4 md:p-6`}>
            {/* Step flow */}
         
           
            {/* Detailed design blocks */}
            <div className="space-y-8">
              {designBlocks.map((b, idx) => (
                <div key={b.title} className="grid lg:grid-cols-2 gap-6 items-start">
                  <div className="border border-dashed border-cyan-200 bg-white p-6 min-h-[200px] flex flex-col items-center justify-center text-center">
                    {b.mediaFile ? (
                      <img
                        src={amiImg(b.mediaFile)}
                        alt={b.media}
                        className="w-full h-auto max-h-[280px] object-contain"
                      />
                    ) : (
                      <>
                        <div className="w-10 h-10 bg-white border border-cyan-200 flex items-center justify-center mb-2">
                          <Play className="w-4 h-4 text-slate-500" />
                        </div>
                        <div className="text-sm font-medium text-slate-700">{b.media}</div>
                        <div className="mt-2 inline-flex border border-cyan-200 px-3 py-1 text-[11px] text-slate-500">
                          GIF placeholder
                        </div>
                      </>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex bg-slate-900 text-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
                        {b.badge}
                      </span>
                      <h4 className="text-sm text-slate-900">{b.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{b.body}</p>

                    {b.list && (
                      <div className="flex flex-wrap gap-2">
                        {b.list.map((item, i) => (
                          <div
                            key={`${item}-${i}`}
                            className={`inline-flex bg-white px-3 py-2 text-sm text-slate-700 border ${
                              idx === 1 && i === 0
                                ? 'border-cyan-500'
                                : 'border-cyan-200'
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}

                    {b.decision && (
                      <div className="border border-cyan-200 bg-white px-3 py-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-700 mb-1">
                          Design decision
                        </p>
                        <p className="text-sm text-cyan-900/80 leading-relaxed">{b.decision}</p>
                      </div>
                    )}

                    {b.duo && (
                      <>
                        <div className="grid sm:grid-cols-2 gap-2 mb-3">
                          {b.duo.map((item) => (
                            <div
                              key={item}
                              className="border border-cyan-200 bg-white px-3 py-2 text-sm text-slate-700"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {b.chips?.map((chip) => (
                            <span
                              key={chip}
                              className="inline-flex border border-cyan-200 bg-white px-3 py-1 text-xs text-slate-600"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </section>

      <section id="Reflection" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className={AMI.h2} style={AMI.h2Style}>
              Reflection
            </h2>
            <h3 className={AMI.h3} style={AMI.h3Style}>
              What I Learned
            </h3>
            <p className="text-slate-600 text-sm text-left">Three lessons that shaped how I design AI experiences.</p>

          </div>
          <div className="grid md:grid-cols-3 gap-2 items-top">
              <div className="p-4 bg-white border border-cyan-100">
                <h4 className="font-bold text-sm mb-4">Clarity matters more than fewer steps</h4>

                <p className="text-slate-500 text-sm leading-relaxed">
                A shorter flow is not always easier. Breaking one complex step into smaller, focused ones reduced cognitive load and made the experience feel smoother. 
                </p>
              </div>
              <div className="p-4 bg-white border border-cyan-100">
                <h4 className="font-bold text-sm mb-4">Trust comes from visibility</h4>

                <p className="text-slate-500 text-sm leading-relaxed">
                What mattered most was not visual polish, but helping users understand the AI’s reasoning. In AI products, explanation is part of the experience, not an afterthought.
                </p>
              </div>
              <div className="p-4 bg-white border border-cyan-100">
                <h4 className="font-bold text-sm mb-4">AI products require systems thinking</h4>

                <p className="text-slate-500 text-sm leading-relaxed">
                The quiz, chatbot, and manual updates only worked when they were designed as one connected system, not separate features.
                </p>
              </div>
              
            </div> 
        </div>
      </section>

      {/* video  */}
      <section id="Video" className="py-1 px-6 pb-12">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-4">
      <h2 className={AMI.h2} style={AMI.h2Style}>
        Video
      </h2>
      <h3 className={AMI.h3} style={AMI.h3Style}>
        See It in Action
      </h3>
      <p className="text-slate-600 text-sm text-left">
        Explore the project through a product walkthrough and a full presentation.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-4 items-start">
      <div className={`p-4 bg-white border ${amiBorderSubtle}`}>
        <h4 className="font-bold text-sm mb-3">Demo Video</h4>

        <p className="text-slate-500 text-sm leading-relaxed mb-10">
          A short end-to-end demo of the core user flow and key interactions.
          <br />   
        </p>

        <video
          controls
          className={`w-full border ${amiBorder} mb-4`}
        >
          <source src={amiImg(encodeURIComponent('Final Demo.mp4'))} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <a
          href={amiImg(encodeURIComponent('Final Demo.mp4'))}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm font-medium underline underline-offset-4"
          style={{ ...openSans, color: `rgb(${amiAccentRgb})` }}
        >
          Watch MP4 Demo
        </a>
      </div>

      <div className={`p-4 bg-white border ${amiBorderSubtle}`}>
        <h4 className="font-bold text-sm mb-3">Presentation Video</h4>

        <p className="text-slate-500 text-sm leading-relaxed mb-4">
        A complete presentation covering the project background, process, team collaboration, demo, and final report.
        </p>

        <div className="aspect-video w-full mb-4">
          <iframe
            className={`w-full h-full border ${amiBorder}`}
            src="https://www.youtube.com/embed/X_UXuYaqbr4"
            title="YouTube demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <a
          href="https://youtu.be/X_UXuYaqbr4"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm font-medium underline underline-offset-4"
          style={{ ...openSans, color: `rgb(${amiAccentRgb})` }}
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  </div>
</section>


     

     
    </div>
  );
}

