// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB04dtBHiNoLMabTQy5V_sIDt8_GuBUOlA",
  authDomain: "comanda-7c572.firebaseapp.com",
  projectId: "comanda-7c572",
  storageBucket: "comanda-7c572.appspot.com",
  messagingSenderId: "390253960196",
  appId: "1:390253960196:web:df7f9a5288c5bdfeb72951",
  measurementId: "G-6F4MVPVNML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);