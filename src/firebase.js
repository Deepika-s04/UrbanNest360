// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTDYzmQtXy3Tv5dr74TVALC-w7MbMllOE",
  authDomain: "urbannest360-b0cc3.firebaseapp.com",
  projectId: "urbannest360-b0cc3",
  storageBucket: "urbannest360-b0cc3.firebasestorage.app",
  messagingSenderId: "300454762055",
  appId: "1:300454762055:web:4a9e618cbb16d3fd6b4362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);



