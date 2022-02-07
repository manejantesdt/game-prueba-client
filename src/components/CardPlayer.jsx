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
  const onClick = (e) => {
    e.preventDefault();
    dispatch(deletePlayer(id));
    dispatch(getPlayers());
    // window.location.reload(false);
  };

  const dispatch = useDispatch();

  return (
    <article {...props} className="jugador">
      {/* <button type="onSubmit" onClick={() => dispatch(deletePlayer(id))}>X</button> */}
      <button type="onSubmit" onClick={onClick}>
        X
      </button>
      <NavLink to={`/id/${id}`}>
        <div className="avatar"><img src={image} alt={nickname} /></div>
        
        <h3>{nickname}</h3>
      </NavLink>
      <span style={{color: '#77D970', marginBottom:5}}>{status}</span>
      <span style={{color: '#FF0075'}}>Rank: {ranking}</span>
    </article>
  );
};
