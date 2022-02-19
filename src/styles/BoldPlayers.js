import styled from "styled-components";

const media = {
  xs: '@media(max-width: 480px)',
  sm: '@media(min-width: 481px) and (max-width: 768px)',
  md: '@media(min-width: 769px) and (max-width: 992px)',
  lg: '@media(min-width: 993px) and (max-width: 1200px)',
  xlg: '@media(min-width: 1201px) and (max-width: 1920px)',
  ulg: '@media(min-width: 1921px) and (max-width: 2560px)',
}

export const BoldPlayersSections = styled.section`
  width: 88%;
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 1rem;
  // background: #102132;
  border-radius: 8px;
  text-align: center;

  & h2{
    margin-bottom: 2rem;
  }

  .one-row-grid{
    grid-template-columns: repeat(10, 1fr) !important;
  }

  & .suplentes{
    // background: red;
    width: 100%;
    // display: flex;
    // flex-wrap: wrap;
    // align-items: center;
    // justify-content: space-evenly;
    // gap: 2rem;

      overflow-x: auto;
      padding-bottom: 2rem;
      width: 100%;

     ::-webkit-scrollbar {
        -webkit-appearance: none;
      }
      
     ::-webkit-scrollbar:horizontal {
        height: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background-color: #ffffff15;
        border-radius: 20px;
      }
      
    ::-webkit-scrollbar-track {
        border-radius: 10px;  
      }
      
     ::-webkit-scrollbar-thumb:active {
        background-color: #ffffff40;
        cursor: pointer;
      }
    }
  }

  .jugador {
    width: 200px;
    height: 210px;
    font-family: 'Russo One', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    margin: 0 10px;
    border-radius: 0.8rem;
    background-color: #ffffff20;
    border-left: 1px solid #ffffff35;
    border-bottom: 1px solid #ffffff35;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
    transition: all 0.5s; 
  
    h3 {
      width: 100%;
      height: 20px;
      margin-bottom: var(--spacing);
      color: white;
      font-weight: normal;
      margin-bottom: 5px;
      // border: thin dotted rgb(0, 255, 98);
    }
  
    .avatar{
      width: 120px;
      height: 85px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all;
    }
  
    .avatar:hover{
      transform: scale(1.1);
      filter:drop-shadow( 0 5px 15px #00000080);
    }
  
    // .avatarStatus{
    //   width: 100%;
    //   color: #D4AC2B;
    //   margin-bottom: 5px;
    // }

    .avatarStatus{
      width: 100%;
      margin-bottom: 5px;
    }

    .Oro{
      color: #D4AC2B;
    }
    
    .Plata{
      color: #CCCCCC;
    }

    .Bronce{
      color: #D4AC2B;
    }

    .Hierro{
      color: #00000080;
    }

    .avatarRanking{
      width: 100%;
      color: #FF0075;
    }

    &:hover{
      transform: translateY(5px);
      background-color: #ffffff18;
    }
  }

  h2 {
    height: 50px;
    color: #FF0075;
    letter-spacing: 20px;
    font-family: 'Russo One', sans-serif;
    text-transform: uppercase;
    
    ${media.xs}{
      width: 100%;
      font-size: 1.4rem;
      letter-spacing: 8px;
      text-align: center;
      margin-bottom: 10%;
      // border: 1px solid #ccc;
    }
  }

  .pagesContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-top: 50px;
  }
`;

export const BoldPlayersPagination = styled.div`
  .pagesContainer{
    // background: #FF0075;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
    // border: 1px solid #ccc;
  }

  .returnContainer{
    margin: 30px auto 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .BackHome{
    color: #fff;
    background-color: #FF0075;
    font-weight: bold;
    font-size: 1rem;
    padding: 8px 2rem;
    border: none;
    border-radius: 5px;
    transition: .5s all;
  }
  
  .BackHome:hover{
    background-color: #77D970;
    transform: translateY(-3px);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  }
`;

