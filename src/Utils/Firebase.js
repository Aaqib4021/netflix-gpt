// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0YeZDPKaPucg6vDTkduwyub8ZT8TZMP4",
  authDomain: "netflixgpt-4619a.firebaseapp.com",
  projectId: "netflixgpt-4619a",
  storageBucket: "netflixgpt-4619a.appspot.com",
  messagingSenderId: "1045659798750",
  appId: "1:1045659798750:web:3636b2a877c2983a72464f",
  measurementId: "G-YJ7SCS0B0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
