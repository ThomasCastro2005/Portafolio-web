import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const ContactMe = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-10">
        <div className="flex flex-col w-[70%]">
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.25 }}
            viewport={{ once: true }}
            className="font-bebas font-bold text-5xl lg:text-6xl text-amber-50 tracking-wide"
          >
            ¿Te gustaria que hiciera{" "}
          </motion.span>
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.25 }}
            viewport={{ once: true }}
            className="font-bebas font-bold text-3xl lg:text-5xl text-purple-600 tracking-wide"
          >
            parte de tu equipo?
          </motion.span>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.45 }}
          viewport={{ once: true }}
        >
          <Button variant="glass" className={"cursor-pointer"} size="lg">
            <a className="tracking-wide">Hablemos →</a>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default ContactMe;
