// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDaU78nRSrhZmeM6i5ZjCIL3ETIX52EvLA",
  authDomain: "rj--proyectofinal-coder.firebaseapp.com",
  projectId: "rj--proyectofinal-coder",
  storageBucket: "rj--proyectofinal-coder.appspot.com",
  messagingSenderId: "878081216153",
  appId: "1:878081216153:web:c8533eb119cb95790eb208",
  measurementId: "G-1H423MMD2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore ( app )