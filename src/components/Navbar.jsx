import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { navItems } from "../constants";
import { Link } from "react-scroll";

const Navbar = ({ toogle, setToogle }) => {
  return (
    <div className="w-full py-4 flex justify-between items-center sticky top-0 bg-white z-[4]">
      <div className="absolute top-20 p-1 w-1 h-1 bg-greenText rounded-full" />
      <div className="absolute top-24 left-32 p-2 w-[2px] h-[2px] bg-greenText rounded-full" />

      <div>
        <h2 className="text-greenText font-titleFont text-4xl sm:text-2xl font-bold">
          Nick
        </h2>
      </div>
      <div className="hidden sm:flex">
        <ul className="flex">
          {navItems.map((item, index) => (
            <li
              className={`${
                index === navItems.length - 1 ? "mr-0" : "mr-10"
              } flex p-2 font-titleFont cursor-pointer hover:animate-nick hover:text-greenText`}
              key={item.id}
            >
              {item.item}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="flex sm:hidden text-4xl "
        onClick={() => setToogle((o) => !o)}
      >
        <AiOutlineMenu />
      </div>
      <div
        className={`${
          toogle ? "flex" : "hidden"
        } w-[350px] flex flex-col absolute top-10 right-10 bg-white`}
      >
        <span className="py-4 text-2xl font-titleFont border-gray-200 border-b text-center hover:bg-greenText hover:text-white">
        <Link
                activeClass="active"
                to="One"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >   About</Link>
        </span>
        <span className="py-4 text-2xl font-titleFont border-gray-200 border-b text-center  hover:bg-greenText  hover:text-white">
        <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >    Skills</Link>
        </span>

        <span className="py-4 text-2xl  font-titleFont border-gray-200 border-b text-center  hover:bg-greenText hover:text-white">
        <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >   Contact</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
