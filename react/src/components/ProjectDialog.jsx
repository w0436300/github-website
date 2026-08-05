import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePortfolioStore } from '../store';

export default function ProjectDialog() {
  const navigate = useNavigate();
  const dialog = usePortfolioStore((s) => s.dialog);
  const closeDialog = usePortfolioStore((s) => s.closeDialog);
  const setMode = usePortfolioStore((s) => s.setMode);
  const setActiveCategory = usePortfolioStore((s) => s.setActiveCategory);
  const setIslandOnly = usePortfolioStore((s) => s.setIslandOnly);
  return (
    <AnimatePresence>
      {dialog && (
        <motion.div className="dialog-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeDialog}>
          <motion.article className="dialog-card" initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94 }} onClick={(e) => e.stopPropagation()}>
            <button className="dialog-close" onClick={closeDialog}><X /></button>
            <span className="dialog-kicker">Destination reached</span>
            <h2>{dialog.id === 'about' ? 'Meet Claire?' : `Enter ${dialog.title}?`}</h2>
            <p>{dialog.id === 'about' ? 'Visit the lighthouse studio to learn about Claire’s journey, strengths and current direction.' : dialog.subtitle}</p>
            <div className="dialog-actions">
              <button className="secondary" onClick={closeDialog}>Not now</button>
              <button className="primary" onClick={() => { if (dialog.id === 'about') { closeDialog(); navigate('/blog'); return; } setActiveCategory(dialog.id); setIslandOnly(true); closeDialog(); setMode('page'); setTimeout(() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>Enter</button>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
