import { create } from "zustand";
import { User } from "../../entities/User";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;

  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

const useAuthStore = create<AuthState>()(
  persist( // persist the token and user in localStorage
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      removeToken: () => set({ token: null }),

      user: null,
      setUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useAuthStore;