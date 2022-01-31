import styled from "styled-components";

export const SearchBarSection = styled.form`
  h1, h2, h3 {
  margin-bottom: 1rem;
/*   margin-left: 1rem; */
color: #102132;
 /*  color: #FBF3E4; */
}

a{
  text-decoration: none;
  list-style-type: none;
  color: #1F3A52;
}

hr{
  color: #1F3A52;
}

  article{
  display:grid;
  grid-template-columns: 20% 60% 20%;
 /*  display: flex;
    flex-direction: row; */
    justify-content: space-around;
    padding: 3%;
margin-top: 10%; 
position: absolute;
margin-left: 438px; 
margin-top: 70px;
width: 814px;
/* height: 1900px; */
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
}

  p {
  text-align: justify;
  margin-bottom: 1rem;
  margin-top: 1rem;
  /* color: #102132; */
  color: #311601;
}

li {
    color: #311601;
   /*  color: #102132; */
}

.button {
    width: 140px;
    height: 30px;
    border: none;
    font-size: .98rem;
    position: right;
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
      color: #311601;
  }
`;