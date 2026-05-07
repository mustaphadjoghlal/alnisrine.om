import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// ========== إعداد Firebase (مرة واحدة وإلى الأبد) ==========
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// إعدادات مشروعك من Firebase (من صورتك السابقة)
const firebaseConfig = {
  apiKey: "AIzaSyC7B5Xm6uY07VZiZXTQ4ztAqpSE3n_8A3E",
  authDomain: "alnisrine-e531d.firebaseapp.com",
  projectId: "alnisrine-e531d",
  storageBucket: "alnisrine-e531d.firebasestorage.app",
  messagingSenderId: "81259688625",
  appId: "1:81259688625:web:3c8b66d647d0de7658e890",
  measurementId: "G-PJQZKV54DP"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("✅ Firebase initialized from main.tsx");
// ===================================================

createRoot(document.getElementById("root")!).render(<App />);
