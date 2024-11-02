// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwhqCsYZlR468ONrfS4qqAYIwvJi--c7c",
  authDomain: "react-firebase-85461.firebaseapp.com",
  databaseURL: "https://react-firebase-85461-default-rtdb.firebaseio.com",
  projectId: "react-firebase-85461",
  storageBucket: "react-firebase-85461.appspot.com",
  messagingSenderId: "1030390502575",
  appId: "1:1030390502575:web:a058f131a1e71da363705a"
};

// Initialize Firebase
const cong = initializeApp(firebaseConfig);

export default cong;