"use client";

const HowToOrderPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Как заказать</h1>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
          <p>Оформить заказ на нашем сайте очень просто. Следуйте этим шагам:</p>
          <ol>
            <li>Выберите понравившийся товар и добавьте его в корзину.</li>
            <li>Перейдите в корзину и проверьте ваш заказ.</li>
            <li>Нажмите кнопку "Оформить заказ" и заполните контактные данные.</li>
            <li>Наш менеджер свяжется с вами для подтверждения заказа и уточнения деталей доставки.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HowToOrderPage; 