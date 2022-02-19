import styled from "styled-components";

const media = {
    xs: '@media(max-width: 480px)',
    sm: '@media(min-width: 481px) and (max-width: 768px)',
    md: '@media(min-width: 769px) and (max-width: 992px)',
    lg: '@media(min-width: 993px) and (max-width: 1200px)',
    xlg: '@media(min-width: 1201px) and (max-width: 1920px)',
    ulg: '@media(min-width: 1921px) and (max-width: 2560px)',
  }


export const ContFooter = styled.div`
    width: 100%;
    margin: 1.5rem auto;
    color: #ffffff70;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    // position: absolute;
    // bottom: 0;


.elementFooter{
    max-width: 900px;   
    width: 100%;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    // flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-around;
    padding: .5rem 1rem;
    text-align: center;
    // border: 1px solid #000;

    
    
    .element1, .element2{
        width: 50%;
    }
    
    .element1{
        text-align: right;
    }
    
    .element2{
        text-align: left;
    }
}

`;

export const ContForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 100%;
        height: 30px;
        font-family: 'Nunito';
        margin: 10px 0;
        padding: 0 0 0 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    
    input:focus, textarea:focus{
        border: none;
        outline: none;
        // outline: 1px solid #FF0075;
        box-shadow: 0 3px 15px rgba(0,0,0,.3)
    }
    
    textarea{
        width: 100%;
        height: 100px;
        font-size: 0.9rem;
        resize: none;   
        margin: 10px 0 30px 0;
        padding: 10px 0 0 10px;
        border-radius: 5px;
        border: 1px solid #ccc; 
    }
    
    button{
        width: 100px;
        height: 30px;
        margin-top: 10px;
        font-family: 'Nunito';
        font-size: 1rem;
        background-color: #FF0075;
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 10px;
        transition: 0.5s all;
    }
    
    button:hover{
        cursor: pointer;
        background-color: #041562;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,.5)
    }


`;