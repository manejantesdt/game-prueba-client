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
            Home
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
  ):(<ContNavBar>
    <ContLogo>
      <LogoImg src={logo} alt="logo" />
      <SearchBar />
      {/* <FilterBar /> */}
    </ContLogo>
    <ContNav>
      <Ul>
        <Link to="/" className="link">
          Home
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
  </ContNavBar>)
};
