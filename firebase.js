// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxzbZ70i-eHeH9Wj01nPp04ovMPsHL0ME",
  authDomain: "chat-app-c0c7f.firebaseapp.com",
  projectId: "chat-app-c0c7f",
  storageBucket: "chat-app-c0c7f.appspot.com",
  messagingSenderId: "186353720082",
  appId: "1:186353720082:web:2e0da11aaf43b8120af1cb",
  measurementId: "G-48KP02LNV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
