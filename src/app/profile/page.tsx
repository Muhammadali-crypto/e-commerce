'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Тип профиля
interface UserProfile {
  avatar?: string;
  phone?: string;
  address?: string;
  created_at?: string;
  updated_at?: string;
}

// Тип юзера
interface User {
  id: string | number;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  profile?: UserProfile;
}

export default function ProfilePage() {
  const { user, logout } = useAuth() as { 
    user: User | null; 
    logout: () => Promise<void>;
  };
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [avatarSrc, setAvatarSrc] = useState(user?.profile?.avatar || '/соц-соти/кот.png');

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [user, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Загрузка...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Заголовок */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Профиль пользователя</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Выйти
            </button>
          </div>

          {/* Основная информация */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Левая колонка */}
            <div className="space-y-6">
              {/* Аватар */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={avatarSrc}
                    alt="Аватар"
                    fill
                    className="rounded-full object-cover border-4 border-gray-200"
                    onError={() => setAvatarSrc('/соц-соти/кот.png')}
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="text-gray-600">@{user.username}</p>
              </div>

              {/* Основная информация */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Основная информация</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Имя:</span>
                      <span className="font-medium">{user.first_name || 'Не указано'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Фамилия:</span>
                      <span className="font-medium">{user.last_name || 'Не указано'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{user.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ID пользователя:</span>
                      <span className="font-medium">{user.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка */}
            <div className="space-y-6">
              {/* Контакты */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Контактная информация</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Телефон:</span>
                    <span className="font-medium">{user.profile?.phone || 'Не указан'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Адрес:</span>
                    <span className="font-medium">{user.profile?.address || 'Не указан'}</span>
                  </div>
                </div>
              </div>

              {/* Аккаунт */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Информация об аккаунте</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Дата регистрации:</span>
                    <span className="font-medium">
                      {user.profile?.created_at
                        ? new Date(user.profile.created_at).toLocaleDateString('ru-RU')
                        : 'Не указана'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Последнее обновление:</span>
                    <span className="font-medium">
                      {user.profile?.updated_at
                        ? new Date(user.profile.updated_at).toLocaleDateString('ru-RU')
                        : 'Не указана'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Действия */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Действия</h3>
                <div className="space-y-2">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                    Редактировать профиль
                  </button>
                  <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm">
                    Изменить пароль
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
