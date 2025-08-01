import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Form } from './Form';
import { useEffect } from 'react';

export const Login = () => {
  console.log('🚀 КОМПОНЕНТ LOGIN РЕНДЕРИТСЯ');
  const router = useRouter(); // исправлено
  console.log('🚀 ФАЙЛ LOGIN.JS ЗАГРУЖЕН');


  useEffect(() => {
  console.log('🔥 Firebase config проверка:');
  console.log('API Key:', process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'найден' : '❌ НЕ НАЙДЕН');
  console.log('Auth Domain:', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'найден' : '❌ НЕ НАЙДЕН');
  console.log('Auth объект:', auth ? 'найден' : '❌ НЕ НАЙДЕН');
  
  // Проверка подключения к Firebase
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('✅ Пользователь уже авторизован:', user.email);
    } else {
      console.log('🔓 Пользователь не авторизован');
    }
  });
}, []);
  
  useEffect(() => {
    console.log('🔥 Firebase config проверка:');
    console.log('API Key:', process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
    console.log('Auth Domain:', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);
    console.log('Auth объект:', auth);
  }, []);

  const handleLogin = async (email, password) => { // добавил async
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log('✅ Logged in:', user);
      router.push('/'); // исправлено
    } catch (err) {
      console.error('❌ Ошибка входа:', err);
      alert('Ошибка входа: ' + err.message);
    }
  };

  return <Form title="Login" handleClick={handleLogin} />;
  // остальной код...
}


// export const Login = () => {
  
// };