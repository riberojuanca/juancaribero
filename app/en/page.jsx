import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
/*SKILLS ICONS*/
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiMdx } from "react-icons/si";
import { SiPm2 } from "react-icons/si";
import { DiNginx } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";

import { CiSquareCheck } from "react-icons/ci";

function homePageEnglish() {
  return (
    <>
      <article>
        <div className="container">
          <div className="sub-container">
            <section className="sub-container-section">
              <h1 className="title-section">JUAN RIBERO</h1>
              <div className="body-section">
                <h2>FRONTEND WEB DEVELOPER IN TRAINING</h2>
                <p>
                  +1 year of studying and creating projects using Html, CSS,
                  JavaScript, React, NextJS, and some NodeJS, Nginx, and Pm2 on
                  VPS, on the server side.
                </p>
                <p>Years of experiencie:</p>
                <div className="skills">
                  <div className="skill">
                    <p>Html & Css</p>
                    <p>+2</p>
                    <FaHtml5 />
                    <FaCss3Alt />
                  </div>
                  <div className="skill">
                    <p>JavaScript</p>
                    <p>+1</p>
                    <RiJavascriptFill />
                  </div>
                  <div className="skill">
                    <p>React</p>
                    <p>+1</p>
                    <IoLogoReact />
                  </div>
                  <div className="skill">
                    <p>NextJS</p>
                    <p>+1</p>
                    <TbBrandNextjs />
                  </div>
                  <div className="skill">
                    <p>TailwindCSS</p>
                    <p>+1</p>
                    <BiLogoTailwindCss />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="sub-container">
            <section className="sub-container-section">
              <h2>PROJECT EXPERIENCIE</h2>
              <div className="body-section">
                <ProjectCard />
              </div>
            </section>
          </div>
        </div>
        <br />
        <div>
          <h2>SKILLS</h2>
          <ul className="ulSkills" type="none">
            <li>
              <CiSquareCheck />
              Team player
            </li>
            <li>
              <CiSquareCheck />
              Inclusive
            </li>
            <li>
              <CiSquareCheck />
              Problem solving
            </li>
            <li>
              <CiSquareCheck />
              Active listening
            </li>
            <li>
              <CiSquareCheck />
              Adaptability
            </li>
            <li>
              <CiSquareCheck />
              Html
            </li>
            <li>
              <CiSquareCheck />
              CSS
            </li>
            <li>
              <CiSquareCheck />
              JavaScript
            </li>
            <li>
              <CiSquareCheck />
              React
            </li>
            <li>
              <CiSquareCheck />
              NextJS
            </li>
            <li>
              <CiSquareCheck />
              NodeJS (basic)
            </li>
          </ul>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <h2>LANGUAGES</h2>
          <p>Spanish (native) and English (B2)</p>
        </div>
      </article>
      <footer className="footer">
        <Link href={""}>
          <p>2024</p>
        </Link>
        <div className="icons">
          <Link className="flag" href="/">
            🇪🇸
          </Link>
        </div>
      </footer>
    </>
  );
}

export default homePageEnglish;
