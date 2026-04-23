import React, { useState } from "react";
import { motion } from "motion/react";

const items = [
  {
    level: "Bachiller",
    title: "Bachiller",
    institution: "Colegio Pedagógico Dulce María",
    img: "https://tse4.mm.bing.net/th/id/OIP.9-FqgHuwmCxI6H5U92JQgQHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    level: "Técnico",
    title: "Técnico en programación",
    institution: "Sena",
    img: "https://sena-sofia-plus.co/wp-content/uploads/2018/08/Presentaci%C3%B3n-Pruebas-SENA-IV-Convocatoria-2018-.png",
  },
  {
    level: "Técnologo",
    title: "Técnologo en análisis y desarrollo de software",
    institution: "Sena",
    img: "https://sena-sofia-plus.co/wp-content/uploads/2018/08/Presentaci%C3%B3n-Pruebas-SENA-IV-Convocatoria-2018-.png",
  },
  {
    level: "Profesional",
    title: "Ingeniería de Software",
    institution: "Universidad Politécnico Grancolombiano",
    img: "https://telefonosdecolombia.com/wp-content/uploads/Politecnico-Grancolombiano.png",
  },
];

const TimeLineEducation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  <div className=" w-50 h-50 group cursor-pointer">

    <div className="relative w-full h-full transition-transform duration-700 ">

      <div className="absolute inset-0 [backface-visibility:hidden] bg-linear-to-l from-blue-600 via-pink-600 to-purple-600 flex items-center justify-center">
        PRUEBA 1 ROTATE CARD
      </div>

      <div className="absolute inset-0 [backface-visibility:hidden] bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center">
        hola desde atras
      </div>
    </div>
  </div>;

  return (
    <section className="w-full py-16 pt-[10%] overflow-hidden font-hind">
      <div className="flex flex-row md:flex-row lg:flex-row justify-between items-center">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * .40 }}
              viewport={{ once: true }}
              onClick={() => handleClick(index)}
              className={`relative h-100 rounded-2xl overflow-hidden cursor-pointer group bg-zinc-900 transition-all duration-500
                ${
                  activeIndex === null
                    ? "w-[22%]"
                    : isActive
                      ? "w-[40%]"
                      : "w-[18%]"
                }`}
            >
              <div className="lg:block absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/20 z-10" />

              <div className="absolute top-4 left-4 z-20 flex md:flex-col lg:flex-col leading-none">
                <span className="[writing-mode:vertical-rl] rotate-180 font-bebas text-5xl leading-[1.2] bg-linear-to-t from-white to-white/10 bg-clip-text text-transparent">
                  {item.level}
                </span>
              </div>

              <div className="relative top-85 right-20 z-0">
                <div className="w-92 h-92 rounded-full object-cover object-center ring bg-purple-600/50 ring-purple-900 blur scale-150 shadow-purple-900 group-hover:scale-295 transition-transform duration-500" />
              </div>

              <div
                className={`absolute bottom-4 z-20 px-4 text-center left-0 right-0 transition-all duration-700
                  lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                  ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
              >
                <p className="text-amber-50 text-[18px] font-semibold leading-tight">
                  {item.title}
                </p>
                <p className="text-muted-foreground text-[16px] mt-0.5 leading-tight">
                  {item.institution}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      
    </section>
  );
};

export default TimeLineEducation;
