import React from "react";
import { extraAchievements } from "../constants";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-dimWhite my-4 leading-[32px]">
        ● {text}{" "}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg
              size="1rem"
              className="inline hover:text-teal-200"
            ></BsLink45Deg>
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const AchievementCard = (props) => {
  return (
    <motion.div
      className="flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row">
        {/* Use icon as logo here */}
        <div className="w-[52px] h-[52px] bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex justify-center items-center">
          <props.icon size="28px" color="white" />
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
            {props.degree} {/* Degree title */}
          </h4>
          <p className="font-poppins font-normal text-[16px] text-white my-1 leading-[24px]">
            {props.title || "Achievement"}
          </p>
        </div>
      </div>

      <div>{props.content && <Content text={props.content} />}</div>
    </motion.div>
  );
};

const ExtraCourses = () => {
  return (
    <section id="extraAchievements">
      <h1 className="heading text-center items-center justify-center text-4xl sm:text-5xl">
        Extra Courses
      </h1>

      <div className={`flex justify-center items-center flex-col relative`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-3">
          {extraAchievements.map((card) => (
            <AchievementCard key={card.id} index={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCourses;
