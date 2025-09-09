// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0eR6n1B3kD_ICoMmAJt90GRvpPVHc-XI",
  authDomain: "thought-flow-136a5.firebaseapp.com",
  projectId: "thought-flow-136a5",
  storageBucket: "thought-flow-136a5.firebasestorage.app",
  messagingSenderId: "730869526103",
  appId: "1:730869526103:web:5441c9af8c6af3bb483d12",
  measurementId: "G-3398M60CGJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);