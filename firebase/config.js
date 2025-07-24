// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Твоя конфигурация (вставь сюда код из Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCV_wJZRDAuGt-OPquMKomSZsUamKFX15A",
  authDomain: "sportova-mira.firebaseapp.com",
  projectId: "sportova-mira",
  storageBucket: "sportova-mira.firebasestorage.app",
  messagingSenderId: "602640778614",
  appId: "1:602640778614:web:003a7ce86390b28b396657"
};

// Инициализируем Firebase (как будто включаем его)
const app = initializeApp(firebaseConfig);

// Экспортируем нужные нам части Firebase
export const db = getFirestore(app);  // База данных
export const auth = getAuth(app);     // Аутентификация (вход пользователей)
export default app;