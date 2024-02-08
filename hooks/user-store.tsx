import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { User } from "@/types";

interface UserStore {
  active: User;
  isLogged: boolean;
  setActive: (client: User) => void;
  setLogged: (isLogged: boolean) => void;
}

const useUser = create(
  persist<UserStore>(
    (set) => ({
      active: {} as User,
      isLogged: false,
      setActive: (client: User) => set({ active: client }),
      setLogged: (isLogged: boolean) => set({ isLogged }),
    }),
    {
      name: "joffer-storage",
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
);

export default useUser;