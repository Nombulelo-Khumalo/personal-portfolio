import { educationList } from "../constants";
import Lottie from "react-lottie-player";
import animationData from "../lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";

const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FeatureCard = ({ icon, title, degree, content, index, isSubItem }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index === educationList.length - 1 ? "mb-0" : "mb-6"
    } feature-card ${isSubItem ? "ml-8" : ""}`}
  >
    <div
      className={`w-[80px] h-[px80] rounded-full justify-center items-center`}
    >
      <img
        src={icon}
        alt="icon"
        className="w-[80%] h-[80%] object-contain rounded-2xl"
      />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[30px] mb-1 text-gradient">
        {title}
      </h4>
      {degree && (
        <p className="font-poppins font-normal text-white text-[16px] leading-[30px] mb-1">
          {degree}
        </p>
      )}
      {content && (
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1">
          ● {content}
        </p>
      )}
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education">
      <h1 className="heading text-center items-center justify-center text-4xl sm:text-5xl">
        Education
      </h1>
      <motion.div
        className="flex md:flex-row flex-col-reverse sm:py-16 py-6"
        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-1 justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
          <div className="w-[80%] h-[80%] relative z-[5]">
            <Lottie {...defaultOptions} />
          </div>

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>

        <div className={`flex-1 flex-col justify-center items-start`}>
          {educationList.map((feature, index) => (
            <div key={feature.id}>
              <FeatureCard
                key={feature.id}
                index={index}
                icon={feature.icon}
                title={feature.title}
                degree={feature.degree}
                content={feature.content}
              />

              {/* If the feature has sub-items, render them with indentation */}
              {feature.items &&
                feature.items.map((subItem, subIndex) => (
                  <FeatureCard
                    key={subItem.id}
                    index={subIndex}
                    icon={subItem.icon}
                    title={subItem.title}
                    content={subItem.content}
                    isSubItem={true}
                  />
                ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
