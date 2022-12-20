import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { Container, ContainerHabitos, TextoPrincipal } from "./HistoricoCSS";
import React from 'react';
import 'react-calendar/dist/Calendar.css';


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
                
            </ContainerHabitos>
            <Footer />
        </Container>

    )
}
