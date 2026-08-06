import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useProgress } from '@react-three/drei';
import WorldCanvas from './components/WorldCanvas.jsx';
import { usePortfolioStore } from './store.js';

function WorldLoading({ leaving = false }) {
  const { progress, loaded, total, item } = useProgress();
  const percent = Math.min(100, Math.max(0, Math.round(progress || 0)));
  const assetName = item ? decodeURIComponent(item.split('/').pop()?.split('?')[0] || '') : '';
  return (
    <div className={`world-loading-screen ${leaving ? 'is-leaving' : ''}`} role="status" aria-live="polite">
      <div className="world-loading-card">
        <span className="world-loading-kicker">PREPARING CLAIRE’S WORLD</span>
        <div className="world-loading-value">{percent}<small>%</small></div>
        <div className="world-loading-track" aria-label={`3D world loading ${percent}%`}>
          <span style={{ width: `${percent}%` }} />
        </div>
        <p>{total > 0 ? `Loading assets ${loaded} / ${total}` : 'Discovering islands and ocean…'}</p>
        {assetName && <small className="world-loading-asset">{assetName}</small>}
        <small className="world-loading-note">Large 3D models may take a moment. Page mode remains available.</small>
      </div>
    </div>
  );
}

export default function PortfolioHome() {
  const [canvasReady, setCanvasReady] = useState(false);
  const [canvasPainted, setCanvasPainted] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const revealTimer = useRef();
  const { active: assetsLoading, progress: assetProgress } = useProgress();
  const resetTraveler = usePortfolioStore((state) => state.resetTraveler);

  const handleWorldReady = useCallback(() => {
    setCanvasPainted(true);
  }, []);

  useEffect(() => {
    if (!canvasPainted || assetsLoading || assetProgress < 99) return undefined;
    setSceneReady(true);
    window.clearTimeout(revealTimer.current);
    revealTimer.current = window.setTimeout(() => setShowLoading(false), 500);
    return () => window.clearTimeout(revealTimer.current);
  }, [assetProgress, assetsLoading, canvasPainted]);

  useEffect(() => {
    let secondFrame;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => setCanvasReady(true));
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
      window.clearTimeout(revealTimer.current);
    };
  }, []);

  return (
    <main className="app-shell">
      <section className="world-layout">
        <div className="hero-copy world-controls" id="world-home">
          <div className="interaction-note">
            <kbd>W</kbd><span><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></span>
            <p>Move, or click anywhere to auto-travel</p>
            <button type="button" className="return-start-button" onClick={resetTraveler} aria-label="Return to starting point">↺ Start</button>
          </div>
        </div>
        <Suspense fallback={null}>
          {canvasReady && <WorldCanvas onReady={handleWorldReady} />}
        </Suspense>
        {showLoading && <WorldLoading leaving={sceneReady} />}
        <p className="world-footer-copy">Designed + Engineered by Xinping(Claire) - 2026</p>
      </section>
    </main>
  );
}
