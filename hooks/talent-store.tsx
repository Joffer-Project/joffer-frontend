import { create } from "zustand";

import { Talent } from "@/types";

interface TalentStore {
  formData: Talent;
  setState: (state: Partial<TalentStore>) => void;
  action: () => Talent;
}

const useTalent = create<TalentStore>((set, get) => ({
  formData: {} as Talent,
  setState: (state) => set(state),
  action: () => {
    const state = get();
    return state.formData as Talent;
  },
}));

export default useTalent;