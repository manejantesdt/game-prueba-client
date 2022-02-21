import React from "react";
import DevCard from "./DevCard";
import teamData from "../data/devTeamData.json";

export default function DevTeam() {
  return (
    <>
      <h2 className="titleMe">Equipo de Desarrolladores</h2>
      <div className="aboutFotos">
        {teamData.map((dev) => (
          <DevCard
            key={dev.name}
            name={dev.name}
            image={dev.image}
            github={dev.github}
            linkedin={dev.linkedin}
          />
        ))}
      </div>
    </>
  );
}
