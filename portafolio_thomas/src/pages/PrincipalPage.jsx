import Header from "@/components/Header";
import PrincipalSection from "@/components/PrincipalSection";
import PrincipalBg from "@/components/PrincipalBg";
import React from "react";

const PrincipalPage = () => {
  return (
    <>
      <div className="relative min-h-dvh flex flex-col">
        <div className="absolute inset-0 -z-10">
          <PrincipalBg />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <Header />
        <PrincipalSection />
      </div>
      <div className="h-[10000px]">
        
      </div>
    </>
  );
};

export default PrincipalPage;
