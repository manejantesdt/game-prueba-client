import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ContForm, IntoForm } from "../styles/Form.js";
import { createPlayer, getAvatar } from "../actions/index";
import default_avatar from "../img/Avatars/avataaars(1).png";

//------------------------< gestion errors >---------------------------

function validate(player) {
   let errors = {};
   if (!player.nickname) {errors.nickname = "Nickname is required"};
  return errors;
 }
// _____________________________________________________________________

export const CreatePlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate() 
  const [errors, setErrors] = useState({});          //genero un estado local errors y setErrors que va ser un objeto vacío  
  const avatars = useSelector((state) => state.avatars)
  // ------------------------< Uses react >-----------------------------
  const [player, setPlayer] = useState({
    nickname: "",
    status: "steel",
    avatar: [],
    ranking: 0,
  });

  useEffect (() => {
    dispatch(getAvatar());
},);
  
  // _____________________________________________________________________

  // ------------------------<variables>----------------------------------

  /* const avatars = [
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
  ]; */
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
    setErrors(validate({                 //seteame mi estado errores, pasándole la función validate de más arriba,
      ...player,                        //con el estado input y el e.target.name en el e.target.value
      [e.target.name] : e.target.value
  }));
  console.log(player)
  };


  function handleSubmit(e) {                  
    if (errors.nickname !== undefined || 
        errors.avatar !== undefined 
            )  {
        document.getElementById("DoNotSubmit"); //con document.getElementById() selecciono el form por medio del atributo id que le asigné ("DontSubmit")
        return alert("Please complete the fields with valid data");
      }
    const addPlayer= {
        nickname: player.nickname,
        avatar: player.avatar
    };
    e.preventDefault()                     //e.preventDefault() me permite prevenir el comportamiento por default de un submit (el comportamiento predeterminado) que en este caso es el envío del formulario
    dispatch(createPlayer(addPlayer))               //si no salió por ninguna de las validaciones incorrectas, entonces envío el formulario
    alert("Your player was successfully created!")
    setPlayer({                                    //seteo el input en cero otra vez
    name: "",        
    avatar: [], 
})                  
    window.location.reload(false);   
    navigate({ pathname: "/" })       
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

      <IntoForm  id="DoNotSubmit" onSubmit={(e) => handleSubmit(e)}>
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
          <button
            className="button_form"
            type="submit"
            name="submit"
           /*  onClick={(e) => onSubmit(e)} */
          >
            Create Player
          </button>
        </div>
        <div>
        <Link to="/"><button className="button_form" >Back </button></Link>
        </div>

      </IntoForm>
    </ContForm>
  );
};
