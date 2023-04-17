// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFI-EU6EUir2mbad6kzK3HjjoBwem6Uy0",
  authDomain: "chat-rent-28597.firebaseapp.com",
  projectId: "chat-rent-28597",
  storageBucket: "chat-rent-28597.appspot.com",
  messagingSenderId: "553699242293",
  appId: "1:553699242293:web:2e8dd70d415bdaa24b5c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bd = app.firesore();

export{db};