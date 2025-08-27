'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { ChevronDown, Settings, LogOut, User } from 'lucide-react';

interface UserType {
  first_name?: string;
  username: string;
}

const UserProfile: React.FC = () => {
  const { user, logout, loading } = useAuth() as { 
    user: UserType | null; 
    logout: () => Promise<void>;
    loading?: boolean;
  };
  
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    router.push('/'); // после выхода отправим на главную
  };

  const handleProfileClick = () => {
    router.push('/profile');
    setIsOpen(false);
  };

  // Пока идёт загрузка
  if (loading) {
    return <div className="text-gray-500 text-sm">Загрузка...</div>;
  }

  // Если юзера нет — показываем кнопку "Войти"
  if (!user) {
    return (
      <button
        onClick={() => router.push('/login')}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Войти
      </button>
    );
  }

  // Если юзер есть — дропдаун
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
      >
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-medium">
            {user.first_name ? user.first_name[0].toUpperCase() : user.username[0].toUpperCase()}
          </span>
        </div>
        <span className="text-sm font-medium text-gray-700 hidden sm:block">
          {user.first_name || user.username}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <button
            onClick={handleProfileClick}
            className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <User className="w-4 h-4" />
            <span>Профиль</span>
          </button>
          
          <button
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Настройки</span>
          </button>
          
          <div className="border-t border-gray-200 my-1"></div>
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Выйти</span>
          </button>
        </div>
      )}
    </div>
  );
};
  
export default UserProfile;
