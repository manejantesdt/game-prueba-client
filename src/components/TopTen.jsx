import React from "react";
// import fondo from "../img/teatro.png";
import fondo from "../img/podio.png";
import { TopTenSection } from "../styles/TopTen";
// import Confetti from "react-confetti";
/* import Particles from "react-tsparticles";

const particlesInit = (main) => {
  console.log(main);
  loadConfettiPreset(main);
  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  console.log(container);
}; */

export const TopTen = () => (
  
  <TopTenSection>
    <div className="cancha"> 
    {/* <Confetti width={500} height={500} /> */}
      <img src={fondo} alt="fondo" />
     {/* <Particles
      id="confetti"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> */}
    </div>
    
  </TopTenSection>
);
