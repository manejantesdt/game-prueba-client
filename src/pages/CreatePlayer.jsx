import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ContForm, IntoForm } from "../styles/Form.js";
import { createPlayer } from "../actions/index";
import default_avatar from "../assets/img/Avatars/avatar1.png";

function validate(player) {
  let errors = {};
  if (!player.nickname) {
    errors.nickname = "Campo obligatorio";
  }
  return errors;
}

export const CreatePlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { avatars, players } = useSelector((state) => state);
  const [player, setPlayer] = useState({
    nickname: "",
    status: "hierro",
    ranking: players.length + 1,
    avatar: "",
  });

  const handleSelect = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setPlayer((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    setErrors(
      validate({
        ...player,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
     e.preventDefault();
    if (player.nickname === "" || player.avatar === "") {
      return alert(
        "Por favor completa todos los campos para poder crear el personaje"
      );
    } else {
      dispatch(createPlayer(player));
      alert("Jugador creado correctamente!");
      navigate({ pathname: "/" });
    }
  };

  return (
    <ContForm>
      <div className="createPlayerAvatar">
        <div className="image">
          {!player.avatar ? (
            <img src={default_avatar} alt="Error" />
          ) : (
            <img src={player.avatar} alt="Error" />
          )}
        </div>
      </div>
      <div className="createPlayerForm">

        <IntoForm id="DoNotSubmit" onSubmit={(e) => handleSubmit(e)}>
          <div className="createData">
            <span className="letrero">Nombre:</span>
            <input
              className="input_form"
              type="text"
              placeholder="Escribe tu Nombre"
              name="nickname"
              maxLength="20"
              value={player.nickname}
              onChange={(e) => handleChange(e)}
            />
            {errors.nickname && <p className="error">{errors.nickname}</p>}
          </div>
          <div className="createData">
            <span className="letrero">Selecciona Avatar:</span>
            <select
              type="text"
              id="avatar"
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

          <div className="createData createButtons">
            <div className="createButton">
              <button className="button_form" type="submit" name="submit">
                Crear Jugador
              </button>
            </div>
            <div className="createButton">
              <Link to="/">
                <button className="button_form">Volver </button>
              </Link>
            </div>
          </div>
        </IntoForm>
      </div>
    </ContForm>
  );
};
