import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SpainProjectCard from "@/components/SpainProjectCard";

function homePageSpanish() {
  return (
    <>
      <article>
        <div className="container">
          <div className="sub-container">
            <section className="sub-container-section">
              <h2 className="title-section">Hola 👋🏼</h2>
              <div className="body-section">
                <p>
                  Soy Juan Ribero, desarrollador web frontend de Salto, Uruguay
                  🇺🇾.
                </p>
                <p>
                  Comencé este viaje a principios del año 2023.
                  <br />
                  Desde entonces, me he enfocado en la creación de aplicaciones
                  web sin ningún tipo de discriminación.
                </p>
                <div className="skills">
                  <div className="skill">
                    <p>Html & Css</p>
                    <p>+2</p>
                    <p>Años de experiencia</p>
                  </div>
                  <div className="skill">
                    <p>JavaScript</p>
                    <p>+1</p>
                    <p>Años de experiencia</p>
                  </div>
                  <div className="skill">
                    <p>React</p>
                    <p>+1</p>
                    <p>Años de experiencia</p>
                  </div>
                </div>
                <p>
                  Actualmente, mientra los estudio, uso NextJS, TypeScript y
                  TailwindCSS.
                </p>
              </div>
            </section>
          </div>
          <div className="sub-container">
            <section className="sub-container-section">
              <h2 className="title-section">Proyectos</h2>
              <div className="body-section">
                <p>
                  Gracias a la confianza de ciertas personas, me mantengo activo
                  como freelancer.
                </p>
                <SpainProjectCard />
              </div>
            </section>
          </div>
        </div>
      </article>
      <footer className="footer">
        <Link href={""}>
          <p>2024</p>
        </Link>
      </footer>
    </>
  );
}

export default homePageSpanish;
