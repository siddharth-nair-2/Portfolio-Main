import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, service }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="sm:block hidden ">
        <p className={styles.sectionSubText}>
          Introduction
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </p>
      </motion.div>
      <div className="sm:hidden">
        <p className={styles.sectionSubText}>
          Introduction
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </p>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a new graduate Developer who specializes in Software and Full-Stack
        development. Over the last 4 years, I have developed multiple websites
        and applications using various frameworks and languages, including but
        not limited to Java, JavaScript, C++, Assembly x86, React, Node.js,
        YAML, Jquery, databases such as MySQL and MongoDB, as well as DevOps and
        version control tools.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => {
          return (
            <ServiceCard key={service.title} index={index} service={service} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
