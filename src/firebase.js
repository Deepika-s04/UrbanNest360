import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAv6OuZqZDgkgEL_rqnsDvt9G61wwM2Dwg",
  authDomain: "urbannest360-2e7bb.firebaseapp.com",
  projectId: "urbannest360-2e7bb",
  storageBucket: "urbannest360-2e7bb.firebasestorage.app",
  messagingSenderId: "255062530047",
  appId: "1:255062530047:web:238ad7b5edfaa4e0caf9ca",
  measurementId: "G-ZL26CC0YMK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
