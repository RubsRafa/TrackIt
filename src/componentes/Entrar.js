import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from '../img/logo.png'
import URLBase from "./url";
import { ThreeDots } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Entrar({ setToken }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [habilitar, setHabilitar] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function entrar(e) {
        console.log('ENTRAR')
        e.preventDefault();

        const userLogin = {
            email,
            password
        }

        axios.post(`${URLBase}auth/login`, userLogin)
            .then((res) => {
                // console.log(res.data)
                setToken(res.data.token)
                setPassword('');
                setEmail('');
                navigate('/hoje')
            })
            .catch((err) => {
                console.log(err.response.data)
                setLoading(false)
                setHabilitar(false)
                alert(`${err.response.data}`)
            })
    }

    return (
        <>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <form onSubmit={entrar}>
                <Inputs>
                    <input disabled={habilitar} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='email' required></input>
                    <input disabled={habilitar} onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='senha' required></input>
                    {loading ? <button type="submit"><div>
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
                    </button> : <button onClick={() => {
                        setLoading(true)
                        setHabilitar(true)
                    }} type="submit"><div>Entrar</div></button>}

                </Inputs>
            </form>
            <Link to={'/cadastro'}>
                <Cadastrar><h1>Não tem uma conta? Cadastre-se!</h1></Cadastrar>
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
    div{
        justify-content: center;
    }
}
`;
const Cadastrar = styled.div`
text-align: center;
margin-top: 25px;
h1{
    color:#52B6FF;
    font-family: Lexend Deca, sans-serif;
    font-size: 14px;
    text-decoration: underline;
}
`;