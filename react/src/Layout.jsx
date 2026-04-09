import { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  FileText,
  Menu,
  X,
} from 'lucide-react';

const HOME_NAV = [
  { name: 'Work', icon: Briefcase, href: '#home', kind: 'work' },
  { name: 'About', icon: BookOpen, href: '/blog', kind: 'about' },
];

const FOOTER_SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/xinping-w/', Icon: Linkedin },
  { label: 'Github', href: 'https://github.com/w0436300', Icon: Github },
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
  { name: 'Baseline', href: '#Baseline' },
  { name: 'Solution', href: '#Solution' },
  { name: 'Reflection', href: '#Reflection' },
  { name: 'Video', href: '#Video' },
];

/** Must match section `id`s on DesignStandardPage (design-standard-wcag). */
const DESIGN_STANDARD_NAV_LINKS = [
  { name: 'Overview', href: '#Overview' },
  { name: 'Challenge', href: '#Challenge' },
  { name: 'Approach', href: '#Approach' },
  { name: 'Documentation', href: '#Documentation' },
  { name: 'Structure', href: '#Structure' },
  { name: 'Library', href: '#LibraryExamples' },
  { name: 'Examples', href: '#Examples' },
  { name: 'Collaboration', href: '#Collaboration' },
  { name: 'Outcome', href: '#Outcome' },
  { name: 'Reflection', href: '#Reflection' },
];

export default function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCaseStudySection, setActiveCaseStudySection] = useState('Overview');
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';
  const isAboutPage = location.pathname === '/blog';
  const isProjectPage = location.pathname.startsWith('/project/');
  const isAiTutorPage = location.pathname === '/project/cognitive-adaptive-ai-tutor';
  const isDesignStandardPage = location.pathname === '/project/design-standard-wcag';
  const isCaseStudyPage = isAiTutorPage || isDesignStandardPage;
  const sidebarCollapsed = isProjectPage ? false : isSidebarCollapsed;
  const caseStudyNavLinks = isAiTutorPage
    ? AI_TUTOR_NAV_LINKS
    : isDesignStandardPage
      ? DESIGN_STANDARD_NAV_LINKS
      : null;
  const projectNavLinks = isCaseStudyPage ? caseStudyNavLinks : PROJECT_NAV_LINKS;

  useEffect(() => {
    if (!isCaseStudyPage) return;
    setActiveCaseStudySection('Overview');
  }, [location.pathname, isCaseStudyPage]);

  useEffect(() => {
    if (!isCaseStudyPage || !caseStudyNavLinks?.length) return;
    const ids = caseStudyNavLinks.map((l) => l.href.slice(1));
    const compute = () => {
      const threshold = 120;
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
    setIsMobileMenuOpen(false);
  };

  const handleAboutNav = () => {
    navigate('/blog');
    setIsMobileMenuOpen(false);
  };

  const goHome = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const goHomeProjectSection = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById('project');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      if (window.history.replaceState) window.history.replaceState(null, '', '/#project');
    }, 180);
  };

  return (
    <div className="bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Sidebar - 始终显示，用内联样式避免被全局 .hidden 覆盖 */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 flex flex-col transition-all duration-500 ease-in-out border-r ${
          isDesignStandardPage
            ? 'bg-sky-50 border-sky-200'
            : isAiTutorPage
              ? 'bg-cyan-50/50 border-cyan-100'
              : 'bg-white border-gray-100'
        } ${sidebarCollapsed ? 'w-24 p-6' : 'w-56 p-8'}`}
        style={{ display: 'flex' }}
      >
        <div className="flex flex-col h-full justify-between overflow-hidden min-h-0">
          <div className="min-h-0 flex-1 flex flex-col overflow-y-auto">
            {!isProjectPage && (
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="w-10 h-10 mb-12 flex items-center justify-center hover:bg-gray-50 rounded-xl transition-colors text-gray-400 hover:text-black shrink-0"
              >
                <Menu size={22} />
              </button>
            )}
            {!isProjectPage && (
              <button
                onClick={goHome}
                className={`cursor-pointer text-2xl font-black tracking-tighter mb-10 block group whitespace-nowrap transition-opacity duration-300 shrink-0 ${sidebarCollapsed ? 'opacity-0 h-0 pointer-events-none overflow-hidden' : 'opacity-100'}`}
              >
                XP<span className="text-blue-600 group-hover:ml-1 transition-all">.</span>
              </button>
            )}

            {isProjectPage ? (
              <nav className="flex flex-col gap-0">
                <button
                  type="button"
                  onClick={goHomeProjectSection}
                  className={`group flex items-center gap-2 transition-all w-full text-left ${
                    sidebarCollapsed ? 'justify-center' : ''
                  } ${
                    isDesignStandardPage
                      ? 'text-slate-700 hover:text-sky-900'
                      : isAiTutorPage
                        ? 'text-slate-700 hover:text-cyan-900'
                        : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <ArrowLeft
                    size={16}
                    className={`shrink-0 transition-transform group-hover:-translate-x-0.5 ${
                      isDesignStandardPage
                        ? 'text-slate-500 group-hover:text-sky-800'
                        : isAiTutorPage
                          ? 'text-slate-500 group-hover:text-cyan-800'
                          : 'text-gray-400 group-hover:text-blue-600'
                    }`}
                    aria-hidden
                  />
                  {!sidebarCollapsed && (
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Back</span>
                  )}
                </button>
                {!sidebarCollapsed && (
                  <div
                    className={`h-px w-full my-1 ${
                      isDesignStandardPage ? 'bg-sky-200' : isAiTutorPage ? 'bg-cyan-200/70' : 'bg-gray-100'
                    }`}
                  />
                )}
                {projectNavLinks.map((link) => {
                  const sectionId = link.href.slice(1);
                  const navActive =
                    isCaseStudyPage && activeCaseStudySection === sectionId;
                  return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(sectionId);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      if (window.history.replaceState) {
                        window.history.replaceState(null, '', `${location.pathname}${link.href}`);
                      }
                    }}
                    className={`group flex items-center gap-4 transition-all w-full text-left rounded-md ${
                      sidebarCollapsed ? 'justify-center px-0' : 'px-2 py-2 -mx-2'
                    } ${
                      navActive
                        ? isDesignStandardPage
                          ? 'bg-sky-200/80 text-sky-900'
                          : isAiTutorPage
                            ? 'bg-cyan-50/90 text-cyan-950 border border-cyan-200/80'
                            : 'bg-cyan-50 text-[rgb(52,118,128)]'
                        : isCaseStudyPage
                          ? isDesignStandardPage
                            ? 'text-slate-600 hover:bg-sky-100/90 hover:text-sky-900'
                            : isAiTutorPage
                              ? 'border border-transparent text-slate-600 hover:bg-slate-100/90 hover:text-slate-900'
                              : 'text-gray-600 hover:bg-teal-50/50 hover:text-[rgb(52,118,128)]'
                          : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {!sidebarCollapsed && (
                      <span className="text-[11px] uppercase tracking-[0.2em] font-bold">{link.name}</span>
                    )}
                  </button>
                );
                })}
              </nav>
            ) : (
              <nav className="flex flex-col gap-2 shrink-0">
                {HOME_NAV.map((link) => {
                  const Icon = link.icon;
                  const workActive = isHome && !isAboutPage;
                  const aboutActive = isAboutPage;
                  const isActive = link.kind === 'work' ? workActive : aboutActive;
                  return (
                    <button
                      key={link.name}
                      type="button"
                      onClick={link.kind === 'work' ? handleWorkNav : handleAboutNav}
                      className={`group flex items-center gap-4 transition-all w-full text-left rounded-md px-2 py-2.5 -mx-2 ${
                        sidebarCollapsed ? 'justify-center px-0' : ''
                      } ${isActive ? 'bg-[#FFCC00] text-black' : 'text-gray-400 hover:text-black'}`}
                    >
                      <span
                        className={`transition-colors shrink-0 ${
                          isActive ? 'text-black' : 'text-gray-200 group-hover:text-blue-600'
                        }`}
                      >
                        <Icon size={18} />
                      </span>
                      {!sidebarCollapsed && (
                        <span className="text-[11px] uppercase tracking-[0.2em] font-bold">{link.name}</span>
                      )}
                    </button>
                  );
                })}
              </nav>
            )}
          </div>

          <div
            className={`shrink-0 flex flex-col gap-4 pt-6 border-t ${
              isDesignStandardPage ? 'border-sky-200' : isAiTutorPage ? 'border-cyan-200' : 'border-gray-100'
            }`}
          >
            {!sidebarCollapsed ? (
              <>
                <div className="flex flex-col gap-2.5 text-[11px]">
                  {FOOTER_SOCIAL.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="underline underline-offset-[3px] text-gray-500 hover:text-black flex items-center gap-2"
                    >
                      <Icon size={14} className="shrink-0" />
                      {label}
                    </a>
                  ))}
                  <Link
                    to="/resume"
                    className="underline underline-offset-[3px] text-gray-500 hover:text-black flex items-center gap-2"
                  >
                    <FileText size={14} className="shrink-0" />
                    Resume
                  </Link>
                </div>
                <p className="text-[10px] text-gray-900 leading-snug">
                  Designed + Engineered by Xinping(Claire)
                </p>
              </>
            ) : (
              <div className="flex flex-col gap-4 items-center pb-1">
                {FOOTER_SOCIAL.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="text-gray-400 hover:text-black"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
                <Link to="/resume" className="text-gray-400 hover:text-black" aria-label="Resume">
                  <FileText size={18} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile nav - 小屏时通过 CSS 媒体查询显示 */}
      <nav className="sidebar-mobile-nav fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <button type="button" onClick={goHome} className="text-xl font-black tracking-tighter">
          XP.
        </button>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleWorkNav}
            className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${
              isHome && !isAboutPage ? 'bg-[#FFCC00] text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Work
          </button>
          <button
            type="button"
            onClick={handleAboutNav}
            className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${
              isAboutPage ? 'bg-[#FFCC00] text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-20 px-6 sidebar-mobile-overlay"
          aria-hidden
        >
          <nav className="flex flex-col gap-3">
            {HOME_NAV.map((link) => {
              const Icon = link.icon;
              const workActive = isHome && !isAboutPage;
              const aboutActive = isAboutPage;
              const isActive = link.kind === 'work' ? workActive : aboutActive;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={link.kind === 'work' ? handleWorkNav : handleAboutNav}
                  className={`flex items-center gap-4 text-left rounded-lg px-2 py-2 -mx-2 ${
                    isActive ? 'bg-[#FFCC00] text-black' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold uppercase tracking-wider">{link.name}</span>
                </button>
              );
            })}
            <div className="flex flex-col gap-3 text-sm border-t border-gray-100 pt-6">
              {FOOTER_SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="underline underline-offset-2 text-gray-600 flex items-center gap-2"
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
              <Link
                to="/resume"
                onClick={() => setIsMobileMenuOpen(false)}
                className="underline underline-offset-2 text-gray-600 flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </Link>
            </div>
            <p className="text-xs text-gray-900 pt-2">Designed + Engineered by Xinping(Claire)</p>
          </nav>
        </div>
      )}

      {/* Main content */}
      <main
        className={`transition-all duration-500 ease-in-out min-h-screen sidebar-main ${sidebarCollapsed ? 'pl-24' : 'pl-56'} pt-20 md:pt-4`}
      >
        <Outlet />
      </main>

      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        @media (max-width: 767px) {
          .sidebar-mobile-nav { display: flex !important; }
          main { padding-left: 0 !important; }
          aside { display: none !important; }
        }
        @media (min-width: 768px) {
          .sidebar-mobile-nav { display: none !important; }
          .sidebar-mobile-overlay { display: none !important; }
        }
      `}</style>
    </div>
  );
}
