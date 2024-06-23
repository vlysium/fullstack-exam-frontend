import { StateStorage } from "zustand/middleware";
import CryptoJS from "crypto-js";

const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;

const encryptData = (data: any) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), encryptionKey).toString();
  return encryptedData;
};

const decryptData = (encryptedData: string) => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
  const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
};

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

export default encryptedStorage;