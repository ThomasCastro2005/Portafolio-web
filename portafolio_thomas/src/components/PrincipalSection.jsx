import React from "react";
import TechnoLoop from "./TechnoLoop";

const PrincipalSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center lg:w-full overflow-hidden grow">
        {/* Desvanecido inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
        <div className="relative z-10 lg:w-[70%]">
          <h1 className="text-white font-clash font-extrabold lg:text-[80px] lg:text-center lg:pb-[300px]">Desarrollador de Software Junior</h1>
        </div>
        <div className="flex justify-center w-full">
          <button className="border-white/0 bg-white/10 backdrop-blur-md lg:py-4 lg:px-10">
            about me
          </button>
          <button className="border-white/0 bg-white/10 backdrop-blur-md lg:py-4 lg:px-10">
            about me
          </button>
        </div>
        <TechnoLoop
        logos={[
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JavaScript" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "HTML5" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", alt: "CSS3" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "Git" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", alt: "Vite" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python" },
        ]}
        speed={80}
        gap={48}
        logoHeight={40}
        pauseOnHover
      />
      </section>
      
    </>
  );
};

export default PrincipalSection;
