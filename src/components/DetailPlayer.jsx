import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ContEdit} from "../styles/EditForm.js";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getPlayerId,
  searchPlayers,
} from "../actions/index";
import { EditPlayer } from "./EditPlayer.jsx";
import Spinner from "./Spinner.jsx";

export const DetailPlayer = () => {
  // ------------------------------<Variables>--------------------------------
  var { player } = useSelector((state) => state);
  player = player[0];
  
  const dispatch = useDispatch();
  var { id } = useParams();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    dispatch(searchPlayers({nick_name:""}));
    dispatch(getPlayerId(id));
    if (
      isAuthenticated === true &&
      user.email === "dreamteammanejantes@gmail.com"
    ) {
      setAdminStatus(true);
    }
  }, [dispatch,player?.score,player?.nickname,player?.length]);
  // _____________________________________________________________________________
  // ------------------------------<State>----------------------------------
  const [checkform, setCheckform] = useState(false);
  const [adminStatus, setAdminStatus] = useState(false);
  const onClickCheck = () => {
    checkform === true ? setCheckform(false) : setCheckform(true);
  };

  // __________________________________________________________________________

return player? (
    checkform === false ? (
      <>
        <ContEdit>
        <h2 className="DetailPlayerTitle">
          Detalle del Jugador
        </h2>
          {player ? (
            <div key={player.Id} className="DetailContainer">
              {/* <div className="CloseDetail"></div> */}
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
      <EditPlayer/>
    )
  ) : (
    <Spinner />
  );
};
