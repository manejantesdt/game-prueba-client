import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ContEdit, IntoEdit } from "../styles/EditForm.js";
import { getPlayerId, editPlayer } from "../actions/index";

export const EditPlayer = (props) => {
  // ------------------------------<Variables>--------------------------------
  const { player, avatars } = useSelector((state) => state);
  const dispatch = useDispatch();
  var { id } = useParams();

  // _____________________________________________________________________________
  // ------------------------------<State>----------------------------------
  const [checkform, setCheckform] = useState(false);
  const [editform, setEditform] = useState({
    nickname:player.nickname,
    status: player.status,
    ranking: player.ranking,
    avatar: player.avatar,
  });
  useEffect(() => {
    dispatch(getPlayerId(id));
  }, [dispatch, id]);
  // __________________________________________________________________________

  // ------------------------------<Functions>---------------------------------
  const onClick = () => {
    checkform === true
      ? setCheckform(false)
      : checkform === false
      ? setCheckform(true)
      : setCheckform(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPlayer(id, editform));
  };
  const handleChange = (e) => {
    setEditform({
      ...editform,
      [e.target.name]: e.target.value,
    });
  };
  function handleSelect(e) {
    setEditform({
      ...editform,
      [e.target.name]: e.target.value,
    });
  }
 console.log('soy el player',editform);
  // _____________________________________________________________________________

  return checkform === false ? (
    <ContEdit>
      {player ? (
        player.map((e) => {
          return (
            <div key={e.Id}>
              <span>{e.nickname}</span>
              <img src={e.avatar} alt="" />
              <span>{e.status}</span>
              <span>{e.ranking}</span>
              <button onClick={onClick}>Edit</button>
            </div>
          );
        })
      ) : (
        <div>...loading...</div>
      )}
    </ContEdit>
  ) : (
    <ContEdit>
      {player ? (
        player.map((e) => {
          return (
            <IntoEdit key={e.Id} onSubmit={handleSubmit}>
              <img src={e.avatar} alt="" />
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
                  <option value={null}></option>
                  <option value="oro">Oro</option>
                  <option value="bronce">Bronce</option>
                  <option value="plata">Plata</option>
                  <option value="hierro">Hierro</option>
                </select>
              </div>
              <input
                type="text"
                name="nickname"
                placeholder={e.nickname}
                onChange={(e) => handleChange(e)}
              />
          
              <input
                type="number"
                min="0"
                max="9999"
                name="ranking"
                placeholder={e.ranking}
                onChange={(e) => handleChange(e)}
              />
              <button type="submit">change</button>
              <button onClick={onClick}>cancel</button>
            </IntoEdit>
          );
        })
      ) : (
        <div>...loading...</div>
      )}
    </ContEdit>
  );
 
};
