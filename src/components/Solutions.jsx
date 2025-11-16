// import React from 'react';

// export default function Solutions() {
//   return (
//     <section className="py-10 sm:py-16" style={{ backgroundColor: '#C2C5AA' }} id="Solutions">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 sm:mb-12">
//           <div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-5">
//               Your Best Possible Solutions
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-full sm:max-w-2xl mb-6 sm:mb-8">
//               Our thoughtfully designed neighborhood, which offers a special blend of eco-friendly living and convenience,
//               is a monument to sustainable growth.
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//           <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 flex flex-col justify-between">
//             <div className="flex flex-col items-start">
//               <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Safe & Trustworthy</h3>
//               <p className="text-gray-600 text-xs sm:text-sm mb-4">
//                 All living, dining, kitchen and play areas were devised by attached to the home.
//               </p>
//             </div>
//             <div className="w-full h-64 rounded-xl overflow-hidden mt-4">
//               <img
//                 src="https://i.pinimg.com/736x/6a/7a/15/6a7a150b675aeb0ed2b1995aa74ceb25.jpg"
//                 alt="Safe Home"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 flex flex-col justify-between">
//             <div className="flex flex-col items-start">
//               <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Zero Commissions</h3>
//               <p className="text-gray-600 text-xs sm:text-sm mb-4">
//                 The studio used the existing foundations to reduce client costs and worked.
//               </p>
//             </div>
//             <div className="w-full h-64 rounded-xl overflow-hidden mt-4">
//               <img
//                 src="https://i.pinimg.com/736x/22/5d/c5/225dc5df9df63c7b698fa623f566556d.jpg"
//                 alt="Zero Commissions"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 flex flex-col justify-between">
//             <div className="flex flex-col items-start">
//               <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Dedicated Support</h3>
//               <p className="text-gray-600 text-xs sm:text-sm mb-4">
//                 All-inclusive real estate services to facilitate the easy management of your properties.
//               </p>
//             </div>
//             <div className="w-full h-64 rounded-xl overflow-hidden mt-4">
//               <img
//                 src="https://i.pinimg.com/736x/15/09/1a/15091a9e572405ce64b501e279559244.jpg"
//                 alt="Dedicated Support"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// // }

// import React, { useEffect } from 'react';

// const submitInterest = async () => {
//   const FORMSPREE_URL = 'https://formspree.io/f/xnnlqalo'; // your Formspree endpoint

//   // This must match Formspree's expected format
//   const formData = new FormData();
//   formData.append('page', 'Solutions Page');
//   formData.append('timestamp', new Date().toISOString());
//   formData.append('userAgent', navigator.userAgent);
//   formData.append('url', window.location.href);

//   try {
//     await fetch(FORMSPREE_URL, {
//       method: 'POST',
//       body: formData, // use FormData (not JSON) so Formspree triggers the email
//       headers: {
//         Accept: 'application/json',
//       },
//     });
//   } catch (err) {
//     // Silent fail – no UI impact
//   }
// };

// export default function Solutions() {
//   useEffect(() => {
//     submitInterest(); // Auto-submit once when component mounts
//   }, []);

//   return (
//     <section className="py-10 sm:py-16" style={{ backgroundColor: '#C2C5AA' }} id="Solutions">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 sm:mb-12">
//           <div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-5">
//               Your Best Possible Solutions
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-full sm:max-w-2xl mb-6 sm:mb-8">
//               Our thoughtfully designed neighborhood, which offers a special blend of eco-friendly living and convenience,
//               is a monument to sustainable growth.
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//           <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 flex flex-col justify-between">
//             <div className="flex flex-col items-start">
//               <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Safe & Trustworthy</h3>
//               <p className="text-gray-600 text-xs sm:text-sm mb-4">
//                 All living, dining, kitchen and play areas were devised by attached to the home.
//               </p>
//             </div>
//             <div className="w-full h-64 rounded-xl overflow-hidden mt-4">
//               <img
//                 src="https://i.pinimg.com/736x/6a/7a/15/6a7a150b675aeb0ed2b1995aa74ceb25.jpg"
//                 alt="Safe Home"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 flex flex-col justify-between">
//             <div className="flex flex-col items-start">
//               <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Zero Commissions</h3>
//               <p className="text-gray-600 text-xs sm:text-sm mb-4">
//                 The studio used the existing foundations to reduce client costs and worked.
//               </p>
//             </div>
//             <div className="w-full h-64 rounded-xl overflow-hidden mt-4">
//               <img
//                 src="https://i.pinimg.com/736x/22/5d/c5/225dc5df9df63c7b698fa623f566556d.jpg"
//                 alt="Zero Commissions"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 flex flex-col justify-between">
//             <div className="flex flex-col items-start">
//               <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Dedicated Support</h3>
//               <p className="text-gray-600 text-xs sm:text-sm mb-4">
//                 All-inclusive real estate services to facilitate the easy management of your properties.
//               </p>
//             </div>
//             <div className="w-full h-64 rounded-xl overflow-hidden mt-4">
//               <img
//                 src="https://i.pinimg.com/736x/15/09/1a/15091a9e572405ce64b501e279559244.jpg"
//                 alt="Dedicated Support"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect } from 'react';

const submitInterest = async () => {
  const FORMSPREE_URL = 'https://formspree.io/f/xnnlqalo';

  const formData = new FormData();
  formData.append('page', 'Solutions Page');
  formData.append('timestamp', new Date().toISOString());
  formData.append('userAgent', navigator.userAgent);
  formData.append('url', window.location.href);

  try {
    await fetch(FORMSPREE_URL, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });
  } catch (err) {
    // Silent fail – no UI impact
  }
};

export default function Solutions() {
  useEffect(() => {
    submitInterest();
  }, []);

  return (
    <>
      {/* Inject Playfair Display Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      <section className="py-10 sm:py-16 font-playfair" style={{ backgroundColor: '#C2C5AA' }} id="Solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-5">
                Your Best Possible Solutions
              </h2>
              <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-full sm:max-w-2xl mb-6 sm:mb-8">
                Our thoughtfully designed neighborhood, which offers a special blend of eco-friendly living and convenience,
                is a monument to sustainable growth.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 flex flex-col justify-between">
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Safe & Trustworthy</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">
                  All living, dining, kitchen and play areas were devised by attached to the home.
                </p>
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden mt-4">
                <img
                  src="https://i.pinimg.com/736x/6a/7a/15/6a7a150b675aeb0ed2b1995aa74ceb25.jpg"
                  alt="Safe Home"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 flex flex-col justify-between">
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Zero Commissions</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">
                  The studio used the existing foundations to reduce client costs and worked.
                </p>
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden mt-4">
                <img
                  src="https://i.pinimg.com/736x/22/5d/c5/225dc5df9df63c7b698fa623f566556d.jpg"
                  alt="Zero Commissions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 flex flex-col justify-between">
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Dedicated Support</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">
                  All-inclusive real estate services to facilitate the easy management of your properties.
                </p>
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden mt-4">
                <img
                  src="https://i.pinimg.com/736x/15/09/1a/15091a9e572405ce64b501e279559244.jpg"
                  alt="Dedicated Support"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}