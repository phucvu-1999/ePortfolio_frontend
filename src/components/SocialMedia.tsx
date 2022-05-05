import React from "react";
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social app__social-icon">
      <div>
        <FaGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
