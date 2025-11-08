// import { useEffect, useRef, useState } from "react";

// export default function Register() {
//   const videoRef = useRef(null);

//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePassword = () => setShowPassword((p) => !p);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const user = {
//       name: name.trim(),
//       mobile: mobile.trim(),
//       email: email.trim(),
//       password: password.trim(),
//     };

//     localStorage.setItem("user", JSON.stringify(user));
//     alert("Registration successful! Please login now.");
//     window.location.href = "/login.html";   // change to React-Router later if you want
//   };

//   // Autoplay video (mobile-friendly)
//   useEffect(() => {
//     if (videoRef.current) videoRef.current.play().catch(() => {});
//   }, []);

//   return (
//     <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
//       {/* Background video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover -z-20 blur-[6px] bg-black bg-opacity-40"
//       >
//         <source src="/house5.mp4" type="video/mp4" />
//       </video>

//       {/* Main card */}
//       <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden items-stretch min-h-[400px]">
//         {/* Left image – hidden on mobile */}
//         <img
//           src="/blue2.png"
//           alt="pic"
//           className="hidden sm:block w-1/2 object-cover shadow-2xl rounded-tl-2xl rounded-bl-2xl"
//         />

//         {/* Right form */}
//         <div className="flex flex-col justify-center items-center shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 w-full sm:w-1/2 min-h-[600px] h-auto rounded-tr-2xl rounded-br-2xl bg-white/80">
//           <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:mb-2 md:mb-3 font-mono">
//             Register
//           </p>
//           <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 md:mb-3">
//             Welcome! Please enter your details.
//           </p>

//           <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
//             <input
//               type="text"
//               placeholder="Name"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border-2 border-black rounded sm:p-2 sm:text-sm md:text-base w-full"
//             />

//             <input
//               type="tel"
//               placeholder="Mobile Number"
//               required
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               className="border-2 border-black rounded p-1 sm:p-2 text-sm md:text-base w-full"
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border-2 border-black rounded p-1 sm:p-2 text-sm md:text-base w-full"
//             />

//             {/* Password + toggle */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 required
//                 minLength="8"
//                 pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$"
//                 title="Password must be at least 8 characters long, with letters, numbers, and at least one special character"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="border-2 border-black rounded w-full p-1 sm:p-2 pr-10 sm:text-sm md:text-base"
//               />
//               <img
//                 src={showPassword ? "/visibility-off.png" : "/visibility.png"}
//                 alt="toggle"
//                 onClick={togglePassword}
//                 className="absolute sm:right-2 right-1 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-5 md:w-6 sm:h-5 md:h-6 cursor-pointer mt-[1px] invert opacity-70"
//               />
//             </div>

//             <button
//               type="submit"
//               className="border-2 w-full bg-black border-black text-white rounded p-1 sm:p-2 sm:text-sm md:text-base mb-2 hover:bg-gray-800 transition"
//             >
//               Register
//             </button>
//           </form>

//           <p className="mt-2 sm:mt-3 md:mt-4 sm:text-lg md:text-base">
//             Already registered?{" "}
//             <a href="/login.html" className="underline hover:text-blue-800">
//               Login now
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const videoRef = useRef(null);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((p) => !p);

  // registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!/^\d{10}$/.test(mobile)){
      alert("❌ Mobile number must be exactly 10 digits.");
      return;
    }

    try {
      // authentication (only email + password)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Registration successful! Please login now.");
      window.location.href = "/";
    } catch (error) {
      alert("❌" + error.message);
    }
  };

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20 blur-[6px] bg-black bg-opacity-40"
      >
        <source src="/house5.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden items-stretch min-h-[400px]">
        <img
          src="/blue2.png"
          alt="pic"
          className="hidden sm:block w-1/2 object-cover shadow-2xl rounded-tl-2xl rounded-bl-2xl"
        />

        <div className="flex flex-col justify-center items-center shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 w-full sm:w-1/2 min-h-[600px] h-auto rounded-tr-2xl rounded-br-2xl bg-white/80">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:mb-2 md:mb-3 font-mono">
            Register
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 md:mb-3">
            Welcome! Please enter your details.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-black rounded sm:p-2 sm:text-sm md:text-base w-full"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength={10}
              pattern="[0-9]{10}"
              title="Mobile number must be exactly 10 digits"
              className="border-2 border-black rounded p-1 sm:p-2 text-sm md:text-base w-full"
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black rounded p-1 sm:p-2 text-sm md:text-base w-full"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                minLength="8"
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-black rounded w-full p-1 sm:p-2 pr-10 sm:text-sm md:text-base"
              />
              <img
                src={showPassword ? "/visibility-off.png" : "/visibility.png"}
                alt="toggle"
                onClick={togglePassword}
                className="absolute sm:right-2 right-1 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-5 md:w-6 sm:h-5 md:h-6 cursor-pointer mt-[1px] invert opacity-70"
              />
            </div>

            <button
              type="submit"
              className="border-2 w-full bg-black border-black text-white rounded p-1 sm:p-2 sm:text-sm md:text-base mb-2 hover:bg-gray-800 transition"
            >
              Register
            </button>
          </form>

          <p className="mt-2 sm:mt-3 md:mt-4 sm:text-lg md:text-base">
            Already registered?{" "}
            <a href="/" className="underline hover:text-blue-800">
              Login now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
