import "../styles/Footer.js";
import { ContFooter } from "../styles/Footer";

export const Footer = () =>{
  return (
    <ContFooter>
        <div className="elementFooter">
            <div className="element1">
                Desarrollo a cargo de Dream Team Manejantes &copy;2022
            </div>
            <div className="element2">
                Tienes alguna duda? <a href="mailto:manejantes@gmail.com" target="_blank" 
              rel="noopener noreferrer">Contáctanos</a>
            </div>
        </div>
    </ContFooter>
  )
}
