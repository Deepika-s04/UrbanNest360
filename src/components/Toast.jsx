// src/components/Toast.jsx
import { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 6000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#283618] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[100] animate-slide-up">
      <div className="text-2xl">🔔</div>
      <div>
        <p className="font-semibold text-lg">New Property Posted!</p>
        <p className="text-sm opacity-90">{message}</p>
      </div>
      <button 
        onClick={onClose}
        className="ml-4 text-white/70 hover:text-white text-xl leading-none"
      >
        ✕
      </button>
    </div>
  );
}