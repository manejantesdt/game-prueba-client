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
    <>
      <h2 
        style={{
          width: 500,
          margin: '0 auto', 
          color: 'white',
          textAlign: 'center',
          marginTop: 60,
          color: '#FF0075',
          letterSpacing: 20,
          textTransform: 'uppercase',
        }}>
          Player Details
      </h2>
      <ContEdit>
        {player ? (
            <div key={player.Id} className="DetailContainer">
              <div className="CloseDetail">
                <button 
                  className="btnCloseDetail"
                  type="button" 
                  onClick={() => dispatch(deletePlayer(player.Id))} >
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
                  </div>

                  <div className="detail">
                    <p>Ranking:</p>
                    <span>{player.ranking}</span>
                  </div>

                  <button 
                    className="btnEditPlayer"
                    onClick={onClick}
                    >
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
        margin: '0 auto', 
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        color: '#FF0075',
        letterSpacing: 20,
        textTransform: 'uppercase',
      }}>
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
              <option value={null}></option>
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
              max="9999"
              name="ranking"
              placeholder={player.ranking}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="editButtons">
            <button type="submit" className="btnChange">Change</button>
            <button onClick={onClick} className="btnChange">Cancel</button>
          </div>

        </IntoEdit>
      ) : (
        <div>...loading...</div>
      )}
    </ContEdit>
    </>
  );
};
