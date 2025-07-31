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
            <span className="text-lg text-gray-700">Самарканд, ул.Саттепо, 158</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-4 text-blue-500" />
            <span className="text-lg text-gray-700">+998-(91)-524-07-55</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-4 text-blue-500" />
            <span className="text-lg text-gray-700">muhammadalimuhammadali2012@email.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage; 