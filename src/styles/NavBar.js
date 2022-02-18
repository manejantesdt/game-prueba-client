import styled from "styled-components";

const media = {
  xs: '@media(max-width: 480px)',
  sm: '@media(min-width: 481px) and (max-width: 768px)',
  md: '@media(min-width: 769px) and (max-width: 992px)',
  lg: '@media(min-width: 993px) and (max-width: 1200px)',
  xlg: '@media(min-width: 1201px) and (max-width: 1920px)',
  ulg: '@media(min-width: 1921px) and (max-width: 2560px)',
}

const customMedia = (maxWidth, minWidth) => {
  if(maxWidth && !minWidth) return `@media (max-width: ${maxWidth})`;
  if(minWidth && !maxWidth) return `@media (min-width: ${minWidth})`;
  return `@media (min-width: ${minWidth}) and (max-width: ${maxWidth})`;
}

export const ContNavBar = styled.div`

  ${media.xs}{
    background-color: transparent;
  }




`;

export const ContLogo = styled.div`
  width: 100%;
  // height: 6rem;
  padding: 1rem 0.5rem;
  background: #FF0075;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
    
    .sidebarMenu{
      margin-left: 10%;
      display: none !important;
    }

    .btnMenuMobile{
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: none;
    }
    
    .iconMenu{
      font-size: 34px;
      color: #fff;
      // border: 1px solid #ccc;
    }

    form{
      position: relative;
      max-width: 30rem;
      width: 90%;
      order: 2;
    }

    a{
      max-width: 20rem;
      width: 70%;
    }
   
    button{
      border: none;
      border-radius: 5px;
      color: #fff;
      background-color: #172774;
      font-size: 1.2rem;
      outline: none;
      padding: .8rem 2rem;
    }
    
    ${media.xs}{
      button{
      font-size: 1rem;
      padding: 0.5rem 1.2rem;
    }
  }

  ${customMedia(null, '767px')}{
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: .5rem 2rem;
    
    form{
      order: 0;
      width: 30%;
    }

  }
`;

export const LogoImg = styled.img`
  width: 100%;
  // width: 25rem;
  // margin-left: 2rem;

  ${media.xs}{
    // width: 100%;
    // margin-right: 10%;
    // border: 1px solid #000;
  }


`;  

export const ContNav = styled.nav`
  margin: 3.5rem auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  text-align: center;
  max-width: 75rem;
  width: 90%;
`;

export const Ul = styled.ul`
  .link {
    font-family: 'Orbitron', sans-serif;
    font-width: bold 500;
    font-size: 1.8rem;
    color: #fbf3e4;
    letter-spacing: 2px;
    transition: 0.5s all;
    // border: 1px solid #ccc;
    
     ${customMedia("740px")}{
       font-size: 1rem;
    }

    
    &:hover {
      height: 2rem;
      transform: translateY(-5px);
      color: #77D970;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
    }
  }
  .active{
    color: #77D970;
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  }
`;
