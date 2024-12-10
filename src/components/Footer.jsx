import React from "react";
import Button from "./Button";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { repoLink, resumeLink } from "../constants";

const Footer = () => {
  return (
    <footer
      id="contact"
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#1a1f29",
      }}
    >
      <div
        style={{ marginBottom: "20px" }}
        className="flex space-x-5 text-3xl text-dimWhite ml-9"
      >
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a href="mailto:your-email@example.com">
          <AiFillMail />
        </a>
      </div>

      <div className="mb-7 ml-9 flex justify-start">
        <a href={resumeLink} target="_blank" download={``}>
          <Button
            styles="mt-10 mr-3 inline-flex items-center justify-center"
            text="Download Resume"
            icon={AiFillGithub}
          />
        </a>

        <a href={repoLink} target="_blank">
          <Button
            styles="mt-10 inline-flex items-center justify-center"
            text="Star"
            icon={AiFillGithub}
          />
        </a>
      </div>
      <p className="flex justify-start text-dimWhite ml-9 mb-7">
        Made with 💜 by Nombulelo Khumalo
      </p>

      <div className="text-dimWhite text-sm flex justify-around flex-1">
        <p>Copyright © 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
