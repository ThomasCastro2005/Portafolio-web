import React from "react";
import CardExperience from "./CardExperience";

const Experience = () => {
  
  const dataExperience = [
    {
    title: "WINDMAR HOME",
    position: "Desarrollador Junior",
    date: "Actual",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.",
  },{
    title: "RAMA JUDICIAL",
    position: "Contratista",
    date: "30/12/2023 - 31/06/2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.",
  },{
    title: "BANCO POPULAR",
    position: "Aprendiz Desarrollador Junior",
    date: "30/12/2023 - 31/06/2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.",
  }
  ];

  return (
    <>
      <h1 className="font-clash font-bold text-amber-50 text-center text-[40px] lg:text-5xl py-10">
        Experiencia
      </h1>
      <div className="relative rounded-2xl w-full p-10 overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/8 rounded-2xl z-0" />
        <div className="relative z-10 flex flex-col gap-10">
          <CardExperience dataExperience={dataExperience}/>
        </div>
      </div>
    </>
  );
};

export default Experience;
