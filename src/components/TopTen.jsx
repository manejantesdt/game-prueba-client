import React from "react";
import { connect } from "react-redux";
import fondo from "../img/teatro.png";
import { TopTenSection } from "../styles/TopTen";

const TopTen = ({ titulares, quitarTitular }) => (
  <TopTenSection>
    <h2>Top Ten</h2>
    <div className="cancha">
      {titulares.map((j) => (
        <article className="titular" key={j.Id}>
          <div>
            <img src={j.avatar} alt={j.nickname} />
            <button onClick={() => quitarTitular(j)}>X</button>
          </div>
          <p>{j.nickname}</p>
          <p>{j.status}</p>
          <p>{j.ranking}</p>
        </article>
      ))}
      <img src={fondo} alt="fondo" />
    </div>
  </TopTenSection>
);

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: "QUITAR_TITULAR",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTen);
