// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwBlHLBU2yyDM10d2TFSiY8lS8yFTKhjs",
  authDomain: "gptnetflix-758f2.firebaseapp.com",
  projectId: "gptnetflix-758f2",
  storageBucket: "gptnetflix-758f2.appspot.com",
  messagingSenderId: "349640485329",
  appId: "1:349640485329:web:7073da6072beb22817d8f0",
  measurementId: "G-0WHCXNGR5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
