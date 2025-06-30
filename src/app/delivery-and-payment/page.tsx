"use client";

import { motion } from 'framer-motion';

const Section = ({ title }: { title: string }) => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="space-y-4 text-gray-600">
            <p>
                Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.
            </p>
            <p>
                Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.
            </p>
        </div>
        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Детальное описание</a>
    </div>
);

const DeliveryAndPaymentPage = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid md:grid-cols-2 gap-16">
                        <Section title="Доставка" />
                        <Section title="Оплата" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DeliveryAndPaymentPage; 