// // // // src/components/Services.jsx
// // // import React from "react";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Services() {
// // //   const navigate = useNavigate();

// // //   const items = [
// // //     {
// // //       img: "https://static.vecteezy.com/system/resources/thumbnails/000/355/795/small_2x/Real_Estate__28101_29.jpg",
// // //       title: "Buy a home",
// // //       desc: "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
// // //     },
// // //     {
// // //       img: "https://img.freepik.com/premium-vector/rent-key-icon-symbol-white-background_268104-18838.jpg",
// // //       title: "Rent a home",
// // //       desc: "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
// // //       link: "/buy-sell",
// // //     },
// // //     {
// // //       img: "https://cdn1.vectorstock.com/i/1000x1000/64/65/seller-thick-line-icon-for-personal-vector-46326465.jpg",
// // //       title: "Sell a home",
// // //       desc: "No matter what path you take to sell your home, we can help you navigate a successful sale with ease.",
// // //     },
// // //   ];

// // //   return (
// // //     <>
// // //       <div className="m-4 sm:m-6 md:m-10 grid grid-cols-1 sm:grid-cols-3 items-center">
// // //         <div />
// // //         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
// // //           Buy, Rent & Sale
// // //         </h1>
// // //         <div className="flex justify-center sm:justify-end mt-4 sm:mt-0" />
// // //       </div>

// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 sm:mx-10 md:mx-20 my-10 sm:my-20">
// // //         {items.map((i) => (
// // //           <div
// // //             key={i.title}
// // //             className="text-white p-6 sm:p-8 md:p-10 rounded-2xl shadow flex flex-col items-center"
// // //             style={{ backgroundColor: "#aad576" }}
// // //           >
// // //             <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-6 overflow-hidden">
// // //               <img
// // //                 src={i.img}
// // //                 alt={i.title}
// // //                 className="w-full h-full object-cover"
// // //               />
// // //             </div>

// // //             <h3 className="text-lg sm:text-xl font-semibold mb-3">{i.title}</h3>
// // //             <p className="text-white text-sm sm:text-base mb-6 text-center">
// // //               {i.desc}
// // //             </p>

// // //             {i.link ? (
// // //               <button
// // //                 onClick={() => navigate(i.link)}
// // //                 className="px-4 sm:px-6 py-2 border border-white rounded-full hover:bg-white hover:text-slate-800 transition text-sm sm:text-base"
// // //               >
// // //                 {i.title.split(" ")[0]}
// // //               </button>
// // //             ) : (
// // //               <a
// // //                 href="#"
// // //                 className="px-4 sm:px-6 py-2 border border-white rounded-full hover:bg-white hover:text-slate-800 transition text-sm sm:text-base"
// // //               >
// // //                 {i.title.split(" ")[0]}
// // //               </a>
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // src/components/Services.jsx
// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function Services() {
// //   const navigate = useNavigate();

// //   const items = [
// //     {
// //       img: "https://static.vecteezy.com/system/resources/thumbnails/000/355/795/small_2x/Real_Estate__28101_29.jpg",
// //       title: "Buy a home",
// //       desc: "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
// //       link: "/buy-sell", // Links to BuySellPage
// //     },
// //     {
// //       img: "https://img.freepik.com/premium-vector/rent-key-icon-symbol-white-background_268104-18838.jpg",
// //       title: "Rent a home",
// //       desc: "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
// //       link: "/buy-sell", // Links to BuySellPage
// //     },
// //     {
// //       img: "https://cdn1.vectorstock.com/i/1000x1000/64/65/seller-thick-line-icon-for-personal-vector-46326465.jpg",
// //       title: "Sell a home",
// //       desc: "No matter what path you take to sell your home, we can help you navigate a successful sale with ease.",
// //       link: "/sell", // Links to SellPage
// //     },
// //   ];

// //   return (
// //     <>
// //       <div className="m-4 sm:m-6 md:m-10 grid grid-cols-1 sm:grid-cols-3 items-center">
// //         <div />
// //         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
// //           Buy, Rent & Sale
// //         </h1>
// //         <div className="flex justify-center sm:justify-end mt-4 sm:mt-0" />
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 sm:mx-10 md:mx-20 my-10 sm:my-20">
// //         {items.map((i) => (
// //           <div
// //             key={i.title}
// //             className="text-white p-6 sm:p-8 md:p-10 rounded-2xl shadow flex flex-col items-center"
// //             style={{ backgroundColor: "#aad576" }}
// //           >
// //             <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-6 overflow-hidden">
// //               <img
// //                 src={i.img}
// //                 alt={i.title}
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>

// //             <h3 className="text-lg sm:text-xl font-semibold mb-3">{i.title}</h3>
// //             <p className="text-white text-sm sm:text-base mb-6 text-center">
// //               {i.desc}
// //             </p>

// //             <button
// //               onClick={() => navigate(i.link)}
// //               className="px-4 sm:px-6 py-2 border border-white rounded-full hover:bg-white hover:text-slate-800 transition text-sm sm:text-base"
// //             >
// //               {i.title.split(" ")[0]}
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // }


// // src/components/Services.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { HomeModernIcon, KeyIcon, TagIcon } from "@heroicons/react/24/solid";

// export default function Services() {
//   const navigate = useNavigate();
//   const items = [
//     {
//       icon: <HomeModernIcon className="w-10 h-10 sm:w-12 sm:h-12 text-green-800" />,
//       title: "Buy a home",
//       desc: "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
//       link: "/buy-sell",
//     },
//     {
//       icon: <KeyIcon className="w-10 h-10 sm:w-12 sm:h-12 text-green-800" />,
//       title: "Rent a home",
//       desc: "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
//       link: "/buy-sell",
//     },
//     {
//       icon: <TagIcon className="w-10 h-10 sm:w-12 sm:h-12 text-green-800" />,
//       title: "Sell a home",
//       desc: "No matter what path you take to sell your home, we can help you navigate a successful sale with ease.",
//       link: "/sell",
//     },
//   ];

//   return (
//     <>
//       <div className="m-4 sm:m-6 md:m-10 grid grid-cols-1 sm:grid-cols-3 items-center">
//         <div />
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-slate-800">
//           Buy, Rent & Sale
//         </h1>
//         <div className="flex justify-center sm:justify-end mt-4 sm:mt-0" />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 sm:mx-10 md:mx-20 my-10 sm:my-20">
//         {items.map((i) => (
//           <div
//             key={i.title}
//             className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col items-center text-center border border-gray-200"
//           >
//             <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
//               {i.icon}
//             </div>
//             <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-3">
//               {i.title}
//             </h3>
//             <p className="text-sm sm:text-base text-slate-600 mb-6">
//               {i.desc}
//             </p>
//             <button
//               onClick={() => navigate(i.link)}
//               className="px-5 py-2 rounded-full bg-[#14532d] text-white hover:bg-green-900 transition text-sm sm:text-base"
//             >
//               {i.title.split(" ")[0]}
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeModernIcon, KeyIcon, TagIcon } from "@heroicons/react/24/solid";

export default function Services() {
  const navigate = useNavigate();

  const items = [
    {
      icon: <HomeModernIcon className="w-10 h-10 sm:w-12 sm:h-12 text-green-800" />,
      title: "Buy a home",
      desc: "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
      link: "/buy-sell",
    },
    {
      icon: <KeyIcon className="w-10 h-10 sm:w-12 sm:h-12 text-green-800" />,
      title: "Rent a home",
      desc: "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
      link: "/buy-sell",
    },
    {
      icon: <TagIcon className="w-10 h-10 sm:w-12 sm:h-12 text-green-800" />,
      title: "Sell a home",
      desc: "No matter what path you take to sell your home, we can help you navigate a successful sale with ease.",
      link: "/sell",
    },
  ];

  return (
    <>
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      <div className="font-playfair">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 sm:mx-10 md:mx-20 my-10 sm:my-20">
          {items.map((i) => (
            <div
              key={i.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col items-center text-center border border-gray-200"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                {i.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-3">
                {i.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6">
                {i.desc}
              </p>
              <button
                onClick={() => navigate(i.link)}
                className="px-5 py-2 rounded-full bg-[#14532d] text-white hover:bg-green-900 transition text-sm sm:text-base"
              >
                {i.title.split(" ")[0]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}