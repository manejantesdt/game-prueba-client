import styled from "styled-components";

const media = {
  xs: '@media(max-width: 480px)',
  sm: '@media(min-width: 481px) and (max-width: 768px)',
  md: '@media(min-width: 769px) and (max-width: 992px)',
  lg: '@media(min-width: 993px) and (max-width: 1200px)',
  xlg: '@media(min-width: 1201px) and (max-width: 1920px)',
  ulg: '@media(min-width: 1921px) and (max-width: 2560px)',
}

export const SearchBarSection = styled.form`

  ${media.xs}{
      display: none;
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
  justify-content: space-around;
  padding: 3%;
  margin-top: 10%; 
  position: absolute;
  margin-left: 438px; 
  margin-top: 70px;
  width: 814px;
  outline: none;
  border-radius: 15px;
  background-color: #fdf6ffffc73;
  backdrop-filter: 1px;
  box-shadow:0 0 2px #2a8ce1, 0 0 2px #3a6351, 0 0 2px #e40320;

  &:hover{
      box-shadow: 0 0 10px rgba(44, 11, 34, 0.404), 0 0 10px rgba(44, 11, 34, 0.404), 0 0 10px rgba(44, 11, 34, 0.404); 
      transition-delay: 0.2s;
      transition: 0.8s; 
  }
}

// p {
//   text-align: justify;
//   margin-bottom: 1rem;
//   margin-top: 1rem;
//   color: #311601;
// }

// li {
//     color: #311601;
// }

.inputSearch {
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 0 10px;
  margin-right: 10px;
  &:focus{
    outline: solid 1px #77D970;
  }
}

.button {
  width: 140px;
  height: 30px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  background-color: #b42769;
  color: #fff;
  border-radius: 10px;
  transition: 0.5s all;
  &:hover {
    background-color: #172774;
    // transition-delay: 0.2s;
  color: #fff;
  box-shadow: 0 3px 10px 0 rgba(0,0,0,0.5);
  cursor: pointer;
  }
}

// .LinkSearch {
//   color: #fff;
// }

// .LinkSearch:hover{
//   color: #fff;
// }
`;