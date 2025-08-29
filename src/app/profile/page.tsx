"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import {
  User,
  Mail,
  Settings,
  Shield,
  Bell,
  Calendar,
  MapPin,
  Phone,
  Edit3,
  LogOut,
  Camera,
} from "lucide-react";

// ---------- Типы ----------
interface UserData {
  name: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  joinDate: string;
}

interface AuthUser {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  bio?: string;
  joinDate?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  logout: () => void;
}

// ---------- Mock useAuth (демо) ----------
const useAuth = (): AuthContextType & {
  login: (userData: AuthUser) => void;
  register: (userData: AuthUser) => void;
} => {
  const getSavedUserData = (): AuthUser | null => {
    if (typeof window !== "undefined") {
      const savedData = sessionStorage.getItem("userData");
      return savedData ? JSON.parse(savedData) : null;
    }
    return null;
  };

  const [user, setUser] = useState<AuthUser | null>(() => getSavedUserData());

  const logout = (): void => {
    setUser(null);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("userData");
    }
    alert("Вы успешно вышли из системы!");
  };

  const login = (userData: AuthUser): void => {
    setUser(userData);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("userData", JSON.stringify(userData));
    }
    alert("Добро пожаловать обратно!");
  };

  const register = (userData: AuthUser): void => {
    setUser(userData);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("userData", JSON.stringify(userData));
    }
    alert("Регистрация успешна! Добро пожаловать!");
  };

  return { user, logout, login, register };
};

// ---------- Страница профиля ----------
const ProfilePage: React.FC = () => {
  const { user, logout, login, register } = useAuth();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showAuthForm, setShowAuthForm] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  // Форма для входа/регистрации
  const [authForm, setAuthForm] = useState<AuthUser>({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    joinDate: new Date().toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
    }),
  });

  // Дефолтные значения профиля
  const [userData, setUserData] = useState<UserData>({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "Tashkent, Uzbekistan",
    bio: "Passionate developer and tech enthusiast with a love for creating innovative solutions.",
    joinDate: "January 2024",
  });

  // Обновляем userData из user (если авторизован)
  useEffect(() => {
    if (user) {
      setUserData((prev) => ({
        name: user.name || prev.name,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
        location: user.location || prev.location,
        bio: user.bio || prev.bio,
        joinDate: user.joinDate || prev.joinDate,
      }));
    }
  }, [user]);

  // ---------- Хэндлеры (объявлены ДО использования в JSX) ----------
  const handleSave = (): void => {
    setIsEditing(false);
    console.log("Saving user data:", userData);
  };

  const handleInputChange =
    (field: keyof UserData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setUserData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleEditToggle = (): void => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
    }
  };

  const handleCameraClick = (): void => {
    alert("Функция загрузки фото будет добавлена позже!");
  };

  const handleQuickAction = (action: string): void => {
    alert(`Открытие раздела: ${action}`);
  };

  const handleAuthFormChange =
    (field: keyof AuthUser) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setAuthForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const toggleAuthMode = (): void => {
    setAuthMode((m) => (m === "login" ? "register" : "login"));
    setAuthForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      bio: "",
      joinDate: new Date().toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
      }),
    });
  };

  const handleAuthSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (authMode === "login") {
      const savedData =
        typeof window !== "undefined"
          ? sessionStorage.getItem("userData")
          : null;
      if (savedData) {
        login(JSON.parse(savedData));
      } else {
        alert("Пользователь не найден. Пожалуйста, зарегистрируйтесь.");
        setAuthMode("register");
      }
    } else {
      if (!authForm.name || !authForm.email) {
        alert("Пожалуйста, заполните обязательные поля (имя и email)");
        return;
      }
      register(authForm);
    }
  };

  // ---------- Неавторизованный экран ----------
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {authMode === "login" ? "Вход в систему" : "Регистрация"}
          </h2>
          <p className="text-gray-600 mb-6">
            {authMode === "login"
              ? "Войдите для просмотра профиля"
              : "Создайте новый аккаунт"}
          </p>

          {!showAuthForm ? (
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setShowAuthForm(true)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                {authMode === "login" ? "Войти в систему" : "Зарегистрироваться"}
              </button>

              <button
                type="button"
                onClick={toggleAuthMode}
                className="w-full text-gray-600 hover:text-gray-800 transition-colors text-sm"
              >
                {authMode === "login"
                  ? "Нет аккаунта? Зарегистрируйтесь"
                  : "Уже есть аккаунт? Войти"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleAuthSubmit} className="space-y-4 text-left">
              <div>
                <label
                  htmlFor="auth-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Имя *
                </label>
                <input
                  id="auth-name"
                  type="text"
                  required
                  value={authForm.name || ""}
                  onChange={handleAuthFormChange("name")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label
                  htmlFor="auth-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email *
                </label>
                <input
                  id="auth-email"
                  type="email"
                  required
                  value={authForm.email || ""}
                  onChange={handleAuthFormChange("email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Введите ваш email"
                />
              </div>

              {authMode === "register" && (
                <>
                  <div>
                    <label
                      htmlFor="auth-phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Телефон
                    </label>
                    <input
                      id="auth-phone"
                      type="tel"
                      value={authForm.phone || ""}
                      onChange={handleAuthFormChange("phone")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="+998 90 123 4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="auth-location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Местоположение
                    </label>
                    <input
                      id="auth-location"
                      type="text"
                      value={authForm.location || ""}
                      onChange={handleAuthFormChange("location")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Ташкент, Узбекистан"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="auth-bio"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      О себе
                    </label>
                    <textarea
                      id="auth-bio"
                      rows={3}
                      value={authForm.bio || ""}
                      onChange={handleAuthFormChange("bio")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                      placeholder="Расскажите о себе..."
                    />
                  </div>
                </>
              )}

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  {authMode === "login" ? "Войти" : "Зарегистрироваться"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAuthForm(false)}
                  className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Отмена
                </button>
              </div>

              <button
                type="button"
                onClick={toggleAuthMode}
                className="w-full text-gray-600 hover:text-gray-800 transition-colors text-sm pt-2"
              >
                {authMode === "login"
                  ? "Нет аккаунта? Зарегистрируйтесь"
                  : "Уже есть аккаунт? Войти"}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // ---------- Авторизованный экран ----------
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <User className="w-10 h-10" />
                </div>
                <button
                  type="button"
                  onClick={handleCameraClick}
                  className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h1 className="text-3xl font-bold">{userData.name}</h1>
                <p className="text-indigo-100 flex items-center mt-1">
                  <Mail className="w-4 h-4 mr-2" />
                  {userData.email}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={logout}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span>Выйти</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <User className="w-5 h-5 mr-2 text-indigo-600" />
                  Личная информация
                </h2>
                <button
                  type="button"
                  onClick={handleEditToggle}
                  className="flex items-center space-x-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>{isEditing ? "Сохранить" : "Редактировать"}</span>
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Имя
                    </label>
                    {isEditing ? (
                      <input
                        id="name"
                        type="text"
                        value={userData.name}
                        onChange={handleInputChange("name")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Введите ваше имя"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                        {userData.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      {userData.email}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Телефон
                    </label>
                    {isEditing ? (
                      <input
                        id="phone"
                        type="tel"
                        value={userData.phone}
                        onChange={handleInputChange("phone")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Введите номер телефона"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                        {userData.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Местоположение
                    </label>
                    {isEditing ? (
                      <input
                        id="location"
                        type="text"
                        value={userData.location}
                        onChange={handleInputChange("location")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Введите ваше местоположение"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {userData.location}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    О себе
                  </label>
                  {isEditing ? (
                    <textarea
                      id="bio"
                      value={userData.bio}
                      onChange={handleInputChange("bio")}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                      placeholder="Расскажите о себе..."
                    />
                  ) : (
                    <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                      {userData.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Activity Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Статистика активности
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">156</p>
                  <p className="text-sm text-gray-600">Дней активности</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <User className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">42</p>
                  <p className="text-sm text-gray-600">Проекты</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Settings className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">8</p>
                  <p className="text-sm text-gray-600">Настройки</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Bell className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">23</p>
                  <p className="text-sm text-gray-600">Уведомления</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Информация об аккаунте
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Дата регистрации</span>
                  <span className="text-gray-800 font-medium">
                    {userData.joinDate}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Статус</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Активный
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Тип аккаунта</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Быстрые действия
              </h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleQuickAction("Настройки")}
                  className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Настройки</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAction("Уведомления")}
                  className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Уведомления</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAction("Безопасность")}
                  className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Безопасность</span>
                </button>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-green-800">Аккаунт защищён</h3>
                  <p className="text-sm text-green-600">
                    Двухфакторная аутентификация
                  </p>
                </div>
              </div>
              <div className="w-full bg-green-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-xs text-green-600 mt-2">
                Уровень безопасности: Высокий
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
