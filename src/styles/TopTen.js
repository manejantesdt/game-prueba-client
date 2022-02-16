import styled from "styled-components";

export const TopTenSection = styled.section`
  margin: 2rem 0;
  padding: 4rem 0;
  background: #EEEEEE;
  z-index: -99999;

.position{
  width: 100%;
  height: 70px;
  font-family: 'Press Start 2P', cursive;
  font-size: 3em; 
  background: -webkit-linear-gradient(#ff51a2,#ca0561);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // border: 1px solid #000;
}

.avatarPosition{
  width: 100%;
  height: 250px;
  border-radius: 50%;
  background-color: #ff0075;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  backdrop-filter: blur(15px);
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
  // border: 1px solid #000;
}

.avatarPosition img{
  transition: transform 0.8s;
  transform-style: preserve-3d;
  filter:drop-shadow( 0 5px 15px #00000080);
}

.avatarPosition img:hover{
  cursor: pointer;
  transform: rotateY(180deg);
}

.rowPosition{
  width: 100%;
  height: 30px;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid #000;
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

.pulse{
  text-transform: uppercase;
  font-size: 2.5rem;
  color: #172774;
  text-align: center;
  animation-name: pulse;
  -webkit-animation-name: pulse;	

  animation-duration: 3.5s;	
  -webkit-animation-duration: 3.5s;

  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: 1;		
  }
  50% {
    transform: scale(1);
    opacity: 1;	
  }	
  100% {
    transform: scale(0.9);
    opacity: 1;	
  }			
}

.rank{
  font-size: 1.5rem;
  color: #D4AC2B;
}

.score{
  font-size: 1.5rem;
  color: #00000050;
}

.infoLink{
  font-width: bold;
  color: #FF0075;
}
















.playerInfo1{
  width: 150px;
  height: 90px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  left: 570px;
  top: -300px;
  background-color: #ccc;
}

.playerInfo2{
  width: 150px;
  height: 90px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  left: 235px;
  top: -300px;
  background-color: #ccc;
}

.playerInfo3{
  width: 150px;
  height: 90px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  left: 570px;
  top: -300px;
  background-color: #ccc;
}
`;
