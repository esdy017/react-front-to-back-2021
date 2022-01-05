// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmyTwBGzlv-ZvJdVcYEM4raqktQsW8vLE",
  authDomain: "house-marketplace-app-12a7f.firebaseapp.com",
  projectId: "house-marketplace-app-12a7f",
  storageBucket: "house-marketplace-app-12a7f.appspot.com",
  messagingSenderId: "817158281735",
  appId: "1:817158281735:web:d41956f2fc91ee17f7e8a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
