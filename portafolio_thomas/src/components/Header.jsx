import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <h1>{t("header.hello-world")}</h1>
      <p>{t("header.description")}</p>

      <br />
      <br />
      <div className="grid grid-cols-2 gap-10">
        <button
          className="border-2 rounded-[5px] cursor-pointer"
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </button>
        <button
          className="border-2 rounded-[5px] cursor-pointer"
          onClick={() => i18n.changeLanguage("es")}
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default Header;
