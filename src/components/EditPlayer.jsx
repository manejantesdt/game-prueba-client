import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { ContEdit, IntoEdit } from "../styles/EditForm.js";
import {
  getPlayerId,
  editPlayer,
  deletePlayer,
  getPlayers,
} from "../actions/index";

export const EditPlayer = () => {
  // ------------------------------<Variables>--------------------------------
  const { player, avatars } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var { id } = useParams();

  useEffect(() => {
    dispatch(getPlayerId(id));
    dispatch(getPlayers({}));
  }, [dispatch, id]);
  // _____________________________________________________________________________
  // ------------------------------<State>----------------------------------
  const [checkform, setCheckform] = useState(false);
  const [editform, setEditform] = useState({});

  // __________________________________________________________________________

  // ------------------------------<Functions>---------------------------------
  const onClickCheck = async () => {
    setEditform({
      nickname: player.nickname,
      status: player.status,
      ranking: player.ranking,
      avatar: player.avatar,
      score: player.score,
    });
    checkform === true ? setCheckform(false) : setCheckform(true);
  };

  const onClickCancel = () => {
    checkform === false ? setCheckform(true) : setCheckform(false);
  };

  // const onClick = async () => {
  //   await dispatch(editPlayer(id, editform));
  //   dispatch(getPlayers({}));
  //   console.log(editform,id);

  // };

  const handleSubmit = (e) => {
    dispatch(editPlayer(id, editform));
    dispatch(getPlayers({}));
    // navigate.go(0)
  };

  const handleChange = (e) => {
    setEditform({
      ...editform,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setEditform({
      ...editform,
      [e.target.name]: e.target.value,
    });
  };

  // _____________________________________________________________________________
  //
  return player?.ranking !== undefined ? (
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
          Player Details
        </h2>
        <ContEdit>
          {player ? (
            <div key={player.Id} className="DetailContainer">
              <div className="CloseDetail">
                <button
                  className="btnCloseDetail"
                  type="button"
                  onClick={() =>
                    dispatch(deletePlayer(player.Id), navigate("/"))
                  }
                >
                  X
                </button>
              </div>
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
                    {console.log(player.status)}
                  </div>

                  <div className="detail">
                    <p>Ranking:</p>
                    {console.log(player.ranking)}
                    <span>{player.ranking}</span>
                  </div>

                  <button className="btnEditPlayer" onClick={onClickCheck}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>...loading...</div>
          )}
        </ContEdit>
      </>
    ) : (
      <>
        <h2
          style={{
            width: 700,
            margin: "0 auto",
            color: "white",
            textAlign: "center",
            marginTop: 20,
            // color: "#FF0075",
            letterSpacing: 20,
            textTransform: "uppercase",
          }}
        >
          Edit Player Details
        </h2>
        <ContEdit>
          {player ? (
            <IntoEdit key={player.Id} onSubmit={handleSubmit}>
              <img src={editform.avatar} alt="Ávatar" className="editAvatar" />

              <div className="editPlayerAvatar">
                <p>Ávatar</p>
                <select
                  type="text"
                  name="avatar"
                  className="input_form"
                  onChange={(e) => handleSelect(e)}
                >
                  <option value={null}>{player.avatar}</option>
                  {avatars.map((e, id) => (
                    <option key={id} value={e}>
                      {"Avatar " + (id + 1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="editPlayerAvatar">
                <p>Status</p>
                <select
                  type="text"
                  name="status"
                  className="input_form"
                  onChange={(e) => handleSelect(e)}
                >
                  <option value={null}>{editform.status}</option>
                  <option value="oro">Oro</option>
                  <option value="bronce">Bronce</option>
                  <option value="plata">Plata</option>
                  <option value="hierro">Hierro</option>
                </select>
              </div>

              <div className="editPlayerAvatar">
                <p>Nickname</p>
                <input
                  className="input_form"
                  type="text"
                  name="nickname"
                  placeholder={player.nickname}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="editPlayerAvatar">
                <p>Ranking</p>
                <input
                  className="input_form"
                  type="number"
                  min="0"
                  name="ranking"
                  placeholder={parseInt(player.ranking)}
                  onChange={(e) => handleChange(e)}
                />
                {console.log(player.ranking)}
              </div>

              <div className="editButtons">
                {/* <button onClick={onClick} type="submit" className="btnChange"> */}
                <button type="submit" className="btnChange">
                  Change
                </button>
                <button onClick={onClickCancel} className="btnChange">
                  Cancel
                </button>
              </div>
            </IntoEdit>
          ) : (
            <div>...loading...</div>
          )}
        </ContEdit>
      </>
    )
  ) : (
    <div>...loading...</div>
  );
};
