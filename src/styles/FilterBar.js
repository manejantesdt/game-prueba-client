import styled from "styled-components";

export const StyledFilterBar = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 4rem;
  padding: 0.5rem 1rem;

  .filter-container {
    display: flex !important;
    gap: 10px !important;
    flex-direction: column;
    max-width: 300px;
    width: 90%;

    p {
      color: #fff;
      font-size: 1.2rem;
      text-align: center;
    }

    select{
        width: 100%;
        height: 30px;
        border: none;
        cursor: pointer;
        padding: 5px;
        margin-top: 5px;
        border-radius: 5px;
        text-decoration: none;
        transition: all 0.3s;
        &:hover {
          background-color: #77D970;
        }
        &:focus { 
          background-color: #fff;
          outline: 2px solid #77D970;
        }
    }
  }
`;
