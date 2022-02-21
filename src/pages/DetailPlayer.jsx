import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ContEdit } from "../styles/EditForm.js";
import { useAuth0 } from "@auth0/auth0-react";
import { getPlayerId } from "../actions/index";
import { EditPlayer } from "./EditPlayer.jsx";
import Spinner from "../components/Spinner.jsx";

export const DetailPlayer = () => {
  const { player } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth0();
  const [checkform, setCheckform] = useState(false);

  useEffect(() => {
    dispatch(getPlayerId(id));
    if (
      isAuthenticated === true &&
      user.email === process.env.REACT_APP_EMAIL
    ) {
      setAdminStatus(true);
    }
    // eslint-disable-next-line
  }, [dispatch, player.score, isAuthenticated]);

  const onClickCheck = () => {
    checkform === true ? setCheckform(false) : setCheckform(true);
  };

  const [adminStatus, setAdminStatus] = useState(false);

  return player ? (
    checkform === false ? (
      <>
        <ContEdit>
          <h2 className="DetailPlayerTitle">Detalle del Jugador</h2>
          {player ? (
            <div key={player.Id} className="DetailContainer">
              <div className="InfoContainer">
                <div className="AvatarDetail">
                  <img src={player.avatar} alt={player.nickname} />
                </div>

                <div className="InfoDetail">
                  <div className="detail">
                    <p>Nickname:</p>
                    <span>{player.nickname}</span>
                  </div>

                  <div className="detail">
                    <p>Status:</p>
                    <span>{player.status}</span>
                  </div>

                  <div className="detail">
                    <p>Ranking:</p>
                    <span>{player.ranking}</span>
                  </div>

                  <div className="detail">
                    <p>Score:</p>
                    <span>{player.score}</span>
                  </div>

                  <div className="detail">
                    <p>Id:</p>
                    <span>{player.Id}</span>
                  </div>

                  {adminStatus === true && (
                    <button className="btnEditPlayer" onClick={onClickCheck}>
                      Editar
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </ContEdit>
      </>
    ) : (
      <EditPlayer player={player} />
    )
  ) : (
    <Spinner />
  );
};
