import React from "react";

const items = ["DESARROLLADOR", "★", "FULL STACK", "★", "REACT", "★", "DISEÑO WEB", "★"];

const ScrollText = () => {
  return (
    <div className="marquee-container w-full overflow-hidden py-30">
      <div className="flex w-max animate-[marquee_48s_linear_infinite]">
        {items.map((item, i) => (
          <span
            key={`a-${i}`}
            className={`font-bebas font-semibold text-[25px] lg:text-3xl whitespace-nowrap px-6 ${
              item === "★" ? "text-purple-500 text-1xl" : "text-amber-50"
            }`}
          >
            {item}
          </span>
        ))}
        {items.map((item, i) => (
          <span
            key={`b-${i}`}
            className={`font-bebas font-semibold text-[25px] lg:text-3xl whitespace-nowrap px-6 ${
              item === "★" ? "text-purple-500 text-1xl" : "text-amber-50"
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
