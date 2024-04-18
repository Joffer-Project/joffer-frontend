import { create } from "zustand";

import { Match } from "@/types";

interface DashboardStore {
  matches: Match[];
  token: string;
  setState: (state: Partial<DashboardStore>) => void;
  getState: () => DashboardStore;
}

const useDashboard = create<DashboardStore>((set, get) => ({
  matches: [],
  token: '',
  setState: (state) => set(state),
  getState: () => get(),
}));

export default useDashboard;