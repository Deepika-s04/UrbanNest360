// import React from 'react';
// import PropertyCard from './PropertyCard.jsx';

// export default function CityPropertiesModal({ city, properties, loading, onClose, openContactModal }) {
//   if (loading) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={onClose}>
//         <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-6 text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading properties for {city}...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={onClose}>
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative" onClick={(e) => e.stopPropagation()}>
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold">
//           ×
//         </button>

//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Properties in {city}</h2>
//           <p className="text-gray-600">{properties.length} live listings</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {properties.length > 0 ? (
//             properties.map((property, idx) => (
//               <PropertyCard key={idx} property={property} openContactModal={openContactModal} />
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-500 py-8">
//               No properties found for {city}. Try another city!
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import PropertyCard from './PropertyCard.jsx';

export default function CityPropertiesModal({ city, properties, loading, onClose, openContactModal }) {
  if (loading) {
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

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 font-playfair" onClick={onClose}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading properties for {city}...</p>
          </div>
        </div>
      </>
    );
  }

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

      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 font-playfair" onClick={onClose}>
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          >
            ×
          </button>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Properties in {city}</h2>
            <p className="text-gray-600">{properties.length} live listings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.length > 0 ? (
              properties.map((property, idx) => (
                <PropertyCard key={idx} property={property} openContactModal={openContactModal} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-8">
                No properties found for {city}. Try another city!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}