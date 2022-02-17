import { NavLink } from "react-router-dom";


export const CardPlayer = ({
  ranking,
  id,
  nickname,
  image,
  status,
  ...props
}) => {
 
  return (
    <article {...props} className="jugador">
      <NavLink to={`/id/${id}`}>
        <div className="avatar">
          <img src={image} alt={nickname} />
        </div>
        <h3>{nickname}</h3>
        <div className="avatarStatus">
          <span>{status}</span>
        </div>
        <div className="avatarRanking">
          <span  >Ranking: {ranking}</span>
        </div>
      </NavLink>
    </article>
  );
};
