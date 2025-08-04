import { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Полученные продукты:', data); // проверка
        setProducts(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <h2>Список продуктов</h2>
      {products.length === 0 ? (
        <p>Нет продуктов</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name || 'Без названия'}</strong> — {product.price} сум
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;
