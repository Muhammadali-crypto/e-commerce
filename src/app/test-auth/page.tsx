'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function TestAuthPage() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Тест аутентификации</h1>
        
        {user ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Данные пользователя:</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Имя пользователя:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Имя:</strong> {user.first_name}</p>
              <p><strong>Фамилия:</strong> {user.last_name}</p>
              {user.profile && (
                <>
                  <p><strong>Телефон:</strong> {user.profile.phone || 'Не указан'}</p>
                  <p><strong>Адрес:</strong> {user.profile.address || 'Не указан'}</p>
                </>
              )}
            </div>
            <button
              onClick={logout}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Выйти
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Пользователь не авторизован</h2>
            <p className="text-gray-600">
              Используйте кнопки "Войти" или "Создать аккаунт" в навигационной панели для авторизации.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 