import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from '../img/logo.png'
import URLBase from "./url";

export default function Cadastrar() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    function entrar(e) {
        e.preventDefault();

        const createUser = {
            email,
            name,
            image,
            password
        }; 

        axios.post(`${URLBase}auth/sign-up`, createUser)
        .get((res) => {
            console.log(res.data)
            navigate('/')
            setEmail('')
            setName('')
            setImage('')
            setPassword('')
        })
        .catch ((err) => console.log(err.response.data))
        console.log('entrar')
    }

    return (
        <>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <form onSubmit={entrar}>
                <Inputs>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='email' required></input>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='senha' required></input>
                    <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='nome' required></input>
                    <input onChange={(e) => setImage(e.target.value)} value={image} type='url' placeholder='foto' required></input>
                    <button type="submit">Cadastrar</button>
                </Inputs>
            </form>
            <Link to={'/'}>
                <Login><h1>Já tem uma conta? Faça login!</h1></Login>
            </Link>
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
}
`;
const Login = styled.div`
text-align: center;
margin-top: 25px;
h1{
    color:#52B6FF;
    font-family: Lexend Deca, sans-serif;
    font-size: 14px;
    text-decoration: underline;
}
`;