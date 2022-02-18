import styled from "styled-components";

export const StyledPaged = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  max-width: 320px;
  width: 90%;

  // @media (max-width: 420px) {
  //   flex-wrap: wrap;
  // }

  button {
    background-color: #ff0075;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    padding: 8px 1.5rem;
    text-align: center;
    transition-delay: 0.2s;
    transition: 0.8s;

    svg {
      width: 2rem;
      height: 2rem;
    }

    :hover {
      background-color: #77d970;
      transform: translateY(-3px);
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    }
    :active {
      background-color: #479a41;
      transform: translateY(0px);
    }
  }
  .currentPage{
    background-color: #fff;
    border: 1px solid #fff;
    color: #ff0075;
    cursor: auto;
    
    &:hover{
      background-color: #fff;
      transform: none;
    }
  }
`;
