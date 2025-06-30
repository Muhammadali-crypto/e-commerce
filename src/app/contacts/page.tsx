"use client";

import { Phone, Mail, MapPin } from 'lucide-react';

const ContactsPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Контакты</h1>
        <div className="space-y-6">
          <div className="flex items-center">
            <MapPin className="w-6 h-6 mr-4 text-blue-500" />
            <span className="text-lg text-gray-700">Нижний Новгород, ул.Надежды, 20</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-4 text-blue-500" />
            <span className="text-lg text-gray-700">8800 550-22-16</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-4 text-blue-500" />
            <span className="text-lg text-gray-700">info@sportova.ru</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage; 