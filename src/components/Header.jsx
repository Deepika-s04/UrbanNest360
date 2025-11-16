// src/components/Header.jsx
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Wrench,
  MessageCircle,
  Phone,
  Plus,
  LogIn,
  Menu,
  X,
  User,
  LogOut,
  History, // ← NEW ICON FOR POST HISTORY
} from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  // Fetch user data from Firestore
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user) {
      setUserData(null);
      return;
    }

    const fetchUser = async () => {
      try {
        const docSnap = await getDoc(doc(db, "users", user.uid));
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } catch (err) {
        console.error("Failed to load user data", err);
      }
    };

    fetchUser();
  }, [user]);

  const navItems = [
    { label: "Home", path: "/", icon: Home, sectionId: "hero" },
    { label: "About Us", path: "/about", icon: Info, sectionId: "about" },
    { label: "Solutions", path: "/solutions", icon: Wrench, sectionId: "solutions" },
    { label: "Testimonials", path: "/testimonials", icon: MessageCircle, sectionId: "testimonials" },
    { label: "Contact Us", path: "/contact", icon: Phone, sectionId: "contact" },
  ];

  // Smooth scroll for home page sections
  const handleNavClick = (item) => {
    if (location.pathname === "/" && item.sectionId) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
        return;
      }
    }
    navigate(item.path);
    setMobileOpen(false);
  };

  // NEW: Handle Post History Click
  const handlePostHistoryClick = () => {
    navigate("/history");
    setMobileOpen(false);
  };

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

      <header className="bg-white shadow-sm sticky top-0 z-50 font-playfair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
              <h1 className="text-2xl md:text-3xl font-bold text-black">UrbanNest360</h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 ml-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-black font-medium hover:text-gray-700 transition-colors flex items-center gap-1"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Auth Area */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => navigate("/post-property")}
                className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-md"
              >
                <Plus className="w-4 h-4" />
                Post Property
              </button>

              {/* Logged In: Show Profile Icon + Dropdown */}
              {user ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-md">
                    <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
                      {user.email[0].toUpperCase()}
                    </div>
                    <User className="w-4 h-4" />
                  </button>

                  {/* Dropdown with User Details + Post History */}
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                    <div className="p-4 space-y-2 text-sm">
                      <p className="font-semibold text-black">{userData?.name || "User"}</p>
                      <p className="text-gray-600">{user.email}</p>
                      {userData?.mobile && <p className="text-gray-600">Mobile: {userData.mobile}</p>}
                      {userData?.createdAt && (
                        <p className="text-xs text-gray-500">
                          Member since {new Date(userData.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>

                    {/* NEW: Post History Link */}
                    <div className="border-t">
                      <button
                        onClick={handlePostHistoryClick}
                        className="w-full text-left px-4 py-2.5 hover:bg-gray-100 flex items-center gap-2 text-sm text-blue-600 font-medium"
                      >
                        <History className="w-4 h-4" />
                        Post History
                      </button>
                    </div>

                    <div className="border-t">
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-2.5 hover:bg-gray-100 flex items-center gap-2 text-sm text-red-600 font-medium"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Not logged in: Show Login Button */
                <button
                  onClick={() => navigate("/login")}
                  className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 shadow-md"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In/Login
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="w-full text-left px-3 py-2 text-black font-medium hover:bg-gray-50 rounded-md flex items-center gap-2"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}

              <div className="pt-3 space-y-2 border-t">
                <button
                  onClick={() => {
                    navigate("/post-property");
                    setMobileOpen(false);
                  }}
                  className="w-full bg-black text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  Post Property
                </button>

                {user ? (
                  <>
                    <div className="px-3 py-2 bg-gray-50 rounded-md space-y-1 text-sm">
                      <p className="font-medium">{userData?.name || "User"}</p>
                      <p className="text-gray-600">{user.email}</p>
                      {userData?.mobile && <p className="text-gray-600 text-xs">Mobile: {userData.mobile}</p>}
                    </div>

                    {/* NEW: Post History in Mobile */}
                    <button
                      onClick={handlePostHistoryClick}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
                    >
                      <History className="w-4 h-4" />
                      Post History
                    </button>

                    <button
                      onClick={() => {
                        logout();
                        setMobileOpen(false);
                      }}
                      className="w-full bg-red-600 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      navigate("/login");
                      setMobileOpen(false);
                    }}
                    className="w-full bg-black text-white px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-md"
                  >
                    <LogIn className="w-4 h-4" />
                    Sign In/Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}