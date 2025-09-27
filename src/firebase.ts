// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-ecom-2024-41530.firebaseapp.com",
  projectId: "mern-ecom-2024-41530",
  storageBucket: "mern-ecom-2024-41530.firebasestorage.app",
  messagingSenderId: "1040073726113",
  appId: "1:1040073726113:web:0df45f8d2f40ce652378e0",
  measurementId: "G-CG7TV7VK1D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);
