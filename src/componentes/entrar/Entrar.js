import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../img/logo.png'
import URLBase from "../url";
import { ThreeDots } from 'react-loader-spinner'
import Context from "../contextAPI/Context";
import { Container, Logo, Inputs, Cadastrar } from "./EntrarCSS";

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
                    <input data-test="email-input" disabled={habilitar} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='email' required></input>
                    <input data-test="password-input" disabled={habilitar} onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='senha' required></input>
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
                    </button> : <button data-test="login-btn" onClick={() => {
                        setLoading(true)
                        setHabilitar(true)
                    }} type="submit"><div>Entrar</div></button>}

                </Inputs>
            </form>
            <Link data-test="signup-link" to={'/cadastro'}>
                <Cadastrar><h1>Não tem uma conta? Cadastre-se!</h1></Cadastrar>
            </Link>
        </Container>
    )
}