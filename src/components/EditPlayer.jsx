import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { ContEdit, IntoEdit } from "../styles/EditForm.js";
import { getPlayerId, editPlayer, deletePlayer } from "../actions/index";
import { DetailPlayer } from "./DetailPlayer.jsx";

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
  var { player, avatars } = useSelector((state) => state);
  const navigate = useNavigate();
  player = player[0];
  var { id } = useParams();
  const dispatch = useDispatch();
  const [checkform, setCheckform] = useState(false);
  const [error, setError] = useState({});
  const [editform, setEditform] = useState({
    nickname: player.nickname,
    avatar: player.avatar,
    score: player.score,
    ranking: player.ranking,
    status: player.status,
  });
  id = parseInt(id);

  const handleSelect = (e) => {
    setEditform({
      ...editform,
      [e.target.name]: e.target.value,
    });
  };
  const onClickCancel = () => {
    setEditform({});
    checkform === false ? setCheckform(true) : setCheckform(false);
  };

  const onClick = () => {
    dispatch(getPlayerId(id));
    dispatch(editPlayer(id, editform));
    setCheckform(true);
    alert("Jugador Editado exitosamente");
    window.location.reload(true);
  };
  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deletePlayer(id));
    alert("Jugador Borrado Exitosamente");
    navigate({ pathname: "/" });
  };

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
      alert("Errores, revisar información");
    }
  };

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
  return checkform === false ? (
    <>
      <ContEdit>
        <h2 className="DetailPlayerTitle">
          Editar Detalles del Jugador
        </h2>
        {player ? (
          <IntoEdit key={player.Id} onSubmit={handleSubmit}>
            <button className="deleteButton" onClick={onDelete}>x</button>
            <img src={editform.avatar} alt="Ávatar" className="editAvatar" />

            <div className="editPlayerAvatar">
              <p>Avatar</p>
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
                <option value={null}>{player.status}</option>
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
                min="0"
                placeholder={parseInt(player.score)}
                onChange={(e) => handleChange(e)}
              />
              {error.score && <p>{error.score}</p>}
            </div>

            {error.name && <p>{error.name}</p>}

            <div className="editButtons">
              <button onClick={onClick} type="submit" className="btnChange">
                {/* <button onClick={onClick} onSubmit={handleSubmit} type="submit" className="btnChange"> */}
                Cambiar
              </button>
              <button onClick={onClickCancel} className="btnChange">
                Cancelar
              </button>
            </div>
          </IntoEdit>
        ) : (
          <div>...Log in o credenciales de administración requeridas...</div>
        )}
      </ContEdit>
    </>
  ) : (
    <DetailPlayer />
  );
};
