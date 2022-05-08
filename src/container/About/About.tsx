import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { Abouts } from "../../models";

const About = () => {
  const [testAbouts, setTestAbout] = useState<Abouts[]>([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]`;

    client.fetch(query).then((data) => setTestAbout(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Hard Work</span> means <span>Better Performance</span>
      </h2>

      <div className="app__profiles">
        {testAbouts?.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={String(urlFor(about.imgUrl))} alt="imgUrl" />
            <div style={{ width: "100%" }}>
              <h2
                className="bold-text"
                style={{ marginTop: 20, fontSize: 16, textAlign: "center" }}
              >
                {about.title}
              </h2>
            </div>
            <div style={{ width: "100%" }}>
              <p
                className="p-text"
                style={{ marginTop: 10, fontSize: 16, textAlign: "center" }}
              >
                {about.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
