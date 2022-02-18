import { AboutSection } from "../styles/About";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <AboutSection>
      <div className="aboutInfo">
        <h2>Acerca de Recicle Being</h2>
        <br />
        <p>
          Cada vez más personas en el mundo son conscientes de la necesidad de
          cuidar el medio-ambiente. Sin embargo, cuidarlo requiere, para la
          mayoría de nosotros, desarrollar nuevos hábitos, por ejemplo separar
          los residuos, clasificarlos y ponerlos en los recipientes adecuados
          para que puedan ser reciclados.
        </p>
        <p>
          El nombre del juego recuerda a la "papelera de reciclaje" de Windows.
          Lo aprovechamos como un juego de palabras divertido donde el sentido
          de una simple papelera se transforma en un Ser (being) que Recicla.
        </p>
        <p>
          Así, <strong>Recicle Being</strong> fue creado como un modo
          entretenido e interesante de tener la experiencia de transformarnos en
          un personaje que contribuye a crear un medio-ambiente más saludable.
          Creemos que una de las mejores maneras de aprender es jugando! Si
          jugamos a reciclar, terminaremos aprendiendo y aplicándolo en la vida
          real.
        </p>
        <p>
          En Recicle Being como en otros juegos, hay jugadores que se destacan,
          y merecen estar en un lugar especial. Por eso creamos el{" "}
          <strong>"Salón de la Fama"</strong>, una solución desarrollada para
          reconocer a los 10 jugadores con mayor ranking. También nos pareció
          justo reconocer a otros 6 jugadores que, sin estar entre los 10
          mejores, aún son muy buenos así que reciben su reconocimiento en la
          sección <strong>"Jugadores Destacados".</strong>
        </p>
        <p>
          Puedes crear tus propios personajes, con su nickname y elegir tu
          avatar favorito.
        </p>
        <p>
          En la barra de búsqueda podrás buscar cualquier usuario, tanto por ID
          como por nickname y también por status. De esta forma, encontrar al
          usuario que buscas es muy fácil.
        </p>
        <p>
          Una funcionalidad que destaca en el Salón de la fama, es que puedes
          filtrar a los jugadores por status:{" "}
          <strong>Oro, Plata, Bronce, Hierro</strong>. Esta última categoría es
          la que obtienes apenas creas a un nuevo jugador.
        </p>
        <p>
          Esperamos que disfrutes el juego mientras aprendes conceptos valiosos
          y desarrollas nuevos hábitos amigables con el medio ambiente. Tienes
          nuestro profundo agradecimiento por ser parte de esta propuesta.
        </p>
        <p>
          {" "}
          ¡Empieza a jugar y diviértete mientras reciclas! Esperamos verte en el
          podio muy pronto :)
        </p>

        <Link to="/">
          <button className="buttonBack">Volver </button>
        </Link>
      </div>

      <h2 className="titleMe">Equipo de Desarrolladores</h2>

      <div className="aboutFotos">
        <div className="cardMe">
          <div className="foto">
            <img
              src="https://avatars.githubusercontent.com/u/85845504?v=4"
              alt="Ramiro"
            />
          </div>
          <div className="NameMe">Ramiro Villamizar</div>
          <div className="redSocial">
            <a
              href="https://www.linkedin.com/in/ramiro-villamizar-javascript/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  color: "#fff",
                  fontSize: "3rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
            <a
              href="https://github.com/pivotsk8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  color: "#fff",
                  fontSize: "2.8rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
          </div>
        </div>

        <div className="cardMe">
          <div className="foto">
            <img
              src="https://avatars.githubusercontent.com/u/87451265?v=4"
              alt="Ramiro"
            />
          </div>
          <div className="NameMe">Marisa Lia Pascal</div>
          <div className="redSocial">
            <a
              href="https://www.linkedin.com/in/marisaliapascal-fullstack/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  color: "#fff",
                  fontSize: "3rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
            <a
              href="https://github.com/Marisaliap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  color: "#fff",
                  fontSize: "2.8rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
          </div>
        </div>

        <div className="cardMe">
          <div className="foto">
            <img
              src="https://avatars.githubusercontent.com/u/79276560?v=4"
              alt="Ramiro"
            />
          </div>
          <div className="NameMe">Gustavo Montero</div>
          <div className="redSocial">
            <a
              href="https://www.linkedin.com/in/gamontero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  color: "#fff",
                  fontSize: "3rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
            <a
              href="https://github.com/gamontero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  color: "#fff",
                  fontSize: "2.8rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
          </div>
        </div>

        <div className="cardMe">
          <div className="foto">
            <img
              src="https://avatars.githubusercontent.com/u/77559957?v=4"
              alt="Ramiro"
            />
          </div>
          <div className="NameMe">Daniel Alberto Mena</div>
          <div className="redSocial">
            <a
              href="https://www.linkedin.com/in/daniel-full-stack/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  color: "#fff",
                  fontSize: "3rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
            <a
              href="https://github.com/BtoMJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  color: "#fff",
                  fontSize: "2.8rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
          </div>
        </div>

        <div className="cardMe">
          <div className="foto">
            <img
              src="https://avatars.githubusercontent.com/u/76404798?v=4"
              alt="Ramiro"
            />
          </div>
          <div className="NameMe">Jose Angel Rey</div>
          <div className="redSocial">
            <a
              href="https://www.linkedin.com/in/jose-angel-rey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  color: "#fff",
                  fontSize: "3rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
            <a
              href="https://github.com/Jose-Angel-Rey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  color: "#fff",
                  fontSize: "2.8rem",
                  margin: "0 10px",
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#77D970",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};
