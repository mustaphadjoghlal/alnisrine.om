import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7B5Xm6uY07VZiZXTQ4ztAqpSE3n_8A3E",
  authDomain: "alnisrine-e531d.firebaseapp.com",
  projectId: "alnisrine-e531d",
  storageBucket: "alnisrine-e531d.firebasestorage.app",
  messagingSenderId: "81259688625",
  appId: "1:81259688625:web:7200c310c4b4957d58e890",
  measurementId: "G-8098ZTHSCV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export async function uploadProductImage(file: File, productName: string): Promise<string> {
  const extension = file.name.split('.').pop();
  const fileName = `${productName.replace(/\s/g, '_')}_${Date.now()}.${extension}`;
  const storageRef = ref(storage, `products/${fileName}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}
