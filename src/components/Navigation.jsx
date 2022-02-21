import React from "react";
import { NavLink } from "react-router-dom";
import { ContNav, Ul } from "../styles/NavBar.js";

const Navigation = () => {
  return (
    <ContNav>
      <Ul>
        <NavLink to="/" className="link">
          Salón de la fama
        </NavLink>
      </Ul>
      <Ul>
        <NavLink to="/create" className="link">
          Crear Jugador
        </NavLink>
      </Ul>
      <Ul>
        <NavLink to="about" className="link">
          Acerca de
        </NavLink>
      </Ul>
    </ContNav>
  );
};

export default Navigation;