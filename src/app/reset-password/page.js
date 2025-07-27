import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await resetPassword(email);
      setMessage("Письмо для сброса пароля отправлено! Проверьте почту.");
    } catch (err) {
      setMessage("Ошибка: " + (err?.message || "Попробуйте снова"));
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Сброс пароля</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 8, padding: 8 }}
        />
        <button type="submit" style={{ width: "100%", padding: 8 }}>
          Сбросить пароль
        </button>
      </form>
      {message && <div style={{ marginTop: 12 }}>{message}</div>}
    </div>
  );
} 