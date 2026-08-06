import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({
  mode: 'page',
  selectedIsland: null,
  journeyTarget: null,
  dialog: null,
  activeCategory: 'featured',
  islandOnly: false,
  travelerResetToken: 0,
  miniGameOpen: false,
  setMode: (mode) => set({ mode }),
  setActiveCategory: (activeCategory) => set({ activeCategory }),
  setIslandOnly: (islandOnly) => set({ islandOnly }),
  setMiniGameOpen: (miniGameOpen) => set({ miniGameOpen }),
  startJourney: (island) => set({ selectedIsland: island, journeyTarget: island, dialog: null }),
  travelToPoint: (position) => set({ selectedIsland: null, journeyTarget: { id: 'free-travel', type: 'point', position }, dialog: null }),
  cancelJourney: () => set({ journeyTarget: null }),
  resetTraveler: () => set((state) => ({
    selectedIsland: null,
    journeyTarget: null,
    dialog: null,
    miniGameOpen: false,
    travelerResetToken: state.travelerResetToken + 1,
  })),
  finishJourney: (island) => set({ selectedIsland: island, journeyTarget: null, dialog: island }),
  closeDialog: () => set({ dialog: null }),
}));
