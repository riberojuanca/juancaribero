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

function SpainProjectCard() {
  return (
    <>
      <section className={styles.sectionContainer}>
        <hr />
        <article className={styles.cardContainer}>
          <div className={styles.texts}>
            <Link href={"https://quita-parasitos.vercel.app"} target="_blank">
              <h3>Proyecto Full Stack en Quita Parásitos</h3>
            </Link>
            <p>Enero de 2024 - Presente [Cliente de Valencia, España]</p>
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
              <h4>RESPONSABILIDADES</h4>
              <li>Creación de proyecto con NextJS desde cero.</li>
              <li>
                Creación de funcionalidades (búsqueda de posts, menú
                desplegable) usando hooks de React
              </li>
              <li>
                Creación de blog y sus respectivas publicaciones usando MDX
              </li>
              <li>
                Diseño gráfico de imágenes para OpenGraph y su respectiva
                configuración, utilizando también metadata generada
                dinámicamente para cada publicación del blog.
              </li>
              <li>Correción ortográfica</li>
              <li>
                Despliegue en VPS de Hostinger, donde se hizo la instalación de
                NodeJS y se usó Nginx y PM2 para su configuración y
                mantenimiento
              </li>
            </ul>
            <ul className="ulProject">
              <h4>LOGROS CLAVE</h4>
              <li>
                El cliente se benefició de un diseño único y sin limitaciones en
                su estilo y funcionalidades
              </li>
              <li>
                Encontró un lugar donde evitar las restricciones y censuras de
                algunas redes sociales
              </li>
              <li>
                El uso de un VPS en Hostinger significó un decremento del precio
                a pagar en un 50% en comparación al que ofrece Vercel, sin tener
                que prescindir de su uso y beneficiándose de ello.
              </li>
              <li>Posibilidad de escalabilidad</li>
            </ul>
          </div>
        </article>
        <hr />

        <article className={styles.cardContainer}>
          <div className={styles.texts}>
            <Link href={"https://saltorun.vercel.app"} target="_blank">
              <h3>Proyecto Full Stack en Salto RUN</h3>
            </Link>
            <p>
              Marzo - Abril de 2024 [Proyecto presentado para el Campeonato
              Salto RUN]
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
              <h4>RESPONSABILIDADES</h4>
              <li>Creación de proyecto con NextJS desde cero</li>
              <li>Creación de repositorio en Github y conexión a Vercel</li>
              <li>
                Extracción de datos de Google Sheets utilizando la Fetch API
                para generar el contenido de las tablas de posiciones del
                campeonato.
              </li>
            </ul>
            <ul className="ulProject">
              <h4>LOGROS CLAVE</h4>
              <li>
                Mejoría de más de 30% en el rendimiento en comparativa con web
                anterior
              </li>
              <li>Diseño más moderno y accesible al público</li>
              <li>Posibilidad de visualizar tablas de posiciones</li>
            </ul>
          </div>
        </article>
        <hr />
      </section>
    </>
  );
}

export default SpainProjectCard;
