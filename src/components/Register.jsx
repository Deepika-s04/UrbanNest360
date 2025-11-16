// // // src/components/Register.jsx
// // import { useEffect, useRef, useState } from "react";
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";
// // import { Link, useNavigate } from "react-router-dom";

// // export default function Register() {
// //   const videoRef = useRef(null);
// //   const [name, setName] = useState("");
// //   const [mobile, setMobile] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const navigate = useNavigate();

// //   const togglePassword = () => setShowPassword(p => !p);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!/^\d{10}$/.test(mobile)) {
// //       alert("Mobile must be 10 digits");
// //       return;
// //     }
// //     try {
// //       await createUserWithEmailAndPassword(auth, email, password);
// //       alert("Registered! Login now.");
// //       navigate("/login");
// //     } catch (error) {
// //       alert("Error: " + error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     if (videoRef.current) videoRef.current.play().catch(() => {});
// //   }, []);

// //   return (
// //     <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
// //       <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover -z-20 blur-[6px]">
// //         <source src="/house5.mp4" type="video/mp4" />
// //       </video>

// //       <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden">
// //         <img src="/blue2.png" alt="Home" className="hidden sm:block w-1/2 object-cover rounded-tl-2xl rounded-bl-2xl" />
// //         <div className="flex flex-col justify-center items-center p-4 sm:p-8 w-full sm:w-1/2 bg-white/80 rounded-tr-2xl rounded-br-2xl">
// //           <p className="text-3xl font-mono mb-2">Register</p>
// //           <p className="text-lg mb-4">Create account</p>
// //           <form onSubmit={handleSubmit} className="w-full space-y-3">
// //             <input type="text" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} className="w-full border-2 border-black rounded p-2" />
// //             <input type="tel" placeholder="Mobile (10 digits)" required value={mobile} onChange={e => setMobile(e.target.value.replace(/\D/g, "").slice(0,10))} maxLength={10} className="w-full border-2 border-black rounded p-2" />
// //             <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 border-black rounded p-2" />
// //             <div className="relative">
// //               <input type={showPassword ? "text" : "password"} placeholder="Password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)} className="w-full border-2 border-black rounded p-2 pr-10" />
// //               <img src={showPassword ? "/visibility-off.png" : "/visibility.png"} onClick={togglePassword} className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer invert opacity-70" />
// //             </div>
// //             <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Register</button>
// //           </form>
// //           <p className="mt-4">Have account? <Link to="/login" className="underline hover:text-blue-800">Login</Link></p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // src/components/Register.jsx
// // import { useEffect, useRef, useState } from "react";
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth, db } from "../firebase"; // Make sure db is exported from firebase.js
// // import { doc, setDoc } from "firebase/firestore";
// // import { Link, useNavigate } from "react-router-dom";

// // export default function Register() {
// //   const videoRef = useRef(null);
// //   const [name, setName] = useState("");
// //   const [mobile, setMobile] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const navigate = useNavigate();

// //   const togglePassword = () => setShowPassword(p => !p);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!/^\d{10}$/.test(mobile)) {
// //       alert("Mobile must be 10 digits");
// //       return;
// //     }
// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;

    
// //       await setDoc(doc(db, "users", user.uid), {
// //         name: name.trim(),
// //         mobile,
// //         email,
// //         createdAt: new Date().toISOString()
// //       });

// //       alert("Registered! Login now.");
// //       navigate("/login");
// //     } catch (error) {
// //       alert("Error: " + error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     if (videoRef.current) videoRef.current.play().catch(() => {});
// //   }, []);

// //   return (
// //     <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
// //       <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover -z-20 blur-[6px]">
// //         <source src="/house5.mp4" type="video/mp4" />
// //       </video>

// //       <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden">
// //         <img src="https://www.thepackersmovers.com/blog/wp-content/uploads/2023/01/electric-blue-and-orange.jpg " alt="Home" className="hidden sm:block w-1/2 object-cover rounded-tl-2xl rounded-bl-2xl" />
// //         <div className="flex flex-col justify-center items-center p-4 sm:p-8 w-full sm:w-1/2 bg-white/80 rounded-tr-2xl rounded-br-2xl">
// //           <p className="text-3xl font-mono mb-2">Register</p>
// //           <p className="text-lg mb-4">Create account</p>
// //           <form onSubmit={handleSubmit} className="w-full space-y-3">
// //             <input type="text" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} className="w-full border-2 border-black rounded p-2" />
// //             <input type="tel" placeholder="Mobile (10 digits)" required value={mobile} onChange={e => setMobile(e.target.value.replace(/\D/g, "").slice(0,10))} maxLength={10} className="w-full border-2 border-black rounded p-2" />
// //             <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 border-black rounded p-2" />
// //             <div className="relative">
// //               <input type={showPassword ? "text" : "password"} placeholder="Password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)} className="w-full border-2 border-black rounded p-2 pr-10" />
// //               <img src={showPassword ? "/visibility-off.png" : "/visibility.png"} onClick={togglePassword} className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer invert opacity-70" />
// //             </div>
// //             <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Register</button>
// //           </form>
// //           <p className="mt-4">Have account? <Link to="/login" className="underline hover:text-blue-800">Login</Link></p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // src/components/Register.jsx
// import { useEffect, useRef, useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../firebase";
// import { doc, setDoc } from "firebase/firestore";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const videoRef = useRef(null);
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const togglePassword = () => setShowPassword(p => !p);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!/^\d{10}$/.test(mobile)) {
//       alert("Mobile must be 10 digits");
//       return;
//     }
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await setDoc(doc(db, "users", user.uid), {
//         name: name.trim(),
//         mobile,
//         email,
//         createdAt: new Date().toISOString()
//       });

//       alert("Registered! Welcome!");
//       // Redirect to Home after registration
//       navigate("/");
//     } catch (error) {
//       alert("Error: " + error.message);
//     }
//   };

//   useEffect(() => {
//     if (videoRef.current) videoRef.current.play().catch(() => {});
//   }, []);

//   return (
//     <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
//       <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover -z-20 blur-[6px]">
//         <source src="/house5.mp4" type="video/mp4" />
//       </video>

//       <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden">
//         <img src="https://www.thepackersmovers.com/blog/wp-content/uploads/2023/01/electric-blue-and-orange.jpg" alt="Home" className="hidden sm:block w-1/2 object-cover rounded-tl-2xl rounded-bl-2xl" />
//         <div className="flex flex-col justify-center items-center p-4 sm:p-8 w-full sm:w-1/2 bg-white/80 rounded-tr-2xl rounded-br-2xl">
//           <p className="text-3xl font-mono mb-2">Register</p>
//           <p className="text-lg mb-4">Create account</p>
//           <form onSubmit={handleSubmit} className="w-full space-y-3">
//             <input type="text" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} className="w-full border-2 border-black rounded p-2" />
//             <input type="tel" placeholder="Mobile (10 digits)" required value={mobile} onChange={e => setMobile(e.target.value.replace(/\D/g, "").slice(0,10))} maxLength={10} className="w-full border-2 border-black rounded p-2" />
//             <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 border-black rounded p-2" />
//             <div className="relative">
//               <input type={showPassword ? "text" : "password"} placeholder="Password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)} className="w-full border-2 border-black rounded p-2 pr-10" />
//               <img src={showPassword ? "/visibility-off.png" : "/visibility.png"} onClick={togglePassword} className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer invert opacity-70" />
//             </div>
//             <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Register</button>
//           </form>
//           <p className="mt-4">Have account? <Link to="/login" className="underline hover:text-blue-800">Login</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/components/Register.jsx
import { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // ← Only added this

export default function Register() {
  const videoRef = useRef(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(p => !p);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      alert("Mobile must be 10 digits");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name.trim(),
        mobile,
        email,
        createdAt: new Date().toISOString()
      });

      alert("Registered! Welcome!");
      // Redirect to Home after registration
      navigate("/");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover -z-20 blur-[6px]">
        <source src="/house5.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden">
        <img src="https://www.thepackersmovers.com/blog/wp-content/uploads/2023/01/electric-blue-and-orange.jpg" alt="Home" className="hidden sm:block w-1/2 object-cover rounded-tl-2xl rounded-bl-2xl" />
        <div className="flex flex-col justify-center items-center p-4 sm:p-8 w-full sm:w-1/2 bg-white/80 rounded-tr-2xl rounded-br-2xl">
          <p className="text-3xl font-mono mb-2">Register</p>
          <p className="text-lg mb-4">Create account</p>
          <form onSubmit={handleSubmit} className="w-full space-y-3">
            <input type="text" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} className="w-full border-2 border-black rounded p-2" />
            <input type="tel" placeholder="Mobile (10 digits)" required value={mobile} onChange={e => setMobile(e.target.value.replace(/\D/g, "").slice(0,10))} maxLength={10} className="w-full border-2 border-black rounded p-2" />
            <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 border-black rounded p-2" />
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                required 
                minLength={8} 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                className="w-full border-2 border-black rounded p-2 pr-10" 
              />
              <button 
                type="button" 
                onClick={togglePassword} 
                className="absolute right-3 inset-y-0 flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition"
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-black" /> : <Eye className="w-5 h-5 text-black" />}
              </button>
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Register</button>
          </form>
          <p className="mt-4">Have account? <Link to="/login" className="underline hover:text-blue-800">Login</Link></p>
        </div>
      </div>
    </div>
  );
}