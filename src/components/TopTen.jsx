import React from "react";
import fondo from "../img/teatro.png";
import { TopTenSection } from "../styles/TopTen";

const TopTen = ({ titulares, quitarTitular }) => (
  <TopTenSection>
    <h2>Top Ten</h2>
    <div className="cancha">
       <img src={fondo} alt="fondo" />
    </div>
  </TopTenSection>
);





export default TopTen;
