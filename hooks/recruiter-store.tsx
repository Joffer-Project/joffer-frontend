import { create } from "zustand";

import { Company, Industry, Role, Match, Job, Talent, TalentWithJobOffer } from "@/types";

interface RecruiterStore {
  formData: Company;
  roles: Role[];
  selectedRoles: string[];
  industries: Industry[];
  selectedIndustries: string[];
  matches: Match[];
  talents: TalentWithJobOffer[];
  activeTalent: TalentWithJobOffer;
  token: string;
  ownIndustries: Industry[];
  activeRecruiter: Company;
  setState: (state: Partial<RecruiterStore>) => void;
  getState: () => RecruiterStore;
}

const useRecruiter = create<RecruiterStore>((set, get) => ({
  formData: {} as Company,
  activeRecruiter: {} as Company,
  roles: [],
  selectedRoles: [],
  selectedIndustries: [],
  industries: [],
  ownIndustries: [],
  matches: [],
  talents: [],
  activeTalent: {} as TalentWithJobOffer,
  token: '',
  setState: (state) => set(state),
  getState: () => get(),
}));

export default useRecruiter;