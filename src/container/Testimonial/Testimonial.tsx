import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor } from "../../client";
import GetServiceService from "../../services/GetService.service";
import { TestimonialModel } from "../../models/testimonials";
import { BrandModel } from "../../models/brands";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [testimonials, setTestTimonials] = useState<TestimonialModel[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const brandsQueryStr = `*[_type == "brands"]`;
    const testimonialsStr = `*[_type == "testimonials"]`;

    GetServiceService.getBrands(brandsQueryStr).then((data) => {
      setBrands(data);
    });
    GetServiceService.getTesttimonials(testimonialsStr).then((data) => {
      setTestTimonials(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  const handleClick = (current: number) => {
    setCurrentIndex(current);
  };

  console.log("current index: ", currentIndex);

  return (
    <>
      <h2 className="head-text app__testimonial-margin">
        My <span>Co-workers</span> feedbacks
      </h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={String(urlFor(test?.imageurl.asset._ref))} alt="img" />

            <div className="app__testimonial-content">
              <p className="p-text">{test?.feedback}</p>
              <div>
                <h4 className="bold-text">{test?.name}</h4>
                <h5 className="p-text">{test?.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <h2 className="head-text " style={{ marginTop: "4rem" }}>
        <span>Companies</span> that i have worked for
      </h2>
      <div className="app__testimonial-brands app__flex">
        {brands?.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand.imgUrl.asset._ref}
          >
            <img
              src={String(urlFor(brand.imgUrl.asset._ref))}
              alt={brand.name}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__cogsbg"
);
