import React from "react";
import Tilt from "react-tilt";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const TechCard = ({ index, tech }) => {
  return (
    <Tilt className="xs:w-[150px] w-full">
      <div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card gap-25"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 h-[150px] flex justify-evenly items-center flex-col"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[12px] font-bold text-center">
            {tech.name}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="sm:block hidden ">
        <p className={styles.sectionSubText}>
          What I have worked with
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </p>
      </motion.div>
      <div className="sm:hidden ">
        <p className={styles.sectionSubText}>
          What I have worked with
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20 ">
        {technologies.map((tech, index) => (
          <TechCard key={`${tech.name} - ${tech.index}`} index={index} tech={tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
