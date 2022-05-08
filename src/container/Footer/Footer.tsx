import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { APP_TOKEN } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmited] = useState(true);

  const { name, email, message } = formData;

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const nameKey = e.target.name;
    const nameValue = e.target.value;
    setFormData({
      ...formData,
      [nameKey]: nameValue,
    });
  };

  const handleSubmit = () => {
    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    if (!name || !email || !message) return;

    setLoading(true);

    client
      .create(contact, {
        token: APP_TOKEN,
      })
      .then((data) => {
        setLoading(false);
        setIsFormSubmited(false);
      });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt={images.email} />
          <a href="mailto:tienphuc.dev@gmail.com" className="p-text">
            tienphuc.dev@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt={images.mobile} />
          <a href="tel: +84 38 699 1929" className="p-text">
            0386991929
          </a>
        </div>
      </div>

      {isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              placeholder="Your email"
              name="email"
              value={email}
              type="email"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={handleInputChange}
            />
          </div>

          <button onClick={handleSubmit} className="p-text" type="button">
            {loading ? "Sending ..." : "Send message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
