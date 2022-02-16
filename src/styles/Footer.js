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
    height: 30px;
    margin-bottom: 1rem;
    color: #ffffff70;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    ${media.xs}{
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

.elementFooter{
    width: 100%;
    font-size: .9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    ${media.xs}{
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
}

.element1{
    width: 50%;
    text-align: right;
    padding: 0 10px 0 0;
    // border: solid 1px #fff;
    
    ${media.xs}{
        width: 100%;
        text-align: center;
        font-size: 0.8rem;
    }
}

.element2{
    width: 50%;
    padding: 0 0 0 10px;
    text-align: left;
    
    ${media.xs}{
        width: 100%;
        text-align: center;
        font-size: 0.8rem;
    }
}

.element2 a{
    text-decoration: none;
    color: #ff0075;
    transition: all 0.5s;
}

.element2 a:hover{
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