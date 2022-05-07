import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor } from "../../client";
import SkillsService from "../../services/skills.service";
import { SkillsModel } from "../../models/skills";
import { ExperiencesModel } from "../../models/experiences";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState<SkillsModel[]>([]);
  const [experiences, setExperiences] = useState<ExperiencesModel[]>([]);

  useEffect(() => {
    const skillsQuery = `*[_type == "skills"]`;
    const experiencesQuery = `*[_type == "experiences"]`;

    SkillsService.getSkills(skillsQuery).then((data) => setSkills(data));
    SkillsService.getExpericens(experiencesQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills and Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill?.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill?.bgColor }}
              >
                <img src={String(urlFor(skill?.icon))} alt={skill?.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#000"
                      clickable
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
          {/* {experiences[0]?.works?.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
                key={work.name}
              >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
              </motion.div>

              <ReactTooltip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {work.description}
              </ReactTooltip>
            </>
          ))} */}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
