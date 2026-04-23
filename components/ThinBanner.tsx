import React from "react";

export default function ThinBanner() {
  return (
    <div className="bg-[#1e3932] w-full py-4 flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
      <span className="text-white font-semibold text-lg text-center tracking-wide">
        You deserve a treat.
      </span>
      <button className="border border-white text-white rounded-full px-4 py-1.5 font-semibold transition-all duration-[250ms] ease-in-out hover:bg-white hover:text-[#1e3932] shrink-0">
        Start an order
      </button>
    </div>
  );
}