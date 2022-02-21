import React, { useEffect, useState } from "react";
import { StyledSpinner } from "../styles/Spinner";
import { BoldPlayersPagination } from "../styles/BoldPlayers";

export default function Spinner({ timer = false }) {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        setShowError(true);
      }, 5000);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!showError ? (
        <StyledSpinner>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StyledSpinner>
      ) : (
        <BoldPlayersPagination>
          <div className="returnContainer">
            <h2 className="returnContainerAux">No se encontraron jugadores</h2>
            <a href="/" className="BackHome">
              Volver al salón de la fama
            </a>
          </div>
        </BoldPlayersPagination>
      )}
    </>
  );
}
