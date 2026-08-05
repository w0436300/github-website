import { useMemo, useState, useCallback } from 'react';
import { Download, Lock, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useScrollToHash } from '../hooks/useScrollToHash.js';
import { projects } from '../data/projects.js';
import { isProjectUnlocked } from '../data/projectPasswords.js';
import { tryUnlockProject } from '../hooks/useProjectUnlock.js';
import PasswordModal from '../components/PasswordModal.jsx';
import { getProjectHoverTheme, OrganicHoverMask, ProjectJumpArrow } from '../components/OrganicHoverMask.jsx';
import { usePortfolioStore } from '../store.js';

const BASE = import.meta.env.BASE_URL || '/';

/** Mockup-aligned featured set */
const FEATURED_IDS = [
  'cognitive-adaptive-ai-tutor',
  'design-standard-wcag',
  'bank-document-system',
  'ai-knowledge-base-engineering',
  'project-request-collaboration',
  'medisupply-hub-ui',
];

const WORK_TABS = [
  { value: 'Featured', label: 'Featured' },
  { value: 'design', label: 'UX Design' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'Data Visualization', label: 'Data' },
  { value: 'All', label: 'All' },
];

function projectMatchesTab(p, tab) {
  if (tab === 'All') return true;
  if (tab === 'Featured') return FEATURED_IDS.includes(p.id);
  const cats = Array.isArray(p.categories) ? p.categories : [];
  const cat = p.category;
  if (tab === 'design') return cat === 'design' || cats.includes('design');
  if (tab === 'fullstack') return cat === 'fullstack' || cats.includes('fullstack');
  if (tab === 'Data Visualization') return cat === 'Data Visualization';
  return false;
}

export function HomePage({ projectsOnly = false }) {
  useScrollToHash();
  const islandCategory = usePortfolioStore((state) => state.activeCategory);
  const initialCategory = {
    featured: 'Featured',
    ux: 'design',
    development: 'fullstack',
    data: 'Data Visualization',
    all: 'All',
  }[islandCategory] || 'Featured';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [hoverTip, setHoverTip] = useState({ show: false, x: 0, y: 0, message: 'View details' });
  const [passwordModal, setPasswordModal] = useState({ open: false, project: null });
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const showHoverTip = (e, message) => {
    setHoverTip({ show: true, x: e.clientX, y: e.clientY, message });
  };
  const moveHoverTip = (e) => {
    setHoverTip((prev) => (prev.show ? { ...prev, x: e.clientX, y: e.clientY } : prev));
  };
  const hideHoverTip = () => setHoverTip((prev) => ({ ...prev, show: false }));

  const closePasswordModal = useCallback(() => {
    setPasswordModal({ open: false, project: null });
    setPasswordError('');
  }, []);

  const openProject = useCallback(
    (p) => {
      hideHoverTip();
      if (p.passwordProtected && !isProjectUnlocked(p.id)) {
        setPasswordError('');
        setPasswordModal({ open: true, project: p });
        return;
      }
      navigate(`/project/${p.id}`);
    },
    [navigate]
  );

  const handlePasswordUnlock = useCallback(
    (password) => {
      const project = passwordModal.project;
      if (!project) return false;
      const ok = tryUnlockProject(project.id, password);
      if (!ok) {
        setPasswordError('Incorrect password. Please try again.');
        return false;
      }
      setPasswordError('');
      setPasswordModal({ open: false, project: null });
      navigate(`/project/${project.id}`);
      return true;
    },
    [navigate, passwordModal.project]
  );

  const filteredProjects = useMemo(() => {
    const list = projects.filter((p) => projectMatchesTab(p, activeCategory));
    if (activeCategory !== 'Featured') return list;
    const order = new Map(FEATURED_IDS.map((id, i) => [id, i]));
    return [...list].sort((a, b) => (order.get(a.id) ?? 999) - (order.get(b.id) ?? 999));
  }, [activeCategory]);

  return (
    <section id="home" className="px-6 md:px-12 lg:px-20 pt-4 md:pt-4 pb-12 md:pb-4 bg-white">
      <PasswordModal
        open={passwordModal.open}
        onUnlock={handlePasswordUnlock}
        error={passwordError}
        onClearError={() => setPasswordError('')}
        onClose={closePasswordModal}
      />
      <div className="max-w-7xl mx-auto w-full">
        {hoverTip.show && (
          <div
            className="fixed z-[60] pointer-events-none"
            style={{ left: hoverTip.x + 14, top: hoverTip.y + 14 }}
            aria-hidden
          >
            <span
              className={`inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                ['View details', 'Enter password', 'Featured', 'UX Design', 'Full Stack', 'Data', 'All'].includes(
                  hoverTip.message
                )
                  ? 'border-2 border-[#FFCC00] bg-white text-black'
                  : 'border border-gray-200 bg-white text-gray-700'
              }`}
            >
              {hoverTip.message}
            </span>
          </div>
        )}
        {hoverTip.show && (
          <div
            className="fixed z-[60] pointer-events-none"
            style={{ left: hoverTip.x - 7, top: hoverTip.y - 7 }}
            aria-hidden
          >
            <span className="block w-[14px] h-[14px] rounded-full bg-[#FFCC00] shadow-[0_0_0_3px_rgba(255,204,0,0.25)]" />
          </div>
        )}
        <div id="project" className="scroll-mt-8">
          <div className="flex flex-wrap gap-x-8 gap-y-1 mb-10 md:mb-12 border-b border-gray-200">
            {WORK_TABS.map((tab) => {
              const isActive = activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveCategory(tab.value)}
                  onMouseEnter={(e) => showHoverTip(e, tab.label)}
                  onMouseMove={moveHoverTip}
                  onMouseLeave={hideHoverTip}
                  className={`relative pb-3 text-[11px] md:text-xs uppercase tracking-[0.15em] transition-colors cursor-none ${
                    isActive ? 'text-black font-bold' : 'text-gray-600 hover:text-black hover:font-bold'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FFCC00]"
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            {filteredProjects.map((p) => {
              const imgSrc = p.cover
                ? `${BASE}${p.cover.startsWith('/') ? p.cover.slice(1) : p.cover}`
                : null;
              const isProtected = Boolean(p.passwordProtected);
              const hoverTheme = getProjectHoverTheme(p);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => openProject(p)}
                  onMouseEnter={(e) => showHoverTip(e, isProtected ? 'Enter password' : 'View details')}
                  onMouseMove={moveHoverTip}
                  onMouseLeave={hideHoverTip}
                  className="group cursor-none text-left bg-white border border-gray-200 border-solid rounded-[8px] overflow-hidden shadow-none transition-all hover:shadow-sm active:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-full"
                >
                  <div className="flex flex-row items-stretch h-[70px] sm:h-[84px] md:h-[100px]">
                    <div className="relative w-[28%] sm:w-[30%] md:w-[32%] max-w-[280px] shrink-0 bg-white overflow-hidden border-r border-gray-200 self-stretch">
                      {imgSrc ? (
                        <img
                          src={imgSrc}
                          alt={p.title}
                          className={`absolute inset-0 h-full w-full object-center ${
                            p.cover?.endsWith('.svg')
                              ? 'object-contain p-1 bg-white'
                              : 'object-cover scale-[1.06]'
                          }`}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 p-2 text-center">
                          <span className="text-[10px] sm:text-xs font-bold text-gray-600 line-clamp-2 px-1">
                            {p.title}
                          </span>
                          {p.placeholderLabel && (
                            <span className="text-[9px] font-bold text-amber-700 uppercase tracking-wider">
                              {p.placeholderLabel}
                            </span>
                          )}
                        </div>
                      )}
                      {isProtected && (
                        <span
                          className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 border border-gray-300 bg-white/95 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-700 shadow-sm"
                          title="NDA — password required"
                        >
                          <Lock size={10} strokeWidth={2.5} aria-hidden />
                          NDA
                        </span>
                      )}
                    </div>
                    <div className="relative flex-1 min-w-0 self-stretch overflow-hidden">
                      {/* Default: title + tags + tools */}
                      <div className="relative z-0 flex h-full flex-col justify-center gap-1 px-3 py-2 sm:px-4 md:px-5 transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0">
                        <div className="flex justify-between items-start gap-2 min-w-0">
                          <h2 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 truncate min-w-0 pr-1">
                            {p.title}
                          </h2>
                          {(p.year || p.location) && (
                            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 tabular-nums shrink-0 mt-0.5">
                              {p.year && <span>{p.year}</span>}
                              {p.year && p.location && <span className="text-gray-300">·</span>}
                              {p.location && <span>{p.location}</span>}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-1 min-w-0">
                          {p.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-gray-700 border border-gray-300 bg-white"
                            >
                              {tag}
                            </span>
                          ))}
                          {p.tags.length > 3 && (
                            <span className="px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-gray-700 border border-gray-300 bg-white">
                              +{p.tags.length - 3}
                            </span>
                          )}
                          {Array.isArray(p.tools) && p.tools.length > 0 && (
                            <span className="ml-1 text-[8px] sm:text-[9px] font-medium text-gray-600 truncate">
                              {p.tools.slice(0, 5).join(' | ')}
                            </span>
                          )}
                        </div>
                      </div>

                      <OrganicHoverMask theme={hoverTheme} />

                      {/* Hover: description + themed jump arrow */}
                      <div className="absolute inset-0 z-20 flex items-center justify-between gap-3 px-3 py-2 sm:px-4 md:px-5 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100 group-focus-within:opacity-100">
                        <p className="text-sm sm:text-base text-gray-900 leading-snug line-clamp-3 min-w-0 flex-1">
                          {p.description}
                        </p>
                        <ProjectJumpArrow
                          className="shrink-0 w-9 h-5 sm:w-11 sm:h-7 transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-focus-within:translate-x-1.5"
                          style={{ color: hoverTheme.ink || '#0f172a' }}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResumePage() {
  const baseTrim = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE || '';
  const pdfHref = `${baseTrim}/resume/ClaireWang_Resume_2026.pdf`;

  return (
    <div className="px-6 md:px-12 lg:px-20 py-6 md:py-8">
      <Link
        to="/"
        className="group mb-3 inline-flex items-center gap-2 text-gray-700 transition-colors hover:text-black"
      >
        <ArrowLeft
          size={16}
          className="shrink-0 transition-transform group-hover:-translate-x-0.5"
          aria-hidden
        />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Back to home</span>
      </Link>
      <div className="flex justify-center">
        <a
          href={pdfHref}
          download="ClaireWang_Resume_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all h-10 px-5"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>
      <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50">
        <iframe
          src={pdfHref}
          title="Resume PDF"
          width="100%"
          height={900}
          style={{ border: 0 }}
          className="hidden md:block w-full"
        />
        <iframe
          src={pdfHref}
          title="Resume PDF (mobile)"
          style={{ width: '100%', height: 400, border: 0 }}
          className="block md:hidden w-full"
        />
      </div>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-black text-gray-200">404</h1>
      <p className="text-gray-500 mt-4">Page not found.</p>
    </div>
  );
}
