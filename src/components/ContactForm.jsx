
import React from 'react';

export default function ContactForm({ propertyId, propertyTitle, propertyLocation }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const whatsapp = form.whatsapp?.value?.trim() || '';
    const message = form.message.value.trim();
    const service = form.service.value;

    // 1️⃣ Save to your MongoDB as an interested buyer
    // Only save if this form is tied to a real property (not the general homepage inquiry)
    if (propertyId && propertyId !== 'general-inquiry') {
      try {
        const res = await fetch('http://localhost:5000/api/interested-buyers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ propertyId, name, email, whatsapp, message, service })
        });
        if (!res.ok) {
          const err = await res.json();
          console.error('Backend error:', err);
        }
      } catch (err) {
        console.error('Failed to save interested buyer:', err);
      }
    }

    // 2️⃣ Also send via Web3Forms (keep your existing email notification)
    const formData = new FormData(form);
    formData.append('access_key', 'e1a9510a-0431-47a1-a061-3e7515014e4b'); // ← your Web3Forms key here
    if (propertyTitle) formData.append('property', propertyTitle);
    if (propertyLocation) formData.append('location', propertyLocation);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      if (response.ok) {
        alert('Message Sent! You\'ll receive a confirmation email.');
        form.reset();
      } else {
        alert(result.message || 'Something went wrong!');
      }
    } catch (error) {
      // Web3Forms failed but MongoDB save already happened — still reset
      alert('Message saved! Email notification failed — please try again later.');
      form.reset();
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
        `}
      </style>

      <section className="bg-gray-900 text-white py-10 sm:py-16 px-4 sm:px-6 font-playfair">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">

          {/* Left Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://i.pinimg.com/736x/ad/c1/fc/adc1fcc6b3940e696bcbb31efc321357.jpg"
              alt="Modern House"
              className="w-full h-auto object-cover border-4 border-amber-600"
            />
          </div>

          {/* Right Form */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {propertyTitle && propertyTitle !== 'General Inquiry from Home Page'
                ? `Enquire: ${propertyTitle}`
                : 'Book Business Solutions'}
            </h2>
            {propertyLocation && (
              <p className="text-amber-400 text-sm mb-2">📍 {propertyLocation}</p>
            )}
            <div className="w-16 h-1 bg-amber-500 mb-6 sm:mb-8 rounded"></div>

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                required
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              {/* WhatsApp field — useful for real estate */}
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number (optional)"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <select
                name="service"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold shadow-md transition"
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