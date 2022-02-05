import { NavLink } from "react-router-dom";
import { deletePlayer } from "../actions/index";
import { useDispatch } from "react-redux";

export const CardPlayer = ({
  ranking,
  id,
  nickname,
  image,
  status,
  ...props
}) => {
const dispatch = useDispatch();

  return (
    <article {...props} className="jugador">
      <button onClick={() => dispatch(deletePlayer(id))}>X</button>
      <NavLink to={`/id/${id}`}>
        <img src={image} alt={nickname} />
        <h3>{nickname}</h3>
      </NavLink>
      <span>{status}</span>
      <span>{ranking}</span>
    </article>
  );
};
