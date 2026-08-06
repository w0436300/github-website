import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useProgress } from '@react-three/drei';
import WorldCanvas from './components/WorldCanvas.jsx';
import { usePortfolioStore } from './store.js';

function WorldLoading({ leaving = false, sceneRendered = false }) {
  const { progress, loaded, total, item } = useProgress();
  const assetPercent = Math.min(100, Math.max(0, Math.round(progress || 0)));
  const percent = sceneRendered ? 100 : Math.min(99, assetPercent);
  const assetName = item ? decodeURIComponent(item.split('/').pop()?.split('?')[0] || '') : '';
  const startedAt = useRef(performance.now());
  const [secondsRemaining, setSecondsRemaining] = useState(120);

  useEffect(() => {
    if (progress >= 99) {
      setSecondsRemaining(0);
      return;
    }
    if (progress < 2) return;
    const elapsedSeconds = Math.max((performance.now() - startedAt.current) / 1000, 0.5);
    const estimate = elapsedSeconds * ((100 - progress) / progress);
    setSecondsRemaining((previous) => {
      const smoothed = previous * 0.65 + estimate * 0.35;
      return Math.max(1, Math.min(600, Math.round(smoothed)));
    });
  }, [progress]);

  useEffect(() => {
    if (progress >= 99) return undefined;
    const timer = window.setInterval(() => {
      setSecondsRemaining((previous) => Math.max(1, previous - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [progress]);

  const formattedTime = `${String(Math.floor(secondsRemaining / 60)).padStart(2, '0')}:${String(secondsRemaining % 60).padStart(2, '0')}`;
  const timeRemaining = assetPercent >= 99
    ? 'Rendering the scene…'
    : formattedTime;

  return (
    <div className={`world-loading-screen ${leaving ? 'is-leaving' : ''}`} role="status" aria-live="polite">
      <div className="world-loading-card">
        <span className="world-loading-kicker">PREPARING CLAIRE’S WORLD</span>
        <div className="world-loading-value">{percent}<small>%</small></div>
        <div className="world-loading-track" aria-label={`3D world loading ${percent}%`}>
          <span style={{ width: `${percent}%` }} />
        </div>
        <div className="world-loading-time">
          <small>{sceneRendered ? 'READY' : assetPercent >= 99 ? 'BUILDING THE WORLD' : 'ESTIMATED TIME LEFT'}</small>
          <strong>{timeRemaining}</strong>
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
  const settleTimer = useRef();
  const revealTimer = useRef();
  const { active: assetsLoading, progress: assetProgress } = useProgress();
  const resetTraveler = usePortfolioStore((state) => state.resetTraveler);

  const handleWorldReady = useCallback(() => {
    setCanvasPainted(true);
  }, []);

  useEffect(() => {
    if (!canvasPainted || assetsLoading || assetProgress < 99) return undefined;
    window.clearTimeout(settleTimer.current);
    window.clearTimeout(revealTimer.current);
    settleTimer.current = window.setTimeout(() => {
      setSceneReady(true);
      revealTimer.current = window.setTimeout(() => setShowLoading(false), 700);
    }, 450);
    return () => {
      window.clearTimeout(settleTimer.current);
      window.clearTimeout(revealTimer.current);
    };
  }, [assetProgress, assetsLoading, canvasPainted]);

  useEffect(() => {
    let secondFrame;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => setCanvasReady(true));
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
      window.clearTimeout(settleTimer.current);
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
        {showLoading && <WorldLoading leaving={sceneReady} sceneRendered={canvasPainted} />}
        <p className="world-footer-copy">Designed + Engineered by Xinping(Claire) - 2026</p>
      </section>
    </main>
  );
}
