// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs6ldrbe6TBCQVHREq8yukPFrEo6CNlQo",
  authDomain: "disney-plus-clone-1147a.firebaseapp.com",
  projectId: "disney-plus-clone-1147a",
  storageBucket: "disney-plus-clone-1147a.appspot.com",
  messagingSenderId: "1087690603205",
  appId: "1:1087690603205:web:d1af739670405069a5ceac",
  measurementId: "G-FGY050S764",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
