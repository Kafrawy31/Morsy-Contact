"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const LoadingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  gsap.fromTo(
    ".mm-path",
    {
      strokeDasharray: 300,
      strokeDashoffset: 300,
      opacity: 1,
    },
    {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.inOut",
    }
  );

  gsap.fromTo(
    ".logo-name",
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, delay: 1.0 }
  );

  gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      duration: 0.7,
      delay: 2.6,
      onComplete: () => setIsLoaded(true),
    }
  );
}, []);

  if (isLoaded) return null;

  return (
    <div className="loading-page fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950">
      
      {/* MM outline logo */}
      <svg
        className="w-32 h-24 text-white font-thin mb-2"
        viewBox="0 0 220 120"
        fill="none"
      >
        <path
          className="mm-path"
          d="M20 100 V20 L55 70 L90 20 V100"
          stroke="currentColor"
          strokeWidth="4"   // thinner
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="mm-path"
          d="M130 100 V20 L165 70 L200 20 V100"
          stroke="currentColor"
          strokeWidth="4"   // thinner
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Name */}
      <div className="logo-name text-white text-2xl font-extralight tracking-wider">
        Mohammed Morsy
      </div>
    </div>
  );
};

export default LoadingPage;