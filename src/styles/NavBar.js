import styled from "styled-components";

export const ContNavBar = styled.div``;

export const LogoImg = styled.img`
  width: 20rem;
  margin-left: 2rem;
`;

export const ContNav = styled.nav`
display: flex;
flex-direction: row;
// background-color: #1f3a52;
align-items: center;
justify-content: center;
height: 4rem;
${"" /* border-top: 1px solid #21212D; */}
`;

export const ContLogo = styled.div`
background: #FF0075;
display: flex;
width: 100%;
height: 5rem;
align-items: center;
justify-content: space-around;
`;

export const Ul = styled.ul`
.link {
    /* font-family: "Chakra Petch", sans-serif; */
    font-family: Lato, Arial, Helvetica, sans-serif;
    font-width: bold 500;
    text-decoration: none;
    font-size: 1.5rem;
    color: #fbf3e4;
    padding-left: 11.2rem;
    padding-right: 11.2rem;
    height: 2rem;
    transition: 0.5s all;

    :hover {
      padding-left: 11.2rem;
      padding-right: 11.2rem;
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
