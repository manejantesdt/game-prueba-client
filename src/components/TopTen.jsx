import React from "react";
import fondo from "../img/teatro.png";
import { TopTenSection } from "../styles/TopTen";
import Confetti from "react-confetti";

export const TopTen = () => (
  <TopTenSection>
    <div className="cancha">
    <Confetti width={500} height={500} />
      <img src={fondo} alt="fondo" />
    </div>
  </TopTenSection>
);
