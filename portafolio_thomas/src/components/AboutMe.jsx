import React from "react";
import TechnoLoop from "./TechnoLoop";
import { motion } from "motion/react";


const AboutMe = () => {
  return (
    <>
      <TechnoLoop
        style={{
          maskImage:
            "linear-gradient(to right, transparent 15%, black 42%, black 58%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 15%, black 42%, black 58%, transparent 85%)",
        }}
        logos={[
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            alt: "React",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            alt: "JavaScript",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            alt: "TypeScript",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            alt: "HTML5",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            alt: "CSS3",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            alt: "Node.js",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            alt: "Git",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            alt: "Tailwind CSS",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
            alt: "Vite",
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            alt: "Python",
          },
        ]}
        speed={80}
        gap={48}
        logoHeight={40}
        pauseOnHover
      />

      <section className="flex justify-center w-full h-[7%] py-40">
        <div className="w-[80%] flex">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-[50%] flex flex-col lg:flex-col justify-around gap-5">
              <motion.h1
              whileInView={{
              x: [-500, 0],
              opacity: [0, 1],
              transition: { duration: 1 },
            }}
               className="font-clash font-bold text-amber-50 text-[35px] lg:text-[50px] text-center lg:text-start">
                ¿Quien es{" "}
                <span className="font-clash text-purple-600">
                  Thomas Castro ?
                </span>
              </motion.h1>
              <div className="flex lg:flex-row w-[35%] lg:w-[90%]">
                <img
                  className="lg:w-[35%]"
                  src="https://framerusercontent.com/images/mHIHt1IfNwNdWZEzuLWbbAsYAQ.png?scale-down-to=512&width=1024&height=1024"
                ></img>
                <img
                  className="lg:w-[35%]"
                  src="https://framerusercontent.com/images/mHIHt1IfNwNdWZEzuLWbbAsYAQ.png?scale-down-to=512&width=1024&height=1024"
                ></img>
                <img
                  className="lg:w-[35%]"
                  src="https://framerusercontent.com/images/mHIHt1IfNwNdWZEzuLWbbAsYAQ.png?scale-down-to=512&width=1024&height=1024"
                ></img>
              </div>
            </div>
            <motion.div 
            whileInView={{
              x: [500, 0],
              opacity: [0, 1],
              transition: { duration: 1 },
            }}
            className="font-clash lg:w-[50%] text-amber-50">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum.
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
