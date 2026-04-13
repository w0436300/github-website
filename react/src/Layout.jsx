import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  FileText,
} from 'lucide-react';

const HOME_NAV = [
  { name: 'Work', icon: Briefcase, href: '#home', kind: 'work' },
  { name: 'About', icon: BookOpen, href: '/blog', kind: 'about' },
];

const FOOTER_SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/xinping-w/', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/w0436300', Icon: Github },
  { label: 'Email', href: 'mailto:xinpingxh@gmail.com', Icon: Mail },
];

const PROJECT_NAV_LINKS = [
  { name: 'Overview', href: '#overview' },
  { name: 'Research', href: '#research' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Links', href: '#links' },
];

/** Must match section `id`s on AiTutorPage (cognitive-adaptive-ai-tutor). */
const AI_TUTOR_NAV_LINKS = [
  { name: 'Overview', href: '#Overview' },
  { name: 'Problem', href: '#Problem' },
  { name: 'Research', href: '#Research' },
  { name: 'Decisions', href: '#Decisions' },
  { name: 'Solution', href: '#Solution' },
  { name: 'Reflection', href: '#Reflection' },
  { name: 'Video', href: '#Video' },
];

/** Must match section `id`s on DesignStandardPage (design-standard-wcag). */
const DESIGN_STANDARD_NAV_LINKS = [
  { name: 'Overview', href: '#Overview' },
  { name: 'Reflection', href: '#Reflection' },
  { name: 'Challenge', href: '#Challenge' },
  { name: 'Approach', href: '#Approach' },
  { name: 'Documentation', href: '#Documentation' },
  { name: 'Structure', href: '#Structure' },
  { name: 'Library', href: '#LibraryExamples' },
  { name: 'Examples', href: '#Examples' },
  { name: 'Collaboration', href: '#Collaboration' },
  { name: 'Outcome', href: '#Outcome' },
];

/** Must match section `id`s on BankDocumentPage (bank-document-system). */
const BANK_DOCUMENT_NAV_LINKS = [
  { name: 'Overview', href: '#Overview' },
  { name: 'Reflection', href: '#Reflection' },
  { name: 'Context', href: '#Context' },
  { name: 'Challenge', href: '#Challenge' },
  { name: 'Role', href: '#Role' },
  { name: 'Process', href: '#Process' },
  { name: 'Decisions', href: '#Decisions' },
  { name: 'Mockup', href: '#Mockup' },
];

export default function Layout() {
  const [activeCaseStudySection, setActiveCaseStudySection] = useState('Overview');
  const siteHeaderRef = useRef(null);
  const [siteHeaderHeight, setSiteHeaderHeight] = useState(56);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';
  const isAboutPage = location.pathname === '/blog';
  const isProjectPage = location.pathname.startsWith('/project/');
  const isAiTutorPage = location.pathname === '/project/cognitive-adaptive-ai-tutor';
  const isDesignStandardPage = location.pathname === '/project/design-standard-wcag';
  const isBankDocumentPage = location.pathname === '/project/bank-document-system';
  const isBlueCaseStudy = isDesignStandardPage || isBankDocumentPage;
  const isCaseStudyPage = isAiTutorPage || isDesignStandardPage || isBankDocumentPage;
  const caseStudyNavLinks = isAiTutorPage
    ? AI_TUTOR_NAV_LINKS
    : isDesignStandardPage
      ? DESIGN_STANDARD_NAV_LINKS
      : isBankDocumentPage
        ? BANK_DOCUMENT_NAV_LINKS
        : null;
  const projectNavLinks = isCaseStudyPage ? caseStudyNavLinks : PROJECT_NAV_LINKS;

  // Ensure project pages always start from the top when navigated to
  useEffect(() => {
    if (isProjectPage && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [isProjectPage, location.pathname]);

  useLayoutEffect(() => {
    const el = siteHeaderRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const apply = () => setSiteHeaderHeight(Math.round(el.getBoundingClientRect().height));
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (!isCaseStudyPage) return;
    setActiveCaseStudySection('Overview');
  }, [location.pathname, isCaseStudyPage]);

  useEffect(() => {
    if (!isCaseStudyPage || !caseStudyNavLinks?.length) return;
    const ids = caseStudyNavLinks.map((l) => l.href.slice(1));
    const compute = () => {
      const threshold = 100;
      let active = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) active = id;
      }
      setActiveCaseStudySection((prev) => (prev === active ? prev : active));
    };
    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [isCaseStudyPage, caseStudyNavLinks]);

  const handleWorkNav = () => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('home');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('home');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      if (window.history.replaceState) window.history.replaceState(null, '', '/#home');
    }
  };

  const handleAboutNav = () => {
    navigate('/blog');
  };

  const goHome = () => {
    navigate('/');
  };

  const goHomeProjectSection = () => {
    navigate('/');
    // When leaving a project page, always return to the top of Home.
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      if (window.history.replaceState) window.history.replaceState(null, '', '/');
    }, 0);
  };

  /** Global top bar — always same look as home (not case-study tinted). */
  const globalTopBarClass =
    'border-gray-100 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90';

  const headerBarClass = isBlueCaseStudy
    ? 'border-sky-200 bg-sky-50/95 backdrop-blur-md supports-[backdrop-filter]:bg-sky-50/90'
    : isAiTutorPage
      ? 'border-cyan-200/80 bg-cyan-50/90 backdrop-blur-md supports-[backdrop-filter]:bg-cyan-50/85'
      : 'border-gray-100 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90';

  const backBtnClass = isBlueCaseStudy
    ? 'text-slate-700 hover:text-sky-900'
    : isAiTutorPage
      ? 'text-slate-700 hover:text-cyan-900'
      : 'text-gray-700 hover:text-blue-600';

  const backIconClass = isBlueCaseStudy
    ? 'text-slate-500 group-hover:text-sky-800'
    : isAiTutorPage
      ? 'text-slate-500 group-hover:text-cyan-800'
      : 'text-gray-400 group-hover:text-blue-600';

  const sectionLinkClass = (sectionId) => {
    const active = isCaseStudyPage && activeCaseStudySection === sectionId;
    if (active) {
      if (isBlueCaseStudy) return 'bg-sky-200/80 text-sky-900';
      if (isAiTutorPage) return 'border border-cyan-200/80 bg-cyan-50/90 text-cyan-950';
      return 'bg-cyan-50 text-[rgb(52,118,128)]';
    }
    if (isCaseStudyPage) {
      if (isBlueCaseStudy) return 'border border-transparent text-slate-600 hover:bg-sky-100/90 hover:text-sky-900';
      if (isAiTutorPage) return 'border border-transparent text-slate-600 hover:bg-slate-100/90 hover:text-slate-900';
      return 'text-gray-600 hover:bg-teal-50/50 hover:text-[rgb(52,118,128)]';
    }
    return 'text-gray-600 hover:bg-gray-100 hover:text-black';
  };

  const topSocialIconClass =
    'top-social-link relative inline-flex rounded-md p-1.5 text-gray-500 transition-colors hover:bg-black/5 hover:text-black';

  const topSocialTooltipClass =
    'pointer-events-none absolute left-1/2 top-full z-[60] mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border-2 border-[#FFCC00] bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-black opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100';

  const topSocialLinks = (
    <>
      {FOOTER_SOCIAL.map(({ label, href, Icon }) => (
        <span key={label} className="group relative inline-flex">
          <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className={topSocialIconClass}
            aria-label={label}
          >
            <Icon size={17} className="shrink-0" />
          </a>
          <span className={topSocialTooltipClass} role="tooltip">
            {label}
          </span>
        </span>
      ))}
      <span className="group relative inline-flex">
        <Link to="/resume" className={topSocialIconClass} aria-label="Resume">
          <FileText size={17} className="shrink-0" />
        </Link>
        <span className={topSocialTooltipClass} role="tooltip">
          Resume
        </span>
      </span>
    </>
  );

  const asideShell = isBlueCaseStudy
    ? 'border-sky-200 bg-sky-50'
    : isAiTutorPage
      ? 'border-cyan-100 bg-cyan-50/50'
      : 'border-gray-100 bg-white';

  const scrollToSection = (href) => {
    const sectionId = href.slice(1);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (window.history.replaceState) {
      window.history.replaceState(null, '', `${location.pathname}${href}`);
    }
  };

  const projectNavMobileRow = (
    <div className="mx-auto flex w-full max-w-[100vw] items-center gap-2 px-3 py-2 sm:gap-3 sm:px-5 sm:py-2.5">
      <button
        type="button"
        onClick={goHomeProjectSection}
        className={`group flex shrink-0 items-center gap-1.5 rounded-md px-1.5 py-1.5 text-left transition-colors cursor-pointer sm:gap-2 sm:px-2 ${backBtnClass}`}
      >
        <ArrowLeft size={18} className={`shrink-0 transition-transform group-hover:-translate-x-0.5 ${backIconClass}`} aria-hidden />
        <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] sm:inline sm:text-[11px]">Back</span>
      </button>
      <nav
        className="flex min-h-0 min-w-0 flex-1 items-center gap-1 overflow-x-auto py-0.5 [-webkit-overflow-scrolling:touch]"
        aria-label="Project sections"
      >
        {projectNavLinks.map((link) => {
          const sectionId = link.href.slice(1);
          return (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className={`shrink-0 rounded-md px-2 py-1.5 text-left text-[10px] font-bold uppercase tracking-wide transition-colors cursor-pointer sm:text-[11px] ${sectionLinkClass(sectionId)}`}
            >
              {link.name}
            </button>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Global site header — fixed to viewport so it stays on top while scrolling */}
      <header
        ref={siteHeaderRef}
        className={`fixed inset-x-0 top-0 z-50 border-b shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] ${globalTopBarClass}`}
      >
        <div className="mx-auto flex w-full max-w-[100vw] items-center justify-between gap-3 px-3 py-2 sm:px-6 sm:py-2.5">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={goHome}
              className="group shrink-0 cursor-pointer text-lg font-black tracking-tighter sm:text-xl"
            >
              Claire<span className="text-blue-600 transition-all group-hover:ml-0.5">.</span>
            </button>
            <div className="flex min-w-0 flex-wrap items-center gap-0.5 sm:gap-1">{topSocialLinks}</div>
         
          </div>
          <nav className="flex shrink-0 items-center gap-1.5 sm:gap-2" aria-label="Primary">
            {HOME_NAV.map((link) => {
              const workActive = isHome && !isAboutPage;
              const aboutActive = isAboutPage;
              const isActive = link.kind === 'work' ? workActive : aboutActive;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={link.kind === 'work' ? handleWorkNav : handleAboutNav}
                  className={`cursor-pointer rounded-full px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors sm:px-3 ${
                    isActive ? 'bg-[#FFCC00] text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>
        </div>
      </header>
      {/* Reserve space for fixed header (height synced with measured header) */}
      <div className="shrink-0" style={{ height: siteHeaderHeight }} aria-hidden />

      {isProjectPage && (
        <>
          {/* md+: section nav under global header */}
          <aside
            className={`fixed bottom-0 left-0 z-40 hidden w-56 flex-col border-r p-6 pt-4 md:flex ${asideShell}`}
            style={{ top: siteHeaderHeight }}
            aria-label="Project"
          >
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
              <button
                type="button"
                onClick={goHomeProjectSection}
                className={`group mb-6 flex w-full items-center gap-2 rounded-md text-left transition-colors cursor-pointer ${backBtnClass}`}
              >
                <ArrowLeft
                  size={16}
                  className={`shrink-0 transition-transform group-hover:-translate-x-0.5 ${backIconClass}`}
                  aria-hidden
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Back</span>
              </button>
              <div
                className={`mb-4 h-px w-full ${isBlueCaseStudy ? 'bg-sky-200' : isAiTutorPage ? 'bg-cyan-200/70' : 'bg-gray-100'}`}
              />
              <nav className="flex flex-col gap-0.5" aria-label="Project sections">
                {projectNavLinks.map((link) => {
                  const sectionId = link.href.slice(1);
                  return (
                    <button
                      key={link.name}
                      type="button"
                      onClick={() => scrollToSection(link.href)}
                      className={`w-full cursor-pointer rounded-md px-2 py-2 text-left text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${sectionLinkClass(sectionId)}`}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>
          {/* < md: second sticky row — Back + sections (social is in global header) */}
          <div
            className={`sticky z-40 border-b md:hidden ${headerBarClass}`}
            style={{ top: siteHeaderHeight }}
          >
            {projectNavMobileRow}
          </div>
        </>
      )}

      <main className={`min-h-screen min-w-0 ${isProjectPage ? 'md:pl-56' : ''}`}>
        <Outlet />
      </main>
      <footer className={`w-full min-w-0 shrink-0 border-t border-gray-200 bg-white py-8 text-center md:py-10 ${isProjectPage ? 'md:pl-56' : ''}`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-800">
          Designed + Engineered by Xinping(Claire) - 2026
        </p>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .top-social-link:hover {
          cursor: url("data:image/svg+xml,${encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="11" fill="#FFCC00"/></svg>'
          )}") 14 14, auto;
        }
      `}</style>
    </div>
  );
}
