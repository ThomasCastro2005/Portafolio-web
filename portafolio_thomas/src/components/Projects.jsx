import React from "react";
import CardProjects from "./CardProjects";
import imgProject1 from "./../assets/imgs/project1.png";
import imgProject2 from "./../assets/imgs/project2.png";
import imgProject3 from "./../assets/imgs/project3.png";
import { useRef } from "react";
import { motion } from "motion/react";

const projects = [
  {
    img: imgProject1,
    title: "Project One",
    tags: ["React", "Tailwind"],
    link: "#",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textosa",
  },
  {
    img: imgProject2,
    title: "Project Two",
    tags: ["Next.js", "TypeScript"],
    link: "#",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textosa",
  },
  {
    img: imgProject3,
    title: "Project Three",
    tags: ["Vue", "CSS"],
    link: "#",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textosa",
  },
];

const Projects = () => {
  const targetRef = useRef(null);

  return (
    <>
      <div
        ref={targetRef}
        className="pt-0 lg:pt-10 flex flex-col lg:flex-col justify-between gap-15 lg:gap-20"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="font-bebas font-extrabold text-amber-50 text-center text-[40px] lg:text-5xl lg:text-start"
        >
          <span>Mis</span> <span className="text-purple-600">Proyectos</span>
        </motion.h1>
        <div className="flex flex-col gap-7 w-full">
          {projects.map((p) => (
            <CardProjects key={p.title} {...p} description={p.description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
