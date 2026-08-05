import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({
  mode: 'page',
  selectedIsland: null,
  journeyTarget: null,
  dialog: null,
  activeCategory: 'featured',
  islandOnly: false,
  setMode: (mode) => set({ mode }),
  setActiveCategory: (activeCategory) => set({ activeCategory }),
  setIslandOnly: (islandOnly) => set({ islandOnly }),
  startJourney: (island) => set({ selectedIsland: island, journeyTarget: island, dialog: null }),
  finishJourney: (island) => set({ selectedIsland: island, journeyTarget: null, dialog: island }),
  closeDialog: () => set({ dialog: null }),
}));
