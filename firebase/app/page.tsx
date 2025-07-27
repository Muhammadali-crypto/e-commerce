'use client';

import { useState, useEffect } from 'react';
import { auth, db } from '../../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  // Следим за состоянием пользователя
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Функция регистрации
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Регистрация успешна!');
    } catch (error: any) {
      alert('Ошибка регистрации: ' + error.message);
    }
  };

  // Функция входа
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Вход выполнен!');
    } catch (error: any) {
      alert('Ошибка входа: ' + error.message);
    }
  };

  // Функция выхода
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Выход выполнен!');
    } catch (error: any) {
      alert('Ошибка выхода: ' + error.message);
    }
  };

  // Функция добавления сообщения в базу данных
  const addMessage = async () => {
    if (!message.trim()) return;

    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        author: user?.email || 'Аноним',
        timestamp: serverTimestamp()
      });
      setMessage('');
      loadMessages(); // Обновляем список сообщений
    } catch (error: any) {
      alert('Ошибка добавления сообщения: ' + error.message);
    }
  };

  // Функция загрузки сообщений
  const loadMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      const messagesData: any[] = [];
      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        messagesData.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messagesData);
    } catch (error) {
      console.error('Ошибка загрузки сообщений:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Мой сайт с Firebase
      </h1>

      {!user ? (
        // Форма входа/регистрации
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex gap-2">
            <button
              onClick={handleRegister}
              className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Регистрация
            </button>
            <button
              onClick={handleLogin}
              className="flex-1 bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Вход
            </button>
          </div>
        </div>
      ) : (
        // Интерфейс для авторизованного пользователя
        <div className="space-y-4">
          <p className="text-center">
            Привет, {user.email}!
          </p>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Выйти
          </button>

          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold mb-2">Добавить сообщение</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Напиши что-нибудь..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button
                onClick={addMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Отправить
              </button>
            </div>

            <button
              onClick={loadMessages}
              className="w-full mt-2 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
            >
              Загрузить сообщения
            </button>
          </div>

          {messages.length > 0 && (
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Сообщения:</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-gray-100 p-2 rounded">
                    <p className="text-sm font-medium">{msg.author}</p>
                    <p>{msg.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}