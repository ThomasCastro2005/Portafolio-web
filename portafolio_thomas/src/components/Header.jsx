import React from "react";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full flex justify-around items-center lg:py-4 lg:pt-10">
          <span className="font-clash font-semibold text-white">Portafolio</span>
          <nav className="flex justify-center items-center g:px-4 lg:py-4 border-b border-white/0 bg-white/10 backdrop-blur-md rounded-full lg:w-[30%]">  
            <ul className="flex gap-4">
              <li className="font-clash font-normal text-white">Inicio</li>
              <li className="font-clash font-normal text-white">About me</li>
              <li className="font-clash font-normal text-white">Projects</li>
              <li className="font-clash font-normal text-white">Contact me</li>
            </ul>
          </nav>
          <span className="font-clash font-semibold text-white">Perfil</span>
      </header>
    </>
  );
};

export default Header;
