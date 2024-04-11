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
        <article className={styles.cardContainer}>
          <div className={styles.texts}>
            <Link href={"https://quita-parasitos.vercel.app"} target="_blank">
              <h3>QuitaParásitos</h3>
              <p>
                Created with Next JS and deployed on VPS. It has its own blog
                created using MDX and an internal search engine in particular
                sections.
              </p>
            </Link>
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
          </div>
        </article>
        <article className={styles.cardContainer}>
          <div className={styles.texts}>
            <Link href={"https://saltorun.vercel.app"} target="_blank">
              <h3>Salto Run</h3>
              <p>
                Created with Next JS and deployed on Vercel. In this web
                application, the leaderboards are updated by obtaining data from
                a Google spreadsheet.
              </p>
            </Link>
            <div className={styles.skills}>
              <FaHtml5 title="Html" />
              <BiLogoTailwindCss title="TailwindCSS" />
              <RiJavascriptFill title="Javascript" />
              <IoLogoReact title="React" />
              <TbBrandNextjs title="NextJS" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default ProjectCard;
