import { ContNotFound } from "../styles/NotFound";
import { Link } from "react-router-dom";
import imagen from '../img/NotFound.png'

export  const NotFound = ()=> {
    return (
      <ContNotFound>
        <img src={imagen}/>
        <Link to="/">
          <button className="buttonBack">Volver </button>
        </Link>
      </ContNotFound>
    )
  }