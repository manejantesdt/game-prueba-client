import React from 'react';
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { ContNavBar, LogoImg, ContLogo} from "../styles/NavBar.js";
import  Navigation from './Navigation' 
import logo from "../assets/img/Recicle.png";
import AuthNav from './AuthenticationButton';

export const NavBar = () => {

 return (
    <ContNavBar>
      <ContLogo>
      <NavLink to="/">
      <LogoImg src={logo} alt="logo" />
      </NavLink>
        <SearchBar />
        <AuthNav/>
      </ContLogo>
      <Navigation/>
    </ContNavBar>)
};
