
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFI-EU6EUir2mbad6kzK3HjjoBwem6Uy0",
  authDomain: "chat-rent-28597.firebaseapp.com",
  projectId: "chat-rent-28597",
  storageBucket: "chat-rent-28597.appspot.com",
  messagingSenderId: "553699242293",
  appId: "1:553699242293:web:2e8dd70d415bdaa24b5c7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);

export{databaseApp};