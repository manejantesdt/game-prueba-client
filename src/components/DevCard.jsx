import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function DevCard({ image, name, github, linkedin }) {
  return (
    <div className="cardMe">
      <div className="foto">
        <img src={image} alt={name} />
      </div>
      <div className="NameMe">{name}</div>
      <div className="redSocial">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="redSocialIcon" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="redSocialIcon" />
        </a>
      </div>
    </div>
  );
}
