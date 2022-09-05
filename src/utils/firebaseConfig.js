// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1y3cGu3cXq8SnDJTi-iy7WbRyLG3WgNE",
  authDomain: "ecommerce-buonmate.firebaseapp.com",
  projectId: "ecommerce-buonmate",
  storageBucket: "ecommerce-buonmate.appspot.com",
  messagingSenderId: "98088634278",
  appId: "1:98088634278:web:a3072713a8a6e6bb90b167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore initialize
const db = getFirestore(app)

export default db