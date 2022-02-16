import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import logo from "../img/Recicle.png";
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
        <LogoImg src={logo} alt="logo" />
        <SearchBar />
        <FilterBar />
        
      </ContLogo>
      <ContNav>
        <Ul>
          <Link to="/" className="link" >
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
  ) : (
    <ContNavBar>
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
    </ContNavBar>

  ):(<ContNavBar>
    <ContLogo>
      <LogoImg src={logo} alt="logo" />
      <SearchBar />
      <AuthNav />
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
