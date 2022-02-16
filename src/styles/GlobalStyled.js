import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;  
  overflow: #FBF3E4;
}



a{
  text-decoration: none;
  list-style-type: none;
}

Link{
  text-decoration: none;
  list-style-type: none;
}

body{
  font-family: sans-serif;
  background: #172774;
  position: center;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  text-decoration: none;
  font-family: Lato, Arial, Helvetica, sans-serif;
}

h1 {
  color: #fbf3e4;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-family: Lato, Arial, Helvetica, sans-serif;
}

h6{
  color: #fbf3e4;
}

hr{
  color: #FBF3E4;
}


${'' /* h2 {
  margin-bottom: 1rem;
  color: #FBF3E4;
} */}

${'' /* section {
  margin-bottom: 4rem;
  padding: 1rem;
  background: #FBF3E4;
  border-radius: 8px;
} */}

.contenedor-jugadores {
  // overflowY: hidden;
  overflow: auto;
  padding-bottom: 2rem;
  // border: 1px solid #00f;
}

.contenedor-jugadores::-webkit-scrollbar {
  -webkit-appearance: none;
}

.contenedor-jugadores::-webkit-scrollbar:horizontal {
  height: 10px;
}

.contenedor-jugadores::-webkit-scrollbar-thumb {
  background-color: #ffffff15;
  border-radius: 20px;
}

.contenedor-jugadores::-webkit-scrollbar-track {
  border-radius: 10px;  
}

.contenedor-jugadores::-webkit-scrollbar-thumb:active {
  background-color: #ffffff40;
  cursor: pointer;
}

.Players{
  width: 88%;
  height: 330px;
  margin: 0 auto;
  margin-top: 20px;
  color: #fff;
  font-family: 'Russo One', sans-serif;
  overflowX: scroll;
  text-align: center;
  // border: 1px solid #fff;
}

.Players h2{
  height: 50px;
  color: #FF0075;
  letter-spacing: 20px;
  text-transform: uppercase;
}

section > div:not(.cancha):not(.contenedor-jugadores) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(6, 1fr);
  }
}

article img {
  --size: 4.5rem;
  width: var(--size);
  height: var(--size);
  object-fit: cover;
  border-radius: 100%;
  margin-bottom: var(--spacing);
}

`;

export default GlobalStyle;