import { NavLink } from "react-router-dom";
import { deletePlayer, getPlayers } from "../actions/index";
import { useDispatch } from "react-redux";

export const CardPlayer = ({
  ranking,
  id,
  nickname,
  image,
  status,
  ...props
}) => {
  const onClick = async (e) => {
    e.preventDefault();
    await dispatch(deletePlayer(id));
    dispatch(getPlayers({}));
  };

  const dispatch = useDispatch();

  return (
    <article {...props} className="jugador">
      <NavLink to={`/id/${id}`}>
        <button type="onSubmit" onClick={onClick}>
          X
        </button>
        <img src={image} alt={nickname} />
        <h3>{nickname}</h3>
        <span style={{ color: "#77D970", marginBottom: 5 }}>{status}</span>
        <span style={{ color: "#FF0075" }}>Rank: {ranking}</span>
      </NavLink>
    </article>
  );
};
