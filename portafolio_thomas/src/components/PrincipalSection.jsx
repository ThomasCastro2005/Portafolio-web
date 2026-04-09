import React from "react";
import TechnoLoop from "./TechnoLoop";
import { easeIn, motion } from "motion/react";

const PrincipalSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-around lg:w-full overflow-hidden grow">
        {/* Desvanecido inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
        <div className="flex flex-col z-10 w-[75%] lg:w-[85%] lg:pb-[150px] gap-5">
          <h1 className="text-white font-clash font-bold text-[30px] md:text-[55px] lg:text-[75px] text-center lg:text-center flex flex-col">
             <motion.span 
              whileInView={
                {x: [-100, 0],
                opacity: [0, 1],
                transition: { duration: 0.75 },}
              }
              exit={
                easeIn
              }
             className="tracking-wider">DESARROLLADOR</motion.span> <motion.span 
             whileInView={{
              x:[100, 0],
              transition:{ duration: 0.75 }
            }}
              className="tracking-wider text-purple-600">DE SOFTWARE</motion.span>  
          </h1>
          <div className="flex justify-center w-full lg:gap-10">
            <motion.p
            whileInView={{
              y:[100, 0],
              transition: { duration: 0.75 }
            }}
             className="text-white text-[15px] md:text-[20px] lg:text-2xl font-clash font-normal text-center">
              Diseñando experiencias, programando realidades
            </motion.p>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default PrincipalSection;
