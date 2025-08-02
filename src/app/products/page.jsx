'use client';

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка при получении продуктов:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Продукты</h1>
      {products.length === 0 ? (
        <p>Нет продуктов</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.title}</strong> — {product.description} — ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
    