import React from "react";
import Image from "next/image";
import styles from "@/styles/ProjectCard.module.css";

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

function ProjectCard() {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.texts}>
        <h3>QuitaParásitos.net</h3>
        <p>
          Created with Next JS and deployed on VPS. It has its own blog created
          using MDX and an internal search engine in particular sections.
        </p>
        <div className={styles.skills}>
          <FaHtml5 />
          <FaCss3Alt />
          <RiJavascriptFill />
          <IoLogoReact />
          <TbBrandNextjs />
          <SiMdx />
          <FaNodeJs />
          <SiPm2 />
          <DiNginx />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
