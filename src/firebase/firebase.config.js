// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBi3WouVbaPV-EGGR98oy2Iqc8mpGjx44",
  authDomain: "dragon-news-project-c0f4e.firebaseapp.com",
  projectId: "dragon-news-project-c0f4e",
  storageBucket: "dragon-news-project-c0f4e.firebasestorage.app",
  messagingSenderId: "476409365831",
  appId: "1:476409365831:web:e0aa801dfbebbd884b3862",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
