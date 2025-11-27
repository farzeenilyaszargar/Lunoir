"use client";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadingOut(true);
      const removeTimer = setTimeout(() => setShowSplash(false), 500); // match fade duration
      return () => clearTimeout(removeTimer);
    }, 500); // show for 0.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ease-out ${
              fadingOut ? "opacity-0" : "opacity-100"} ${showSplash?'':'hidden'
            }`}
          >
            <img
              src="/shirt-bg.gif"
              alt="Splash animation"
              className="w-48 h-48 object-contain"
            />
          </div>
        )
  }

  