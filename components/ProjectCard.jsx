import React from "react";
import Image from "next/image";
import styles from "@/styles/ProjectCard.module.css";
import Link from "next/link";

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

function ProjectCard() {
  return (
    <>
      <section className={styles.sectionContainer}>
        <hr />
        <article className={styles.cardContainer}>
          <div className={styles.texts}>
            <Link href={"https://quita-parasitos.vercel.app"} target="_blank">
              <h3>Full Stack Project at Quita Parásitos</h3>
            </Link>
            <p>January 2024 - Present [Client based in Valencia, Spain]</p>
            <br />
            <div className={styles.skills}>
              <FaHtml5 title="Html" />
              <FaCss3Alt title="CSS" />
              <RiJavascriptFill title="Javascript" />
              <IoLogoReact title="React" />
              <TbBrandNextjs title="NextJS" />
              <SiMdx title="MDX" />
              <FaNodeJs title="NodeJS" />
              <SiPm2 title="Pm2" />
              <DiNginx title="Nginx" />
            </div>
            <ul className="ulProject">
              <h4>RESPONSIBILITIES</h4>
              <li>Creation of project with NextJS from scratch.</li>
              <li>
                Development of functionalities (post search, dropdown menu)
                using React hooks.
              </li>
              <li>Creation of a blog and its respective posts using MDX.</li>
              <li>
                Graphic design of images for OpenGraph and its corresponding
                configuration.
              </li>
              <li>Spelling correction.</li>
              <li>
                Deployment on a Hostinger VPS, where NodeJS installation was
                carried out and Nginx and PM2 were used for configuration and
                maintenance.
              </li>
            </ul>
            <ul className="ulProject">
              <h4>KEY ACCOMPLISHMENTS</h4>
              <li>
                The client benefited from a unique design with no limitations in
                style and functionalities.
              </li>
              <li>
                Found a space to avoid restrictions and censorship from some
                social media platforms.
              </li>
              <li>
                Using a VPS on Hostinger resulted in a 50% decrease in price
                compared to what Vercel offers, without having to forgo its use
                and benefiting from it.
              </li>
              <li>Scalability possibility.</li>
            </ul>
          </div>
        </article>
        <hr />

        <article className={styles.cardContainer}>
          <div className={styles.texts}>
            <Link href={"https://saltorun.vercel.app"} target="_blank">
              <h3>Full Stack Project at Salto RUN</h3>
            </Link>
            <p>
              March 2024 - April 2024 [Project submitted for Salto RUN
              Championship]
            </p>
            <br />
            <div className={styles.skills}>
              <FaHtml5 title="Html" />
              <BiLogoTailwindCss title="TailwindCSS" />
              <RiJavascriptFill title="Javascript" />
              <IoLogoReact title="React" />
              <TbBrandNextjs title="NextJS" />
            </div>
            <ul className="ulProject">
              <h4>RESPONSIBILITIES</h4>
              <li>Development of a NextJS project from scratch.</li>
              <li>GitHub repository creation and connection to Vercel.</li>
              <li>
                Data extraction from Google Sheets using the Fetch API to
                generate the championship standings tables.
              </li>
            </ul>
            <ul className="ulProject">
              <h4>KEY ACCOMPLISHMENTS</h4>
              <li>
                Over 30% improvement in performance compared to the previous
                website.
              </li>
              <li>Modern and accessible design for the public.</li>
              <li>Ability to view championship standings tables.</li>
            </ul>
          </div>
        </article>
        <hr />
      </section>
    </>
  );
}

export default ProjectCard;
