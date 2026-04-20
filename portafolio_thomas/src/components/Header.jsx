import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "motion/react";

const navLinks = ["Inicio", "About me", "Projects", "Contact me"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full flex justify-between p-10 lg:grid md:grid-cols-3 lg:grid-cols-3 md:items-center md:place-items-center lg:items-center lg:place-items-center lg:py-4 lg:pt-10 font-bebas text-amber-50">
        <span className="font-bebas font-semibold text-[20px]">THOMAS CASTRO</span>

        {/* Nav pill — md/lg únicamente */}
        <nav className="hidden md:flex sticky top-10 justify-center w-full md:w-[50%] lg:w-full items-center px-4 md:py-3 lg:py-3 border-b border-white/0 bg-white/10 backdrop-blur-md rounded-full">
          <ul className="flex justify-around w-100 gap-4">
            {navLinks.map((link) => (
              <li key={link} className="cursor-pointer font-hind font-light">{link}</li>
            ))}
          </ul>
        </nav>

        {/* Language — md/lg únicamente */}
        <select className="font-semibold hidden md:block">
          <option>Language</option>
          <option>ES</option>
          <option>EN</option>
        </select>

        {/* Hamburger — solo mobile */}
        <Motion.button
          className="md:hidden justify-self-end pr-4 text-amber-50"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.85 }}
        >
          <Menu size={24} />
        </Motion.button>
      </header>

      {/* Menú fullscreen mobile */}
      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center font-bebas text-amber-50"
          >
            {/* Botón cerrar */}
            <Motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="absolute top-6 right-6 text-amber-50/70 hover:text-amber-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </Motion.button>

            {/* Links con stagger */}
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <Motion.li
                  key={link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 120 }}
                  className="text-4xl font-semibold cursor-pointer hover:text-purple-500 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </Motion.li>
              ))}
            </ul>

            {/* Language */}
            <Motion.select
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              className="mt-12 font-semibold bg-transparent text-amber-50 border border-amber-50/30 rounded-full px-6 py-2 cursor-pointer"
            >
              <option className="bg-black">Language</option>
              <option className="bg-black">ES</option>
              <option className="bg-black">EN</option>
            </Motion.select>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
