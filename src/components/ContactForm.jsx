// export default function ContactForm() {
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     alert("Message Sent! We'll get back to you soon.")
//     e.target.reset()
//   }

//   return (
//     <section className="bg-gray-900 text-white py-10 sm:py-16 px-4 sm:px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <img src="https://i.pinimg.com/736x/ad/c1/fc/adc1fcc6b3940e696bcbb31efc321357.jpg" alt="Modern House" className="w-full h-auto object-cover border-4 border-amber-600" />
//         </div>
//         <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book Business Solutions</h2>
//           <div className="w-16 h-1 bg-amber-500 mb-6 sm:mb-8 rounded"></div>
//           <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//             <input type="text" placeholder="Your Name*" required className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base" />
//             <input type="email" placeholder="Your Email*" required className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base" />
//             <select className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base">
//               <option>Real Estate</option><option>Consulting</option><option>Marketing</option><option>Design Solutions</option>
//             </select>
//             <textarea placeholder="Type Your Message" rows="5" className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"></textarea>
//             <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition text-sm sm:text-base shadow-md">
//               Submit Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// import React from 'react';

// export default function ContactForm() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message Sent! We'll get back to you soon.");
//     e.target.reset();
//   };

//   return (
//     <>
//       {/* Inject Playfair Display font directly */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
//           .font-playfair {
//             font-family: 'Playfair Display', serif;
//           }
//         `}
//       </style>

//       <section className="bg-gray-900 text-white py-10 sm:py-16 px-4 sm:px-6 font-playfair">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
//           <div className="rounded-xl overflow-hidden shadow-lg">
//             <img
//               src="https://i.pinimg.com/736x/ad/c1/fc/adc1fcc6b3940e696bcbb31efc321357.jpg"
//               alt="Modern House"
//               className="w-full h-auto object-cover border-4 border-amber-600"
//             />
//           </div>
//           <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book Business Solutions</h2>
//             <div className="w-16 h-1 bg-amber-500 mb-6 sm:mb-8 rounded"></div>
//             <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//               <input
//                 type="text"
//                 placeholder="Your Name*"
//                 required
//                 className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email*"
//                 required
//                 className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"
//               />
//               <select className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base">
//                 <option>Real Estate</option>
//                 <option>Consulting</option>
//                 <option>Marketing</option>
//                 <option>Design Solutions</option>
//               </select>
//               <textarea
//                 placeholder="Type Your Message"
//                 rows="5"
//                 className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition text-sm sm:text-base shadow-md"
//               >
//                 Submit Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from 'react';

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Replace with your actual Formspree form ID
    const formspreeEndpoint = 'https://formspree.io/f/xnnlqalo'; // <-- CHANGE THIS

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        alert("Message Sent! We'll get back to you soon.");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please check your connection.");
    }
  };

  return (
    <>
      {/* Inject Playfair Display font directly */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      <section className="bg-gray-900 text-white py-10 sm:py-16 px-4 sm:px-6 font-playfair">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://i.pinimg.com/736x/ad/c1/fc/adc1fcc6b3940e696bcbb31efc321357.jpg"
              alt="Modern House"
              className="w-full h-auto object-cover border-4 border-amber-600"
            />
          </div>
          <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Book Business Solutions</h2>
            <div className="w-16 h-1 bg-amber-500 mb-6 sm:mb-8 rounded"></div>
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                required
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"
              />
              <select
                name="service"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"
              >
                <option>Real Estate</option>
                <option>Consulting</option>
                <option>Marketing</option>
                <option>Design Solutions</option>
              </select>
              <textarea
                name="message"
                placeholder="Type Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm sm:text-base"
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition text-sm sm:text-base shadow-md"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}