import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPlayerId } from "../actions";

export const CardPlayer = ({
  ranking,
  id,
  nickname,
  image,
  status,
  ...props
}) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(getPlayerId(id));
  };
  return (
    <article {...props} className="jugador" onClick={onClick}>
      <NavLink to={`/id/${id}`}>
        <div className="avatar">
          <img src={image} alt={nickname} />
        </div>
        <h3>{nickname}</h3>
        <div className="avatarStatus">
          <span>{status}</span>
        </div>
        <div className="avatarRanking">
          <span>Ranking: {ranking}</span>
        </div>
      </NavLink>
    </article>
  );
};
