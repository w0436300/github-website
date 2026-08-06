import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, Download, ArrowUpRight, Lock } from 'lucide-react';
import { projects } from '../data.js';
import { usePortfolioStore } from '../store.js';

const tabs = [
  { id: 'featured', label: 'Featured' },
  { id: 'ux', label: 'UX Design' },
  { id: 'visual-design', label: 'Visual Design' },
  { id: 'development', label: 'Full Stack' },
  { id: 'data', label: 'Data' },
  { id: 'all', label: 'All' },
];

const featuredIds = new Set(projects.slice(0, 6).map((project) => project.id));

function matchesTab(project, tab) {
  if (tab === 'all') return true;
  if (tab === 'featured') return featuredIds.has(project.id);
  if (tab === 'ux') return project.category === 'design' || project.categories?.includes('design');
  if (tab === 'development') return project.category === 'fullstack' || project.categories?.includes('fullstack');
  if (tab === 'data') return project.category === 'Data Visualization';
  if (tab === 'visual-design') return project.category === 'visual-design';
  return false;
}

function accentFor(project) {
  if (project.category === 'Data Visualization') return '#ef5479';
  if (project.category === 'visual-design') return '#f58a35';
  if (project.category === 'fullstack') return '#19b979';
  return '#7257ff';
}

export default function PageMode() {
  const navigate = useNavigate();
  const activeCategory = usePortfolioStore((state) => state.activeCategory);
  const setActiveCategory = usePortfolioStore((state) => state.setActiveCategory);
  const visibleProjects = useMemo(
    () => projects.filter((project) => matchesTab(project, activeCategory)),
    [activeCategory],
  );

  return (
    <div className="page-mode">
      <section className="page-hero" id="about">
        <div className="profile-card">
          <div className="profile-avatar">🦫</div>
          <p className="eyebrow">HELLO, I’M</p>
          <h1>Claire Wang</h1>
          <h2>UX Designer & Developer</h2>
          <p>I design useful, clear digital experiences by combining user-centered design, technical understanding and visual storytelling.</p>
          <div className="location"><MapPin size={17}/>Based in Canada</div>
          <div className="profile-actions"><button className="primary" onClick={() => navigate('/resume')}><Download size={16}/>Resume</button><a className="secondary" href="mailto:xinpingxh@gmail.com">Contact</a></div>
          <div className="social-links"><a href="https://www.linkedin.com/in/xinping-w/"><Linkedin/></a><a href="https://github.com/w0436300"><Github/></a><a href="mailto:xinpingxh@gmail.com"><Mail/></a></div>
        </div>
        <div className="about-panel">
          <div><span className="section-label">ABOUT ME</span><h2>Designing between people, systems and technology.</h2><p>My background spans visual communication, full-stack development, UX/product design and digital transformation. I am interested in complex products where thoughtful structure matters as much as polished interaction.</p></div>
          <div className="journey"><h3>My journey</h3><div><b>2016</b><span>Visual Communication Design</span></div><div><b>2023</b><span>Full Stack Development</span></div><div><b>2024–Now</b><span>UX / Product Design & Digital Transformation</span></div></div>
          <div className="skill-cloud" id="skills"><h3>Skills</h3>{['UX Strategy','User Research','Figma','Design Systems','React','Next.js','Node.js','Three.js','Blender','Adobe CC'].map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </section>
      <section className="work-section" id="work">
        <span className="section-label">SELECTED WORK</span>
        <h2>{tabs.find((tab) => tab.id === activeCategory)?.label} projects</h2>
        <div className="project-tabs" role="tablist" aria-label="Project categories">
          {tabs.map((tab) => <button key={tab.id} className={activeCategory === tab.id ? 'active' : ''} onClick={() => setActiveCategory(tab.id)} role="tab" aria-selected={activeCategory === tab.id}>{tab.label}</button>)}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => {
            const accent = accentFor(project);
            return (
              <article className="project-card" key={project.id} style={{ '--accent': accent }}>
                <button className="project-card-action" type="button" onClick={() => navigate(`/project/${project.id}`)} aria-label={`Open ${project.title}`}>
                  <div className="project-thumb"><span>{project.category}</span>{project.cover ? <img src={project.cover} alt="" /> : <div className="thumb-art" />}</div>
                  <div className="project-body"><small>{project.tags?.[0]}</small><h3>{project.title}</h3><p>{project.description}</p><span className="project-link">{project.passwordProtected && <Lock size={14}/>}View case study <ArrowUpRight size={16}/></span></div>
                </button>
              </article>
            );
          })}
        </div>
      </section>
      <section className="contact-section" id="contact"><span className="section-label">CONTACT</span><h2>Let’s turn a complex idea into a clear experience.</h2><a href="mailto:xinpingxh@gmail.com">xinpingxh@gmail.com <ArrowUpRight/></a></section>
    </div>
  );
}
