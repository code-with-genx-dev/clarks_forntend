// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGmCFepMcxKG2XrNLw_6qgZO3NhxOSOmA",
  authDomain: "clarks-dev.firebaseapp.com",
  projectId: "clarks-dev",
  storageBucket: "clarks-dev.firebasestorage.app",
  messagingSenderId: "11253718631",
  appId: "1:11253718631:web:b2b7eb4bf43b86a8e1bec2",
  measurementId: "G-E4CKNQ4S98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);