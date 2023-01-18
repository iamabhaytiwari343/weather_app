// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGYcQfsY0kcJPuhh6Jw_EcdRTQQuxbOe4",
  authDomain: "askbit-ee8b9.firebaseapp.com",
  databaseURL: "https://askbit-ee8b9-default-rtdb.firebaseio.com",
  projectId: "askbit-ee8b9",
  storageBucket: "askbit-ee8b9.appspot.com",
  messagingSenderId: "811419644021",
  appId: "1:811419644021:web:9f4f876d76a3c3f88bc83c",
  measurementId: "G-8954XM72TF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
