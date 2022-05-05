import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social app__social-icon">
      <a href="https://github.com/phucvu-1999" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/tienphuc-dev/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.instagram.com/hi_im_tien.phuc/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
