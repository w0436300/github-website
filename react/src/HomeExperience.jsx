import { Box, FileText } from 'lucide-react';
import { useState } from 'react';
import PortfolioHome from './PortfolioHome.jsx';
import { HomePage } from './pages/index.jsx';
import { usePortfolioStore } from './store.js';

export default function HomeExperience() {
  const [showWorldNotice, setShowWorldNotice] = useState(false);
  const mode = usePortfolioStore((state) => state.mode);
  const islandOnly = usePortfolioStore((state) => state.islandOnly);
  const setMode = usePortfolioStore((state) => state.setMode);
  const setIslandOnly = usePortfolioStore((state) => state.setIslandOnly);

  return (
    <div className="home-experience">
      <div className="home-mode-switch" role="group" aria-label="Homepage view mode">
        <button className={mode === 'world' ? 'active' : ''} onClick={() => mode !== 'world' && setShowWorldNotice(true)}><Box size={16}/>3D World</button>
        <button className={mode === 'page' ? 'active' : ''} onClick={() => { setIslandOnly(false); setMode('page'); }}><FileText size={16}/>Page</button>
      </div>
      {mode === 'world' ? <PortfolioHome /> : <HomePage projectsOnly={islandOnly} />}
      {showWorldNotice && (
        <div className="world-notice-backdrop" role="presentation" onMouseDown={() => setShowWorldNotice(false)}>
          <section className="world-notice-card" role="dialog" aria-modal="true" aria-labelledby="world-notice-title" onMouseDown={(event) => event.stopPropagation()}>
            <span className="world-notice-icon"><Box size={24} /></span>
            <p className="world-notice-kicker">3D WORLD PREVIEW</p>
            <h2 id="world-notice-title">This world is still under construction.</h2>
            <p>The 3D experience may load slowly on some devices. You can browse every project normally in Page mode.</p>
            <div className="world-notice-actions">
              <button type="button" className="world-notice-secondary" onClick={() => setShowWorldNotice(false)}>Stay in Page</button>
              <button type="button" className="world-notice-primary" onClick={() => { setShowWorldNotice(false); setMode('world'); }}>Enter 3D World</button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
