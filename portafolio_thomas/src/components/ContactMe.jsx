import React from "react";

const ContactMe = () => {
  return (
    <>
      <div className="relative border border-white/20 rounded-2xl overflow-hidden text-amber-50 font-clash">
        <div className="absolute -top-12 left-1/4 w-64 h-64 bg-purple-600/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 right-1/4 w-64 h-64 bg-amber-600/60 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl" />

        <div className="relative z-10 w-full lg:h-75 flex justify-around items-center">
          <div className="border border-white/50 rounded-full p-10 w-60 h-60 flex flex-col items-center justify-center">
            <h2 className="font-semibold">WhatssApp</h2>
            <p>+57 3004803696</p>
          </div>
          <div className="border border-white/50 rounded-full p-10 w-60 h-60 flex flex-col items-center justify-center">
            <h2 className="font-semibold">Instagram</h2>
            <p>+57 3004803696</p>
          </div>
          <div className="border border-white/50 rounded-full p-10 w-60 h-60 flex flex-col items-center justify-center">
            <h2 className="font-semibold">Linkdnl</h2>
            <p>+57 3004803696</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
