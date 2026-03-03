import Header from "@/components/Header";
import PrincipalSection from "@/components/PrincipalSection";
import PrincipalBg from "@/components/PrincipalBg";
import React from "react";
import AboutMe from "@/components/AboutMe";
import TimeLineEducation from "@/components/TimeLineEducation";
import ScrollText from "@/components/ScrollText";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CallToAction from "@/components/CallToAction";
import ContactMe from "@/components/ContactMe";

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
        <div className="flex justify-center w-full lg:h-400">
          <div className="w-[80%]">
            <h2 className="font-clash font-bold text-amber-50 text-[40px] text-center">
              Mis Estudios
            </h2>
            <TimeLineEducation />
          </div>
        </div>
        <ScrollText />
        <div className="flex justify-center w-full">
          <div className="w-[80%]">
            <Projects />
          </div>
        </div>
        <div className="flex justify-center pt-10 w-full">
          <div className="w-[80%]">
            <Experience/>
          </div>
        </div>

        <div className="flex justify-center pt-10 w-full">
          <div className="w-[80%]">
            <CallToAction/>
          </div>
        </div>

        <div className="flex justify-center pt-10 w-full">
          <div className="w-[80%]">
            <ContactMe/>
          </div>
        </div>

      </div>
    </>
  );
};

export default PrincipalPage;
