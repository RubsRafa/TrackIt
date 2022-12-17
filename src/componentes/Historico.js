// import feito from '../img/check.png'
import styled from "styled-components"
import Footer from "./Footer";
import NavBar from "./NavBar";
// import { useState } from 'react';

export default function Historico() {

    return (
        <Container>
            <NavBar />
            <ContainerHabitos>
                <TextoPrincipal>
                    <div>.</div>
                    <h1>Histórico</h1>
                    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                </TextoPrincipal>
                <ListaHabitos>
                    
                </ListaHabitos>
            </ContainerHabitos>
            <Footer />
        </Container>
    )
}
const ContainerHabitos = styled.div`
margin-top: 68px;
height: 100%;
margin-bottom: 70px;
`;
const TextoPrincipal = styled.div`
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
    color: #666666;
    font-family: Lexend Deca, sans-serif;
    font-size: 18px;
    margin: 17px 0 0 18px;
}
`;
const ListaHabitos = styled.div`
margin: 22px 20px 70px 20px;
h1{
    font-family: Lexend Deca, sans-serif;
    font-size: 18px;
    color: #666666;
}
`;
const Container = styled.body`
width: 100vw;
height: 100vh;
`;