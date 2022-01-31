import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IntoForm } from "../styles/Form.js";
import { setOrder, setStatus, getPlayers } from "../actions/index";

export const FiltrosBar = () => {
  const dispatch = useDispatch();
  const { nick_name, status, order } = useSelector((state) => state);

  function handleOrder(e) {
    dispatch(getPlayers({ nick_name, status, order: e.target.value }));
    dispatch(setOrder(e.target.value));
  }
  function handleStatus(e) {
    dispatch(getPlayers({ nick_name, status: e.target.value, order }));
    dispatch(setStatus(e.target.value));
  }

  return (
    <IntoForm>
      <select className="input_form" onChange={handleOrder} name="status">
        <option value="">All</option>
        <option value="oro">Oro</option>
        <option value="plata">Plata</option>
        <option value="bronce">Bronze</option>
      </select>

      <select className="input_form" onChange={handleStatus} name="order">
        <option value="">All</option>
        <option value="asc">ascendente</option>
        <option value="desc">descendente</option>
      </select>
    </IntoForm>
  );
};
