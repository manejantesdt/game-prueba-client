import styled from "styled-components";

const media = {
  xs: '@media(max-width: 480px)',
  sm: '@media(min-width: 481px) and (max-width: 768px)',
  md: '@media(min-width: 769px) and (max-width: 992px)',
  lg: '@media(min-width: 993px) and (max-width: 1200px)',
  xlg: '@media(min-width: 1201px) and (max-width: 1920px)',
  ulg: '@media(min-width: 1921px) and (max-width: 2560px)',
}

export const ContForm = styled.div`
  width: 90%;
  max-width: 820px;
  padding: 1.5rem;
  margin: 6rem auto;
  font-family: 'Russo One', sans-serif;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.8rem;
  background-color: #ffffff20;
  border-left: 1px solid #ffffff35;
  border-bottom: 1px solid #ffffff35;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.5s;
  
  @media(max-width: 700px) {
    flex-wrap: wrap;
  }

  .createPlayerAvatar{
    max-width: 200px;
    width: 100%;
  }
  
  .createPlayerForm{
    min-width: 300px;
    width: 100%;
  }
  
  `;
  
  export const IntoForm = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  // margin-top: 10px;
  // font-size: 14px;
  // color: #311601;
  // font-weight: bolder;
  // border: 1px solid #f0f;
  
  .input_form {
    width: 100%;
    height: 30px;
    border: none;
    cursor: pointer;
    padding: 5px;
    margin-top: 5px;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
      background-color: #77D970;
    }
    &:focus { 
      background-color: #fff;
      outline: 2px solid #77D970;
    }
  }
  .button_form {
    width: 122px;
    height: 35px;
    border: none;
    background-color: #ff0075;
    color: white;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
      background-color: #77D970;
      color: #fff;
      transform: translateY(-3px);
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
    }
  }
  .error {
    width: 150px;
    height: 30px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    font-size: 12px;
    right: 0;
    line-height: 30px;
    background-color: #ff0000;
    color: #fff;
    text-align: center;

    @media(min-width: 700px) {
      top: -1.5rem;
    }
  }
    
  .createData{
    width: 100%;
    height: 70px;
    position: relative;
    display: flex;
    align-items: center;

    @media(max-width: 700px) {
      flex-direction: column;
      justify-content: center;
    }
  }
  
  .letrero{
    width: 100%;
    color: #ffffff;
    font-size: 1.5rem;
  }
  
  .createButtons{
    max-width: 350px;
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }

 
  `;
  