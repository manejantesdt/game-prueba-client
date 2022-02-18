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
    max-width: 700px;
    width: 100%;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-around;
    padding: .5rem 1rem;
    text-align: center;
}

.element2 a{
    text-decoration: none;
    color: #ff0075;
    transition: all 0.5s;
}

.element2 a:hover{
    color: #fff
}
`;