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

interface Part {
  name: string;
  techStacks: {
    name: string;
    icon: React.ReactNode;
  }[];
  responsibilities: string[];
}

interface Experience {
  projectName: string;
  roles: string[];
  description: string;
  parts: Part[];
  startDate: string;
  endDate: string;
  status: string;
  company: string;
  teamSize: number;
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

  const experiences: Experience[] = [
    {
      projectName: "Tadaa Web App",
      roles: ["Full Stack Developer"],
      description: "A web application for managing tasks and projects.",
      parts: [
        {
          name: "Frontend",
          techStacks: [
            { name: "React", icon: <SiReact color="#61DAFB" /> },
            { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
            { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
            { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
            { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
            { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
            { name: "Ant Design", icon: <SiAntdesign color="#0170FE" /> },
            { name: "Redux", icon: <SiReact color="#61DAFB" /> },
          ],
          responsibilities: [
            "Developed responsive UI components using React and TypeScript.",
            "Implemented state management using Redux for efficient data handling.",
            "Integrated GraphQL APIs for data fetching and manipulation.",
            "Ensured code quality through unit testing and code reviews.",
            "Participated in Agile ceremonies and contributed to sprint planning.",
            "Optimized application performance and resolved bugs.",
            "Worked closely with designers to implement UI/UX improvements.",
            "Maintained documentation for code and architecture decisions.",
          ],
        },
        {
          name: "Backend",
          techStacks: [
            { name: ".NET", icon: <SiDotnet color="#512BD4" /> },
            { name: "SQL Server", icon: <SiMysql color="#4479A1" /> },
            { name: "GrapQL", icon: <SiGraphql color="#E10098" /> },
            { name: "Rest API", icon: <SiHtml5 color="#E34F26" /> },
            { name: "Entity Framework", icon: <SiDotnet color="#512BD4" /> },
          ],
          responsibilities: [
            "Developed RESTful APIs using .NET Core and Entity Framework.",
            "Designed and optimized SQL Server database schemas.",
            "Implemented authentication and authorization mechanisms.",
            "Collaborated with frontend team to integrate GraphQL APIs.",
            "Ensured code quality through unit testing and code reviews.",
            "Participated in Agile ceremonies and contributed to sprint planning.",
            "Optimized application performance and resolved bugs.",
            "Maintained documentation for code and architecture decisions.",
            "Embed and maintained CI/CD pipelines for automated deployments.",
            "Implemented logging and monitoring for backend services.",
            "Using GraphQL for efficient data querying and manipulation.",
          ],
        },
      ],
      startDate: "2022-02-14",
      endDate: "2023-06-11",
      status: "Completed",
      company: "Futurify",
      teamSize: 3,
    },
    {
      projectName: "vSmartSell",
      roles: ["Full Stack Developer"],
      description:
        "A web application for selling construction materials and management statistics.",
      parts: [
        {
          name: "Frontend",
          techStacks: [
            { name: "Angular", icon: <SiAngular color="#DD1B16" /> },
            { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
            { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
            { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
            { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
            { name: "Material UI", icon: <SiAntdesign color="#0170FE" /> },
            { name: "Tailwind CSS", icon: <SiBootstrap color="#7952B3" /> },
          ],
          responsibilities: [
            "Developed responsive UI components using Angular and TypeScript.",
            "Implemented state management using NgRx for efficient data handling.",
            "Integrated RESTful APIs for data fetching and manipulation.",
            "Ensured code quality through unit testing and code reviews.",
            "Participated in Agile ceremonies and contributed to sprint planning.",
            "Optimized application performance and resolved bugs.",
            "Worked closely with designers to implement UI/UX improvements.",
            "Maintained documentation for code and architecture decisions.",
          ],
        },
        {
          name: "Backend",
          techStacks: [
            { name: "SQL Server", icon: <SiMysql color="#4479A1" /> },
            { name: ".NET", icon: <SiDotnet color="#512BD4" /> },
            { name: "Entity Framework", icon: <SiDotnet color="#512BD4" /> },
          ],
          responsibilities: [
            "Developed RESTful APIs using .NET Core and Entity Framework.",
            "Designed and optimized SQL Server database schemas.",
            "Implemented authentication and authorization mechanisms.",
            "Collaborated with frontend team to integrate APIs.",
            "Ensured code quality through unit testing and code reviews.",
            "Participated in Agile ceremonies and contributed to sprint planning.",
            "Optimized application performance and resolved bugs.",
            "Maintained documentation for code and architecture decisions.",
          ],
        },
      ],
      startDate: "2023-01-01",
      endDate: "2023-06-11",
      status: "Completed",
      company: "Floating Cube Studios",
      teamSize: 4,
    },
    {
      projectName: "EPOS Destop Application",
      roles: ["WPF Developer"],
      description:
        "A WPF application for managing sales and inventory, payments, and customer management.",
      parts: [
        {
          name: "Destop Application",
          techStacks: [
            { name: "WPF", icon: <SiDotnet color="#512BD4" /> },
            { name: "ReactiveUI", icon: <SiDotnet color="#512BD4" /> },
            { name: ".NET Framework", icon: <SiDotnet color="#512BD4" /> },
            { name: "gRPC", icon: <SiGraphql color="#E10098" /> },
          ],
          responsibilities: [
            "Developed WPF application using C# and .NET Framework.",
            "Implemented MVVM architecture for better separation of concerns.",
            "Integrated gRPC services for real-time data synchronization.",
            "Ensured responsive UI design and smooth user experience.",
            "Participated in Agile ceremonies and contributed to sprint planning.",
            "Optimized application performance and resolved bugs.",
          ],
        },
        {
          name: "EPOS Core Service",
          techStacks: [
            { name: ".NET", icon: <SiDotnet color="#512BD4" /> },
            { name: "gRPC", icon: <SiGraphql color="#E10098" /> },
            { name: "Entity Framework", icon: <SiDotnet color="#512BD4" /> },
            { name: "PostgreSQL", icon: <SiMysql color="#4479A1" /> },
          ],
          responsibilities: [
            "Developed core services using .NET Core and Entity Framework.",
            "Designed and optimized PostgreSQL database schemas.",
            "Implemented gRPC services for real-time data synchronization.",
            "Ensured code quality through unit testing and code reviews.",
            "Participated in Agile ceremonies and contributed to sprint planning.",
            "Optimized application performance and resolved bugs.",
          ],
        },
      ],
      startDate: "2023-06-11",
      endDate: "2025-06-22",
      status: "In Progress",
      company: "Floating Cube Studios",
      teamSize: 5,
    },
  ];

  return (
    <>
      <h2 className="head-text app__testimonial-margin">
        <span>Projects</span> &amp; <span>Roles</span>
      </h2>
      <motion.table className="responsive-table table-wrapper">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Roles</th>
            <th>Project description</th>
            <th>Parts</th>
            <th>Tech Stack</th>
            <th>Responsibilities</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Company</th>
            <th>Team Size</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((item, i) => {
            return item.parts.map((part, partIndex) => (
              <motion.tr
                key={`${i}-${partIndex}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={rowVariant}
                className="table-row responsive-table-row"
              >
                {/* First row, render rowspan cells */}
                {partIndex === 0 && (
                  <>
                    <td
                      rowSpan={item.parts.length}
                      className="responsive-table-project-name"
                    >
                      {item.projectName}
                    </td>
                    <td
                      rowSpan={item.parts.length}
                      className="responsive-table-roles"
                    >
                      <span>{item.roles.join(", ")}</span>
                    </td>
                    <td
                      rowSpan={item.parts.length}
                      className="responsive-table-description"
                    >
                      <span className="td-description">{item.description}</span>
                    </td>
                  </>
                )}

                {/* Part column (one per row) */}
                <td className="responsive-table-name">{part.name}</td>
                <td className="responsive-table-tech-stacks">
                  <div className="tech-stacks">
                    {part.techStacks.map((tech, techIndex) => (
                      <TechTag
                        key={techIndex}
                        name={tech.name}
                        icon={tech.icon}
                      />
                    ))}
                  </div>
                </td>
                <td className="responsive-table-responsibilities">
                  <ul className="responsibilities-list dash-list">
                    {part.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </td>

                {/* Other shared data */}
                {partIndex === 0 && (
                  <>
                    <td
                      rowSpan={item.parts.length}
                      className="responsive-table-start-date"
                    >
                      {new Date(item.startDate).toLocaleDateString()}
                    </td>
                    <td
                      rowSpan={item.parts.length}
                      className="responsive-table-end-date"
                    >
                      {new Date(item.endDate).toLocaleDateString()}
                    </td>
                    <td
                      rowSpan={item.parts.length}
                      className="responsive-table-status"
                    >
                      {item.status}
                    </td>
                    <td
                      rowSpan={item.parts.length}
                      className="responsive-table-company"
                    >
                      {item.company}
                    </td>
                    <td
                      rowSpan={item.parts.length}
                      className="responsive-table-team-size"
                    >
                      {item.teamSize}
                    </td>
                  </>
                )}
              </motion.tr>
            ));
          })}
        </tbody>
      </motion.table>
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
