// // // src/components/Login.jsx
// // import confetti from "canvas-confetti";
// // import { useEffect, useRef, useState } from "react";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";
// // import { Link, useNavigate } from "react-router-dom";

// // export default function Login() {
// //   const videoRef = useRef(null);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const navigate = useNavigate();

// //   const togglePassword = () => setShowPassword(p => !p);

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       confetti({
// //         particleCount: 200,
// //         spread: 100,
// //         gravity: 0.7,
// //         origin: { y: 0.55 },
// //         angle: 90,
// //         ticks: 180,
// //         colors: ['#BC6C25','#DDA15E', '#FEFAE0','#606C38','#283618','#FF8C42','#F4A261','#8B5A2B'],
// //         shapes: ['circle']
// //       });
// //       setTimeout(() => navigate("/buy-sell"), 800);
// //     } catch (error) {
// //       alert("Login failed: " + error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     if (videoRef.current) videoRef.current.play().catch(() => {});
// //   }, []);

// //   return (
// //     <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
// //       <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover -z-20 blur-[6px]">
// //         <source src="/house2.mp4" type="video/mp4" />
// //       </video>

// //       <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden">
// //         <img src="/room.png" alt="Room" className="hidden sm:block w-1/2 object-cover rounded-tl-2xl rounded-bl-2xl" />
// //         <div className="flex flex-col justify-center items-center p-4 sm:p-8 w-full sm:w-1/2 bg-white/80 rounded-tr-2xl rounded-br-2xl">
// //           <p className="text-3xl font-mono mb-2">Login</p>
// //           <p className="text-lg mb-4">Welcome back!</p>
// //           <form onSubmit={handleLogin} className="w-full space-y-3">
// //             <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 border-black rounded p-2" />
// //             <div className="relative">
// //               <input type={showPassword ? "text" : "password"} placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full border-2 border-black rounded p-2 pr-10" />
// //               <img src={showPassword ? "/visibility-off.png" : "/visibility.png"} onClick={togglePassword} className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer invert opacity-70" />
// //             </div>
// //             <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Login</button>
// //           </form>
// //           <p className="mt-4">New user? <Link to="/register" className="underline hover:text-blue-800">Register now</Link></p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // src/components/Login.jsx
// import confetti from "canvas-confetti";
// import { useEffect, useRef, useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const videoRef = useRef(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const togglePassword = () => setShowPassword(p => !p);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       confetti({
//         particleCount: 200,
//         spread: 100,
//         gravity: 0.7,
//         origin: { y: 0.55 },
//         angle: 90,
//         ticks: 180,
//         colors: ['#BC6C25','#DDA15E', '#FEFAE0','#606C38','#283618','#FF8C42','#F4A261','#8B5A2B'],
//         shapes: ['circle']
//       });
//       // Redirect to Home after confetti
//       setTimeout(() => navigate("/"), 800);
//     } catch (error) {
//       alert("Login failed: " + error.message);
//     }
//   };

//   useEffect(() => {
//     if (videoRef.current) videoRef.current.play().catch(() => {});
//   }, []);

//   return (
//     <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
//       <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover -z-20 blur-[6px]">
//         <source src="/house2.mp4" type="video/mp4" />
//       </video>

//       <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden">
//         <img src="/room.png" alt="Room" className="hidden sm:block w-1/2 object-cover rounded-tl-2xl rounded-bl-2xl" />
//         <div className="flex flex-col justify-center items-center p-4 sm:p-8 w-full sm:w-1/2 bg-white/80 rounded-tr-2xl rounded-br-2xl">
//           <p className="text-3xl font-mono mb-2">Login</p>
//           <p className="text-lg mb-4">Welcome back!</p>
//           <form onSubmit={handleLogin} className="w-full space-y-3">
//             <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 border-black rounded p-2" />
//             <div className="relative">
//               <input type={showPassword ? "text" : "password"} placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full border-2 border-black rounded p-2 pr-10" />
//               <img src={showPassword ? "/visibility-off.png" : "/visibility.png"} onClick={togglePassword} className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer invert opacity-70" />
//             </div>
//             <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Login</button>
//           </form>
//           <p className="mt-4">New user? <Link to="/register" className="underline hover:text-blue-800">Register now</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// }
// src/components/Login.jsx
import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // ← Only added this

export default function Login() {
  const videoRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(p => !p);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      confetti({
        particleCount: 200,
        spread: 100,
        gravity: 0.7,
        origin: { y: 0.55 },
        angle: 90,
        ticks: 180,
        colors: ['#BC6C25','#DDA15E', '#FEFAE0','#606C38','#283618','#FF8C42','#F4A261','#8B5A2B'],
        shapes: ['circle']
      });
      // Redirect to Home after confetti
      setTimeout(() => navigate("/"), 800);
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover -z-20 blur-[6px]">
        <source src="/house2.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden">
        <img src="/room.png" alt="Room" className="hidden sm:block w-1/2 object-cover rounded-tl-2xl rounded-bl-2xl" />
        <div className="flex flex-col justify-center items-center p-4 sm:p-8 w-full sm:w-1/2 bg-white/80 rounded-tr-2xl rounded-br-2xl">
          <p className="text-3xl font-mono mb-2">Login</p>
          <p className="text-lg mb-4">Welcome back!</p>
          <form onSubmit={handleLogin} className="w-full space-y-3">
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="w-full border-2 border-black rounded p-2" 
            />
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                required 
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
            <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Login</button>
          </form>
          <p className="mt-4">New user? <Link to="/register" className="underline hover:text-blue-800">Register now</Link></p>
        </div>
      </div>
    </div>
  );
}