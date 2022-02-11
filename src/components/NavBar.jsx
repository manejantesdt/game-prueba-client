import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import {
  ContNavBar,
  LogoImg,
  ContNav,
  ContLogo,
  Ul,
} from "../styles/NavBar.js";
import logo from "../img/LogoNvo.png";

export const NavBar = () => {
  const { searchPlayer } = useSelector((state) => state);
  console.log(searchPlayer);
  return searchPlayer?.length > 0 ? (
    <ContNavBar>
      <ContLogo>
        <LogoImg src={logo} alt="logo" />
        <SearchBar />
        <FilterBar />
      </ContLogo>
      <ContNav>
        <Ul>
          <Link to="/" className="link">
            Inicio
          </Link>
        </Ul>
        <Ul>
          <Link to="/create" className="link">
            Crear Jugador
          </Link>
        </Ul>
        <Ul>
          <Link to="about" className="link">
            Sobre
          </Link>
          
        </Ul>
      </ContNav>
    </ContNavBar>
  ):(<ContNavBar>
    <ContLogo>
      <LogoImg src={logo} alt="logo" />
      <SearchBar />
      {/* <FilterBar /> */}
    </ContLogo>
    <ContNav>
      <Ul>
        <Link to="/" className="link">
          Inicio
        </Link>
      </Ul>
      <Ul>
        <Link to="/create" className="link">
          Crear Jugador
        </Link>
      </Ul>
      <Ul>
        <Link to="about" className="link">
          Sobre
        </Link>
      </Ul>
    </ContNav>
  </ContNavBar>)
};
