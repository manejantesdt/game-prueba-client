import { Link } from "react-router-dom";
import {ContNavBar, LogoImg, ContNav, ContLogo} from "../styles/NavBar.js";
import logo from "../img/Logo.png";

const NavBar = () => {
  return (
    <ContNavBar>
    <ContLogo>
      <LogoImg src={logo} alt="logo"/>
    </ContLogo>
    <ContNav>
      <ul>
          <Link to="/">Home</Link>
      </ul>
      <ul>
          <Link to="/edit">Edit Player</Link>
      </ul>
      <ul>
          <Link to="/create">Create Player</Link>
      </ul>
      <ul>
          <Link to="about">About</Link>
      </ul>
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
