import styled from "styled-components"

export const ContainerHabitos = styled.div`
margin-top: 68px;
height: 100%;
margin-bottom: 70px;
`;
export const TextoPrincipal = styled.div`
margin-top: 50px;
justify-content: space-between;
div{
    opacity: 0;
}
h1 {
    color: #126BA5;
    font-family: Lexend Deca, sans-serif;
    font-size: 23px;
    margin: 20px 0 0 18px;
}
h2{
    color: #666666;
    font-family: Lexend Deca, sans-serif;
    font-size: 18px;
    margin: 17px 0 0 18px;
}
`;
export const ListaHabitos = styled.div`
margin: 22px 20px 70px 20px;
div{
    font-family: Lexend Deca, sans-serif;
    font-size: 12px;
    color: #666666;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 3px;
    button {
        background-color: ${props => props.feito};
        border-radius: 50%;
        border-radius: 1px solid black;
    }
}
`;
export const Container = styled.body`
width: 100vw;
height: 100vh;
`;
export const Bolinha = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
opacity: 50%;
background-color: hotpink;
margin: 1px 8px 0 8px;
`;
export const ContainerBolinha = styled.div`
width: 80%;
height: 26%;
background-color: black;
opacity: 30%;
margin: -270px auto;
display: flex;
flex-wrap: wrap;
`;