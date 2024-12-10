import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay: 0.1 }}
    >
      <div className="mb-12">
        <h2 className="font-poppins text-2xl font-semibold text-white mb-4 text-center text-gradient">
          {project.title}
        </h2>
        <h4 className="font-poppins font-medium text-dimWhite mb-4 text-center">
          Tech Stack
        </h4>
        <div className="flex justify-center space-x-6 mb-6 ">
          {project.stack.map((tech) => (
            <div key={tech.id} className="flex items-center">
              <tech.icon className="text-2xl text-dimWhite" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto font-poppins text-dimWhite text-base mb-6 text-center">
          <p>{project.content}</p>
        </div>

        {project.image && (
          <div className="max-w-4xl mx-auto mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        )}

        <div className="flex justify-center space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              <AiFillGithub size="2rem" className="text-white mr-1 " />
            </a>
          )}
          {project.netlify && (
            <a
              href={project.netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-900 text-white  px-2 py-2 opacity-60 rounded-lg hover:bg-purple-500 transition duration-300"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-900">
      <h1 className="heading text-center items-center justify-center text-4xl sm:text-5xl mb-5">
        My Projects
      </h1>
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
