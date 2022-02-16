import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IntoForm } from "../styles/Form.js";
import { setOrder, setStatus, searchPlayers } from "../actions/index";

export const FilterBar = () => {
  const dispatch = useDispatch();
  const { nickname, status, order } = useSelector((state) => state);

  function handleOrder(e) {
    dispatch(searchPlayers({ nick_name:nickname, status, order: e.target.value }));
    dispatch(setOrder(e.target.value));
  }
  function handleStatus(e) {
    dispatch(searchPlayers({ nick_name:nickname, status: e.target.value, order }));
    dispatch(setStatus(e.target.value));
  }

  return (
    <IntoForm>
      <p>Filtrar por Status</p>
      <select className="input_form" onChange={handleStatus} name="status">
        <option value="">Todos</option>
        <option value="oro">Oro</option>
        <option value="plata">Plata</option>
        <option value="bronce">Bronce</option>
        <option value="hierro">Hierro</option>
      </select>

      <p>Ordenar por Ranking</p>
      <select className="input_form" onChange={handleOrder} name="order">
        <option value="">Todos</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </IntoForm>
  );
};
