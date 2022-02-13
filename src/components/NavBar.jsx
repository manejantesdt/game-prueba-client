import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import logo from "../img/Recicle.png";
import { useDispatch } from "react-redux";
import {getPlayers} from "../actions/index";
import {
  ContNavBar,
  LogoImg,
  ContNav,
  ContLogo,
  Ul,
} from "../styles/NavBar.js";


export const NavBar = () => {
  const { searchPlayer } = useSelector((state) => state);
  const dispatch = useDispatch();
  return searchPlayer?.length > 0 ? (
    <ContNavBar>
      <ContLogo>
        <LogoImg src={logo} alt="logo" />
        <SearchBar />
        <FilterBar />
      </ContLogo>
      <ContNav>
        <Ul>
          <Link to="/" className="link" >
            Inicio
            {dispatch(getPlayers({}))}
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
