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

function validate(editform) {
  let errorValidate = {};
  var numbers = /^[1-9][0-9]*$/;

  //name validation
   if (editform.score.length > 6) {
    errorValidate.score = "numberp muy largo, cifras max 6";
  } else if (!editform.score.match(numbers)) {
    errorValidate.score = "Solo números positivos permitidos";
  }
  return errorValidate;
}

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
  const [error, setError] = useState({});

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
    setEditform({});
    checkform === false ? setCheckform(true) : setCheckform(false);
  };

  // const onClick = async () => {
  //   await dispatch(editPlayer(id, editform));
  //   dispatch(getPlayers({}));
  //   console.log(editform,id);

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(
      validate({
        ...editform,
        [e.target.name]: e.target.value,
      })
    );
    if (!Object.getOwnPropertyNames(error).length) {
    dispatch(editPlayer(id, editform));
    dispatch(getPlayerId(id));
    checkform === false ? setCheckform(true) : setCheckform(false);
  } else {
    alert("Errores, revisar información")}}

  const handleChange = (e) => {
    setEditform({
      ...editform,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...editform,
        [e.target.name]: e.target.value,
      })
    );
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
                  <img
                    src={editform.avatar ? editform.avatar : player.avatar}
                    alt={player.nickname}
                  />
                </div>

                <div className="InfoDetail">
                  <div className="detail">
                    <p>Nickname:</p>
                    <span>
                      {editform.nickname ? editform.nickname : player.nickname}
                    </span>
                  </div>

                  <div className="detail">
                    <p>Status:</p>
                    <span>
                      {editform.status ? editform.status : player.status}
                    </span>
                  </div>

                  <div className="detail">
                    <p>Ranking:</p>

                    <span>
                      {editform.ranking ? editform.ranking : player.ranking}
                    </span>
                  </div>

                  <div className="detail">
                    <p>Score:</p>

                    <span>
                      {editform.score ? editform.score : player.score}
                    </span>
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
                <p>Score</p>
                <input
                  className="input_form"
                  type="number"
                  name="score"
                  min = "0"
                  placeholder={parseInt(player.score)}
                  onChange={(e) => handleChange(e)}
                />
                {console.log(player.ranking)}
                {error.score && <p>{error.score}</p>}
              </div>

              {error.name && <p>{error.name}</p>}

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
