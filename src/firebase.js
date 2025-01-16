// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apikey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_TD,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBglRZdWNHL1VmIv9mCob--mZmB29dbAuQ",
  authDomain: "onlinequranlab.firebaseapp.com",
  databaseURL:
    "https://onlinequranlab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "onlinequranlab",
  storageBucket: "onlinequranlab.firebasestorage.app",
  messagingSenderId: "617656042885",
  appId: "1:617656042885:web:5adbe2b7bc537bc35970ec",
  measurementId: "G-H8ZPG7HXY9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
