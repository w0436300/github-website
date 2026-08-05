import { Suspense, useEffect, useState } from 'react';
import WorldCanvas from './components/WorldCanvas.jsx';

export default function PortfolioHome() {
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    let secondFrame;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => setCanvasReady(true));
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
    };
  }, []);

  return (
    <main className="app-shell">
      <section className="world-layout">
        <div className="hero-copy world-controls" id="world-home">
          <div className="interaction-note"><kbd>W</kbd><span><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></span><p>Move, or click an island to auto-travel</p></div>
        </div>
        <Suspense fallback={<div className="loading">Loading portfolio world…</div>}>
          {canvasReady ? <WorldCanvas /> : <div className="loading">Preparing 3D world…</div>}
        </Suspense>
        <p className="world-footer-copy">Designed + Engineered by Xinping(Claire) - 2026</p>
      </section>
    </main>
  );
}
