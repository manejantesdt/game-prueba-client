import styled from "styled-components";



export const ContEdit = styled.div`
  width: 800px;
  height: 400px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  // display: flex;
  // flex-direction: row;
  // justify-content: space-around;
  // outline: none;
  // background-color: #fdf6fc73;
  // backdrop-filter: 1px;
  // box-shadow:0 0 2px #2a8ce1, 0 0 2px #3a6351, 0 0 2px #e40320;
  
  // &:hover{
  //   box-shadow: 0 0 10px rgba(44, 11, 34, 0.404), 0 0 10px rgba(44, 11, 34, 0.404), 0 0 10px rgba(44, 11, 34, 0.404); 
  //   transition-delay: 0.2s;
  //   transition: 0.8s; 
 }

.DetailContainer{
  width: 70%;
  height: 300px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff10;
  border-left: 1px solid #ffffff35;
  border-bottom: 1px solid #ffffff35;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}

.CloseDetail{
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  position: relative;
  rigth: 0;
  justify-content: flex-end:
  // border: thin dotted #f0f;
}
  
.btnCloseDetail{
  width: 25px;
  height: 25px;
  color: #fff;
  background-color: #FF0075;
  border: none;
  border-radius: 25px;
  font-width: bold;
  transition: .5s all;
}

.btnCloseDetail:hover{
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
}

.InfoContainer{
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // border: thin dotted #f0f;
}

.AvatarDetail{
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: thin dotted #fff;
}

.InfoDetail{
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // border: thin dotted #fff;
}

.detail{
  width: 80%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  // border: thin dotted #fff;
}

.detail p{
  width: 40%;
  padding-right: 8px;
  text-align: right;
  font-size: 18px;
  font-width: bold;
  color: #77D970;
}

.detail span{
  width: 60%;
  color: #fff;
}

img{
  width: 100%;
  filter:drop-shadow( 0 5px 15px #00000080);
  margin-bottom: 2rem;
} 

.btnEditPlayer{
  border: none;
  padding: 5px 30px;
  border-radius: 15px;
  font-size: 14px;
  font-width: bold;
  color: #FFFF;
  background-color: #FF0075;
  transition: .5s all;
}

.btnEditPlayer:hover{
  cursor: pointer;
  background-color: #77D970;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
}

`;

export const IntoEdit = styled.form`
  padding: 2rem;
  margin-top: 300px;
  font-size: 14px;
  color: #311601;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff10;
  border-left: 1px solid #ffffff35;
  border-bottom: 1px solid #ffffff35;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  
  .input_form {
    width: 268px;
    border: none;
    cursor: pointer;
    padding: 5px;
    margin: 10px 0;
    border-radius: 5px;
    text-align: left;
    textdecoration: none;
    &:hover {
      background-color: #77D970;
    }
    &:focus { 
      background-color: #fff;
    }
  }

.editAvatar{
  width: 70%;
}

.editPlayerAvatar{
  width: 100%;
  height: 40px;
  margin: 1rem 0;
  text-align: center;
  // border: thin dotted #fff;
}

p{
  font-size: 16px;
  color: #FF0075;
}

.button_form {
  width: 122px;
  height: 30px;
  margin-left: 20px;
  border: none;
  background-color: #de6200;
  color: white;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #fdf6fc73;
    box-shadow: 0 0 5px rgba(44, 11, 34, 0.404),
      0 0 5px rgba(44, 11, 34, 0.404), 0 0 5px rgba(44, 11, 34, 0.404);
    transition-delay: 0.2s;
    transition: 0.8s;
  }
}
.error {
  color: #FF0000;
  text-align:center;
  font-size: 14px;
}

select:focus{
  outline: 2px solid #77D970;
}

.editButtons{
  width: 100%;
  height: 50px;
  margin-top: 20px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.btnChange{
  border: none;
  padding: 5px 30px;
  border-radius: 15px;
  font-size: 14px;
  font-width: bold;
  color: #FFFF;
  background-color: #FF0075;
  transition: .5s all;
}

.btnChange:hover{
  cursor: pointer;
  background-color: #77D970;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
}

`;
