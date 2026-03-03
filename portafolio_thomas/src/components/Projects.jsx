import React from "react";
import CardProjects from "./CardProjects";
import imgProject1 from "./../assets/imgs/project1.png";
import imgProject2 from "./../assets/imgs/project2.png";
import imgProject3 from "./../assets/imgs/project3.png";

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
  return (
    <>
      <div className="pt-0 lg:pt-10 flex flex-col lg:flex-row justify-between gap-15 lg:gap-6">
        <div className="flex flex-col lg:w-[50%] gap-10 px-10">
          <h1 className="font-clash font-extrabold text-amber-50 text-[40px] lg:text-5xl text-start">
            <span>Mis</span> <span className="text-purple-600">Proyectos</span>
          </h1>
          <div className="font-clash text-amber-50">
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
          </div>
        </div>
        <div className="flex flex-col gap-7 w-full">
          {projects.map((p) => (
            <CardProjects key={p.title} {...p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
