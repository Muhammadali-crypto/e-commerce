import emailjs from "emailjs-com";

const templateParams = {
  user_email: 'muhammadalimuhammadali2012@gmail.com', // или email из формы
};

emailjs
  .send('service_muxa_21', 'template_wlv20ot', templateParams, 'GCRjfoeOkDzajEqVc')
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );