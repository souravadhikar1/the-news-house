// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH8j5wMRXquNSiQFaZEBT_ZBRxltsidBs",
  authDomain: "news-daragon.firebaseapp.com",
  projectId: "news-daragon",
  storageBucket: "news-daragon.appspot.com",
  messagingSenderId: "666921927828",
  appId: "1:666921927828:web:cc4fbcce02aeb65cb76081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;