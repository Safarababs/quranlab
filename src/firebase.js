import { initializeApp } from "firebase/app";

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
