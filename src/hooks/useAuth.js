// // import { useState, useEffect } from "react";
// // import { auth } from "../firebase";
// // import { onAuthStateChanged, signOut } from "firebase/auth";

// // export const useAuth = () => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setUser(user);
// //       setLoading(false);
// //     });
// //     return unsubscribe;
// //   }, []);

// //   const logout = async () => {
// //     await signOut(auth);
// //   };

// //   return { user, loading, logout };
// // };




// // // src/hooks/useAuth.js
// // import { useState, useEffect } from "react";

// // export const useAuth = () => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Check if token exists in localStorage
// //     const token = localStorage.getItem('token');
// //     const userData = localStorage.getItem('user');

// //     if (token && userData) {
// //       setUser(JSON.parse(userData));
// //     }
// //     setLoading(false);
// //   }, []);

// //   const logout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     window.location.href = "/login";   // or use navigate if you prefer
// //   };

// //   return { user, loading, logout };
// // };



// // // src/hooks/useAuth.js
// // import { useState, useEffect } from "react";

// // export const useAuth = () => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     const userData = localStorage.getItem('user');

// //     if (token && userData) {
// //       setUser(JSON.parse(userData));
// //     }
// //     setLoading(false);
// //   }, []);

// //   const logout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     window.location.href = "/login";
// //   };

// //   return { user, loading, logout };
// // };

// // src/hooks/useAuth.js
// import { useState, useEffect } from "react";

// export const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');

//     if (token && userData) {
//       setUser(JSON.parse(userData));
//     }
//     setLoading(false);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setUser(null);
//     window.location.href = "/login";
//   };

//   return { 
//     user, 
//     loading, 
//     logout,
//     token: localStorage.getItem('token')   // ← ONLY THIS LINE ADDED
//   };
// };


//useAuth.js


import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    try {
      const userData = localStorage.getItem('user');
      return userData ? JSON.parse(userData) : null;
    } catch { return null; }
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStorage = () => {
      try {
        const userData = localStorage.getItem('user');
        setUser(userData ? JSON.parse(userData) : null);
      } catch { setUser(null); }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = "/login";
  };

  return { user, loading, logout, token };
};