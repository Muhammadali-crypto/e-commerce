import React from 'react';

const DeliveryPaymentInfo = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Доставка</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.
                </p>
                <p>
                  Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.
                </p>
              </div>
              <a href="/delivery-and-payment" className="text-blue-600 hover:underline mt-4 inline-block">Детальное описание</a>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Оплата</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.
                </p>
                <p>
                  Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.
                </p>
              </div>
              <a href="/delivery-and-payment" className="text-blue-600 hover:underline mt-4 inline-block">Детальное описание</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPaymentInfo; 