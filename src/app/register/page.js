"use client";

import { useState } from "react";
import { useAuth } from '../../../contexts/AuthContext';

function EyeIcon({ open }) {
  return open ? (
    // Глаз с перечёркиванием
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-7 0-10-8-10-8a18.4 18.4 0 0 1 4.22-5.94M1 1l22 22" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5a3.5 3.5 0 0 0 2.47-5.97" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 4c7 0 10 8 10 8a18.4 18.4 0 0 1-4.22 5.94" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) : (
    // Обычный глаз
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signUp } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const validate = () => {
    return {
      firstName: !form.firstName,
      lastName: !form.lastName,
      username: !form.username,
      email: !form.email,
      password: !form.password,
      confirmPassword: !form.confirmPassword || form.password !== form.confirmPassword,
      agree: !form.agree,
    };
  };

  const errors = validate();
  const isValid = Object.values(errors).every((v) => v === false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isValid) {
      try {
        await signUp(form.email, form.password, form.username || form.firstName || undefined);
        alert("Регистрация успешна! Проверьте почту для подтверждения.");
      } catch (err) {
        alert("Ошибка регистрации: " + (err?.message || "Попробуйте снова"));
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-8 px-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-xl p-0"
        style={{ boxShadow: "none" }}
      >
        <div className="text-2xl font-bold mb-6 text-center">Создайте свой аккаунт</div>
        <div className="flex gap-4 mb-2">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Полное имя</label>
            <input
              name="firstName"
              type="text"
              placeholder="Имя..."
              value={form.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border rounded px-3 py-2 focus:outline-none ${((touched.firstName || submitted) && errors.firstName) ? 'border-red-500' : 'border-gray-300'}`}
              style={{ fontSize: 18 }}
            />
            {((touched.firstName || submitted) && errors.firstName) && (
              <div className="text-xs text-red-500 mt-1">Имя обязательно</div>
            )}
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" style={{ visibility: 'hidden' }}>&nbsp;</label>
            <input
              name="lastName"
              type="text"
              placeholder="Фамилия"
              value={form.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border rounded px-3 py-2 focus:outline-none ${((touched.lastName || submitted) && errors.lastName) ? 'border-red-500' : 'border-gray-300'}`}
              style={{ fontSize: 18 }}
            />
            {((touched.lastName || submitted) && errors.lastName) && (
              <div className="text-xs text-red-500 mt-1">Фамилия обязательна</div>
            )}
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Имя пользователя</label>
          <input
            name="username"
            type="text"
            placeholder="Имя пользователя..."
            value={form.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full border rounded px-3 py-2 focus:outline-none ${((touched.username || submitted) && errors.username) ? 'border-red-500' : 'border-gray-300'}`}
            style={{ fontSize: 18 }}
          />
          {((touched.username || submitted) && errors.username) && (
            <div className="text-xs text-red-500 mt-1">Имя пользователя обязательно</div>
          )}
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email адрес"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full border rounded px-3 py-2 focus:outline-none ${((touched.email || submitted) && errors.email) ? 'border-red-500' : 'border-gray-300'}`}
            style={{ fontSize: 18 }}
          />
          {((touched.email || submitted) && errors.email) && (
            <div className="text-xs text-red-500 mt-1">Email обязателен</div>
          )}
        </div>
        <div className="flex gap-4 mb-2">
          <div className="flex-1 relative">
            <label className="block text-sm font-medium mb-1">Пароль</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Создать пароль"
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border rounded px-3 py-2 focus:outline-none pr-10 ${((touched.password || submitted) && errors.password) ? 'border-red-500' : 'border-gray-300'}`}
              style={{ fontSize: 18 }}
            />
            <button
              type="button"
              className="absolute right-3 top-8 transform -translate-y-1/2 text-gray-400"
              tabIndex={-1}
              onClick={() => setShowPassword((v) => !v)}
              style={{ outline: 'none', background: 'none', border: 'none', padding: 0 }}
            >
              <EyeIcon open={showPassword} />
            </button>
            {((touched.password || submitted) && errors.password) && (
              <div className="text-xs text-red-500 mt-1">Пароль обязателен</div>
            )}
          </div>
          <div className="flex-1 relative">
            <label className="block text-sm font-medium mb-1">Подтвердить пароль</label>
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Подтвердить пароль"
              value={form.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border rounded px-3 py-2 focus:outline-none pr-10 ${((touched.confirmPassword || submitted) && errors.confirmPassword) ? 'border-red-500' : 'border-gray-300'}`}
              style={{ fontSize: 18 }}
            />
            <button
              type="button"
              className="absolute right-3 top-8 transform -translate-y-1/2 text-gray-400"
              tabIndex={-1}
              onClick={() => setShowConfirmPassword((v) => !v)}
              style={{ outline: 'none', background: 'none', border: 'none', padding: 0 }}
            >
              <EyeIcon open={showConfirmPassword} />
            </button>
            {((touched.confirmPassword || submitted) && errors.confirmPassword) && (
              <div className="text-xs text-red-500 mt-1">{!form.confirmPassword ? 'Подтвердите пароль' : 'Пароли не совпадают'}</div>
            )}
          </div>
        </div>
        <div className="flex items-center mb-2">
          <input
            name="agree"
            type="checkbox"
            checked={form.agree}
            onChange={handleChange}
            id="agree"
            className="mr-2"
          />
          <label htmlFor="agree" className="text-sm">
            I Agree with all of your <a href="#" className="text-blue-600 underline">Terms & Conditions</a>
          </label>
        </div>
        {((touched.agree || submitted) && errors.agree) && (
          <div className="text-xs text-red-500 mb-2">Необходимо согласиться с условиями</div>
        )}
        <div className="flex justify-end mb-4">
          <button
            type="submit"
            className="bg-[#ff5722] hover:bg-[#ff784e] text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-200 flex items-center gap-2"
            style={{ boxShadow: "none" }}
          >
            СОЗДАТЬ АККАУНТ
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-400 text-sm">ЗАРЕГИСТРИРОВАТЬСЯ С ПОМОЩЬЮ</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex gap-4 mb-6 justify-center">
          <button type="button" className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-2 text-gray-700 hover:bg-gray-100">
            <svg width="22" height="22" viewBox="0 0 48 48"><g><circle fill="#fff" cx="24" cy="24" r="20"/><path fill="#4285F4" d="M34.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.5-1.3 2.7-2.7 3.5v2.9h4.4c2.6-2.4 4.1-5.9 4.1-10.1z"/><path fill="#34A853" d="M24 36c3.3 0 6-1.1 8-3l-4.4-2.9c-1.2.8-2.7 1.3-4.4 1.3-3.4 0-6.2-2.3-7.2-5.3h-4.5v3.1C13.8 33.7 18.5 36 24 36z"/><path fill="#FBBC05" d="M16.8 26.1c-.3-.8-.5-1.6-.5-2.5s.2-1.7.5-2.5v-3.1h-4.5C11.5 20.9 11 22.4 11 24s.5 3.1 1.3 4.5l4.5-3.1z"/><path fill="#EA4335" d="M24 17.9c1.8 0 3.4.6 4.6 1.7l3.4-3.4C30 14.1 27.3 13 24 13c-5.5 0-10.2 2.3-13.5 6.4l4.5 3.1c1-3 3.8-5.3 7.2-5.3z"/></g></svg>
            Google
          </button>
          <button type="button" className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-2 text-gray-700 hover:bg-gray-100">
            <svg width="22" height="22" viewBox="0 0 32 32"><path fill="#1877F2" d="M32 16c0-8.8-7.2-16-16-16S0 7.2 0 16c0 8 5.8 14.6 13.3 15.8v-11.2h-4V16h4v-2.7c0-4 2.4-6.2 6-6.2 1.7 0 3.5.3 3.5.3v4h-2c-2 0-2.6 1.2-2.6 2.5V16h4.4l-.7 4.6h-3.7v11.2C26.2 30.6 32 24 32 16z"/><path fill="#fff" d="M22.3 20.6l.7-4.6h-4.4v-2.1c0-1.3.6-2.5 2.6-2.5h2v-4s-1.8-.3-3.5-.3c-3.6 0-6 2.2-6 6.2V16h-4v4.6h4v11.2c.8.1 1.7.2 2.7.2s1.9-.1 2.7-.2V20.6h3.7z"/></svg>
            Facebook
          </button>
          <button type="button" className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-2 text-gray-700 hover:bg-gray-100">
            <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#000" d="M16.365 1.43c0 .89-.72 1.61-1.61 1.61-.89 0-1.61-.72-1.61-1.61 0-.89.72-1.61 1.61-1.61.89 0 1.61.72 1.61 1.61zm-7.73 0c0 .89-.72 1.61-1.61 1.61-.89 0-1.61-.72-1.61-1.61 0-.89.72-1.61 1.61-1.61.89 0 1.61.72 1.61 1.61zm7.73 21.14c0 .89-.72 1.61-1.61 1.61-.89 0-1.61-.72-1.61-1.61 0-.89.72-1.61 1.61-1.61.89 0 1.61.72 1.61 1.61zm-7.73 0c0 .89-.72 1.61-1.61 1.61-.89 0-1.61-.72-1.61-1.61 0-.89.72-1.61 1.61-1.61.89 0 1.61.72 1.61 1.61zM12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
            Apple
          </button>
        </div>
        <div className="text-center text-sm mb-2">
          Уже есть аккаунт? <a href="/login" className="text-[#1877F2] font-semibold">Войти</a>
        </div>
      </form>
    </div>
  );
} 