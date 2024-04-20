import { create } from "zustand";

import { Company, Industry, Role, Match, Job } from "@/types";

interface RecruiterStore {
  formData: Company;
  roles: Role[];
  selectedRoles: string[];
  industries: Industry[];
  selectedIndustries: string[];
  matches: Match[];
  activeJobOffer: Job;
  jobOffers: Job[];
  token: string;
  setState: (state: Partial<RecruiterStore>) => void;
  getState: () => RecruiterStore;
}

const useRecruiter = create<RecruiterStore>((set, get) => ({
  formData: {} as Company,
  roles: [],
  selectedRoles: [],
  selectedIndustries: [],
  industries: [],
  matches: [],
  activeJobOffer: {} as Job,
  jobOffers: [],  
  token: '',
  setState: (state) => set(state),
  getState: () => get(),
}));

export default useRecruiter;