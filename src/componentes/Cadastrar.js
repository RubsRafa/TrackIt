import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from '../img/logo.png'
import URLBase from "./url";
import { ThreeDots } from 'react-loader-spinner'

export default function Cadastrar() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [habilitar, setHabilitar] = useState(false);
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
            .then((res) => {
                console.log(res.data)
                navigate('/')
                setEmail('')
                setName('')
                setImage('')
                setPassword('')
            })
            .catch((err) => {
                console.log(err.response.data)
                alert(err.response.data.message)
                setHabilitar(false)
            })
    }

    return (
        <Container>
            <TelaCadastrar>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <form onSubmit={entrar}>
                    <Inputs>
                        <input disabled={habilitar} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='email' required></input>
                        <input disabled={habilitar} onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='senha' required></input>
                        <input disabled={habilitar} onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='nome' required></input>
                        <input disabled={habilitar} onChange={(e) => setImage(e.target.value)} value={image} type='url' placeholder='foto' required></input>
                        {habilitar ? <button type="submit"><div>
                            <ThreeDots
                                height="40"
                                width="70"
                                radius="9"
                                color="#ffffff"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            /></div>
                        </button>
                            : <button onClick={() => setHabilitar(true)} type="submit">Cadastrar</button>}
                    </Inputs>
                </form>
                <Link to={'/'}>
                    <Login><h1>Já tem uma conta? Faça login!</h1></Login>
                </Link>
            </TelaCadastrar>
        </Container>
    )
}
const Container = styled.div`
width: 100vw;
height: 100%;
background-color: #FFFFFF;
`;
const Logo = styled.div`
width: 100%;
text-align: center;
img {
    margin-top: 68px;
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
    div {
        justify-content: center;
    }
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
const TelaCadastrar = styled.div`
background-color: white;
width: 100vw;
height: 100vh;
`;