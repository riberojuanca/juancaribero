import React from "react";
import { CiSun } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

function page() {
  return (
    <>
      <main>
        <header>
          <h1 className="title">🕯️Luzbelito</h1>
          <div className="icons">
            <a href="">
              <CiSun />
            </a>
            <a href="">
              <CiMail />
            </a>
            <a href=""></a>
          </div>
        </header>
        <article>
          <div className="container">
            <div className="sub-container">
              <section className="sub-container-section">
                <h2 className="title-section">Welcome 👋🏼</h2>
                <div className="body-section">
                  <p>
                    I am Juan C. Ribero a frontend developer from Salto, Uruguay
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
                  <div className="skills">
                    <div className="skill">
                      <p>Complete web</p>
                      <p>+3</p>
                      <p>Last year</p>
                    </div>
                    <div className="skill">
                      <p>sadasdk</p>
                      <p>+7</p>
                      <p>asdadadasd</p>
                    </div>
                    <div className="skill">
                      <p>sadasdk</p>
                      <p>+7</p>
                      <p>asdadadasd</p>
                    </div>
                  </div>
                  <p>parrafo2</p>
                </div>
              </section>
            </div>
            <div className="sub-container">
              <section className="sub-container-section">
                <h2 className="title-section">Titulo1</h2>
                <div className="body-section">
                  <p>Parrafo1</p>
                  <div className="skills">
                    <div className="skill">
                      <p>sadasdk</p>
                      <p>+7</p>
                      <p>asdadadasd</p>
                    </div>
                    <div className="skill">
                      <p>sadasdk</p>
                      <p>+7</p>
                      <p>asdadadasd</p>
                    </div>
                    <div className="skill">
                      <p>sadasdk</p>
                      <p>+7</p>
                      <p>asdadadasd</p>
                    </div>
                  </div>
                  <p>parrafo2</p>
                </div>
              </section>
            </div>
            <div className="sub-container">
              <section className="sub-container-section">
                <h2 className="title-section">Titulo1</h2>
                <div className="body-section">
                  <p>Parrafo1</p>
                  <div className="skills">
                    <div className="skill">
                      <p>sadasdk</p>
                      <p>+7</p>
                      <p>asdadadasd</p>
                    </div>
                    <div className="skill">
                      <p>sadasdk</p>
                      <p>+7</p>
                      <p>asdadadasd</p>
                    </div>
                    <div className="skill">
                      <p>sadasdk</p>
                      <p>+7</p>
                      <p>asdadadasd</p>
                    </div>
                  </div>
                  <p>parrafo2</p>
                </div>
              </section>
            </div>
          </div>
        </article>
        <footer className="footer">
          <p>Juanca</p>
          <p>Contacto</p>
        </footer>
      </main>
    </>
  );
}

export default page;
