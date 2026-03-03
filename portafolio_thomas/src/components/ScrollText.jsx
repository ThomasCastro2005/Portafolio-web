import React from "react";

const items = ["DESARROLLADOR", "★", "FULL STACK", "★", "REACT", "★", "DISEÑO WEB", "★"];

const ScrollText = () => {
  return (
    <div className="marquee-container w-full overflow-hidden py-30">
      <div className="flex w-max animate-[marquee_18s_linear_infinite]">
        {/* Primera copia */}
        {items.map((item, i) => (
          <span
            key={`a-${i}`}
            className={`font-clash font-semibold text-[35px] lg:text-5xl whitespace-nowrap px-6 ${
              item === "★" ? "text-purple-500 text-3xl" : "text-amber-50"
            }`}
          >
            {item}
          </span>
        ))}
        {/* Segunda copia — necesaria para el loop sin saltos */}
        {items.map((item, i) => (
          <span
            key={`b-${i}`}
            className={`font-clash font-semibold text-[35px] lg:text-5xl whitespace-nowrap px-6 ${
              item === "★" ? "text-purple-500 text-3xl" : "text-amber-50"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollText;
