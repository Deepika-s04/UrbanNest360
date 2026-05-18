
import React, { useState, useEffect } from "react";

export default function PropertyModal({ onClose, propertyTitle, propertyId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    property: propertyTitle || "Property Inquiry",
  });
  const [status, setStatus] = useState("idle");

  const WEB3FORMS_URL = "https://api.web3forms.com/submit";
  const ACCESS_KEY = "e1a9510a-0431-47a1-a061-3e7515014e4b";

  useEffect(() => {
    if (propertyTitle) {
      setFormData(prev => ({ ...prev, property: propertyTitle }));
    }
  }, [propertyTitle]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // ✅ STEP 1: Save to MongoDB as interested buyer
      if (propertyId && propertyId !== "general-inquiry") {
        const backendRes = await fetch("http://localhost:5000/api/interested-buyers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({
          //   propertyId: String(propertyId),
          //   name: formData.name,
          //   email: formData.email,
          //   whatsapp: formData.whatsapp,
          //   message: "",
          //   service: "Real Estate",
          // }),
          body: JSON.stringify({
  propertyId: String(propertyId).replace('_id', ''), // ✅ safety strip
  name: formData.name,
  email: formData.email,
  whatsapp: formData.whatsapp,
  message: "",
  service: "Real Estate",
}),
        });
        if (!backendRes.ok) {
          const err = await backendRes.json();
          console.error("Backend save failed:", err);
        } else {
          console.log("✅ Interested buyer saved to MongoDB");
        }
      }

      // ✅ STEP 2: Also send via Web3Forms for email notification
      const payload = {
        ...formData,
        access_key: ACCESS_KEY,
        subject: `New property inquiry: ${formData.property}`,
      };

      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          property: propertyTitle || "Property Inquiry",
        });
      } else {
        throw new Error(result.message || "Form submission failed");
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