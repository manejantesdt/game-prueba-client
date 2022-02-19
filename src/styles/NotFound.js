import styled from "styled-components";

export const ContNotFound = styled.div`
    width: 100%;
    height: 80%;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    img{
        width: 60%;
    }

    .buttonBack{
        margin-top: 30px;
        padding: .7rem 3rem;
        border: none;
        background-color: #FF0075;
        color: white;
        border-radius: 5px;
        transition: 0.5s all;
  
        &:hover {
          cursor: pointer;
          background-color: #041562;
          box-shadow: 0 3px 10px rgba(44, 11, 34, 0.4);
          transition-delay: 0.2s;
          color: #fff;
      }

`;