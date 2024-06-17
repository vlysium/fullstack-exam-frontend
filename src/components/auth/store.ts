import { create } from "zustand";
import { User } from "../../entities/User";
import { createJSONStorage, persist } from "zustand/middleware";
import encryptedStorage from "../../services/encryptedStorage";

interface AuthState {user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

const useAuthStore = create<AuthState>()(
  persist( // persist the token and user in localStorage
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => encryptedStorage)
    }
  )
);

export default useAuthStore;