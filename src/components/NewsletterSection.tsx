"use client";

import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('');
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      setStatus('success');
      setMessage('SMS успешно отправлен на ваш e-mail!');
      setEmail('');
    } else {
      setStatus('error');
      setMessage(data.message || 'E-mail не существует');
    }
  };

  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white md:w-1/2 lg:w-3/5">
            <h2 className="text-3xl font-bold mb-2">Редкие, но очень полезные письма!</h2>
            <p className="text-blue-200">
              Подпишись и получи промокод на скидку! Его можно применить ко всем товарам в магазине
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <form onSubmit={handleSubmit} className="flex items-center">
              <label htmlFor="email-subscribe" className="sr-only">Ваш e-mail</label>
              <input
                id="email-subscribe"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш e-mail"
                required
                className="w-full bg-blue-700 text-white placeholder-blue-300 px-5 py-3 rounded-l-xl border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-blue-800 font-bold px-6 py-3 rounded-r-xl hover:bg-yellow-300 transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>
      {status !== 'idle' && (
        <div className={`mt-4 text-center text-lg font-semibold ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default NewsletterSection; 