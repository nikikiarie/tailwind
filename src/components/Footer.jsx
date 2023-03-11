import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section id='One' className="py-2 flex justify-between items-center">
      <div>
        <span className="font-titleFont">@2023. Ng'ang'a</span>
      </div>
      <div className="flex gap-3 text-2xl text-greenText">
        <AiOutlineFacebook />
        <AiOutlineGithub />
        <AiOutlineLinkedin />
        <AiOutlineTwitter />
      </div>
    </section>
  );
};

export default Footer;
