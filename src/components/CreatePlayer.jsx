import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ContForm, IntoForm } from "../styles/Form.js";
import { createPlayer } from "../actions/index";
import default_avatar from "../img/Avatars/avatar1.png";


//------------------------< gestion errors >---------------------------

function validate(player) {
  let errors = {};
  if (!player.nickname) {
    errors.nickname = "Nickname is required";
  }
  return errors;
}
// _____________________________________________________________________

export const CreatePlayer = () => {
  // --------------------<variables de estado>---------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { avatars, players } = useSelector((state) => state);
  // ___________________________________________________________________

  // ------------------------< Uses react >-----------------------------
  const [player, setPlayer] = useState({
    nickname: "",
    status: "hierro",
    ranking: players.length + 1,
    avatar: "",
  });

  // _____________________________________________________________________________________________

  // -----------------------------------< handles >------------------------------------------------
  const handleSelect = (e) => {
    console.log(player)
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    console.log(player)
    setPlayer((prevState) => {
      return{
          ...prevState,
          [e.target.name] : e.target.value
      }
    })
    setErrors(validate({
        ...player,
        [e.target.name] : e.target.value
    }))
    // e.preventDefault();
    // setPlayer({
    //   ...player,
    //   [e.target.name]: e.target.value,
    // });
    // setErrors(
    //   validate({
    //     ...player,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  };

  const handleSubmit = (e) => {
    console.log("nombre: ",errors.nickname)
    if (errors.nickname !== undefined || errors.avatar !== undefined) {
      document.getElementById("DoNotSubmit");
      return alert("Por favor completa todos los campos para poder crear el personaje");
    }
    e.preventDefault();
    dispatch(createPlayer(player));
    alert("Jugador creado correctamente!");
    window.location.reload(false);
    navigate({ pathname: "/" });
  };
  // _______________________________________________________________________________________________

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
              maxlength="20"
              value={player.nickname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {
            errors.nickname && <div className="error">
              <p >{errors.nickname}</p>
            </div>
          }
            {/* <div className="error">
              {errors.nickname && <p >{errors.nickname}</p>}
            </div> */}

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

          <div className="createData">
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



      {/* <div className="image">
        {!player.avatar ? (
          <img src={default_avatar} alt="Error" />
        ) : (
          <img src={player.avatar} alt="Error" />
        )}
      </div>

      <IntoForm id="DoNotSubmit" onSubmit={(e) => handleSubmit(e)}>
        <div className="createDiv">
          <span>Nickname:</span>
          <input
            className="input_form"
            type="text"
            placeholder="Enter Nickname"
            name="nickname"
            value={player.nickname}
            onChange={(e) => handleChange(e)}
          />
          {errors.nickname && <p className="error">{errors.nickname}</p>}
        </div>

        <div>
          <span>Selecciona tu Avatar:</span>
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
          <button className="button_form" type="submit" name="submit">
            Crear Jugador
          </button>
        </div>
        <div>
          <Link to="/">
            <button className="button_form">Volver </button>
          </Link>
        </div>
      </IntoForm> */}
    </ContForm>
  );
};
