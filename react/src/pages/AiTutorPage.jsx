import { useEffect, useMemo, useRef, useState } from 'react';
import AmiUserFlowDiagram from '../components/AmiUserFlowDiagram.jsx';
import {
  Target,
  ArrowRight,
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
      className={`relative overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200 ${className}`}
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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef(0);
  const latestYRef = useRef(0);
  const navInnerRef = useRef(null);
  const navLinksRef = useRef(null);
  const [progressBounds, setProgressBounds] = useState({ left: 0, width: 0 });

  const sections = useMemo(
    () => [
      { id: 'Overview', label: 'Overview' },
      { id: 'Problem', label: 'Problem' },
      { id: 'Research', label: 'Research' },
      { id: 'Strategy', label: 'UX Strategy' },
      { id: 'Engineering', label: 'Engineering' },
      { id: 'Solutions', label: 'Solutions' },
      { id: 'Impact', label: 'Impact' },
    ],
    []
  );

  const amiImg = (name) => `${import.meta.env.BASE_URL}img/ami/${name}`;

  const accent = useMemo(() => {
    const map = {
      Overview: { primary: '#4F46E5', secondary: '#7C3AED' }, // indigo → violet
      Research: { primary: '#2563EB', secondary: '#06B6D4' }, // blue → cyan
      Strategy: { primary: '#7C3AED', secondary: '#EC4899' }, // violet → pink
      Engineering: { primary: '#22C55E', secondary: '#10B981' }, // green → emerald
      Solutions: { primary: '#F97316', secondary: '#EAB308' }, // orange → yellow
      Impact: { primary: '#0EA5E9', secondary: '#4F46E5' }, // sky → indigo
    };
    return map[activeSection] || map.Overview;
  }, [activeSection]);

  useEffect(() => {
    const computeAndSet = () => {
      rafRef.current = 0;
      const y = latestYRef.current;
      setScrolled(y > 50);

      // Global scroll progress (0–100) used for the header bar.
      const doc = document.documentElement;
      const body = document.body;
      const scrollHeight = Math.max(doc?.scrollHeight || 0, body?.scrollHeight || 0);
      const max = Math.max(1, scrollHeight - window.innerHeight);
      setScrollProgress(Math.max(0, Math.min(100, (y / max) * 100)));

      // Header progress bar bounds: start at "Overview" (nav links) when visible.
      const inner = navInnerRef.current;
      const links = navLinksRef.current;
      if (inner && links) {
        const innerRect = inner.getBoundingClientRect();
        const linksRect = links.getBoundingClientRect();
        const linksVisible = linksRect.width >= 16 && linksRect.height >= 10;
        if (linksVisible) {
          const left = Math.max(0, linksRect.left - innerRect.left);
          const width = Math.max(0, linksRect.width);
          setProgressBounds((prev) =>
            prev.left === left && prev.width === width ? prev : { left, width }
          );
        } else {
          const left = 0;
          const width = Math.max(0, innerRect.width);
          setProgressBounds((prev) =>
            prev.left === left && prev.width === width ? prev : { left, width }
          );
        }
      }

      // Active section: last section whose top has crossed a threshold.
      const ids = sections.map((s) => s.id);
      const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
      if (!els.length) return;

      const threshold = 120; // px from top (accounts for fixed nav)
      let active = ids[0];
      for (const el of els) {
        if (el.getBoundingClientRect().top <= threshold) active = el.id;
      }
      setActiveSection(active);
    };

    const onScrollOrResize = () => {
      latestYRef.current = window.scrollY || 0;
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(computeAndSet);
    };

    onScrollOrResize();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Track which section is most visible to drive the nav underline
  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const ratios = {};
    ids.forEach((id) => {
      ratios[id] = 0;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          ratios[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });
        const maxId = ids.reduce((a, b) => (ratios[a] >= ratios[b] ? a : b), ids[0]);
        if (ratios[maxId] > 0) setActiveSection(maxId);
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-indigo-100 scroll-smooth pb-20 font-sans!important">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
        style={{ '--accent': accent.primary }}
      >
        <div className="relative">
          {/* 全局滚动进度条（整体下划线）：从 Overview 开始 */}
          <div className="absolute left-0 right-0 bottom-0 h-[3px] overflow-hidden pointer-events-none">
            <div
              className="absolute bottom-0 h-full bg-slate-200/60"
              style={{
                width: `${progressBounds.width}px`,
              }}
            />
            <div
              className="absolute bottom-0 h-full"
              style={{
                left: `${progressBounds.left}px`,
                width: `${(progressBounds.width * scrollProgress) / 100}px`,
                backgroundImage: `linear-gradient(90deg, ${accent.primary}, ${accent.secondary})`,
              }}
            />
          </div>

          {/* <div ref={navInnerRef} className="mx-auto px-7 flex justify-between items-center">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
                <span className="text-white font-bold text-xl italic">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Ami Cognitive Co-Learning</span>
              {false && (
                <a
                  href="https://w0436300.github.io/Ami-React/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-sm transition-colors"
                  style={{ backgroundColor: '#166534' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#15803d';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#166534';
                  }}
                >
                  View Demo
                </a>
              )}
            </div>
            <a
              href="mailto:xinpingxh@gmail.com"
              className="bg-slate-900 text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[var(--accent)] transition-all active:scale-95 shadow-lg shadow-black/5"
            >
              Contact Me
            </a>
          </div> */}
        </div>
      </nav>

      <section id="Introduction" className="pt-2 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="flex items-center gap-3 mb-1">
              <p className="text-[10px] px-1 py-1 text-slate-500 font-black tracking-[0.2em] uppercase">
                AI-Powered Education • UX Case Study
              </p>
            </div>
            <h1 className="text-xl md:text-3xl font-extrabold leading-[0.9] mb-2 tracking-tighter">
              Ami: Human-AI Cognitive Co-Learning. <br />        
            </h1>
            <p className="text-md text-slate-500 px-1 py-1 mb-2 leading-relaxed font-medium">
              We didn't redesign an interface. We redesigned the question: why would a learner trust an AI to assess their skills and design their entire education?
            </p> 
            <div className="relative max-w-2xl mb-2">
              <PortfolioImage
                src="image_b8fffc.jpg"
                alt="Ami Hero Preview"
                className="relative border-[12px] border-white aspect-[4/3]"
                description="Adaptive Learning Dashboard"
              />
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-2 py-2 border-t border-slate-100">
              <div className="p-4 border-slate-100">
                <span className="text-sm text-slate-500 uppercase font-black tracking-widest block mb-2">
                  Role
                </span>          
                <p className="text-sm text-slate-700">
                  UX Researcher
                  <br />
                  Product Designer
                  <br />
                  Frontend Engineer
                </p>
              </div>
              <div className="p-4 border-slate-100">
                <span className="text-sm text-slate-500 uppercase font-black tracking-widest block mb-2">
                  Timeline
                </span>
                <p className="text-sm text-slate-700">
                Jan- April 2026
                  <br />
                  Discovery 
                  <br />
                  Research 
                  <br />
                  Testing 
                  <br />
                  Launch 
                </p>
                
              </div>
              <div className="p-4 border-slate-100">
                <span className="text-sm text-slate-500 uppercase font-black tracking-widest block mb-2">
                  Team (6 persons)
                </span>
                <p className="text-sm text-slate-700">
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
              <div className="p-4 rounded-2xl border-slate-100">
                <span className="text-sm text-slate-500 uppercase font-black tracking-widest block mb-2">
                  Skills
                </span>
                <p className="text-sm text-slate-700">
                  Product Design
                  <br />
                  Frontend Engineering
                  <br />
                  User Research
                </p>
              </div>
              <div className="p-4 rounded-2xl border-slate-100">
                <span className="text-sm text-slate-500 uppercase font-black tracking-widest block mb-2">
                Tools

                </span>
                <p className="text-sm text-slate-700">
                Figma
                  <br />
                  React + Streamlit
                  <br />
                  OpenAI API
                  <br />
                  GitHub
                </p>
              </div>
              
            </div>
            <div className="mt-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-sm text-slate-500 uppercase font-black tracking-widest block mb-1">
                  Client
                </span>
                <p className="text-sm text-slate-700">
                  Dr. Ali Abbas — CEO of Smart Digital Medicine, Adjunct Professor at uOttawa
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-sm text-slate-500 uppercase font-black tracking-widest block mb-1">
                  Technical Advisor
                </span>
                <p className="text-sm text-slate-700">
                  Prof. Ismaeel Al-Ridhawi — Associate Professor, School of Electrical Engineering and
                  Computer Science, uOttawa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Overview" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2
              className="text-sm font-medium text-left uppercase"
              style={{ color: 'rgba(56, 122, 115, 1)', fontFamily: '"Open Sans"' }}
            >
              Overview
            </h2>
            <h3
              className="text-xl font-medium text-left tracking-tight"
              style={{ color: 'rgba(56, 122, 115, 0.85)', fontFamily: '"Open Sans"' }}
            >
              How should an AI tutor adapt to every learner — without overwhelming them?
            </h3>
            <p className="text-slate-600 text-sm text-left">As part of a 6-person cross-functional team, our goal was to deliver a verified, personalized tutoring platform within two semesters.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-2 items-top">
              <div className="p-4 rounded-1 bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-sm mb-4">UX Strategy</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                Mapping the gap between a research baseline and a real user experience — then closing it.
                </p>
              </div>
              <div className="p-4 rounded-1 bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-sm mb-4">Product Design</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                Designing a 3-step onboarding, adjustable skill gap review, and multimodal session delivery.
                </p>
              </div>
              <div className="p-4 rounded-1 bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-sm mb-4">Trust & Ethics</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                Making AI reasoning visible, content verifiable, and bias auditable — by design, not as an afterthought.
                </p>
              </div>
            </div>
        </div>
      </section>

      <section id="Problem" className="py-1 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-sm font-medium text-left uppercase"
              style={{ color: 'rgba(56, 122, 115, 1)', fontFamily: '"Open Sans"' }}
            >
              Problem & Research 
            </h2>
            <h3
              className="text-xl font-medium text-left tracking-tight"
              style={{ color: 'rgba(56, 122, 115, 0.85)', fontFamily: '"Open Sans"' }}
            >
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
              style={{ fontFamily: '"Open Sans"' }}
            >
              a · Competitive positioning matrix
            </h4>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 overflow-hidden">
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
              style={{ fontFamily: '"Open Sans"' }}
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
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 overflow-hidden">
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
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 overflow-hidden">
                  <img
                    src={amiImg('future-journey-map.png')}
                    alt="Future learner journey map with Ami"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-2 items-top mt-4">
              <div className="p-4 rounded-1 bg-slate-10 border border-slate-100">
                <h4 className="font-bold text-sm mb-4">No personalization</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                Same content for everyone. <br /></p>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                → </p>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                Ami uses FSLSM + SOLO to personalize every session.</p>
              </div>
              <div className="p-4 rounded-1 bg-slate-10 border border-slate-100">
                <h4 className="font-bold text-sm mb-4">High cognitive load</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                Too many decisions upfront — where to learn, what to trust. <br /></p>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                → </p>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                Ami's 3-step onboarding uses progressive disclosure.</p>
              </div>
              <div className="p-4 rounded-1 bg-slate-10 border border-slate-100">
                <h4 className="font-bold text-sm mb-4">Inconsistent quality</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                AI help lacks pedagogical structure. <br /></p>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                → </p>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                Ami grounds all content in verified course PDFs via RAG.</p>
              </div>
              <div className="p-4 rounded-1 bg-slate-10 border border-slate-100">
                <h4 className="font-bold text-sm mb-4"> Unclear progress</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
               No reliable dashboard.<br /></p>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                → </p>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                Analytics page tracks skill mastery and goal progress in real time.</p>
              </div>
             
            </div>

            {/* c · User flow — complete learner journey */}
            <div className="mt-16 md:mt-20">
              <h4
                className="text-sm font-semibold text-slate-900 mb-2"
                style={{ fontFamily: '"Open Sans"' }}
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
            <h2
              className="text-sm font-medium text-left uppercase"
              style={{ color: 'rgba(56, 122, 115, 1)', fontFamily: '"Open Sans"' }}
            >
              Baseline
            </h2>
            <h3
              className="text-xl font-medium text-left tracking-tight"
              style={{ color: 'rgba(56, 122, 115, 0.85)', fontFamily: '"Open Sans"' }}
            >
We didn’t build from scratch. We found what was missing.
</h3>
            <p className="text-slate-600 text-sm text-left">
            Ami is built on GenMentor (WWW 2025), an open-source research baseline. GenMentor proved multi-agent tutoring was technically feasible. Our job was to build the UX and pedagogical layer on top.

</p>
          </div>
       
        </div>
      </section>

     

     
    </div>
  );
}

