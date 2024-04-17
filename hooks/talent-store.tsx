import { create } from "zustand";

import { Talent, Industry, Role } from "@/types";

interface TalentStore {
  formData: Talent;
  roles: Role[];
  selectedRoles: string[];
  industries: Industry[];
  selectedIndustries: string[];
  setState: (state: Partial<TalentStore>) => void;
  getState: () => TalentStore;
}

const useTalent = create<TalentStore>((set, get) => ({
  formData: {} as Talent,
  roles: [],
  selectedRoles: [],
  selectedIndustries: [],
  industries: [],
  setState: (state) => set(state),
  getState: () => get(),
}));

export default useTalent;