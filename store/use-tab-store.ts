// store/useTabStore.ts
import { create } from "zustand";

interface TabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: "home", // default tab
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
