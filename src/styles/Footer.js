import styled from "styled-components";

export const ContFooter = styled.div`
    width: 100%;
    margin: 1.5rem auto;
    color: #ffffff70;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

.elementFooter{
    max-width: 850px;   
    width: 90%;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: space-around;
    padding: .5rem 1rem;
    text-align: center;
    
    @media (max-width: 700px) {
        flex-wrap: wrap;
    }
    
    .element1, .element2{
        width: 100%;
    }

    .buttonFooter {
        text-transform: lowercase;
        font-size: 1.05rem;
        color: #FF0075;
        transition: all 0.5s;
        
        &:hover {
            color: white;
        }
    
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