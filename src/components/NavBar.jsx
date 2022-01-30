import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FiltrosBar } from "./FiltrosBar";
import {
  ContNavBar,
  LogoImg,
  ContNav,
  ContLogo,
  Ul,
} from "../styles/NavBar.js";
import logo from "../img/Logo3.png";

const NavBar = () => {
  return (
    <ContNavBar>
      <ContLogo>
        <LogoImg src={logo} alt="logo" />
        <SearchBar />
        <FiltrosBar />
      </ContLogo>
      <ContNav>
        <Ul>
          <Link to="/" className="link">
            <srong>Home</srong>
          </Link>
        </Ul>
        <Ul>
          <Link to="/create" className="link">
            Create Player
          </Link>
        </Ul>
        <Ul>
          <Link to="about" className="link">
            About
          </Link>
        </Ul>
      </ContNav>
    </ContNavBar>
  );
};

export default NavBar;
