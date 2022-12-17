import styled from "styled-components";

export const ContainerHabitos = styled.div`
margin-top: 68px;
height: 100%;
margin-bottom: 70px;
`;
export const TextoPrincipal = styled.div`
display: flex;
justify-content: space-between;
h1 {
    color: #126BA5;
    font-family: Lexend Deca, sans-serif;
    font-size: 23px;
    margin: 30px 0 0 18px;
}
div{
    box-sizing: border-box;
    padding: 2px;
    text-align: center;
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-family: Lexend Deca, sans-serif;
    font-size: 27px;
    margin: 20px 18px 0 0;
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
export const AddHabito = styled.div`
background-color: #FFFFFF;
width: 340px;
height: 180px;
border-radius: 5px;
margin-bottom: 29px;
`;
export const InfoHabito = styled.div`
margin: 20px 0 0 16px;
input {
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    margin-top: 18px;
    font-family: Lexend Deca, sans-serif;
    font-size: 20px;
    padding: 8px;
    box-sizing: border-box;
    ::placeholder {
        font-family: Lexend Deca, sans-serif;
        font-size: 20px;
        color: #DBDBDB; 
    }
}
`;
export const Botoes = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background-color: ${props => props.cor ? '#d4d4d4' : '#ffffff'};
    color: ${props => props.cor ? '#ffffff' : '#d4d4d4'};
    font-family: Lexend Deca, sans-serif;
    font-size: 20px;
    margin-top: 8px;
    margin-right: 5px;
`;
export const Acoes = styled.div`
display: flex;
h1{
    margin: 40px 0 0 152px;
    font-family: Lexend Deca, sans-serif;
    font-size: 16px;
    color: #52B6FF;
}
button{
    border: none;
    margin: 29px 0 0 23px;
    width: 84px;
    padding: 8px;
    box-sizing: border-box;
    height: 35px;
    border-radius: 5px;
    background-color: ${props => props.background ? '#86CCFD' : '#52B6FF'};
    color: #FFFFFF;
    text-align: center;
    font-family: Lexend Deca, sans-serif;
    font-size: 16px;
}
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
display: flex;
justify-content: space-between;
h1 {
    color: #666666;
    font-family: Lexend Deca, sans-serif;
    font-size: 20px;
    margin: 13px 0 0 0;
}
img {
    width: 13px;
    height: 15px;
    margin: 11px 15px 0 0;
}
`;
export const Container = styled.body`
width: 100vw;
height: 100%;
margin-bottom: 70px;
`;