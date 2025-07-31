// e-commerce/firebase/firebase.ts
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD8aXwqc1O3RTsoQm3HoiYcIJn82EwPlRk",
  authDomain: "sportova-ali.firebaseapp.com",
  projectId: "sportova-ali",
  storageBucket: "sportova-ali.firebasestorage.app",
  messagingSenderId: "723393516848",
  appId: "1:723393516848:web:2b95fa7b3ea48bc3c6e4f5"
}

// Чтобы не было повторной инициализации
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)
export const db = getFirestore(app) 