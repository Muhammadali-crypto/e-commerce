// e-commerce/firebase/firebase.ts
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCV_wJZRDAuGt-OPquMKomSZsUamKFX15A",
  authDomain: "sportova-mira.firebaseapp.com",
  projectId: "sportova-mira",
  storageBucket: "sportova-mira.appspot.com",
  messagingSenderId: "602640778614",
  appId: "1:602640778614:web:8c5b0d3f2e4a6b7c9d8e1a"
}

// Чтобы не было повторной инициализации
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)
export const db = getFirestore(app)