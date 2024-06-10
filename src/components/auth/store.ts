import { create } from "zustand";
import { User } from "../../entities/User";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import { decryptData, encryptData } from "../../services/cryptData";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;

  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

// storage with encryption to protect against editing the token and user
const encryptedStorage: StateStorage = {
  getItem: (name) => {
    const encryptedData = localStorage.getItem(name);
    if (!encryptedData) return null;
    try {
      return decryptData(encryptedData);
    } catch (error) {
      console.error("Error decrypting data from localStorage", error);
      return null;
    }
  },
  setItem: (name, value) => {
    const encryptedData = encryptData(value);
    localStorage.setItem(name, encryptedData);
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  }
};

const useAuthStore = create<AuthState>()(
  persist( // persist the token and user in sessionStorage
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
      storage: createJSONStorage(() => encryptedStorage)
    }
  )
);

export default useAuthStore;