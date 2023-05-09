import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkWh1QjJA_yMOGxbhwbLQjjy3PxXA2UzU",
  authDomain: "chat-rent-4732b.firebaseapp.com",
  projectId: "chat-rent-4732b",
  storageBucket: "chat-rent-4732b.appspot.com",
  messagingSenderId: "99197342366",
  appId: "1:99197342366:web:5b198640f0cbe7299e218f",
  measurementId: "G-02TWZ5FCK4"
};


export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);
