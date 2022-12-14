import { Link } from "react-router-dom";
import styled from "styled-components"
import logo from '../img/logo.png'

export default function Entrar() {

    function entrar(e) {
        e.preventDefault(); 
        console.log('entrar')
    }

    return (
        <>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <form onSubmit={entrar}>
                <Inputs>
                    <input type='email' placeholder='email' required></input>
                    <input type='password' placeholder='password' required></input>
                    <button type="submit">Entrar</button>
                </Inputs>
            </form>
            <Link to={'/cadastro'}><div>Não tem uma conta? Cadastre-se!</div></Link>
        </>
    )
}

const Logo = styled.div`
width: 100%;
text-align: center;
margin-top: 68px;
img {
    width: 180px;
    height: 178px;
}
`;
const Inputs = styled.div`
width: 303px;
margin: 0 auto;
text-align: center;
input {
    margin-top: 6px;
    width: 303px;
    height: 50px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
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
}
`; 