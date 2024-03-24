import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

function page() {
  return (
    <>
      <article>
        <div className="container">
          <div className="sub-container">
            <section className="sub-container-section">
              <h2 className="title-section">Hi 👋🏼</h2>
              <div className="body-section">
                <p>
                  I am Juan Ribero a frontend developer from Salto, Uruguay 🇺🇾.
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
        <Link href={"/contact"}>
          <p>Pide presupuesto sin cargo</p>
        </Link>
      </footer>
    </>
  );
}

export default page;
