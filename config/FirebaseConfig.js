// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwqugjBjo7OLj0vd_fkCQmVouzPTDpzvs",
  authDomain: "learning-management-243fb.firebaseapp.com",
  projectId: "learning-management-243fb",
  storageBucket: "learning-management-243fb.appspot.com",
  messagingSenderId: "197227300451",
  appId: "1:197227300451:web:1e4aefdf7cabd41809da56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);