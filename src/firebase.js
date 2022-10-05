
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3XCNRu1ypOIphD_pvXke5dMdA94bAL_8",
  authDomain: "firestore-todo-6e0b9.firebaseapp.com",
  projectId: "firestore-todo-6e0b9",
  storageBucket: "firestore-todo-6e0b9.appspot.com",
  messagingSenderId: "118174513318",
  appId: "1:118174513318:web:c044f3a38a4532123edc67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);