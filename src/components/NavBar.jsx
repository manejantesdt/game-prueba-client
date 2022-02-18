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
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../img/Recicle.png";
import AuthNav from './auth-nav';

export const NavBar = () => {

  const [menu, setMenu] = React.useState(false) 
  const [move, setMove] = React.useState(true) 

  function handleHide() {
    let navigation = document.querySelector('.ContNav');
    console.log("MOVE INICIAL", move)
    // navigation.classList.toggle('active');
    setMenu(!menu)
    if(move === true){
      navigation.style.top ='47px'
      setMove(false)
    } else {
      navigation.style.top ='-400px'
      setMove(true) 
    }
 }

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
        <MenuIcon style={{color: '#fff'}} />
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
      <div className="sidebarMenu">
        {
          menu === false ? (
            <button type="button" className="btnMenuMobile" onClick={()=>handleHide()} >
              <MenuIcon className="iconMenu" /> 
            </button>

          ) : (
            <button type="button" className="btnMenuMobile" onClick={()=>handleHide()} >
              <CloseIcon className="iconMenu" />
            </button>
          )
        }
      </div>
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
