import Link from "next/link";

import ProjectCard from "@/components/ProjectCard";

import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { PiPaypalLogoLight } from "react-icons/pi";

function page() {
  return (
    <>
      <main>
        <header>
          <Link href={"/"}>
            <h1 className="title">🕯️Luzbelito</h1>
          </Link>
          <div className="icons">
            <a href="wa.me/59891848690">
              <BiMessageSquareDetail />
            </a>
            <a
              href="https://github.com/riberojuanca"
              target="_blank"
              rel="noopener"
            >
              <BiLogoGithub />
            </a>
            <a href="mailto:riberojuanca@gmail.com">
              <MdOutlineAlternateEmail />
            </a>
            <a href="https://www.linkedin.com/in/juan-r-0bb8a0265/">
              <BiLogoLinkedinSquare />
            </a>
            <a href="https://www.paypal.com/donate/?hosted_button_id=7797WAYFESTGY">
              <PiPaypalLogoLight />
            </a>
          </div>
        </header>
        <article>
          <div className="container">
            <div className="sub-container">
              <section className="sub-container-section">
                <h2 className="title-section">Hi 👋🏼</h2>
                <div className="body-section">
                  <p>
                    I am Juan Ribero a frontend developer from Salto, Uruguay
                    🇺🇾.
                  </p>
                  <p>
                    I started this journey at the beginning of the year 2023.
                    <br />
                    Since then I have focused on creating web apps without any
                    type of discrimination.
                  </p>
                  <div className="skills">
                    <div className="skill">
                      <p>Html & Css</p>
                      <p>+2</p>
                      <p>Years of experience</p>
                    </div>
                    <div className="skill">
                      <p>JavaScript</p>
                      <p>+1</p>
                      <p>Year of experience</p>
                    </div>
                    <div className="skill">
                      <p>React</p>
                      <p>+1</p>
                      <p>Year of experience</p>
                    </div>
                  </div>
                  <p>
                    Currently, while studying them, I use NextJS, TypeScript and
                    TailwindCSS.
                  </p>
                </div>
              </section>
            </div>
            <div className="sub-container">
              <section className="sub-container-section">
                <h2 className="title-section">Projects</h2>
                <div className="body-section">
                  <p>
                    Thanks to the trust of some people, I am still active as a
                    freelancer.
                  </p>
                  <ProjectCard />
                </div>
              </section>
            </div>
          </div>
        </article>
        <footer className="footer">
          <p>Háblame</p>
        </footer>
      </main>
    </>
  );
}

export default page;
