import styled from "styled-components";

const media = {
  xs: '@media(max-width: 480px)',
  sm: '@media(min-width: 481px) and (max-width: 768px)',
  md: '@media(min-width: 769px) and (max-width: 992px)',
  lg: '@media(min-width: 993px) and (max-width: 1200px)',
  xlg: '@media(min-width: 1201px) and (max-width: 1920px)',
  ulg: '@media(min-width: 1921px) and (max-width: 2560px)',
}

export const ContNavBar = styled.div`

  ${media.xs}{
    background-color: transparent;
  }




`;

export const ContLogo = styled.div`
  width: 100%;
  height: 6rem;
  background: #FF0075;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  ${media.xs}{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    // border: 1px solid #ccc;
    
    .sidebarMenu{
      margin-left: 10%;
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

  }

  ${media.lg}{
    .sidebarMenu{
      display: none;
    }
  }

  ${media.xlg}{
    .sidebarMenu{
      display: none;
    }
  }
`;

export const LogoImg = styled.img`
  width: 25rem;
  margin-left: 2rem;

  ${media.xs}{
    width: 18rem;
    margin-right: 10%;
    // border: 1px solid #000;
  }


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
  
  // ${media.xs}{
  //   width: 100%;
  //   height: 200px;
  //   position: absolute;
  //   top: -250px;
  //   flex-direction: column;
  //   background-color:#ffffff;
  //   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  //   transition: 0.5s all;

  // }
  
  `;

export const Ul = styled.ul`
  .link {
    font-family: 'Orbitron', sans-serif;
    font-width: bold 500;
    text-decoration: none;
    font-size: 2rem;
    color: #fbf3e4;
    letter-spacing: 3px;
    height: 2rem;
    transition: 0.5s all;
    // border: 1px solid #ccc;
    
    // ${media.xs}{
    //   font-size: 1.3rem;
    //   color: #ccc;
      
    //   &:hover {
    //     // height: 2rem;
    //     color: #77D970;
    //     text-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
    //   }
    // }

      &:hover {
        height: 2rem;
        transform: translateY(-5px);
        color: #77D970;
        text-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
      }
  }
`;
