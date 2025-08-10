'use client';

import React, { useState } from 'react';

export default function TestUserPage() {
  const [message, setMessage] = useState('');

  const createTestUser = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'testuser',
          email: 'test@example.com',
          password: 'testpass123',
          password_confirm: 'testpass123',
          first_name: 'Test',
          last_name: 'User'
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('Пользователь создан успешно!');
      } else {
        setMessage(`Ошибка: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setMessage(`Ошибка сети: ${error}`);
    }
  };

  const testLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'testuser',
          password: 'testpass123'
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('Вход успешен!');
      } else {
        setMessage(`Ошибка входа: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setMessage(`Ошибка сети: ${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Тест пользователя</h1>
        
        <div className="space-y-4">
          <button
            onClick={createTestUser}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Создать тестового пользователя
          </button>
          
          <button
            onClick={testLogin}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 ml-4"
          >
            Тест входа
          </button>
        </div>
        
        {message && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow">
            <pre className="whitespace-pre-wrap">{message}</pre>
          </div>
        )}
      </div>
    </div>
  );
} 