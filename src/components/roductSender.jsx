import { useEffect } from 'react';

function SendProductPage() {
  useEffect(() => {
    fetch("http://localhost:8000/api/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Test Product",
        price: 100
      })
    })
      .then(res => res.json())
      .then(data => console.log("Ответ от бэка:", data))
      .catch(err => console.error("Ошибка:", err));
  }, []);

  return <div>Продукт отправлен (см. консоль)</div>;
}

export default SendProductPage;
