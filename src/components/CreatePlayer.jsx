import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ContForm, IntoForm } from "../styles/Form.js";
import { createPlayer, getAvatar } from "../actions/index";
import default_avatar from "../img/Avatars/avataaars(1).png";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); //genero un estado local errors y setErrors que va ser un objeto vacío
  const { avatars } = useSelector((state) => state);
  // ------------------------< Uses react >-----------------------------
  const [player, setPlayer] = useState({
    nickname: "",
    status: "hierro",
    ranking: 0,
    avatar: "",
  });

  // useEffect(() => {
  //   dispatch(getAvatar());
  // });

  // _____________________________________________________________________________________________

  // -----------------------------------< handles >------------------------------------------------
  function handleSelect(e) {
    setPlayer({
      ...player,
      avatar: e.target.value,
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        //seteame mi estado errores, pasándole la función validate de más arriba,
        ...player, //con el estado input y el e.target.name en el e.target.value
        [e.target.name]: e.target.value,
      })
    );

  }

  function handleSubmit(e) {
    if (errors.nickname !== undefined || errors.avatar !== undefined) {
      document.getElementById("DoNotSubmit"); //con document.getElementById() selecciono el form por medio del atributo id que le asigné ("DontSubmit")
      return alert("Please complete the fields with valid data");
    }
    // const addPlayer = {
    //   nickname: player.nickname,
    //   avatar: player.avatar,
    // };
    e.preventDefault();
    dispatch(createPlayer(player)); 
    alert("Your player was successfully created!");
    window.location.reload(false);
    navigate({ pathname: "/" });
  }
  // _______________________________________________________________________________________________

  return (
    <ContForm>
      <div className="image">
        {!player.avatar ? (
          <img src={default_avatar} alt="Error" />
        ) : (
          <img src={player.avatar} alt="Error" />
        )}
      </div>

      <IntoForm id="DoNotSubmit" onSubmit={(e) => handleSubmit(e)}>
        <div>
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
          <span>Choose Avatar:</span>
          <select
            type="text"
            name="avatar"
            className="input_form"
            onChange={(e) => handleSelect(e)}
          >
            <option value={null}></option>
            {avatars.map((e, id) => (
              <option key={id} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button className="button_form" type="submit" name="submit">
            Create Player
          </button>
        </div>
        <div>
          <Link to="/">
            <button className="button_form">Back </button>
          </Link>
        </div>
      </IntoForm>
    </ContForm>
  );
};
