import React from "react";
import Oval from "./Oval";

import { SiMaterialdesignicons } from "react-icons/si";
import { FaDev, FaConnectdevelop } from "react-icons/fa";
import Button from "./Button";

const Hire = () => {
  return (
    <section id='skills' className="grid sm:grid-cols-2 mb-24 sm:mb-28 px-1 sm:px-0">
      <div className="flex flex-col justify-center gap-6 sm:gap-4 pr-1">
        <Oval text="My Skills" />
        <h3 className="text-3xl font-medium font-titleFont">
          Why Hire Me For Your Next <br />{" "}
          <span className="text-greenText">Project?</span>
        </h3>
        <p className="font-titleFont leading-8 sm:leading-5 text-xl sm:text-base ">I’m specialist in UI/UX Designe. My passion is designing & solving problems through user experience and research.</p>
        <Button text='Hire Me'/>
      </div>
      <div className="grid sm:grid-cols-2 mt-14 sm:mt-0">
        <div className="flex flex-col gap-y-12 sm:gap-y-24 ">
          <div className="w-full flex items-center justify-center sm:items-start flex-col gap-1">
            <span className="text-greenText text-[60px] sm:text-3xl ">
              <FaConnectdevelop />
            </span>
            <h2 className="font-semibold text-2xl sm:text-lg font-titleFont">
              Virtual Design
            </h2>
            <p className=" text-xl sm:text-base text-center sm:text-left">
              Create user interface design with unique & modern ideas
            </p>
          </div>
          <div className="w-full flex items-center justify-center sm:items-start flex-col gap-1">
            <span className="text-greenText text-[60px] sm:text-3xl ">
              <FaDev />
            </span>
            <h2 className="font-semibold text-2xl sm:text-lg font-titleFont">
              UX Research
            </h2>
            <p className="text-xl sm:text-base text-center sm:text-left">Create digital user products with updated ideas</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[55px] sm:mt-0">
          <div className="w-full flex items-center justify-center sm:items-start flex-col gap-1">
            <span className="text-greenText text-[60px] sm:text-3xl ">
              <SiMaterialdesignicons />
            </span>
            <h2 className="font-semibold text-2xl sm:text-lg font-titleFont">
            Design Prototype
            </h2>
            <p className="text-xl sm:text-base text-center sm:text-left">
            Create advance design prototype with Figma apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
