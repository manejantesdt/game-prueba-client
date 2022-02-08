import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ContEdit, IntoEdit } from "../styles/EditForm.js";
import { getPlayerId, editPlayer, deletePlayer } from "../actions/index";

export const EditPlayer = () => {
  // ------------------------------<Variables>--------------------------------
  const { player, avatars } = useSelector((state) => state);
  const dispatch = useDispatch();
  var { id } = useParams();
  useEffect(() => {
    dispatch(getPlayerId(id));
  }, [dispatch, id]);
  // _____________________________________________________________________________
  // ------------------------------<State>----------------------------------
  const [checkform, setCheckform] = useState(false);
  const [editform, setEditform] = useState({});

  // __________________________________________________________________________

  // ------------------------------<Functions>---------------------------------
  const onClick = () => {
    checkform === true
      ? setCheckform(false)
      : checkform === false
      ? setCheckform(true)
      : setCheckform(false);
    setEditform({
      nickname: player.nickname,
      status: player.status,
      ranking: player.ranking,
      avatar: player.avatar,
      score: player.score,
    });
  };
  const handleSubmit = () => {
    dispatch(editPlayer(id, editform));
  };
  const handleChange = (e) => {
    setEditform({
      ...editform,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelect=(e)=> {
    setEditform({
      ...editform,
      [e.target.name]: e.target.value,
    });
  }

  // _____________________________________________________________________________

  return checkform === false ? (
    <ContEdit>
      {player ? (
        <div key={player.Id}>
          <div>
            <button
              type="button"
              onClick={() => dispatch(deletePlayer(player.Id))}
            >
              x
            </button>
          </div>
          <span>{player.nickname}</span>
          <img src={player.avatar} alt="" />
          <span>{player.status}</span>
          <span>{player.ranking}</span>
          <button onClick={onClick}>Edit</button>
        </div>
      ) : (
        <div>...loading...</div>
      )}
    </ContEdit>
  ) : (
    <ContEdit>
      {player ? (
        <IntoEdit key={player.Id} onSubmit={handleSubmit}>
          <img src={editform.avatar} alt="" />
          <div>
            <select
              type="text"
              name="avatar"
              className="input_form"
              onChange={(e) => handleSelect(e)}
            >
              <option value={null}></option>
              {avatars.map((e, id) => (
                <option key={id} value={e}>
                  {"Avatar " + (id + 1)}
                </option>
              ))}
            </select>
          </div>
          <div>
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
          <input
            type="text"
            name="nickname"
            placeholder={player.nickname}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="number"
            min="0"
            max="9999"
            name="ranking"
            placeholder={player.ranking}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">change</button>
          <button onClick={onClick}>cancel</button>
        </IntoEdit>
      ) : (
        <div>...loading...</div>
      )}
    </ContEdit>
  );
};
