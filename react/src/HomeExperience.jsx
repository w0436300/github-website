import { Box, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PortfolioHome from './PortfolioHome.jsx';
import { preloadWorldAssets } from './components/WorldCanvas.jsx';
import { HomePage } from './pages/index.jsx';
import { usePortfolioStore } from './store.js';

export default function HomeExperience() {
  const [showWorldNotice, setShowWorldNotice] = useState(false);
  const [modeSwitchSlot, setModeSwitchSlot] = useState(null);
  const mode = usePortfolioStore((state) => state.mode);
  const islandOnly = usePortfolioStore((state) => state.islandOnly);
  const setMode = usePortfolioStore((state) => state.setMode);
  const setIslandOnly = usePortfolioStore((state) => state.setIslandOnly);

  useEffect(() => {
    setModeSwitchSlot(document.getElementById('home-mode-switch-slot'));
  }, []);

  useEffect(() => {
    const startPreloading = () => preloadWorldAssets();
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(startPreloading, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }
    const timer = window.setTimeout(startPreloading, 400);
    return () => window.clearTimeout(timer);
  }, []);

  const modeSwitch = (
    <div className="home-mode-switch" role="group" aria-label="Homepage view mode">
      <button
        className={mode === 'world' ? 'active' : ''}
        onPointerEnter={preloadWorldAssets}
        onFocus={preloadWorldAssets}
        onClick={() => {
          preloadWorldAssets();
          if (mode !== 'world') setShowWorldNotice(true);
        }}
      ><Box size={16}/>3D World</button>
      <button className={mode === 'page' ? 'active' : ''} onClick={() => { setIslandOnly(false); setMode('page'); }}><FileText size={16}/>Page</button>
    </div>
  );

  return (
    <div className="home-experience">
      {modeSwitchSlot && createPortal(modeSwitch, modeSwitchSlot)}
      {mode === 'world' ? <PortfolioHome /> : <HomePage projectsOnly={islandOnly} />}
      {showWorldNotice && (
        <div className="world-notice-backdrop" role="presentation" onMouseDown={() => setShowWorldNotice(false)}>
          <section className="world-notice-card" role="dialog" aria-modal="true" aria-labelledby="world-notice-title" onMouseDown={(event) => event.stopPropagation()}>
            <span className="world-notice-character" aria-hidden="true">
              <img src={`${import.meta.env.BASE_URL || '/'}img/claire-dialogue.png`} alt="" />
            </span>
            <span className="world-notice-speaker">Claire</span>
            <p className="world-notice-kicker">3D WORLD PREVIEW</p>
            <h2 id="world-notice-title">Welcome to my little world!</h2>
            <p>It’s still under construction, so it may take a moment to load. You can always explore every project normally in Page mode.</p>
            <div className="world-notice-actions">
              <button type="button" className="game-choice secondary-choice" onClick={() => setShowWorldNotice(false)}>Stay in Page</button>
              <button type="button" className="game-choice primary-choice" onClick={() => { setShowWorldNotice(false); setMode('world'); }}>Enter 3D World <span>➜</span></button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
