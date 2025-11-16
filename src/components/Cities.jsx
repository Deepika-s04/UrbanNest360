// import React from 'react';

// export default function Cities() {
//   return (
//     <section className="py-12 sm:py-20 px-4 sm:px-6 rounded-t-2xl" style={{ backgroundColor: '#132a13' }}>
//       <div className="flex flex-col items-center justify-center text-white">
//         <h1 className="mt-6 sm:mt-10 font-extrabold text-2xl sm:text-3xl md:text-4xl">Find Properties in These Cities</h1>
//         <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-center">
//           Discover your perfect home in the most sought-after cities, with trusted listings tailored to your needs
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
//         <div className="relative rounded-xl overflow-hidden shadow-lg">
//           <img
//             src="https://i.pinimg.com/736x/32/d1/9f/32d19f4783418484ef25f29d197992da.jpg"
//             alt="Mumbai"
//             className="w-full h-[30vh] sm:h-[45vh] object-cover border-2 transition-transform duration-300 ease-in-out hover:scale-105"
//           />
//           <div className="absolute bottom-4 left-4 text-white">
//             <h2 className="text-lg sm:text-xl font-semibold">Mumbai</h2>
//           </div>
//         </div>

//         <div className="relative rounded-xl overflow-hidden shadow-lg sm:col-span-2 lg:col-span-1">
//           <img
//             src="https://www.nobroker.in/blog/wp-content/uploads/2025/02/cost-of-living-in-pune.webp"
//             alt="Bengaluru"
//             className="w-full h-[30vh] sm:h-[45vh] object-cover border-2 transition-transform duration-300 ease-in-out hover:scale-105"
//           />
//           <div className="absolute bottom-4 left-4 text-white">
//             <h2 className="text-lg sm:text-xl font-semibold">Bengaluru</h2>
//           </div>
//         </div>

//         <div className="relative rounded-xl overflow-hidden shadow-lg">
//           <img
//             src="https://i.pinimg.com/1200x/59/30/85/593085cd6e823d7478bae61061f824cc.jpg"
//             alt="Delhi"
//             className="w-full h-[30vh] sm:h-[45vh] object-cover border-2 transition-transform duration-300 ease-in-out hover:scale-105"
//           />
//           <div className="absolute bottom-4 left-4 text-white">
//             <h2 className="text-lg sm:text-xl font-semibold">Delhi</h2>
//           </div>
//         </div>

//         <div className="relative rounded-xl overflow-hidden shadow-lg">
//           <img
//             src="https://i.pinimg.com/1200x/d9/59/04/d9590405cc9c67832632fb1f8eb63703.jpg"
//             alt="Gurugram"
//             className="w-full h-[30vh] sm:h-[45vh] object-cover border-2 transition-transform duration-300 ease-in-out hover:scale-105"
//           />
//           <div className="absolute bottom-4 left-4 text-white">
//             <h2 className="text-lg sm:text-xl font-semibold">Gurugram</h2>
//           </div>
//         </div>

//         <div className="relative rounded-xl overflow-hidden shadow-lg">
//           <img
//             src="https://media.istockphoto.com/id/1372538338/photo/traffic-flow-on-a-highway-with-nice-evening-sky-in-the-background.jpg?s=612x612&w=0&k=20&c=ekBzEOGRATas-IzqsJwxrB127z5BPNM19WJnzDnyYLo="
//             alt="Pune"
//             className="w-full h-[30vh] sm:h-[45vh] object-cover border-2 transition-transform duration-300 ease-in-out hover:scale-105"
//           />
//           <div className="absolute bottom-4 left-4 text-white">
//             <h2 className="text-lg sm:text-xl font-semibold">Pune</h2>
//           </div>
//         </div>

//         <div className="relative rounded-xl overflow-hidden shadow-lg">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ8IvuCM61ncpWQjeqgOF1YDdcoRIhLHxqS_M5TudWjTh1zaII0LAKnUmzcva6kTsKIFtf3j92Xk7ttruqhB-1Q5Bo&s=19"
//             alt="Hyderabad"
//             className="w-full h-[30vh] sm:h-[45vh] object-cover border-2 transition-transform duration-300 ease-in-out hover:scale-105"
//           />
//           <div className="absolute bottom-4 left-4 text-white">
//             <h2 className="text-lg sm:text-xl font-semibold">Hyderabad</h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// // src/components/Cities.jsx
// import React, { useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function Cities() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start" },
//     [Autoplay({ delay: 4000, stopOnInteraction: false })]
//   );

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState([]);

//   const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
//   const scrollNext = () => emblaApi && emblaApi.scrollNext();
//   const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

//   const onSelect = () => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   };

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     setScrollSnaps(emblaApi.scrollSnapList());
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);

//     return () => {
//       emblaApi.off("select", onSelect);
//       emblaApi.off("reInit", onSelect);
//     };
//   }, [emblaApi]);

//   const cities = [
//     {
//       name: "Mumbai",
//       img: "https://i.pinimg.com/736x/32/d1/9f/32d19f4783418484ef25f29d197992da.jpg",
//       count: 3,
//     },
//     {
//       name: "Bengaluru",
//       img: "https://www.nobroker.in/blog/wp-content/uploads/2025/02/cost-of-living-in-pune.webp",
//       count: 3,
//     },
//     {
//       name: "Delhi",
//       img: "https://i.pinimg.com/1200x/59/30/85/593085cd6e823d7478bae61061f824cc.jpg",
//       count: 3,
//     },
//     {
//       name: "Gurugram",
//       img: "https://i.pinimg.com/1200x/d9/59/04/d9590405cc9c67832632fb1f8eb63703.jpg",
//       count: 3,
//     },
//     {
//       name: "Pune",
//       img: "https://media.istockphoto.com/id/1372538338/photo/traffic-flow-on-a-highway-with-nice-evening-sky-in-the-background.jpg?s=612x612&w=0&k=20&c=ekBzEOGRATas-IzqsJwxrB127z5BPNM19WJnzDnyYLo=",
//       count: 3,
//     },
//     {
//       name: "Hyderabad",
//       img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ8IvuCM61ncpWQjeqgOF1YDdcoRIhLHxqS_M5TudWjTh1zaII0LAKnUmzcva6kTsKIFtf3j92Xk7ttruqhB-1Q5Bo&s=19",
//       count: 3,
//     },
//   ];

//   return (
//     <section className="py-12 sm:py-20 px-4 sm:px-6 rounded-t-2xl overflow-hidden" style={{ backgroundColor: '#132a13' }}>
//       <div className="flex flex-col items-center justify-center text-white mb-10">
//         <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl">
//           Find Properties in These Cities
//         </h1>
//         <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-center max-w-3xl">
//           Discover your perfect home in the most sought-after cities, with trusted listings tailored to your needs
//         </p>
//       </div>

//       <div className="relative">
//         {/* Carousel Container */}
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex">
//             {cities.map((city, index) => (
//               <div
//                 key={index}
//                 className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2"
//               >
//                 <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
//                   <img
//                     src={city.img}
//                     alt={city.name}
//                     className="w-full h-[30vh] sm:h-[45vh] object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h2 className="text-lg sm:text-xl font-semibold">{city.name}</h2>
//                     <p className="text-sm opacity-90">{city.count} properties</p>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={scrollPrev}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all"
//           aria-label="Previous"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={scrollNext}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all"
//           aria-label="Next"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-2 mt-6">
//           {scrollSnaps.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => scrollTo(index)}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 index === selectedIndex ? "bg-white w-8" : "bg-white/50"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function Cities() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start" },
//     [Autoplay({ delay: 4000, stopOnInteraction: false })]
//   );

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState([]);

//   const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
//   const scrollNext = () => emblaApi && emblaApi.scrollNext();
//   const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

//   const onSelect = () => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   };

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     setScrollSnaps(emblaApi.scrollSnapList());
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);

//     return () => {
//       emblaApi.off("select", onSelect);
//       emblaApi.off("reInit", onSelect);
//     };
//   }, [emblaApi]);

//   const cities = [
//     {
//       name: "Mumbai",
//       img: "https://i.pinimg.com/736x/32/d1/9f/32d19f4783418484ef25f29d197992da.jpg",
//       count: 3,
//     },
//     {
//       name: "Bengaluru",
//       img: "https://www.nobroker.in/blog/wp-content/uploads/2025/02/cost-of-living-in-pune.webp",
//       count: 3,
//     },
//     {
//       name: "Delhi",
//       img: "https://i.pinimg.com/1200x/59/30/85/593085cd6e823d7478bae61061f824cc.jpg",
//       count: 3,
//     },
//     {
//       name: "Gurugram",
//       img: "https://i.pinimg.com/1200x/d9/59/04/d9590405cc9c67832632fb1f8eb63703.jpg",
//       count: 3,
//     },
//     {
//       name: "Pune",
//       img: "https://media.istockphoto.com/id/1372538338/photo/traffic-flow-on-a-highway-with-nice-evening-sky-in-the-background.jpg?s=612x612&w=0&k=20&c=ekBzEOGRATas-IzqsJwxrB127z5BPNM19WJnzDnyYLo=",
//       count: 3,
//     },
//     {
//       name: "Hyderabad",
//       img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ8IvuCM61ncpWQjeqgOF1YDdcoRIhLHxqS_M5TudWjTh1zaII0LAKnUmzcva6kTsKIFtf3j92Xk7ttruqhB-1Q5Bo&s=19",
//       count: 3,
//     },
//   ];

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

//       <section
//         className="py-12 sm:py-20 px-4 sm:px-6 rounded-t-2xl overflow-hidden font-playfair"
//         style={{ backgroundColor: "#132a13" }}
//       >
//         <div className="flex flex-col items-center justify-center text-white mb-10">
//           <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl">
//             Find Properties in These Cities
//           </h1>
//           <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-center max-w-3xl">
//             Discover your perfect home in the most sought-after cities, with trusted listings tailored to your needs
//           </p>
//         </div>

//         <div className="relative">
//           {/* Carousel Container */}
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="flex">
//               {cities.map((city, index) => (
//                 <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
//                   <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
//                     <img
//                       src={city.img}
//                       alt={city.name}
//                       className="w-full h-[30vh] sm:h-[45vh] object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                     <div className="absolute bottom-4 left-4 text-white">
//                       <h2 className="text-lg sm:text-xl font-semibold">{city.name}</h2>
//                       <p className="text-sm opacity-90">{city.count} properties</p>
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={scrollPrev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all"
//             aria-label="Previous"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={scrollNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all"
//             aria-label="Next"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Dots Indicator */}
//           <div className="flex justify-center gap-2 mt-6">
//             {scrollSnaps.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => scrollTo(index)}
//                 className={`w-2 h-2 rounded-full transition-all ${
//                   index === selectedIndex ? "bg-white w-8" : "bg-white/50"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Cities() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const cities = [
    {
      name: "Mumbai",
      img: "https://i.pinimg.com/736x/32/d1/9f/32d19f4783418484ef25f29d197992da.jpg",
      count: 3,
    },
    {
      name: "Bengaluru",
      img: "https://www.nobroker.in/blog/wp-content/uploads/2025/02/cost-of-living-in-pune.webp",
      count: 3,
    },
    {
      name: "Delhi",
      img: "https://i.pinimg.com/1200x/59/30/85/593085cd6e823d7478bae61061f824cc.jpg",
      count: 3,
    },
    {
      name: "Gurugram",
      img: "https://i.pinimg.com/1200x/d9/59/04/d9590405cc9c67832632fb1f8eb63703.jpg",
      count: 3,
    },
    {
      name: "Pune",
      img: "https://media.istockphoto.com/id/1372538338/photo/traffic-flow-on-a-highway-with-nice-evening-sky-in-the-background.jpg?s=612x612&w=0&k=20&c=ekBzEOGRATas-IzqsJwxrB127z5BPNM19WJnzDnyYLo=",
      count: 3,
    },
    {
      name: "Hyderabad",
      img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ8IvuCM61ncpWQjeqgOF1YDdcoRIhLHxqS_M5TudWjTh1zaII0LAKnUmzcva6kTsKIFtf3j92Xk7ttruqhB-1Q5Bo&s=19",
      count: 3,
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

      <section
        className="py-12 sm:py-20 px-4 sm:px-6 rounded-t-2xl overflow-hidden font-playfair"
        style={{ backgroundColor: "#132a13" }}
      >
        <div className="flex flex-col items-center justify-center text-white mb-10">
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl">
            Find Properties in These Cities
          </h1>
          <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-center max-w-3xl">
            Discover your perfect home in the most sought-after cities, with trusted listings tailored to your needs
          </p>
        </div>

        <div className="relative">
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cities.map((city, index) => (
                <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                  <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src={city.img}
                      alt={city.name}
                      className="w-full h-[30vh] sm:h-[45vh] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h2 className="text-lg sm:text-xl font-semibold">{city.name}</h2>
                      <p className="text-sm opacity-90">{city.count} properties</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}