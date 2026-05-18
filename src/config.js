// const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
// export default BASE_URL;


// src/config.js
const BASE_URL = import.meta.env.VITE_API_URL 
  || (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app') 
      ? 'https://urbannest360-api.onrender.com' 
      : 'https://urbannest360-api.onrender.com');

export default BASE_URL;