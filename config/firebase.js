// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs5DNiH1oNhD1lENnLpD2G7Pxu5UqLQhs",
  authDomain: "chat-app-78634.firebaseapp.com",
  projectId: "chat-app-78634",
  storageBucket: "chat-app-78634.appspot.com",
  messagingSenderId: "43539144860",
  appId: "1:43539144860:web:f2d469d2d903fbf1200d59",
  measurementId: "G-QQH8WEEGRM",
};

// Initialize Firebase
// const app = getApps().length ? getApps() : initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
