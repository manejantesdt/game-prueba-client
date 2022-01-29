import { NavLink } from "react-router-dom";

export const CardPlayer = ({ id, nickname, image, status, ...props }) => {
  
  return (
    <article {...props} className="jugador">
      <NavLink to={`/id/${id}`}>
        <img src={image} alt={nickname} />
        <h3>{nickname}</h3>
      </NavLink>
        <span>{status}</span>
    </article>
  );
};
