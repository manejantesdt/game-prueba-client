import styled from "styled-components";

export const ContNavBar = styled.div``;

export const LogoImg = styled.img`
  width: 25rem;
  margin-left: 2rem;
`;  

export const ContNav = styled.nav`
width: 50%;
height: 4rem;
margin: 0 auto;
margin-top: 3rem;
margin-bottom: 3rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
// background-color: #1f3a52;
// margin: 2rem 0;
// border: 1px solid #ccc;
${"" /* border-top: 1px solid #21212D; */}
`;

export const ContLogo = styled.div`
width: 100%;
height: 6rem;
background: #FF0075;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Ul = styled.ul`
.link {
    /* font-family: "Chakra Petch", sans-serif; */
    // font-family: 'Fjalla One', sans-serif;
    font-family: 'Orbitron', sans-serif;
    font-width: bold 500;
    text-decoration: none;
    font-size: 2rem;
    color: #fbf3e4;
    letter-spacing: 3px;
    // padding-left: 11.2rem;
    // padding-right: 11.2rem;
    height: 2rem;
    transition: 0.5s all;
    // border: 1px solid #ccc;

    :hover {
      // padding-left: 11.2rem;
      // padding-right: 11.2rem;
      height: 2rem;
      color: #77D970;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
     /*  background-color: #102132; */
    }

    :active{
      padding-left: 11.2rem;
      padding-right: 11.2rem;
      height: 2rem;
     /*  background-color: #102132; */
    }
  }
`;
