import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8gqNqLz_cXnzMVt5D37bYEkjmOw9PEL8",
  authDomain: "alnisrineom.firebaseapp.com",
  projectId: "alnisrineom",
  storageBucket: "alnisrineom.firebasestorage.app",
  messagingSenderId: "637963326343",
  appId: "1:637963326343:web:d1a0eb60d8572a303bb922",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
