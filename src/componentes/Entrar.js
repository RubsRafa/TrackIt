import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from '../img/logo.png'
import URLBase from "./url";
import { ThreeDots } from 'react-loader-spinner'
import Context from "./Context";

export default function Entrar() {
    const { setImage, setToken} = useContext(Context)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [habilitar, setHabilitar] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function entrar(e) {
        e.preventDefault();

        const userLogin = {
            email,
            password
        }

        axios.post(`${URLBase}auth/login`, userLogin)
            .then((res) => {
                setToken(res.data.token)
                setPassword('');
                setEmail('');
                navigate('/hoje')
                setImage(res.data.image)
            })
            .catch((err) => {
                setLoading(false)
                setHabilitar(false)
                alert(err.response.data.message)
            })
    }

    return (
        <Container>
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
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #FFFFFF;
`;
const Logo = styled.div`
width: 100%;
text-align: center;
img {
    width: 180px;
    height: 178px;
    margin-top: 70px;
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