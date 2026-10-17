"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function StartLoad() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), 500);
    const hideTimer = setTimeout(() => setShowSplash(false), 1000);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!showSplash) return null;
  return (
    <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${fadingOut ? "opacity-0" : "opacity-100"}`}>
      <Image src="/shirt-bg.gif" alt="" width={192} height={192} className="object-contain" unoptimized />
    </div>
  );
}
