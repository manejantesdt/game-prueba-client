import "../styles/Footer.js";
import { ContFooter } from "../styles/Footer";

export const Footer = () =>{
  return (
    <ContFooter>
        <div className="elementFooter">
            <div className="element">
                Desarrollo a cargo de InnovaTECH &copy; 2022
            </div>
            <div className="element">
                Tienes alguna duda? <a href="#" className="">escríbenos</a>
            </div>

        </div>
    </ContFooter>
  )
}
