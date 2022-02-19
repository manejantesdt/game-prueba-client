import styled from "styled-components";
import flags from "../img/flags.png";
import confetti from "../img/confetti.gif";

export const StyledHome = styled.main`
  .jugador {
    background-color: red;
    width: 200px;
    height: 210px;
    font-family: "Russo One", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    margin: 0 10px;
    border-radius: 0.8rem;
    background-color: #ffffff20;
    border-left: 1px solid #ffffff35;
    border-bottom: 1px solid #ffffff35;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
    transition: all 0.5s;

    h3 {
      width: 100%;
      height: 20px;
      margin-bottom: var(--spacing);
      color: white;
      font-weight: normal;
      margin-bottom: 5px;
      // border: thin dotted rgb(0, 255, 98);
    }

    .avatar {
      width: 120px;
      height: 85px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all;
    }

    .avatar:hover {
      transform: scale(1.1);
      filter: drop-shadow(0 5px 15px #00000080);
    }

    .avatarStatus {
      width: 100%;
      color: #d4ac2b;
      margin-bottom: 5px;
    }

    .avatarRanking {
      width: 100%;
      color: #ff0075;
    }

    .btnClose {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      left: 80px;
      top: -5px;
    }

    button:first-child {
      width: 25px;
      height: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      $color: #ff0075;
      color: #fff;
      background-color: $color;
      border-radius: 25px;
      border: none;
      transition: all 0.3s;

      &:hover {
        background-color: darken($color, 15);
        cursor: pointer;
        transform: translateY(-3px);
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
      }
    }

    button:nth-child(2) {
      background: rgb(83, 87, 90);
      color: white;
      border: 1px solid var(--color);

      &:hover {
        background-color: rgb(58, 62, 65);
        color: #fff;
      }
    }
  }

  .jugador:hover {
    transform: translateY(5px);
    background-color: #ffffff18;
  }

  //----- Titular -----//
  .titular,
  .suplente {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s;

    img {
      margin-bottom: 0;
    }

    div {
      position: relative;
    }

    p {
      color: #fff;
      background-color: rgba(#000, 0.5);
      padding: 0 1rem;
      line-height: 2;
      border-radius: 1rem;
      font-size: 0.9rem;
    }

    button {
      $color: #e40320;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      color: #fff;
      width: 1.15rem;
      height: 1.15rem;
      border-radius: 50%;
      background-color: $color;
      display: none;

      &:hover {
        background-color: darken($color, 5);
      }
    }

    &:hover {
      button {
        display: flex;
      }
    }
  }

  //----- Cancha de futbol -----//
  .cancha {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

    .imgPodio {
      width: 90%;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      background-image: url(${flags});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      // border: thin dotted rgb(111, 0, 255);
    }

    .podioPlace {
      margin: 1.5rem;
      width: 250px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      // border: 1px solid #000;
    }

    .podioPlace:hover {
      cursor: pointer;
      background-image: url(${confetti});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    .titular {
      position: absolute;

      img {
        border: 2px solid #000;
        height: 20rem;
        position: center;
      }

      p {
        @media screen and (max-width: 640px) {
          display: none;
        }
      }
    }
  
`;
