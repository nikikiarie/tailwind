import React from "react";
import person from "../assets/person.svg";
import Button from "./Button";
import Oval from "./Oval";
import { TbArrowZigZag } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="grid sm:grid-cols-2 mt-14 mb-16 sm:mb-[130px]">
      <div className="flex relative flex-col justify-center gap-5">

        <Oval text="Welcome" />
        <h2 className=" text-[48px] sm:text-[56px] leading-[52px] font-semibold">
          I have{" "}
          <span className="text-greenText">
            Creative
            <br /> Design
          </span>{" "}
          Experience
        </h2>
        <p className="font-titleFont text-[20px] sm:text-base">
          I’m Tanvir, a creative Product Designer. I’ve been helping businesses
          to solve their problems with my design for 2 years.
        </p>
        <div className="flex gap-x-5 items-center mt-2 sm:mt-0">
          <Button text="Contact Me" />
          <button className="text-xl sm:text-base font-medium flex gap-x-1 font-titleFont cursor-pointer">
            <span>View Portfolio</span>
            <TbArrowZigZag className="text-greenText" />
          </button>
    <div className='absolute bottom-0 p-1 w-1 h-1 bg-yellow-400 rounded-full'/>

        </div>
      </div>
      <div className="flex items-center sm:items-end justify-center sm:justify-end mt-10 sm:mt-0 ">
        <div className="w-[300px] sm:w-[350px] relative ">
          <div className="bg-greenText  h-[300px]  w-full absolute bottom-0" />
          <div className="hidden md:flex border-[10px] -left-[30px] border-black h-[300px]  w-full absolute -bottom-[30px] " />

          <img
            src={person}
            alt=""
            className="z-[2] relative w-full h-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
