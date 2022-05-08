import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { APP_TOKEN } from "../../constants";
import { validateForm, validateEmail } from "../../helpers";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    message: { value: "", error: "" },
  });
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmited] = useState(true);

  const { name, email, message } = formData;

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const error = validateForm({ name: inputName, value: inputValue });
    setFormData({
      ...formData,
      [inputName]: { value: inputValue, error },
    });
  };

  const handleSubmit = () => {
    if (!validateEmail(email.value))
      setFormData({
        ...formData,
        email: {
          value: email.value,
          error: "Invalid email address !",
        },
      });

    const contact = {
      _type: "contact",
      name: name.value,
      email: email.value,
      message: message.value,
    };

    if (!name.value || !email.value || !message.value) return;

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
          <p className="p-text p-danger">{formData?.name?.error}</p>
          <div className="app__flex">
            <input
              className="p-text"
              placeholder="Your name"
              name="name"
              value={name?.value}
              onChange={handleInputChange}
            />
          </div>

          <p className="p-text p-danger">{formData?.email?.error}</p>
          <div className="app__flex">
            <input
              className="p-text"
              placeholder="Your email"
              name="email"
              value={email?.value}
              type="email"
              onChange={handleInputChange}
            />
          </div>

          <p className="p-text p-danger">{formData?.message?.error}</p>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              name="message"
              value={message?.value}
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
