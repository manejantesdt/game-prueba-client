import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function DevTeam() {
  return (
      <>
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
      </>
  );
}
