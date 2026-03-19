import React from "react";
import CardProjects from "./CardProjects";
import imgProject1 from "./../assets/imgs/project1.png";
import imgProject2 from "./../assets/imgs/project2.png";
import imgProject3 from "./../assets/imgs/project3.png";
import {motion, useScroll, useTransform} from 'motion/react'
import { useRef } from "react";

const projects = [
  {
    img: imgProject1,
    title: "Project One",
    tags: ["React", "Tailwind"],
    link: "#",
  },
  {
    img: imgProject2,
    title: "Project Two",
    tags: ["Next.js", "TypeScript"],
    link: "#",
  },
  { img: imgProject3, title: "Project Three", tags: ["Vue", "CSS"], link: "#" },
];

const Projects = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll ({
    target: targetRef
  });
  const x = useTransform(scrollYProgress, [0,1], ["-100%", "85%"])
  
  return (
    <>
      <div className="pt-0 lg:pt-10 flex flex-col lg:flex-row justify-between gap-15 lg:gap-6">
        <div className="flex flex-col lg:w-[50%] gap-10 px-10">
          <motion.h1
          style={{x}}
          className="font-clash font-extrabold text-amber-50 text-[40px] lg:text-5xl text-start">
            <span>Mis</span> <span className="text-purple-600">Proyectos</span>
          </motion.h1>
          <motion.div style={{x}} className="font-clash text-amber-50">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </motion.div>
        </div>
        <motion.div style={{y}} className="flex flex-col gap-7 w-full">
          {projects.map((p) => (
            <CardProjects key={p.title} {...p} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
