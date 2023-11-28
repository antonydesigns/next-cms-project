import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-cms-project.firebaseapp.com",
  projectId: "next-cms-project",
  storageBucket: "next-cms-project.appspot.com",
  messagingSenderId: "400386546461",
  appId: "1:400386546461:web:42425b4622e4d14ebd5ff4",
};

const app = initializeApp(firebaseConfig);
