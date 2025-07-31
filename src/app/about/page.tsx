"use client";

import AboutSection from '@/components/AboutSection';
import DeliveryPaymentInfo from '@/components/DeliveryPaymentInfo';
import { LogIn } from 'lucide-react';
// import Signin from 'lucide-react';

const AboutPage = () => {
    return (
        <>
            <AboutSection />
            <LogIn />
            {/* <Signin /> */}
            <DeliveryPaymentInfo />
        </>
    );
};

export default AboutPage; 