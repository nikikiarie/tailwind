import React from "react";
import Oval from "./Oval";
import { BiPhoneCall } from "react-icons/bi";
import Button from "./Button";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section id='contact' className=" gap-6 flex flex-col items-center">
      <Oval text="Contact" />
      <h2 className="text-4xl font-medium sm:text-3xl font-titleFont px-1 sm:px-0 text-center ">
        Let’s Discuss Your <span className="text-greenText">Project</span>
      </h2>
      <div className="max-w-[500px]">
        <p className=" text-center text-xl sm:text-base font-titleFont">
          Let’s make something new, different and more meaningful or make thing
          more visual or conceptual
        </p>
      </div>
      <div className="grid  sm:grid-cols-3 w-full my-10 ">
        <div className=" col-span-1 flex flex-col justify-evenly gap-5 sm:gap-0">
          <div className="flex">
            <span className="bg-greenText p-5 sm:p-3 text-white flex rounded-lg items-center justify-center mr-2 text-2xl sm:text-base">
              <BiPhoneCall />
            </span>
            <div className="flex flex-col">
              <h2 className="font-titleFont text-gray-400 text-xl sm:text-lg">Call Me</h2>
              <h3 className="font-titleFont text-lg sm:text-base">+25404727278</h3>
            </div>
          </div>
          <div className="flex">
            <span className="bg-greenText p-5 sm:p-3 text-white flex rounded-lg items-center justify-center mr-2 text-2xl sm:text-base">
              <AiOutlineMail />
            </span>
            <div className="flex flex-col">
              <h2 className="font-titleFont text-gray-400  text-xl sm:text-lg">Email me</h2>
              <h3 className="font-titleFont text-lg sm:text-base">nix.kiarie@gmail.com</h3>
            </div>
          </div>
        </div>
        <div className=" col-span-2 flex flex-col gap-9">
          <div className="grid sm:grid-cols-2 mt-[50px] sm:mt-0">
            <div className="flex flex-col gap-5 px-1">
              <input
                type="text"
                placeholder="Full name"
                className="text-xl sm:text-base border-b border-greenText outline-none font-titleFont"
              />
              <input
                type="text"
                placeholder="Your email"
                className="text-xl sm:text-base border-b border-greenText outline-none font-titleFont "
              />
            </div>
            <div className="flex flex-col  gap-5 px-1 mt-5 sm:mt-0">
              <input
                type="text"
                placeholder="Phone Number"
                className="text-xl sm:text-base border-b border-greenText outline-none font-titleFont"
              />
              <input
                type="text"
                placeholder="Address"
                className="text-xl sm:text-base border-b border-greenText outline-none font-titleFont "
              />
            </div>
          </div>
          <div className="flex flex-col px-1">
            <textarea
              name=""
              id=""
              className="w-full border m-0 border-greenText text-xl sm:text-base pl-1  outline-none font-titleFont"
              placeholder="Message"
            ></textarea>
            <div className="mt-6 flex justify-end" >
              <Button text="Submit" />
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
