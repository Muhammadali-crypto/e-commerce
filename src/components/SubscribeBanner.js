// "use client";

// import { useState } from "react";
// import emailjs from "emailjs-com";

// export default function SubscribeBanner() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     emailjs
//       .send(
//         "service_muxa_21", // Service ID
//         "template_wlv20ot", // Template ID
//         { user_email: email }, // переменная для шаблона
//         "GCRjfoeOkDzajEqVc" // Public Key
//       )
//       .then(
//         () => {
//           setSubmitted(true);
//           setEmail("");
//           setTimeout(() => setSubmitted(false), 2000);
//         },
//         () => {
//           setError("Ошибка при отправке. Попробуйте позже.");
//         }
//       )
//       .finally(() => setLoading(false));
//     // Дополнительная отправка на другой сервис/шаблон
//     emailjs.send(
//       "service_muxa_12",
//       "template_wlv20ot",
//       { user_email: email },
//       "GCRjfoeOkDzajEqVc"
//     );
//   };

//   return (
//     <section className="w-full bg-[#296DF6] py-12 px-2">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
//         <div>
//           <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Редкие, но очень полезные письма!</h2>
//           <p className="text-white text-lg opacity-90">Подпишись и получи промокод на скидку! Его можно применить ко всем товарам в магазине</p>
//         </div>
//         <form onSubmit={handleSubmit} className="flex w-full md:w-auto max-w-xl">
//           <input
//             type="email"
//             required
//             placeholder="Ваш e-mail"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             className="flex-1 rounded-l-2xl bg-[#2356d6] text-white placeholder-white/80 px-6 py-4 text-lg outline-none border-none min-w-0"
//             style={{ minWidth: 0 }}
//             disabled={loading || submitted}
//           />
//           <button
//             type="submit"
//             className="rounded-r-2xl bg-[#FFD600] text-[#2356d6] font-semibold text-lg px-8 py-4 transition hover:bg-yellow-400"
//             style={{ minWidth: 150 }}
//             disabled={loading || submitted}
//           >
//             {submitted ? "Спасибо!" : loading ? "Отправка..." : "Подписаться"}
//           </button>
//         </form>
//         {error && <div className="text-red-200 mt-2">{error}</div>}
//       </div>
//     </section>
//   );
// } 