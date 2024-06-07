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

export { encryptData, decryptData };