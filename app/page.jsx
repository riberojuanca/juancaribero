import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SpainProjectCard from "@/components/SpainProjectCard";
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

function homePageSpanish() {
  return (
    <>
      <article>
        <div className="container">
          <div className="sub-container">
            <section className="sub-container-section">
              <h1 className="title-section">JUAN RIBERO</h1>
              <div className="body-section">
                <h2>DESARROLLADOR WEB FRONTEND EN FORMACIÓN</h2>
                <p>
                  +1 año de estudio y creación de proyectos utilizando Html,
                  CSS, JavaScript, React, NextJS, y algunos conocimientos en
                  NodeJS, Nginx y Pm2 en VPS, en el lado del servidor.
                </p>
                <p>Años de experiencia:</p>
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
              <h2>EXPERIENCIA EN PROYECTOS</h2>
              <div className="body-section">
                <SpainProjectCard />
              </div>
            </section>
          </div>
        </div>
        <br />
        <div>
          <h2>HABILIDADES</h2>
          <ul className="ulSkills" type="none">
            <li>
              <CiSquareCheck />
              Jugador de equipo
            </li>
            <li>
              <CiSquareCheck />
              Inclusivo
            </li>
            <li>
              <CiSquareCheck />
              Resolución de problemas
            </li>
            <li>
              <CiSquareCheck />
              Escucha activa
            </li>
            <li>
              <CiSquareCheck />
              Adaptabilidad
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
              NodeJS (nivel básico)
            </li>
          </ul>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <h2>LENGUAJES</h2>
          <p>Español (nativo) e Inglés (B2)</p>
        </div>
      </article>
      <footer className="footer">
        <Link href={""}>
          <p>2024</p>
        </Link>
        <div className="icons">
          <Link className="flag" href="/en">
            🇺🇸
          </Link>
        </div>
      </footer>
    </>
  );
}

export default homePageSpanish;
