// // src/App.jsx
// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// // === COMPONENTS ===
// import Header from './components/Header.jsx';
// import Hero from './components/Hero.jsx';
// import Stats from './components/Stats.jsx';
// import Services from './components/Services.jsx';
// import AboutUs from './components/AboutUs.jsx';
// import FeaturedProperties from './components/FeaturedProperties.jsx';
// import LatestProperties from './components/LatestProperties.jsx';
// import Solutions from './components/Solutions.jsx';
// import Cities from './components/Cities.jsx';
// import WhyChooseUs from './components/WhyChooseUs.jsx';
// import Testimonials from './components/Testimonials.jsx';
// import ContactForm from './components/ContactForm.jsx';
// import FAQ from './components/FAQ.jsx';
// import Footer from './components/Footer.jsx';
// import PropertyModal from './components/PropertyModal.jsx';
// import BuySellPage from './pages/BuySellPage.jsx';
// import Login from './components/Login.jsx';
// import Register from './components/Register.jsx';

// // === AUTH CONTEXT ===
// import { useAuth } from './context/AuthProvider.jsx';

// // === PROTECTED ROUTE ===
// function ProtectedRoute({ children }) {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-xl font-medium text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// // === LANDING PAGE ===
// function LandingPage() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <>
//       <Header />
//       <Hero />
//       <Stats />
//       <Services />
//       <AboutUs />
//       <FeaturedProperties openModal={openModal} />
//       <LatestProperties openModal={openModal} />
//       <Solutions />
//       <Cities />
//       <WhyChooseUs />
//       <Testimonials />
//       <ContactForm />
//       <FAQ />
//       <Footer />
//       {modalOpen && <PropertyModal onClose={closeModal} />}
//     </>
//   );
// }

// // === MAIN APP ===
// export default function App() {
//   return (
//     <Routes>
//       {/* PUBLIC ROUTES */}
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* BUY/SELL PAGE — PUBLIC (NO LOGIN REQUIRED) */}
//       <Route path="/buy-sell" element={<BuySellPage />} />

//       {/* LEGACY REDIRECT */}
//       <Route path="/buyandsell.html" element={<Navigate to="/buy-sell" replace />} />

//       {/* PROTECTED ROUTES (IF ANY IN FUTURE) */}
//       {/* Example: */}
//       {/* <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       /> */}

//       {/* 404 */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// }


// // src/App.jsx
// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from "react-router-dom";

// // === COMPONENTS ===
// import Header from './components/Header.jsx';
// import Hero from './components/Hero.jsx';
// import Stats from './components/Stats.jsx';
// import Services from './components/Services.jsx';
// import AboutUs from './components/AboutUs.jsx';
// import FeaturedProperties from './components/FeaturedProperties.jsx';
// import LatestProperties from './components/LatestProperties.jsx';
// import Solutions from './components/Solutions.jsx';
// import Cities from './components/Cities.jsx';
// import WhyChooseUs from './components/WhyChooseUs.jsx';
// import Testimonials from './components/Testimonials.jsx';
// import ContactForm from './components/ContactForm.jsx';
// import FAQ from './components/FAQ.jsx';
// import Footer from './components/Footer.jsx';
// import PropertyModal from './components/PropertyModal.jsx';
// import BuySellPage from './pages/BuySellPage.jsx';
// import SellPage from './pages/SellPage.jsx'; 
// import Login from './components/Login.jsx';
// import Register from './components/Register.jsx';

// import { useAuth } from './context/AuthProvider.jsx';

// function ProtectedRoute({ children }) {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-xl font-medium text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// function LandingPage() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <>
//       <Header />
//       <Hero />
//       <Stats />
//       <Services />
//       <AboutUs />
//       <FeaturedProperties openModal={openModal} />
//       <LatestProperties openModal={openModal} />
//       <Solutions />
//       <Cities />
//       <WhyChooseUs />
//       <Testimonials />
//       <ContactForm />
//       <FAQ />
//       <Footer />
//       {modalOpen && <PropertyModal onClose={closeModal} />}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Routes>
      
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       <Route path="/buy-sell" element={<BuySellPage />} />

     
//       <Route path="/sell" element={<SellPage />} /> {/* ← ADDED */}

      
     
//       <Route path="/buyandsell.html" element={<Navigate to="/buy-sell" replace />} />

      
//       <Route path="*" element={<Navigate to="/" replace />} />

//       {/* <Route path="/post-property" element={<PostPropertyPage />} /> */}

//     </Routes>
//   );
// }


// // src/App.jsx
// import React, { useState, useRef } from 'react';
// import { Routes, Route, Navigate } from "react-router-dom";

// // === COMPONENTS ===
// import Header from './components/Header.jsx';
// import Hero from './components/Hero.jsx';

// import Services from './components/Services.jsx';
// import AboutUs from './components/AboutUs.jsx';
// import FeaturedProperties from './components/FeaturedProperties.jsx';
// import LatestProperties from './components/LatestProperties.jsx';
// import Solutions from './components/Solutions.jsx';

// import WhyChooseUs from './components/WhyChooseUs.jsx';
// import Testimonials from './components/Testimonials.jsx';
// import ContactForm from './components/ContactForm.jsx';
// import FAQ from './components/FAQ.jsx';
// import Footer from './components/Footer.jsx';
// import PropertyModal from './components/PropertyModal.jsx';
// import BuySellPage from './pages/BuyRentPage.jsx';
// import SellPage from './pages/SellPage.jsx'; 
// import Login from './components/Login.jsx';
// import Register from './components/Register.jsx';

// import { useAuth } from './context/AuthProvider.jsx';

// import PostPropertyPage from "./pages/PostPropertyPage";
// import PostHistory from "./pages/PostHistory";


// function ProtectedRoute({ children }) {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-xl font-medium text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// function LandingPage() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const featuredRef = useRef(null);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   const scrollToFeatured = () => {
//     featuredRef.current?.scrollIntoView({ 
//       behavior: 'smooth',
//       block: 'start'
//     });
//   };

//   return (
//     <>
//       <Header />
      
//       {/* Hero Section */}
//       <div id="hero">
//         <Hero scrollToFeatured={scrollToFeatured} />
//       </div>

      
//       <Services />

//       {/* About Us */}
//       <div id="about">
//         <AboutUs />
//       </div>

//       {/* Featured Properties */}
//       <div ref={featuredRef} id="featured">
//         <FeaturedProperties openModal={openModal} />
//       </div>

//       <LatestProperties openModal={openModal} />

//       {/* Solutions */}
//       <div id="solutions">
//         <Solutions />
//       </div>

      
//       <WhyChooseUs />

//       {/* Testimonials */}
//       <div id="testimonials">
//         <Testimonials />
//       </div>

//       {/* Contact Form */}
//       <div id="contact">
//         <ContactForm />
//       </div>

//       <FAQ />
//       <Footer />
//       {modalOpen && <PropertyModal onClose={closeModal} />}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Routes>
      
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       <Route path="/buy-rent" element={<BuyRentPage />} />

     
//       <Route path="/sell" element={<SellPage />} />

      
     
//       <Route path="/buyandsell.html" element={<Navigate to="/buy-sell" replace />} />

      
//       <Route path="*" element={<Navigate to="/" replace />} />
//       <Route path="/post" element={<PostPropertyPage />} />
//       <Route path="/history" element={<PostHistory />} />

//       <Route path="/post-property" element={<PostPropertyPage />} />

//     </Routes>
//   );
// }

// src/App.jsx
import React, { useState, useRef } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

// === COMPONENTS ===
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import AboutUs from './components/AboutUs.jsx';
import FeaturedProperties from './components/FeaturedProperties.jsx';
import LatestProperties from './components/LatestProperties.jsx';
import Solutions from './components/Solutions.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import PropertyModal from './components/PropertyModal.jsx';

// === PAGES ===
import BuyRentPage from './pages/BuyRentPage.jsx';    // Fixed: correct name
import SellPage from './pages/SellPage.jsx'; 
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import PostPropertyPage from "./pages/PostPropertyPage";
import PostHistory from "./pages/PostHistory";

import { useAuth } from './context/AuthProvider.jsx';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-medium text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const featuredRef = useRef(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div id="hero">
        <Hero scrollToFeatured={scrollToFeatured} />
      </div>

      <Services />

      {/* About Us */}
      <div id="about">
        <AboutUs />
      </div>

      {/* Featured Properties */}
      <div ref={featuredRef} id="featured">
        <FeaturedProperties openModal={openModal} />
      </div>

      <LatestProperties openModal={openModal} />

      {/* Solutions */}
      <div id="solutions">
        <Solutions />
      </div>

      <WhyChooseUs />

      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>

      <FAQ />
      <Footer />
      {modalOpen && <PropertyModal onClose={closeModal} />}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Correct route for Buy/Rent page */}
      <Route path="/buy-rent" element={<BuyRentPage />} />

      <Route path="/sell" element={<SellPage />} />

      {/* Optional: Redirect old URLs */}
      <Route path="/buy-sell" element={<Navigate to="/buy-rent" replace />} />
      <Route path="/buyandsell.html" element={<Navigate to="/buy-rent" replace />} />

      {/* Other routes */}
      <Route path="/post" element={<PostPropertyPage />} />
      <Route path="/post-property" element={<PostPropertyPage />} />
      <Route path="/history" element={<PostHistory />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}