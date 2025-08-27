"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>❌ Нет пользователя. Возможно, ты не вошёл.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">👤 Профиль</h1>
      <p>Email: {user.email}</p>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Выйти
      </button>
    </div>
  );
}
