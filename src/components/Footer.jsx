import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section if on homepage
  const handleScroll = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Navigate to page
  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <footer className="text-gray-300 py-8 sm:py-10" style={{ backgroundColor: '#132a13' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <h2 className="text-white text-lg sm:text-xl font-bold mb-3">UrbanNest360</h2>
          <p className="text-xs sm:text-sm leading-6">
            Helping you find the perfect property, whether you're looking to buy, sell, or rent. 
            Trusted by thousands of happy clients.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Quick Links</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <button onClick={() => handleScroll('hero')} className="hover:text-white cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('about')} className="hover:text-white cursor-pointer">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('featured')} className="hover:text-white cursor-pointer">
                Properties
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('contact')} className="hover:text-white cursor-pointer">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Services</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <button onClick={() => goToPage('/buy-sell')} className="hover:text-white cursor-pointer">
                Buy a Home
              </button>
            </li>
            <li>
              <button onClick={() => goToPage('/sell')} className="hover:text-white cursor-pointer">
                Sell a Home
              </button>
            </li>
            <li>
              <button onClick={() => goToPage('/buy-sell')} className="hover:text-white cursor-pointer">
                Rent a Home
              </button>
            </li>
          </ul>
        </div>

        <div id="ContactUs">
          <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Contact Us</h3>
          <p className="text-xs sm:text-sm">+91 98765 43210</p>
          <p className="text-xs sm:text-sm">info@urbannest360.com</p>
          <p className="text-xs sm:text-sm">123 Serenity Avenue, Mumbai, India</p>
        </div>
      </div>

      <div className="text-center text-xs sm:text-sm text-gray-500 mt-8 sm:mt-10 border-t border-gray-700 pt-6">
        © 2025 UrbanNest360. All Rights Reserved.
      </div>
    </footer>
  );
}