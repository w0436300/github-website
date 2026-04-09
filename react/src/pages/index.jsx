import { useMemo, useState } from 'react';
import { Award, ArrowUpRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToHash } from '../hooks/useScrollToHash.js';
import { projects } from '../data/projects.js';

const BASE = import.meta.env.BASE_URL || '/';

/** Mockup-aligned featured set */
const FEATURED_IDS = ['cognitive-adaptive-ai-tutor', 'design-standard-wcag', 'medisupply-hub-ui'];

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

const SKILL_ROWS = [
  {
    label: 'UX Design',
    value: 'User Research | Wireframing | Prototyping',
  },
  {
    label: 'Engineering',
    value: 'React | JavaScript/TypeScript | HTML/CSS/Tailwind',
  },
  {
    label: 'Data',
    value: 'Power BI | SQL | Python',
  },
];

export function HomePage() {
  useScrollToHash();
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [hoverTip, setHoverTip] = useState({ show: false, x: 0, y: 0 });
  const navigate = useNavigate();

  const filteredProjects = useMemo(
    () => projects.filter((p) => projectMatchesTab(p, activeCategory)),
    [activeCategory]
  );

  return (
    <section id="home" className="px-6 md:px-12 lg:px-20 pt-4 md:pt-4 pb-24 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        {hoverTip.show && (
          <div
            className="fixed z-[60] pointer-events-none"
            style={{ left: hoverTip.x + 14, top: hoverTip.y + 14 }}
            aria-hidden
          >
            <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-gray-200 bg-white text-gray-700 shadow-sm">
              View details
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
      <div className="mb-2">
          <span className="inline-flex items-center px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-[#FFCC00] text-black rounded-lg">
            <Award size={14} className="shrink-0" strokeWidth={2.5} /> 
            Google UX Design Certified
          </span>
        </div>
        <h1
          className="text-3xl font-slate-700 leading-[1.1] tracking-tighter text-black max-w-4xl mb-2"
          style={{ fontFamily: '"Source Sans Pro", ui-sans-serif, system-ui, sans-serif' }}
        >
          I&apos;m Xinping (Claire), a product designer bridging design and engineering.
        </h1>


        <div className="space-y-0 mb-6 max-w-4xl border-gray-200 pb-6">
          {SKILL_ROWS.map((row) => (
            <p key={row.label} className="text-[10px] sm:text-[11px] md:text-xs leading-snug">
              <span className="text-gray-600 font-medium uppercase tracking-wider">
                {row.label}
                <span className="text-gray-300 mx-1.5">—</span>
              </span>
              <span className="text-gray-900 font-normal">{row.value}</span>
            </p>
          ))}
        </div>

        <div id="project" className="scroll-mt-8">
          <div className="flex flex-wrap gap-x-8 gap-y-1 mb-10 md:mb-12 border-b border-gray-200">
            {WORK_TABS.map((tab) => {
              const isActive = activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveCategory(tab.value)}
                  className={`relative pb-3 text-[11px] md:text-xs uppercase tracking-[0.15em] transition-colors ${
                    isActive ? 'text-black' : 'text-gray-400 hover:text-gray-700'
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredProjects.map((p) => {
              const imgSrc = p.cover
                ? `${BASE}${p.cover.startsWith('/') ? p.cover.slice(1) : p.cover}`
                : null;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => navigate(`/project/${p.id}`)}
                  onMouseEnter={(e) =>
                    setHoverTip({ show: true, x: e.clientX, y: e.clientY })
                  }
                  onMouseMove={(e) =>
                    setHoverTip((prev) => (prev.show ? { ...prev, x: e.clientX, y: e.clientY } : prev))
                  }
                  onMouseLeave={() => setHoverTip((prev) => ({ ...prev, show: false }))}
                  className="group cursor-none text-left bg-white border border-gray-200 border-solid rounded-none shadow-none transition-all hover:shadow-sm hover:bg-gray-50/40 active:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <div className="aspect-video bg-white overflow-hidden border-b border-gray-200 relative">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={p.title}
                        className={`absolute inset-0 h-full w-full object-cover object-center ${
                          p.cover?.endsWith('.svg') ? '' : 'scale-[1.06]'
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-1 p-4 text-center">
                        <span className="text-sm font-bold text-gray-600 line-clamp-2 px-2">{p.title}</span>
                        {p.placeholderLabel && (
                          <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                            {p.placeholderLabel}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-gray-700 border border-gray-300 bg-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {(p.year || p.location) && (
                        <div className="flex items-center gap-2 text-[11px] text-gray-500 tabular-nums shrink-0 ml-auto">
                          {p.year && <span>{p.year}</span>}
                          {p.year && p.location && <span className="text-gray-300">·</span>}
                          {p.location && <span>{p.location}</span>}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-start gap-2">
                      <h2 className="text-lg md:text-xl font-black tracking-tight text-black group-hover:text-[#1F4D3A] transition-colors pr-2">
                        {p.title}
                      </h2>
                      <ArrowUpRight
                        size={18}
                        className="text-gray-300 group-hover:text-[#1F4D3A] transition-colors shrink-0 mt-0.5"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">{p.description}</p>
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
  const pdfHref = `${baseTrim}/resume/resume-new.pdf`;

  return (
    <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-4xl">
        <h1 className="text-[44px] md:text-[72px] font-black tracking-tighter mb-10 leading-[0.95] text-black">
          Resume<span className="text-blue-600">.</span>
        </h1>
        <p className="text-xl text-gray-500 font-light mb-12 max-w-2xl">
          Download or view my resume below.
        </p>
        <a
          href={pdfHref}
          download="resume-new.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all h-12 px-6"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>
      <div className="mt-16 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50">
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
