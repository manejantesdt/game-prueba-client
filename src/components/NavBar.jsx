import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <div>
        <input placeholder="buscar jugador"/>
        <select>
          <option value="">Todos</option>
          <option value="">jp</option>
          <option value="">fabri</option>
          <option value="">nel</option>
          <option value="">ram</option>
          <option value="">mar</option>
        </select>
        <Link to="/">home</Link>
        <br/>
        <Link to="/salon">salon</Link>
    </div>
  );
};