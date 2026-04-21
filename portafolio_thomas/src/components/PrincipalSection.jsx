import React from "react";
import TechnoLoop from "./TechnoLoop";
import { easeIn, motion } from "motion/react";
import { Button } from "./ui/button";

const PrincipalSection = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, transparent 40%, #7c3aed 100%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
      <section className="relative flex flex-col items-center justify-around lg:w-full grow z-10">
        <div className="flex flex-col z-10 w-[75%] pb-[200px] lg:w-[85%] lg:pb-[230px]">
          <div className="flex justify-center">
            <div className="w-[100%] lg:w-[60%]">
              <h1 className="text-white font-bebas font-bold text-[40px] md:text-[55px] lg:text-[90px] text-center lg:text-center flex flex-col justify-center">
                <motion.span
                  whileInView={{
                    x: [100, 0],
                    transition: { duration: 1.25 },
                  }}
                  viewport={{ once: true }}
                  className="select-none tracking-normal bg-gradient-to-b from-purple-400 to-purple-700 bg-clip-text text-transparent"
                >
                  DESARROLLADOR DE SOFTWARE
                </motion.span>
              </h1>
              <motion.p
                whileInView={{
                  y: [100, 0],
                  transition: { duration: 1.25 },
                }}
                viewport={{ once: true }}
                className="select-none text-muted-foreground text-[16px] md:text-[20px] lg:text-1xl font-hind font-normal text-center"
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
              className="flex flex-col gap-3 lg:flex-row lg:gap-10"
            >
              <Button
                variant="principalSection1"
                className={"cursor-pointer"}
                size="lg2"
              >
                <a className="tracking-widest">Hablemos →</a>
              </Button>
              <Button
                variant="principalSection2"
                className={"cursor-pointer"}
                size="lg3"
              >
                <i
                  class="fa-solid fa-code-branch"
                  style={{ color: "rgb(255, 255, 255)" }}
                ></i>
                <a className="tracking-widest">GitHub</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalSection;
