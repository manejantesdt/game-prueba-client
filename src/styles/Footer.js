import styled from "styled-components";


export const ContFooter = styled.div`
width: 100%;
height: 30px;
margin-bottom: 1rem;
color: #ffffff70;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

.elementFooter{
    width: 30%;
    font-size: .9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.element{
    width: 50%;
    text-align: center;
}

.element a{
    text-decoration: none;
    color: #ff0075;
    transition: all 0.5s;
}

.element a:hover{
    color: #fff
}

// border: thin dotted #fff;
// height: 4rem;
// margin: 0 auto;
// margin-top: 3rem;
// margin-bottom: 3rem;
// background-color: #1f3a52;
// margin: 2rem 0;
// border: 1px solid #ccc;
`;