import styled from "styled-components";

export const ContNavBar = styled.div``;

export const LogoImg = styled.img`
  width: 20rem;
  margin-left: 2rem;
`;

export const ContNav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #1f3a52;
  align-items: center;
  justify-content: center;
  height: 2rem;
  ${"" /* border-top: 1px solid #21212D; */}
`;

export const ContLogo = styled.div`
  background: #102132;
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: space-around;
`;

export const Ul = styled.ul`
  .link {
    font-family: "Chakra Petch", sans-serif;
    font-width: bold 500;
    text-decoration: none;
    font-size: 1.5rem;
    color: #fbf3e4;
    padding-left: 11.2rem;
    padding-right: 11.2rem;
    height: 2rem;

    :hover {
      padding-left: 11.2rem;
      padding-right: 11.2rem;
      height: 2rem;
      background-color: #102132;
    }

    :active{
      padding-left: 11.2rem;
      padding-right: 11.2rem;
      height: 2rem;
      background-color: #102132;
    }
  }
`;
