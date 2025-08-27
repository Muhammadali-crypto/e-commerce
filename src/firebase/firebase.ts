// src/firebase/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkruGMqBVXJ0sXvOZNLaaBvhuu989rid8",
  authDomain: "auth-example-39f5b.firebaseapp.com",
  projectId: "auth-example-39f5b",
  storageBucket: "auth-example-39f5b.appspot.com", // ✅ исправлено
  messagingSenderId: "618832290796",
  appId: "1:618832290796:web:04fa6381717b23f429d6c9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
