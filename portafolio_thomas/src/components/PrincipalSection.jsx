import React from "react";
import TechnoLoop from "./TechnoLoop";

const PrincipalSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-around lg:w-full overflow-hidden grow">
        {/* Desvanecido inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
        <div className="flex flex-col z-10 w-[75%] lg:w-[85%] lg:pb-[150px] gap-5">
          <h1 className="text-white font-clash font-bold text-[30px] md:text-[55px] lg:text-[75px] text-center lg:text-center flex flex-col">
             <span className="tracking-wider">DESARROLLADOR</span> <span className="tracking-wider text-purple-600">DE SOFTWARE</span>  
          </h1>
          <div className="flex justify-center w-full lg:gap-10">
            <p className="text-white text-[15px] md:text-[20px] lg:text-2xl font-clash font-normal text-center">
              Diseñando experiencias, programando realidades
            </p>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default PrincipalSection;
