import React from "react";
import TechnoLoop from "./TechnoLoop";

const PrincipalSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-around lg:w-full overflow-hidden grow">
        {/* Desvanecido inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
        <div className="relative z-10 lg:w-[85%] lg:pb-[150px]">
          <h1 className="text-white font-clash font-extrabold lg:text-[100px] lg:text-center ">
            Desarrollador de Software Junior
          </h1>
          <div className="flex justify-center w-full lg:gap-10">
            <p className="text-white text-2xl font-clash font-normal">
              Diseñando experiencias, programando realidades
            </p>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default PrincipalSection;
