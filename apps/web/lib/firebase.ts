// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7y6ce7kdFT9r_ow-zJH6k32Y0vb4T7Qk",
  authDomain: "budget-me-6c4b6.firebaseapp.com",
  projectId: "budget-me-6c4b6",
  storageBucket: "budget-me-6c4b6.firebasestorage.app",
  messagingSenderId: "482884981489",
  appId: "1:482884981489:web:5d3c0c479c5382ddac8f50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("email");
googleProvider.addScope("profile");

export default app;
