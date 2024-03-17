// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5a38d.firebaseapp.com",
  projectId: "mern-blog-5a38d",
  storageBucket: "mern-blog-5a38d.appspot.com",
  messagingSenderId: "640346279515",
  appId: "1:640346279515:web:670b4cc77998addffe797e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 