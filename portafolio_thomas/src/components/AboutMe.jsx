import React from "react";
import TechnoLoop from "./TechnoLoop";
import { useRef } from "react";
import { motion } from "motion/react";

const AboutMe = () => {
  const targetRef = useRef(null);
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
        speed={40}
        gap={48}
        logoHeight={40}
        pauseOnHover
      />

      <section
        ref={targetRef}
        className="p-10 flex justify-center w-full h-[7%] pb-20 pt-60 lg:pt-60 lg:pb-30 overflow-hidden"
      >
        <div className="w-[80%] flex">
          <div className="w-full flex flex-col lg:flex-row items-center gap-10 md:gap-20 lg:gap-20">

            <div className=" flex flex-col lg:flex-col justify-around items-center gap-5">
              <div className="flex justify-center lg:flex-row w-[70%] lg:w-[90%]">
                <img
                  className=" lg:w-[85%] rounded-full"
                  src="https://media.licdn.com/dms/image/v2/D4E03AQER0gfeM6BEhQ/profile-displayphoto-crop_800_800/B4EZlJPtYdIUAI-/0/1757870480528?e=1778112000&v=beta&t=CiprLeMnp_3b6SRKXxdGAx9FaZhSutbdlrmWUexHaDQ"
                ></img>
              </div>
            </div>

            <div className="flex gap-10 flex-col lg:flex-col items-center w-full">
              <motion.h1
                initial={{ y: -50, opacity:0 }}
                whileInView={{ y: 0, opacity:1 }}
                transition={{
                  duration: 1.3,
                  type: "tween",
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="font-bebas font-bold text-amber-50 text-[35px] lg:text-[50px] text-center lg:text-center"
              >
                ¿ Quien es{" "}
                <span className="font-bebas text-purple-600">
                  Thomas Castro ?
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity:0 }}
                whileInView={{ y: 0, opacity:1 }}
                transition={{
                  duration: 1.3,
                  type: "tween",
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="h-full flex justify-center items-center font-hind lg:w-[80%] text-amber-50"
              >
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen. No sólo sobrevivió 500 años.
              </motion.p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
