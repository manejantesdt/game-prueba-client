import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ContForm, IntoForm } from "../styles/Form.js";

export const EditPlayer = (props) => {
  const { players } = useSelector((state) => state);
  const dispatch = useDispatch();
  let { id } = useParams();

  var filter = players.filter((e) => e.Id == id);

  return (
    <ContForm>
      {players ? (
        filter.map((e) => {
          return (
            <div key={e.Id}>
              <span>{e.nickname}</span>
              <img src={e.avatar} alt="" />
              <span>{e.status}</span>
              <button>Edit</button>
            </div>
          );
        })
      ) : (
        <div>...loading...</div>
      )}
    </ContForm>
  );
};
