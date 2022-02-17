import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ContEdit} from "../styles/EditForm.js";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getPlayerId,
  getPlayers,
  // setId
} from "../actions/index";
import { EditPlayer } from "./EditPlayer.jsx";

export const DetailPlayer = () => {
  // ------------------------------<Variables>--------------------------------
  var { player } = useSelector((state) => state);
  player = player[0];
  console.log(player);
  const dispatch = useDispatch();
  var { id } = useParams();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    dispatch(getPlayerId(id));
    dispatch(getPlayers({}));
    if (
      isAuthenticated === true &&
      user.email === "dreamteammanejantes@gmail.com"
    ) {
      setAdminStatus(true);
    }
  }, [dispatch,player?.length]);
  // _____________________________________________________________________________
  // ------------------------------<State>----------------------------------
  const [checkform, setCheckform] = useState(false);
  const [adminStatus, setAdminStatus] = useState(false);
  const onClickCheck = () => {
    checkform === true ? setCheckform(false) : setCheckform(true);
    // dispatch(setId(id))
  };

  // __________________________________________________________________________

  return player?.nickname ? (
    checkform === false ? (
      <>
        <h2
          style={{
            width: 500,
            margin: "0 auto",
            color: "white",
            textAlign: "center",
            marginTop: 60,
            // color: "#FF0075",
            letterSpacing: 20,
            textTransform: "uppercase",
          }}
        >
          Detalle del Jugador
        </h2>
        <ContEdit>
          {player ? (
            <div key={player.Id} className="DetailContainer">
              <div className="CloseDetail"></div>
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
                  {adminStatus === false && (
                    <button className="btnEditPlayer" onClick={onClickCheck}>
                      Editar
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>...descargando...</div>
          )}
        </ContEdit>
      </>
    ) : (
      <EditPlayer/>
    )
  ) : (
    <>no found</>
  );
};
