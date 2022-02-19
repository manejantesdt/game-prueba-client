import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import {
  ContNavBar,
  LogoImg, 
  ContNav,
  ContLogo,
  Ul,
} from "../styles/NavBar.js";
import logo from "../img/Recicle.png";
import AuthNav from './auth-nav';

export const NavBar = () => {

   const { searchPlayer } = useSelector((state) => state);

  return searchPlayer?.length > 0 ? (
    <ContNavBar>
      <ContLogo>
      <NavLink to="/">
      <LogoImg src={logo} alt="logo" />
      </NavLink>
        <SearchBar />
        <AuthNav/>
      </ContLogo>
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
    </ContNavBar>
  ):(<ContNavBar>
    <ContLogo>
      <NavLink to="/">
      <LogoImg src={logo} alt="logo" />
      </NavLink>
      <SearchBar />
      <AuthNav/>
    </ContLogo>
    <ContNav className="ContNav">
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
  </ContNavBar>)
};
