import confetti from "canvas-confetti";

import { useEffect, useRef, useState } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const videoRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);

  const togglePassword = () => setShowPassword((p) => !p);

  //track current user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // login function and confetti
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅Login successful!");
      confetti({
        particleCount:200,
        spread:100,
        gravity:0.7,
        origin:{y:0.55},
        angle:90,
        ticks:180,
       colors:[
        '#BC6C25','#DDA15E', '#FEFAE0','#606C38','#283618','#FF8C42','#F4A261','#8B5A2B'
      ],
        shapes:['circle']
      });
      setTimeout(()=>{
      window.location.href="/landing.html";
      },800);
    } catch (error) {
      alert("❌" + error.message);
    }
  };

  //background video
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
        <source src="/house2.mp4" type="video/mp4" />
      </video>
      

      <div className="flex flex-row w-full max-w-3xl mx-2 sm:mx-4 shadow-2xl overflow-hidden items-stretch min-h-[400px]">
        <img
          src="/room.png"
          alt="pic"
          className="hidden sm:block w-1/2 object-cover shadow-2xl rounded-tl-2xl rounded-bl-2xl"
        />

        <div className="flex flex-col justify-center items-center shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 w-full sm:w-1/2 min-h-[600px] h-auto rounded-tr-2xl rounded-br-2xl bg-white/80">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:mb-2 md:mb-3 font-mono">
            Login
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 md:mb-3">
            Welcome back! Please enter your credentials.
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-2 w-full">
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
              Login
            </button>
          </form>

          <p className="mt-2 sm:mt-3 md:mt-4 sm:text-lg md:text-base">
            New user?{" "}
            <a href="/register" className="underline hover:text-blue-800">
              Register now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
