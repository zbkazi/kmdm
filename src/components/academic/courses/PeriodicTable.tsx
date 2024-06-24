import React from "react";
import { elements } from "./data/elements";
import { categories } from "./data/categories";

const PeriodicTable: React.FC = () => {
  return (
    <section className="flex items-center justify-center relative overflow-hidden">
      <div className="relative items-center w-full px-5 py-12 mx-auto 2xl:max-w-7xl lg:py-12 text-xs">
        <div className="grid grid-cols-7 gap-2">
          {categories.map((category, idx) => (
            <p key={idx} className="inline-flex items-center gap-2">
              <span
                className={`w-4 h-4 ${category.colorClass} border p-2 rounded-full flex`}
              ></span>
              {category.name}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-1 mt-12">
          {elements.map((element, idx) => (
            <div
              key={idx}
              className={`${element.bgColor} ${
                element.textColor
              } w-full items-center h-full flex flex-col p-4 rounded-md ${
                element.hoverBg
              } ${element.hoverText} duration-200 ${
                element.colStart ? `col-start-${element.colStart}` : ""
              }`}
            >
              <p>{element.number}</p>
              <p className="block text-center text-2xl font-medium font-mono">
                {element.symbol}
              </p>
              <p className="block text-center text-[0.55rem]">{element.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeriodicTable;
