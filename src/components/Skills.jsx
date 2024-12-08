import React from "react";
import { skills } from "../constants";
import { motion } from "framer-motion";
import clsx from "clsx";

export const SkillIcon = ({ icon: Icon, name, hoverColor }) => {
  if (!Icon) {
    console.error("Icon is not valid!", name);
    return null;

  }

  console.log(skills)

  return (
    <div className="flex flex-col ">
      <span
        className={`text-white cursor-pointer text-[30px] sm:text-[40px] hover:text-${hoverColor}`}
      >
        <Icon className={clsx(`hover:text-${hoverColor}`)} />
      </span>
      <p className="font-poppins text-dimWhite text-[12px] sm:text-[15px] mt-2">
        {name}
      </p>
    </div>
  );
};

const SkillCard = ({ title, items }) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="mt-4 mb-6 border-gray-200 dark:border-gray-700 mx-4"
    >
      <div className="relative w-3 h-3 bg-gray-200 rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="flex flex-row items-center mr mb-6 ml-6 sm:mr-20">
        <h4 className="font-poppins font-semibold text-[20px] sm:text-[27px] text-gradient leading-[32px]">
          {title}
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-8 ml-8">
        {items.map((item) => (
          <SkillIcon key={item.id} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="mb-2">
      <h1 className="heading text-center items-center justify-center">
        Relevant Skills
      </h1>
      <div className="flex flex-col justify-evenly w-full items-start">
        <motion.div
          className={`ml-2 mb-6 flex flex-col sm:flex-row sm:flex sm:justify-evenly`}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
