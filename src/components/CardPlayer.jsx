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
        <div className="btnClose">
          <button type="onSubmit" onClick={onClick}>
            X
          </button>
        </div>
        <div className="avatar">
          <img src={image} alt={nickname} />
        </div>
        <h3>{nickname}</h3>
        <div className="avatarStatus">
          <span  >{status}</span>
        </div>
        <div className="avatarRanking">
          <span  >Rank: {ranking}</span>
        </div>
      </NavLink>
    </article>
  );
};
