import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {
  SiReact,
  SiTypescript,
  SiGraphql,
  SiDotnet,
  SiMysql,
  SiBootstrap,
  SiCplusplus,
  SiAngular,
  SiAntdesign,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor } from "../../client";
import GetServiceService from "../../services/GetService.service";
import { TestimonialModel } from "../../models/testimonials";
import { BrandModel } from "../../models/brands";
import "./Testimonial.scss";
import { FaGitkraken } from "react-icons/fa";

interface TableRow {
  name: string;
  email: string;
  tech: {
    name: string;
    icon: React.ReactNode;
  }[];
  status: string;
}

interface TechTagProps {
  name: string;
  icon: React.ReactNode;
}

const rowVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

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

  const tableData: TableRow[] = [
    {
      name: "Vu Phuc",
      email: "vu@example.com",
      tech: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
      ],
      status: "Active",
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      tech: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
      ],
      status: "Pending",
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      tech: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
      ],
      status: "Pending",
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      tech: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
        { name: ".NET", icon: <SiDotnet color="#1572B6" /> },
      ],
      status: "Pending",
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      tech: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
        { name: "GitHub", icon: <SiGithub color="#181717" /> },
        { name: "GitLab", icon: <SiGitlab color="#FC6D26" /> },
        { name: "GitKraken", icon: <FaGitkraken color="#179287" /> },
      ],
      status: "Pending",
    },
  ];

  return (
    <>
      <h2 className="head-text app__testimonial-margin">
        <span>Projects</span> &amp; <span>Roles</span>
      </h2>
      {/* {testimonials.length && (
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
      </div> */}
      <div className="table-wrapper">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <motion.tr
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={rowVariant}
                className="table-row"
              >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td style={{ display: "flex", flexWrap: "wrap" }}>
                  {item.tech.map((item, index) => (
                    <TechTag name={item.name} icon={item.icon} />
                  ))}
                </td>
                <td>{item.status}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const TechTag: React.FC<TechTagProps> = ({ name, icon }) => {
  return (
    <motion.div
      className="tech-tag"
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span key={name} className="tech-icon">
        {icon}
      </span>
      <span className="tech-label">{name}</span>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__cogsbg"
);
