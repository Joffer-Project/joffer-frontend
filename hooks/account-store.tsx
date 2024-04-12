import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Account } from "@/types";

interface AccountStore {
  active: Account;
  setActive: (account: Account) => void;
}

const useAccount = create(
  persist<AccountStore>(
    (set) => ({
      active: {} as Account,
      setActive: (account) => set({ active: account }),
    }),
    {
      name: "joffer-storage",
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
);

export default useAccount;