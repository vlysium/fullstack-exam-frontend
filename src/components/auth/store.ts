import { create } from "zustand";
import { User } from "../../entities/User";

interface AuthState {user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

const useAuthStore = create<AuthState>()(
  (set) => ({
    user: null,
    setUser: (user) => set({ user }),
    removeUser: () => set({ user: null }),
  })
);

export default useAuthStore;