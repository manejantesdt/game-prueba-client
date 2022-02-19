import styled from "styled-components";

const media = {
  xs: '@media(max-width: 480px)',
  sm: '@media(min-width: 481px) and (max-width: 768px)',
  md: '@media(min-width: 769px) and (max-width: 992px)',
  lg: '@media(min-width: 993px) and (max-width: 1200px)',
  xlg: '@media(min-width: 1201px) and (max-width: 1920px)',
  ulg: '@media(min-width: 1921px) and (max-width: 2560px)',
}

export const AboutSection = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ${media.ulg}{
    max-width: 1300px;
  }

  /******************* ABOUTINFO **********************/
  
  .aboutInfo{
    width: 100%;
    border-radius: 15px;
    background-color: #ffffff20;
    box-shadow:0 0 2px #2a8ce1, 0 0 2px #3a6351, 0 0 2px #e40320;
    padding: 2% 6%;
    margin-bottom: 30px;
    
    ${media.ulg}{
      width: 100%;
      height: 90%;
    }
    
    
    h2{
      color: #ffffff;
      font-size: 2rem;
      text-align: center;
      padding: 1rem 0;
      
      ${media.ulg}{
        height: 40px;
        margin-bottom: 20px;
      }
      
    }
    
    strong{
      color: #ffffff;
      font-style: italic;
    }
    
    p{
      color: #ffffff97;
      text-align: justify;
      font-size: 1.2rem;
      margin-bottom: 20px;
    }

    .buttonBack{
      padding: .7rem 3rem;
      border: none;
      background-color: #b42769;
      color: white;
      border-radius: 5px;
      transition: 0.5s all;

      ${media.ulg}{
        left: 1180px;
      }
      
      &:hover {
        cursor: pointer;
        background-color: #041562;
        box-shadow: 0 3px 10px rgba(44, 11, 34, 0.4);
        transition-delay: 0.2s;
        color: #fff;
    }
  }
  }
  /*******************************************************************/


  .titleMe{
    color: #ffffff;
    font-size: 2rem;
    letter-spacing: 15px;
    margin: 20px auto;
    text-align: center;
    padding: .5rem;
    width: 100%;

    ${media.xs}{
      letter-spacing: 8px;
      font-size: 1.5rem;
    }
    ${media.sm}{
      font-size: 1.5rem;
    }
  }


  /**************************** INTEGRANTES **************************/
  .aboutFotos{
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    align-items: center;
    justify-content: space-evenly;

    ${media.xs}, ${media.sm}  {
      gap: 1.5rem;
    }

    .cardMe{
      width: 190px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    
    .foto{
      width: 150px;
      height: 150px;
      margin-bottom: 10px;
      margin-top: 20px;
      border-radius: 50%;
      overflow: hidden;
      transition: transform 0.8s;
      animation: float 6s ease-in-out infinite;
      filter:drop-shadow( 0 5px 25px #00000080);
    }

    .foto img{
      width: 100%;
    }

    .NameMe{
      color: #FF0075;
      // color: #77D970;
      // color: #D4AC2B;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .redSocial{
      width: 70%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    .redSocial a{
      text-decoration: none;
    }

    @keyframes float {
      0% {
        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.4);
        transform: translatey(0px);
      }
      50% {
        box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
        transform: translatey(-20px);
      }
      100% {
        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.4);
        transform: translatey(0px);
      }
    }
    
  }
`;
