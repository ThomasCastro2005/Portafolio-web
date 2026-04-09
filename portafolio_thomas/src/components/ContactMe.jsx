import React from "react";
import { motion } from "motion/react";

const ContactMe = () => {
  return (
    <>
      <div className="relative border border-white/20 rounded-2xl overflow-hidden text-amber-50 font-clash">
        <div className="absolute -top-12 left-1/4 w-64 h-64 bg-purple-600/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 right-1/4 w-64 h-64 bg-amber-600/60 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl" />

        <div className="relative z-10 w-full lg:h-75 flex justify-around items-center">
          <div className="border border-white/50 rounded-full p-10 w-60 h-60 flex flex-col items-center justify-center">
            <motion.h2
            whileInView={{
              x: [-100, 0],
              opacity: [0, 1],
              transition: { duration: 0.75 },
            }}
             className="font-semibold">WhatssApp</motion.h2>
            <p>+57 3004803696</p>
          </div>
          <div className="border border-white/50 rounded-full p-10 w-60 h-60 flex flex-col items-center justify-center">
            <motion.h2 className="font-semibold">Instagram</motion.h2>
            <p>+57 3004803696</p>
          </div>
          <div className="border border-white/50 rounded-full p-10 w-60 h-60 flex flex-col items-center justify-center">
            <motion.h2 className="font-semibold">LinkedIn</motion.h2>
            <p>+57 3004803696</p>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default ContactMe;
