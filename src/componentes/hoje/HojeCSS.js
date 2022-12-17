import styled from "styled-components";

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
    color: #8FC549;
    font-family: Lexend Deca, sans-serif;
    font-size: 18px;
    margin: 5px 0 0 18px;
}
h3 {
    color: #BABABA;
    font-family: Lexend Deca, sans-serif;
    font-size: 18px;
    margin: 5px 0 0 18px;
}
`;
export const ListaHabitos = styled.div`
margin: 22px 20px 70px 20px;
h1{
    font-family: Lexend Deca, sans-serif;
    font-size: 18px;
    color: #666666;
}
`;
export const InfoHabito = styled.div`
margin: 20px 0 0 16px;
display: flex;
`;
export const Habito = styled.div`
width: 340px;
height: 91px;
background-color: #ffffff;
border-radius: 5px;
h1 {
    margin: 13px 0 0 15px;
}
`;
export const TextoHabito = styled.div`
width: 220px;
div{
    opacity: 0;
}
h1 {
    color: #666666;
    font-family: Lexend Deca, sans-serif;
    font-size: 20px;
    margin: 2px 0 0 0;
}
h2 {
    color: #666666;
    font-family: Lexend Deca, sans-serif;
    font-size: 13px;
    margin: 5px 0 0 0;
}
span {
    color: ${props => props.cor ? '#8FC549' : '#666666'};
}
`;
export const Container = styled.body`
width: 100%;
height: 100%;
margin-bottom: 100px;
`;
export const Check = styled.div`
width: 69px;
height: 69px;
background-color: ${props => props.corFundo ? '#8FC549' : '#EBEBEB'};
border: 1px solid #e7e7e7;
border-radius: 5px;
margin: 10px 10px 0 20px;
img {
    width: 35px;
    height: 28px;
    margin: 20px 0 0 18px
}
`;