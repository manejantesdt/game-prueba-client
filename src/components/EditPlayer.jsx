import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ContEdit, IntoEdit } from "../styles/EditForm.js";

export const EditPlayer = (props) => {
  // ------------------------------<State>----------------------------------
  const { players } = useSelector((state) => state);
  const [checkform, setCheckform] = useState(false);
  const [editform, setEditform] = useState({
    nickname: "",
    avatar: "",
    status: "",
    ranking: 0,
  });
  // __________________________________________________________________________

  // ------------------------------<Variables>--------------------------------
  const dispatch = useDispatch();
  let { id } = useParams();
  var filter = players.filter((e) => e.Id == id);

  // _____________________________________________________________________________

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
  };

  // _____________________________________________________________________________

  return checkform === false ? (
    <ContEdit>
      {players ? (
        filter.map((e) => {
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
      {players ? (
        filter.map((e) => {
          return (
            <IntoEdit key={e.Id} >
              <img src={e.avatar} alt="" />
              <input type="text" placeholder={e.nickname} />
              <input type="text" placeholder={e.status} />
              <input type="number" min="0" max="9999" placeholder={e.ranking} />
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
