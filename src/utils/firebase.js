// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBryNamyRj0Fif2TdA1U0xHSXajd-jb_y4",
  authDomain: "netflix-gpt-ff0c7.firebaseapp.com",
  projectId: "netflix-gpt-ff0c7",
  storageBucket: "netflix-gpt-ff0c7.appspot.com",
  messagingSenderId: "277959223420",
  appId: "1:277959223420:web:3b682b6fdd2998c9f381f9",
  measurementId: "G-TG1NJXKGVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
