import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContForm, IntoForm } from "../styles/Form.js";

// ------------------------< gestion errors >------------------------

function validate(player) {
  const errors = {};
  if (!player.nickname) errors.name = "Nickname is required";
  return errors;
}

export const CreatePlayer = () => {
  const [player, setPlayer] = useState({
    nickname: "",
    status: "steel",
    avatar: "",
    ranking: 0,
  });

  const { form } = useSelector((state) => state);
  // const useDispatch = useDispatch();

  const avatar = [
    "https://drive.google.com/thumbnail?id=1FvgHhPmYNwruvKSjok1dp-ikpKVD2O5z",
    "https://drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b",
    "https://drive.google.com/thumbnail?id=1Wuh2EYq9-txwdlUqVt82zm9egwXCMlhh",
    "https://drive.google.com/thumbnail?id=1fpl6FOG7Gi-X4oHH-dAm3b0UGDYJE9Jr",
    "https://drive.google.com/thumbnail?id=1MxwSwrdTZaQyufL830XhOnM_Me1_q3_h",
    "https://drive.google.com/thumbnail?id=1wy_udY0W2rebTfKDYVClfAbWewWqfzmd",
    "https://drive.google.com/thumbnail?id=1XAO68EZU0CfytEmqr5OYaPkP52RRewd6",
    "https://drive.google.com/thumbnail?id=1TUfAaVfZgGee0UKQK8bxJziDKc31Xdet",
    "https://drive.google.com/thumbnail?id=16wM4CZgYPCCiGmHxLmMbAXG7BkBcybH-",
    "https://drive.google.com/thumbnail?id=1N_68Jhs4pM3i8Njj3teLdaOVRu9KQHbK",
    "https://drive.google.com/thumbnail?id=1ZhFz6JMOtT3107w-z2KuO0PZMOKEzIYx",
    "https://drive.google.com/thumbnail?id=1gqJ8yhqsmyQ5sJcLIFGt-DmN_5mDyBu-",
  ];

  // -----------------------------------< handles >------------------------------------------------
  function handleSubmit(e) {
    e.preventDefault();
  }

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
  }
  // _______________________________________________________________________________________________

  return (
    <ContForm>
      <div className="image">
        <img src={player.avatar} alt="Avatar" />
      </div>
      <IntoForm>
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
        </div>

        {/* {errors.nickname && <p className="error">{errors.nickname}</p>} */}

        <div>
          <span>Avatar:</span>
          <select
            type="text"
            name="avatar"
            className="input_form"
            onChange={(e) => handleSelect(e)}
          >
            {avatar.map((e, id) => (
              <option key={id} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            className="button_form"
            type="submit"
            name="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Create Player
          </button>
        </div>
      </IntoForm>
    </ContForm>
  );
};
