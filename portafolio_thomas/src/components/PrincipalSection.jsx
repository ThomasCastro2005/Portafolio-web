import React from "react";
import TechnoLoop from "./TechnoLoop";
import { easeIn, motion } from "motion/react";
import { Button } from "./ui/button";

const PrincipalSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-around lg:w-full overflow-hidden grow">
        {/* Desvanecido inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
        <div className="flex flex-col z-10 w-[75%] lg:w-[85%] lg:pb-[150px] gap-5">
          <h1 className="text-white font-bebas font-bold text-[30px] md:text-[55px] lg:text-[90px] text-center lg:text-center flex flex-col justify-center">
            {/* <motion.span
              whileInView={{
                x: [-100, 0],
                opacity: [0, 1],
                transition: { duration: 1.25 },
              }}
              exit={easeIn}
              viewport={{ once: true }}
              className="tracking-normal bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
            >
              THOMAS CASTRO
            </motion.span> */}

            <motion.span
              whileInView={{
                x: [100, 0],
                transition: { duration: 1.25 },
              }}
              viewport={{ once: true }}
              className="tracking-normal bg-gradient-to-b from-violet-400 to-violet-700 bg-clip-text text-transparent"
            >
              DESARROLLADOR DE SOFTWARE
            </motion.span>
          </h1>
          <div className="flex justify-center">
            <div className="w-[60%]">
              <motion.p
                whileInView={{
                  y: [100, 0],
                  transition: { duration: 1.25 },
                }}
                viewport={{ once: true }}
                className="text-muted-foreground text-[15px] md:text-[20px] lg:text-1xl font-hind font-normal text-center"
              >
                Diseño y desarrollo{" "}
                <span className="text-amber-50">
                  experiencias digitales end-to-end
                </span>
                . Con intención, con calma, con código limpio.
              </motion.p>
            </div>
          </div>
          <div className="w-full flex justify-center pt-10">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.45 }}
              viewport={{ once: true }}
              className="flex gap-10"
            >
              <Button variant="default" className={"cursor-pointer"} size="lg2">
                <a className="tracking-widest">Hablemos →</a>
              </Button>
              <Button variant="default" className={"cursor-pointer"} size="lg2">
                <a className="tracking-widest">GitHub</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrincipalSection;
