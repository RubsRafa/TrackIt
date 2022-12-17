import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../img/logo.png'
import URLBase from '../url';
import { ThreeDots } from 'react-loader-spinner'
import { Container, Logo, Inputs, Login, TelaCadastrar  } from "./CadastrarCSS";


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
                        <input data-test="email-input" disabled={habilitar} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='email' required></input>
                        <input data-test="password-input" disabled={habilitar} onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='senha' required></input>
                        <input data-test="user-name-input" disabled={habilitar} onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='nome' required></input>
                        <input data-test="user-image-input" disabled={habilitar} onChange={(e) => setImage(e.target.value)} value={image} type='url' placeholder='foto' required></input>
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
                            : <button data-test="signup-btn" onClick={() => setHabilitar(true)} type="submit">Cadastrar</button>}
                    </Inputs>
                </form>
                <Link data-test="login-link" to={'/'}>
                    <Login><h1>Já tem uma conta? Faça login!</h1></Login>
                </Link>
            </TelaCadastrar>
        </Container>
    )
}