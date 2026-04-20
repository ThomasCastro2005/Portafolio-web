import Header from "@/components/Header";
import PrincipalSection from "@/components/PrincipalSection";
import PrincipalBg from "@/components/PrincipalBg";
import React from "react";
import AboutMe from "@/components/AboutMe";
import TimeLineEducation from "@/components/TimeLineEducation";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ContactMe from "@/components/ContactMe";
import { motion } from "motion/react";

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
        <div className="flex flex-col">
          <AboutMe />
        </div>
        <div className="flex justify-center w-full lg:h-400">
          <div className="w-[80%]">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="font-bebas font-bold text-amber-50 text-[40px] text-center"
            >
              Mis Estudios
            </motion.h2>
            <TimeLineEducation />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-[80%]">
            <Projects />
          </div>
        </div>
        <div className="flex justify-center w-full overflow-hidden">
          <div className="w-[80%]">
            <Experience />
          </div>
        </div>

        <div className="py-35 w-full flex justify-center">
            <div className="w-[80%]">
              <ContactMe />
            </div>
        </div>
      </div>
    </>
  );
};

export default PrincipalPage;
