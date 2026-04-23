"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide header
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } 
      // show header
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="h-[104px] w-full shrink-0"></div>

      <header 
        className={`fixed top-0 left-0 w-full bg-white shadow-sm border-b-4 border-[#1e3932] z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[100px] flex items-center justify-between">
          
          <div className="flex items-center gap-8">
            <a href="/" className="shrink-0">
              <img
                src="/logo.png"
                alt="Starbucks Logo"
                className="w-20 h-20 md:w-18 md:h-18 object-contain"
              />
            </a>

            <nav className="hidden md:flex gap-2 lg:gap-4">
              <a 
                href="#" 
                className="px-4 py-2 rounded-full text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#1e3932] hover:text-white transition-all duration-300"
              >
                Menu
              </a>
              <a 
                href="#" 
                className="px-4 py-2 rounded-full text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#1e3932] hover:text-white transition-all duration-300"
              >
                Rewards
              </a>
              <a 
                href="#" 
                className="px-4 py-2 rounded-full text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#1e3932] hover:text-white transition-all duration-300"
              >
                Gift Cards
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-6 lg:gap-10">
            
            <a 
              href="#" 
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#1e3932] hover:text-white transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6"
              >
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Nearest Store</span>
            </a>

            <div className="flex items-center gap-4">
              <button className="border border-black bg-white text-black rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-[250ms] ease-in-out hover:scale-105 hover:bg-gray-50 hover:shadow-sm">
                Sign in
              </button>
              <button className="border border-black bg-black text-white rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-[250ms] ease-in-out hover:scale-105 hover:bg-black/90 hover:shadow-sm">
                Join now
              </button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}