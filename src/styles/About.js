import styled from "styled-components";

const media = {
  xs: '@media(max-width: 480px)',
  sm: '@media(min-width: 481px) and (max-width: 768px)',
  md: '@media(min-width: 769px) and (max-width: 992px)',
  lg: '@media(min-width: 993px) and (max-width: 1200px)',
  xlg: '@media(min-width: 1201px) and (max-width: 1920px)',
  ulg: '@media(min-width: 1921px) and (max-width: 2560px)',
}

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  
  h1, h2, h3 {
    color: #ffffff97;
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
    width: 1400px;
    // display:grid;
    // grid-template-columns: 15% 70% 15%;
    /*  display: flex;
    flex-direction: row; */
    justify-content: space-around;
    padding: 2% 6%;
    margin-top: 1%; 
    position: absolute;
    // margin-left: 438px; 
    // margin-top: 20px;
    /* height: 1900px; */
    outline: none;
    border-radius: 15px;
    background-color: #ffffff20;
    // background-color: #fdf6fc73;
    backdrop-filter: 1px;
    box-shadow:0 0 2px #2a8ce1, 0 0 2px #3a6351, 0 0 2px #e40320;

    ${media.mobile}{
      width: 90%;
    }

    ${media.medium}{
      width: 90%;
      // background-color: red;
    }
    
    &:hover{
      box-shadow: 0 0 10px rgba(44, 11, 34, 0.404), 0 0 10px rgba(44, 11, 34, 0.404), 0 0 10px rgba(44, 11, 34, 0.404); 
      transition-delay: 0.2s;
      transition: 0.8s; 
    }
  }
  
  p {
    text-align: justify;
    font-size: 1rem;
    margin-bottom: 1.4rem;
    margin-top: 1rem;
    color: #ffffff97;
    ${media.mobile}{
      font-size: 0.9rem;
    }
}

li {
    color: #311601;
   /*  color: #102132; */
}

.button_form {
    width: 122px;
    height: 30px;
    // margin-left: 20px;
    border: none;
    position: relative;
    left: 1050px;
    background-color: #b42769;
    color: white;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #172774;
      box-shadow: 0 0 5px rgba(44, 11, 34, 0.404),
        0 0 5px rgba(44, 11, 34, 0.404), 0 0 5px rgba(44, 11, 34, 0.404);
      transition-delay: 0.2s;
      transition: 0.8s;
      color: #fff;
  }
`;
