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
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    // border: 1px solid #ccc;
  }

  .returnContainer{
    width: 150px;
    height: 80px;
    margin-top: 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .BackHome{
    color: #fff;
    background-color: #FF0075;
    font-weight: bold;
    padding: 8px 13px;
    border: none;
    border-radius: 15px;
    transition: .5s all;
  }
  
  .BackHome:hover{
    background-color: #77D970;
    transform: translateY(-5px);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  }
`;

