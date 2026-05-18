// // src/components/Header.jsx
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   Home,
//   Info,
//   Wrench,
//   MessageCircle,
//   Phone,
//   Plus,
//   LogIn,
//   Menu,
//   X,
//   User,
//   LogOut,
//   History, // ← NEW ICON FOR POST HISTORY
// } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useAuth } from "../hooks/useAuth";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";

// export default function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { user, logout } = useAuth();

//   // Fetch user data from Firestore
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     if (!user) {
//       setUserData(null);
//       return;
//     }

//     const fetchUser = async () => {
//       try {
//         const docSnap = await getDoc(doc(db, "users", user.uid));
//         if (docSnap.exists()) {
//           setUserData(docSnap.data());
//         }
//       } catch (err) {
//         console.error("Failed to load user data", err);
//       }
//     };

//     fetchUser();
//   }, [user]);

//   const navItems = [
//     { label: "Home", path: "/", icon: Home, sectionId: "hero" },
//     { label: "About Us", path: "/about", icon: Info, sectionId: "about" },
//     { label: "Solutions", path: "/solutions", icon: Wrench, sectionId: "solutions" },
//     { label: "Testimonials", path: "/testimonials", icon: MessageCircle, sectionId: "testimonials" },
//     { label: "Contact Us", path: "/contact", icon: Phone, sectionId: "contact" },
//   ];

//   // Smooth scroll for home page sections
//   const handleNavClick = (item) => {
//     if (location.pathname === "/" && item.sectionId) {
//       const element = document.getElementById(item.sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//         setMobileOpen(false);
//         return;
//       }
//     }
//     navigate(item.path);
//     setMobileOpen(false);
//   };

//   // NEW: Handle Post History Click
//   const handlePostHistoryClick = () => {
//     navigate("/history");
//     setMobileOpen(false);
//   };

//   return (
//     <>
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
//           .font-playfair {
//             font-family: 'Playfair Display', serif;
//           }
//         `}
//       </style>

//       <header className="bg-white shadow-sm sticky top-0 z-50 font-playfair">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* LOGO */}
//             <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
//               <h1 className="text-2xl md:text-3xl font-bold text-black">UrbanNest360</h1>
//             </div>

//             {/* Desktop Nav */}
//             <nav className="hidden md:flex items-center gap-8 ml-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavClick(item)}
//                   className="text-black font-medium hover:text-gray-700 transition-colors flex items-center gap-1"
//                 >
//                   <item.icon className="w-4 h-4" />
//                   {item.label}
//                 </button>
//               ))}
//             </nav>

//             {/* Desktop Auth Area */}
//             <div className="hidden md:flex items-center gap-3">
//               <button
//                 onClick={() => navigate("/post-property")}
//                 className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-md"
//               >
//                 <Plus className="w-4 h-4" />
//                 Post Property
//               </button>

//               {/* Logged In: Show Profile Icon + Dropdown */}
//               {user ? (
//                 <div className="relative group">
//                   <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-md">
//                     <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
//                       {user.email[0].toUpperCase()}
//                     </div>
//                     <User className="w-4 h-4" />
//                   </button>

//                   {/* Dropdown with User Details + Post History */}
//                   <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
//                     <div className="p-4 space-y-2 text-sm">
//                       <p className="font-semibold text-black">{userData?.name || "User"}</p>
//                       <p className="text-gray-600">{user.email}</p>
//                       {userData?.mobile && <p className="text-gray-600">Mobile: {userData.mobile}</p>}
//                       {userData?.createdAt && (
//                         <p className="text-xs text-gray-500">
//                           Member since {new Date(userData.createdAt).toLocaleDateString()}
//                         </p>
//                       )}
//                     </div>

//                     {/* NEW: Post History Link */}
//                     <div className="border-t">
//                       <button
//                         onClick={handlePostHistoryClick}
//                         className="w-full text-left px-4 py-2.5 hover:bg-gray-100 flex items-center gap-2 text-sm text-blue-600 font-medium"
//                       >
//                         <History className="w-4 h-4" />
//                         Post History
//                       </button>
//                     </div>

//                     <div className="border-t">
//                       <button
//                         onClick={logout}
//                         className="w-full text-left px-4 py-2.5 hover:bg-gray-100 flex items-center gap-2 text-sm text-red-600 font-medium"
//                       >
//                         <LogOut className="w-4 h-4" />
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 /* Not logged in: Show Login Button */
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-md"
//                 >
//                   <LogIn className="w-4 h-4" />
//                   Sign In/Login
//                 </button>
//               )}
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="md:hidden p-2 rounded-md hover:bg-gray-100"
//             >
//               {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-4 py-3 space-y-2">
//               {navItems.map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavClick(item)}
//                   className="w-full text-left px-3 py-2 text-black font-medium hover:bg-gray-50 rounded-md flex items-center gap-2"
//                 >
//                   <item.icon className="w-5 h-5" />
//                   {item.label}
//                 </button>
//               ))}

//               <div className="pt-3 space-y-2 border-t">
//                 <button
//                   onClick={() => {
//                     navigate("/post-property");
//                     setMobileOpen(false);
//                   }}
//                   className="w-full bg-black text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
//                 >
//                   <Plus className="w-4 h-4" />
//                   Post Property
//                 </button>

//                 {user ? (
//                   <>
//                     <div className="px-3 py-2 bg-gray-50 rounded-md space-y-1 text-sm">
//                       <p className="font-medium">{userData?.name || "User"}</p>
//                       <p className="text-gray-600">{user.email}</p>
//                       {userData?.mobile && <p className="text-gray-600 text-xs">Mobile: {userData.mobile}</p>}
//                     </div>

//                     {/* NEW: Post History in Mobile */}
//                     <button
//                       onClick={handlePostHistoryClick}
//                       className="w-full bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
//                     >
//                       <History className="w-4 h-4" />
//                       Post History
//                     </button>

//                     <button
//                       onClick={() => {
//                         logout();
//                         setMobileOpen(false);
//                       }}
//                       className="w-full bg-red-600 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
//                     >
//                       <LogOut className="w-4 h-4" />
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <button
//                     onClick={() => {
//                       navigate("/login");
//                       setMobileOpen(false);
//                     }}
//                     className="w-full bg-black text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
//                   >
//                     <LogIn className="w-4 h-4" />
//                     Sign In/Login
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// // src/components/Header.jsx
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   Home,
//   Info,
//   Wrench,
//   MessageCircle,
//   Phone,
//   Plus,
//   LogIn,
//   Menu,
//   X,
//   User,
//   LogOut,
//   History,
// } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useAuth } from "../hooks/useAuth";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";

// export default function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { user, logout } = useAuth();

//   // Fetch user data from Firestore
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     if (!user?.uid) {
//       setUserData(null);
//       return;
//     }

//     const fetchUser = async () => {
//       try {
//         const docRef = doc(db, "users", user.uid);
//         const docSnap = await getDoc(docRef);
        
//         if (docSnap.exists()) {
//           setUserData(docSnap.data());
//         } else {
//           setUserData(null);
//         }
//       } catch (err) {
//         console.error("Failed to load user data", err);
//         setUserData(null);
//       }
//     };

//     fetchUser();
//   }, [user?.uid]);   // Safe dependency

//   const navItems = [
//     { label: "Home", path: "/", icon: Home, sectionId: "hero" },
//     { label: "About Us", path: "/about", icon: Info, sectionId: "about" },
//     { label: "Solutions", path: "/solutions", icon: Wrench, sectionId: "solutions" },
//     { label: "Testimonials", path: "/testimonials", icon: MessageCircle, sectionId: "testimonials" },
//     { label: "Contact Us", path: "/contact", icon: Phone, sectionId: "contact" },
//   ];

//   const handleNavClick = (item) => {
//     if (location.pathname === "/" && item.sectionId) {
//       const element = document.getElementById(item.sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//         setMobileOpen(false);
//         return;
//       }
//     }
//     navigate(item.path);
//     setMobileOpen(false);
//   };

//   const handlePostHistoryClick = () => {
//     navigate("/history");
//     setMobileOpen(false);
//   };

//   return (
//     <>
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
//           .font-playfair {
//             font-family: 'Playfair Display', serif;
//           }
//         `}
//       </style>

//       <header className="bg-white shadow-sm sticky top-0 z-50 font-playfair">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* LOGO */}
//             <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
//               <h1 className="text-2xl md:text-3xl font-bold text-black">UrbanNest360</h1>
//             </div>

//             {/* Desktop Nav */}
//             <nav className="hidden md:flex items-center gap-8 ml-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavClick(item)}
//                   className="text-black font-medium hover:text-gray-700 transition-colors flex items-center gap-1"
//                 >
//                   <item.icon className="w-4 h-4" />
//                   {item.label}
//                 </button>
//               ))}
//             </nav>

//             {/* Desktop Auth Area */}
//             <div className="hidden md:flex items-center gap-3">
//               <button
//                 onClick={() => navigate("/post-property")}
//                 className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-md"
//               >
//                 <Plus className="w-4 h-4" />
//                 Post Property
//               </button>

//               {user ? (
//                 <div className="relative group">
//                   <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-md">
//                     <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
//                       {user.email?.[0]?.toUpperCase() || "?"}
//                     </div>
//                     <User className="w-4 h-4" />
//                   </button>

//                   {/* Dropdown */}
//                   <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
//                     <div className="p-4 space-y-2 text-sm">
//                       <p className="font-semibold text-black">{userData?.name || "User"}</p>
//                       <p className="text-gray-600">{user.email}</p>
//                       {userData?.mobile && <p className="text-gray-600">Mobile: {userData.mobile}</p>}
//                       {userData?.createdAt && (
//                         <p className="text-xs text-gray-500">
//                           Member since {new Date(userData.createdAt).toLocaleDateString()}
//                         </p>
//                       )}
//                     </div>

//                     <div className="border-t">
//                       <button
//                         onClick={handlePostHistoryClick}
//                         className="w-full text-left px-4 py-2.5 hover:bg-gray-100 flex items-center gap-2 text-sm text-blue-600 font-medium"
//                       >
//                         <History className="w-4 h-4" />
//                         Post History
//                       </button>
//                     </div>

//                     <div className="border-t">
//                       <button
//                         onClick={logout}
//                         className="w-full text-left px-4 py-2.5 hover:bg-gray-100 flex items-center gap-2 text-sm text-red-600 font-medium"
//                       >
//                         <LogOut className="w-4 h-4" />
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-md"
//                 >
//                   <LogIn className="w-4 h-4" />
//                   Sign In/Login
//                 </button>
//               )}
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="md:hidden p-2 rounded-md hover:bg-gray-100"
//             >
//               {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-4 py-3 space-y-2">
//               {navItems.map((item) => (
//                 <button
//                   key={item.label}
//                   onClick={() => handleNavClick(item)}
//                   className="w-full text-left px-3 py-2 text-black font-medium hover:bg-gray-50 rounded-md flex items-center gap-2"
//                 >
//                   <item.icon className="w-5 h-5" />
//                   {item.label}
//                 </button>
//               ))}

//               <div className="pt-3 space-y-2 border-t">
//                 <button
//                   onClick={() => {
//                     navigate("/post-property");
//                     setMobileOpen(false);
//                   }}
//                   className="w-full bg-black text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
//                 >
//                   <Plus className="w-4 h-4" />
//                   Post Property
//                 </button>

//                 {user ? (
//                   <>
//                     <div className="px-3 py-2 bg-gray-50 rounded-md space-y-1 text-sm">
//                       <p className="font-medium">{userData?.name || "User"}</p>
//                       <p className="text-gray-600">{user.email}</p>
//                       {userData?.mobile && <p className="text-gray-600 text-xs">Mobile: {userData.mobile}</p>}
//                     </div>

//                     <button
//                       onClick={handlePostHistoryClick}
//                       className="w-full bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
//                     >
//                       <History className="w-4 h-4" />
//                       Post History
//                     </button>

//                     <button
//                       onClick={() => {
//                         logout();
//                         setMobileOpen(false);
//                       }}
//                       className="w-full bg-red-600 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
//                     >
//                       <LogOut className="w-4 h-4" />
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <button
//                     onClick={() => {
//                       navigate("/login");
//                       setMobileOpen(false);
//                     }}
//                     className="w-full bg-black text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
//                   >
//                     <LogIn className="w-4 h-4" />
//                     Sign In/Login
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// src/components/Header.jsx
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home, Info, Wrench, MessageCircle, Phone,
  Plus, LogIn, Menu, X, User, LogOut, History, ChevronDown
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  const navItems = [
    { label: "Home", path: "/", icon: Home, sectionId: "hero" },
    { label: "About", path: "/about", icon: Info, sectionId: "about" },
    { label: "Solutions", path: "/solutions", icon: Wrench, sectionId: "solutions" },
    { label: "Testimonials", path: "/testimonials", icon: MessageCircle, sectionId: "testimonials" },
    { label: "Contact", path: "/contact", icon: Phone, sectionId: "contact" },
  ];

  const handleNavClick = (item) => {
    if (location.pathname === "/" && item.sectionId) {
      const el = document.getElementById(item.sectionId);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); setMobileOpen(false); return; }
    }
    navigate(item.path);
    setMobileOpen(false);
  };

  const handlePostHistoryClick = () => { navigate("/history"); setMobileOpen(false); setDropdownOpen(false); };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        .header-root {
          font-family: 'DM Sans', sans-serif;
          background: #1C2B1A;
          position: sticky; top: 0; z-index: 50;
          border-bottom: 1px solid rgba(200,184,154,0.15);
          box-shadow: 0 2px 24px rgba(0,0,0,0.25);
        }
        .header-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
          height: 64px;
        }
        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px; font-weight: 700;
          color: white; cursor: pointer;
          letter-spacing: 0.01em; border: none; background: none;
          display: flex; align-items: center; gap: 2px;
        }
        .logo span { color: #C8B89A; }

        .nav-link {
          background: none; border: none;
          color: rgba(255,255,255,0.7);
          font-size: 13.5px; font-weight: 500;
          cursor: pointer; padding: 6px 2px;
          transition: color 0.18s;
          display: flex; align-items: center; gap: 5px;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute; bottom: -2px; left: 0; right: 0;
          height: 1.5px; background: #C8B89A;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.2s ease;
        }
        .nav-link:hover { color: white; }
        .nav-link:hover::after { transform: scaleX(1); }

        .btn-post {
          background: #C8B89A; color: #1C2B1A;
          border: none; border-radius: 20px;
          padding: 8px 18px; font-size: 13px; font-weight: 600;
          cursor: pointer; display: flex; align-items: center; gap: 6px;
          transition: all 0.2s; font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        .btn-post:hover { background: #d4c4aa; transform: translateY(-1px); }

        .btn-signin {
          background: rgba(255,255,255,0.1);
          color: white; border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px; padding: 8px 18px;
          font-size: 13px; font-weight: 500; cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          transition: all 0.2s; font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        .btn-signin:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.4); }

        .user-btn {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px; padding: 6px 14px 6px 8px;
          display: flex; align-items: center; gap: 8px;
          cursor: pointer; color: white;
          transition: all 0.2s; font-family: 'DM Sans', sans-serif;
        }
        .user-btn:hover { background: rgba(255,255,255,0.18); }

        .avatar {
          width: 30px; height: 30px;
          background: #C8B89A; color: #1C2B1A;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 13px;
          flex-shrink: 0;
        }

        .dropdown {
          position: absolute; right: 0; top: calc(100% + 10px);
          width: 240px; background: white;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          border: 1px solid #E8E2D9;
          overflow: hidden;
          animation: dropIn 0.18s ease;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dropdown-header {
          padding: 16px;
          background: #F7F4EF;
          border-bottom: 1px solid #E8E2D9;
        }
        .dropdown-name {
          font-weight: 600; font-size: 14px; color: #1C2B1A;
          font-family: 'Cormorant Garamond', serif; font-size: 17px;
        }
        .dropdown-email { font-size: 12px; color: #8A8A8A; margin-top: 2px; }
        .dropdown-item {
          width: 100%; text-align: left;
          padding: 12px 16px; border: none; background: none;
          font-size: 13px; font-weight: 500; cursor: pointer;
          display: flex; align-items: center; gap: 10px;
          transition: background 0.15s;
          font-family: 'DM Sans', sans-serif;
        }
        .dropdown-item:hover { background: #F7F4EF; }
        .dropdown-item.history { color: #1C2B1A; border-bottom: 1px solid #E8E2D9; }
        .dropdown-item.logout { color: #c0392b; }

        /* Mobile */
        .mobile-toggle {
          background: none; border: none;
          color: white; cursor: pointer;
          padding: 6px; display: flex; align-items: center;
        }
        .mobile-menu {
          background: #1C2B1A;
          border-top: 1px solid rgba(200,184,154,0.15);
          padding: 16px;
          animation: slideDown 0.2s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-nav-item {
          width: 100%; text-align: left;
          background: none; border: none;
          color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 500;
          padding: 11px 12px; border-radius: 8px; cursor: pointer;
          display: flex; align-items: center; gap: 10px;
          transition: background 0.15s; font-family: 'DM Sans', sans-serif;
        }
        .mobile-nav-item:hover { background: rgba(255,255,255,0.07); color: white; }

        .mobile-divider { border: none; border-top: 1px solid rgba(200,184,154,0.15); margin: 12px 0; }

        .mobile-user-info {
          background: rgba(255,255,255,0.05);
          border-radius: 10px; padding: 12px 14px;
          margin-bottom: 10px;
        }
        .mobile-user-name { font-weight: 600; font-size: 15px; color: white; font-family: 'Cormorant Garamond', serif; }
        .mobile-user-email { font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 2px; }

        .mobile-btn {
          width: 100%; border: none; border-radius: 10px;
          padding: 11px 16px; font-size: 13px; font-weight: 600;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          gap: 8px; margin-bottom: 8px; transition: opacity 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .mobile-btn:hover { opacity: 0.88; }
        .mobile-btn.post { background: #C8B89A; color: #1C2B1A; }
        .mobile-btn.history { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.15); }
        .mobile-btn.logout { background: rgba(192,57,43,0.15); color: #e57373; border: 1px solid rgba(192,57,43,0.2); }
        .mobile-btn.signin { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.15); }
      `}</style>

      <header className="header-root">
        <div className="header-inner">

          {/* LOGO */}
          <button className="logo" onClick={() => navigate("/")}>
            UrbanNest<span>360</span>
          </button>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px', marginLeft: '32px' }} className="hidden-mobile">
            {navItems.map(item => (
              <button key={item.label} className="nav-link" onClick={() => handleNavClick(item)}>
                <item.icon size={14} />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }} className="hidden-mobile">
            <button className="btn-post" onClick={() => navigate("/post-property")}>
              <Plus size={15} /> Post Property
            </button>

            {user ? (
              <div style={{ position: 'relative' }}>
                <button className="user-btn" onClick={() => setDropdownOpen(o => !o)}>
                  <div className="avatar">{(user.name || user.email)?.[0]?.toUpperCase() || "?"}</div>
                  <span style={{ fontSize: '13px', fontWeight: 500, maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user.name || user.email?.split('@')[0]}
                  </span>
                  <ChevronDown size={13} style={{ opacity: 0.7, transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>

                {dropdownOpen && (
                  <>
                    <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} onClick={() => setDropdownOpen(false)} />
                    <div className="dropdown" style={{ zIndex: 50 }}>
                      <div className="dropdown-header">
                        <div className="dropdown-name">{user.name || "User"}</div>
                        <div className="dropdown-email">{user.email}</div>
                      </div>
                      <button className="dropdown-item history" onClick={handlePostHistoryClick}>
                        <History size={15} /> Post History
                      </button>
                      <button className="dropdown-item logout" onClick={logout}>
                        <LogOut size={15} /> Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button className="btn-signin" onClick={() => navigate("/login")}>
                <LogIn size={15} /> Sign In
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle show-mobile" onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            {navItems.map(item => (
              <button key={item.label} className="mobile-nav-item" onClick={() => handleNavClick(item)}>
                <item.icon size={16} /> {item.label}
              </button>
            ))}

            <hr className="mobile-divider" />

            <button className="mobile-btn post" onClick={() => { navigate("/post-property"); setMobileOpen(false); }}>
              <Plus size={15} /> Post Property
            </button>

            {user ? (
              <>
                <div className="mobile-user-info">
                  <div className="mobile-user-name">{user.name || "User"}</div>
                  <div className="mobile-user-email">{user.email}</div>
                </div>
                <button className="mobile-btn history" onClick={handlePostHistoryClick}>
                  <History size={15} /> Post History
                </button>
                <button className="mobile-btn logout" onClick={() => { logout(); setMobileOpen(false); }}>
                  <LogOut size={15} /> Logout
                </button>
              </>
            ) : (
              <button className="mobile-btn signin" onClick={() => { navigate("/login"); setMobileOpen(false); }}>
                <LogIn size={15} /> Sign In
              </button>
            )}
          </div>
        )}
      </header>

      {/* Responsive helpers */}
      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}