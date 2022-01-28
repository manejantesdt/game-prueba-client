import styled from "styled-components";



export const ContForm = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-around;
margin-top: 10%; 
position: absolute;
margin-left: 338px;
margin-top: 70px;
width: 814px;
height: 300px;
outline: none;
border-radius: 15px;
background-color: #fdf6fc73;
backdrop-filter: 1px;
box-shadow:0 0 2px #2a8ce1, 0 0 2px #3a6351, 0 0 2px #e40320;

&:hover{
    box-shadow: 0 0 10px rgba(44, 11, 34, 0.404), 0 0 10px rgba(44, 11, 34, 0.404), 0 0 10px rgba(44, 11, 34, 0.404); 
    transition-delay: 0.2s;
    transition: 0.8s; 
}
.image{
    padding: 5%;
}


`;

export const IntoForm = styled.form`
  margin-top: 10px;
  font-size: 14px;
  color: #311601;
  font-weight: bolder;
  display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

  .input_form {
    border: none;
    cursor: pointer;
    padding: 5px;
    margin-top: 5px;
    border-radius: 5px;
    width: 268px;
    margin: 7px;
    text-align: left;
    textdecoration: none;
    &:hover {
      background-color: #ffffcc73;
    }
  }
  .button_form {
    width: 122px;
    height: 30px;
    margin-left: 20px;
    border: none;
    background-color: #de6200;
    color: white;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #fdf6fc73;
      box-shadow: 0 0 5px rgba(44, 11, 34, 0.404),
        0 0 5px rgba(44, 11, 34, 0.404), 0 0 5px rgba(44, 11, 34, 0.404);
      transition-delay: 0.2s;
      transition: 0.8s;
    }
  }
  .error {
    color: #FF0000;
    text-align:center;
    font-size: 14px;
  }
`;



