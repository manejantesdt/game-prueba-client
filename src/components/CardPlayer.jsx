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
      <h3>{status}</h3>
      <h3>{ranking}</h3>
    </article>
  );
};
