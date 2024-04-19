import { create } from "zustand";

import { Talent, Industry, Role, Match, Job } from "@/types";

interface TalentStore {
  formData: Talent;
  roles: Role[];
  selectedRoles: string[];
  industries: Industry[];
  selectedIndustries: string[];
  matches: Match[];
  activeJobOffer: Job;
  jibOffers: Job[];
  token: string;
  setState: (state: Partial<TalentStore>) => void;
  getState: () => TalentStore;
}

const useTalent = create<TalentStore>((set, get) => ({
  formData: {} as Talent,
  roles: [],
  selectedRoles: [],
  selectedIndustries: [],
  industries: [],
  matches: [],
  activeJobOffer: {} as Job,
  jibOffers: [],  
  token: '',
  setState: (state) => set(state),
  getState: () => get(),
}));

export default useTalent;