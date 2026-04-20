import React from "react";
import { useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";

const CardProjects = ({
  img,
  title = "Project",
  tags = [],
  link = "#",
  description,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.6"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);
  return (
    <>
        <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:gap-30">
          <motion.div
          whileInView={{
            y:[50,0],
            opacity:[0,1],
            transition: {duration:1}
          }}
          viewport={{once:true}}
            className="font-hind text-amber-50 w-[90%] flex lg:items-center lg:w-[50%] "
          >
            {description}
          </motion.div>
          <motion.div
            ref={ref}
            style={{ x }}
            className="group relative w-full rounded-2xl bg-[#0d0d14] border border-white/8 overflow-hidden hover:shadow-xl hover:shadow-purple-500/50 transition duration-400"
          >
            {/* Browser top bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-[#111118]">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <div className="ml-3 flex-1 bg-white/5 rounded-full h-5 px-3 flex items-center">
                <span className="text-[10px] text-white/20 font-synonym truncate">
                  {link}
                </span>
              </div>
            </div>

            {/* Project screenshot */}
            <div className="relative overflow-hidden h-80">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.1]"
              />
              <div className="absolute bottom-0 inset-x-0 h-15 bg-linear-to-t from-[#0d0d14] to-transparent" />
            </div>

            {/* Info row */}
            <div className="px-5 py-4 flex items-center justify-between bg-white/1 backdrop-blur-md border-t border-white/8">
              <div>
                <h3 className="font-bebas text-amber-50 font-semibold text-lg">
                  {title}
                </h3>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-white/35 border border-white/10 rounded-full px-2.5 py-0.5 font-synonym"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bebas text-xs font-semibold px-4 py-2 rounded-full border border-white/15 text-white/60 hover:bg-white hover:text-black transition-all duration-300 shrink-0"
              >
                Visit →
              </a>
            </div>
          </motion.div>
        </div>
    </>
  );
};

export default CardProjects;
