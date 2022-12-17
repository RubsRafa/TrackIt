import styled from "styled-components" 

export const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #FFFFFF;
`;
export const Logo = styled.div`
width: 100%;
text-align: center;
img {
    width: 180px;
    height: 178px;
    margin-top: 70px;
}
`;
export const Inputs = styled.div`
width: 303px;
margin: 32px auto;
text-align: center;
input {
    margin-top: 6px;
    width: 303px;
    height: 50px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 20px;
    ::placeholder{
        font-family: Lexend Deca, sans-serif;
        font-size: 20px;
        color: #DBDBDB;
    }
}
button {
    box-sizing: border-box;
    margin-top: 6px;
    width: 303px;
    height: 50px;
    background-color: #52B6FF;
    font-family: Lexend Deca, sans-serif;
    font-size: 21px;
    color: #FFFFFF;
    border-radius: 4px;
    padding: 8px;
    border: none;
    div{
        justify-content: center;
    }
}
`;
export const Cadastrar = styled.div`
text-align: center;
margin-top: 25px;
h1{
    color:#52B6FF;
    font-family: Lexend Deca, sans-serif;
    font-size: 14px;
    text-decoration: underline;
}
`;