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
  width: 814px;
  height: 300px;
  margin: 0 auto;
  font-family: 'Russo One', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 150px;
  border-radius: 0.8rem;
  background-color: #ffffff20;
  border-left: 1px solid #ffffff35;
  border-bottom: 1px solid #ffffff35;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.5s;

  .createPlayerAvatar{
    width: 30%;
    height: 100%;
    // border: 1px solid #ffffff35;
  }
  
  .createPlayerForm{
    width: 70%;
    height: 100%;
    // border: 1px solid #ffffff35;
  }
  
  .image{
    padding: 5%;
  }
  
  `;
  
  export const IntoForm = styled.form`
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

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
    height: 30px;
    margin-left: 20px;
    border: none;
    background-color: #ff0075;
    color: white;
    border-radius: 10px;
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
    width: 200px;
    height: 30px;
    border-radius: 10px;
    position: relative;
    top: -49px;
    left: 378px;
    line-height: 30px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    background-color: #ff0000;
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
  
  p {
    margin: 0 10px;
    color: #fff;
    font-size: 0.9rem;
  }
  
  .createData{
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // border: 1px solid #ffffff35;
  }
  
  .letrero{
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: row reverse;
    // padding: 0 10px 0 0;
    color: #ffffff;
    font-size: 1.5rem;
    // border: 1px solid #00f;
  }
  
  .createButton{
    width: 50%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px solid #00f;
  }

 
  `;
  