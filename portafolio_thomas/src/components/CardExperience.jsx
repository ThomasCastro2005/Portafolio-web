import React from "react";
import { motion } from "motion/react"

const CardExperience = ({ dataExperience }) => {
  if (!dataExperience?.length) {
    return <div className="text-amber-50 text-7xl">No hay nada</div>;
  }

  return (
    <>
      {dataExperience.map((data, index) => (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          key={index}
          className="border border-white/8 flex flex-col gap-5 lg:flex-row text-amber-50 lg:h-50 p-10 rounded-2xl font-hind transition-transform duration-600 hover:scale-105 hover:shadow-md hover:shadow-purple-500/50"
        >
          <div className="w-[100%] lg:w-[30%] flex flex-col lg:flex-col justify-between">
            <div className="flex flex-col gap-2 lg:flex-col">
              <h1 className="font-bebas font-extrabold">{data.title}</h1>
              <p className="font-medium">{data.position}</p>
            </div>
            <p className="text-purple-200 text-start lg:text-start text-[13px] lg:text-[15px]">
              {data.date}
            </p>
          </div>
          <div className="w-[100%] lg:w-[70%] flex justify-center items-center">
            <p className="">{data.description}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default CardExperience;
