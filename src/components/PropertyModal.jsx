// import React, { useState } from "react";

// export default function PropertyModal({ onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     whatsapp: "",
//   });
//   const [status, setStatus] = useState("idle"); 

  
//   const FORMSPREE_URL = "https://formspree.io/f/xnnlqalo";

  
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("submitting");

//     try {
//       const response = await fetch(FORMSPREE_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("success");
//         setFormData({ name: "", email: "", whatsapp: "" });
//       } else {
//         throw new Error("Form submission failed");
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus("error");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 relative"
//         onClick={(e) => e.stopPropagation()}
//       >
        
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
//         >
//           ×
//         </button>

        
//         <div className="bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6">
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
//           </svg>
//           Enter your WhatsApp No. to get Contact Details of the Owner
//         </div>

//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Contact Us
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Your Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500"
//               placeholder="John Doe"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500"
//               placeholder="john@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Contact Number (WhatsApp)
//             </label>
//             <input
//               type="tel"
//               name="whatsapp"
//               required
//               value={formData.whatsapp}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500"
//               placeholder="+91 98765 43210"
//             />
//           </div>

//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               required
//               className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
//             />
//             <label className="ml-2 text-sm text-gray-600">
//               I agree to the{" "}
//               <a href="#" className="text-amber-500 underline">
//                 Terms of Use
//               </a>
//             </label>
//           </div>

//           <div className="text-center pt-4">
//             <button
//               type="submit"
//               disabled={status === "submitting"}
//               className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-2xl transition duration-200"
//             >
//               {status === "submitting" ? "Sending..." : "Continue"}
//             </button>
//           </div>

          
//           {status === "success" && (
//             <p className="text-green-600 text-center font-semibold mt-3">
//               Thank you! The owner will contact you soon.
//             </p>
//           )}
//           {status === "error" && (
//             <p className="text-red-600 text-center font-semibold mt-3">
//             Something went wrong. Try again later.
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function PropertyModal({ onClose, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    property: propertyTitle || "Unknown Property", // ← NEW: Include property name
  });
  const [status, setStatus] = useState("idle"); 

  const FORMSPREE_URL = "https://formspree.io/f/xnnlqalo";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", whatsapp: "", property: propertyTitle || "Unknown Property" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          ×
        </button>

        

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        {/* NEW: Show property name */}
        {propertyTitle && (
          <p className="text-sm text-gray-600 mb-4 text-center italic">
            For: <strong>{propertyTitle}</strong>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number (WhatsApp)
            </label>
            <input
              type="tel"
              name="whatsapp"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              required
              className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-amber-500 underline">
                Terms of Use
              </a>
            </label>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-2xl transition duration-200"
            >
              {status === "submitting" ? "Sending..." : "Continue"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-green-600 text-center font-semibold mt-3">
              Thank you! The owner will contact you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center font-semibold mt-3">
              Something went wrong. Try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}