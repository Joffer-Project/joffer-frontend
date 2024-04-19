import { create } from "zustand";

import { Job, Match } from "@/types";

interface DashboardStore {
  matches: Match[];
  activeJobOffer: Job;
  token: string;
  setState: (state: Partial<DashboardStore>) => void;
  getState: () => DashboardStore;
}

const useDashboard = create<DashboardStore>((set, get) => ({
  matches: [],
  activeJobOffer: {} as Job,
  token: '',
  setState: (state) => set(state),
  getState: () => get(),
}));

export default useDashboard;