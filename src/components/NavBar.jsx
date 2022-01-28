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
          <Link to="/edit" className="link">
            Edit Player
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
    // <div>
    //     <input placeholder="buscar jugador"/>
    //     <select>
    //       <option value="">Todos</option>
    //       <option value="">jp</option>
    //       <option value="">fabri</option>
    //       <option value="">nel</option>
    //       <option value="">ram</option>
    //       <option value="">mar</option>
    //     </select>
    //     <Link to="/">home</Link>
    //     <br/>
    //     <Link to="/salon">salon</Link>
    // </div>
  );
};

export default NavBar;
