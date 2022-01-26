import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, quitarSuplente }) => (
  <section>
    <h2>Bold Players</h2>
    <div className="suplentes">
      {suplentes.map((j) => (
        <article className="suplente" key={j.Id}>
          <div>
            <img src={j.avatar} alt={j.nickname} />
            <button onClick={() => quitarSuplente(j)}>X</button>
          </div>
          <p>{j.nickname}</p>
          <p>{j.status}</p>
          <p>{j.ranking}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({
  quitarSuplente(jugador) {
    dispatch({
      type: "QUITAR_SUPLENTE",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
