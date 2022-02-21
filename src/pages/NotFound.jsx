import { ContNotFound } from "../styles/NotFound";
import { Link } from "react-router-dom";
import imagen from '../assets/img/NotFound.png'

export  const NotFound = ()=> {
    return (
      <ContNotFound>
        <img src={imagen} alt=''/>
        <Link to="/">
          <button className="buttonBack">Volver </button>
        </Link>
      </ContNotFound>
    )
  }