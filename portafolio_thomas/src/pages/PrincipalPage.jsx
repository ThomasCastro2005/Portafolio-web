import Header from "@/components/Header";
import PrincipalSection from "@/components/PrincipalSection";
import PrincipalBg from "@/components/PrincipalBg";
import React from "react";
import AboutMe from "@/components/AboutMe";
import TimeLineEducation from "@/components/TimeLineEducation";

const PrincipalPage = () => {
  return (
    <>
      <div className="relative h-[90vh] flex flex-col">
        <div className="absolute inset-0 -z-10">
          <PrincipalBg />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <Header />
        <PrincipalSection />
      </div>
      <div className="">
        <AboutMe />
        <div className="flex justify-center w-full">
          <div className="w-[80%]">
            <h2 className="font-clash font-bold text-amber-50 text-[50px] text-center">
              Mis Estudios
            </h2>
            <TimeLineEducation />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipalPage;
