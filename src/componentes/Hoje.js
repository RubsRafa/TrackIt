import feito from '../img/check.png'
import styled from "styled-components"
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import URLBase from './url';

export default function Hoje({ token }) {

    const [concluido, setConcluido] = useState(false);
    const [habitosHoje, setHabitosHoje] = useState();
    console.log(habitosHoje)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(`${URLBase}habits/today`, config)
            .then((res) => setHabitosHoje(res.data))
            .catch((err) => console.log(err.response.data))
    }, [])

    function marcarFeito (id) {
        console.log('MARCAR', id)

        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.post(`${URLBase}habits/${id}/check`, body, config)
        .then(() => setConcluido(true))
        .catch((err) => console.log(err.response.data))
    }
    
    function desmarcarHabito (id) {
        console.log('DESMARCAR', id)

        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.post(`${URLBase}habits/${id}/uncheck`, body, config)
        .then(() => setConcluido(false))
        .catch((err) => console.log(err.response.data))
    }

    return (
        <Container>
            <NavBar />
            <ContainerHabitos>
                <TextoPrincipal>
                    <div>.</div>
                    <h1>Segunda, 17/05</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </TextoPrincipal>
                <ListaHabitos>
                    {habitosHoje === undefined &&
                        <TextoPrincipal><h1>Carregando...</h1></TextoPrincipal>
                    }
                    {habitosHoje !== undefined && (
                        
                            habitosHoje.map((h) =>
                                <Habito key={h.id}>
                                    <InfoHabito>
                                        <TextoHabito>
                                            <div>.</div>
                                            <h1>{h.name}</h1>
                                            <h2>Sequência atual: {h.currentSequence} dias</h2>
                                            <h2>Seu recorde: {h.highestSequence} dias</h2>
                                        </TextoHabito>
                                        <Check corFundo={concluido || h.done} onClick={concluido ? (() => desmarcarHabito(h.id)) : (() => marcarFeito(h.id))}>
                                            <img src={feito} alt='check' />
                                        </Check>
                                    </InfoHabito>
                                </Habito>
                            )
                    )
                        }
                    

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
    color: #BABABA;
    font-family: Lexend Deca, sans-serif;
    font-size: 18px;
    margin: 5px 0 0 18px;
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
const InfoHabito = styled.div`
margin: 20px 0 0 16px;
display: flex;
`;
const Habito = styled.div`
width: 340px;
height: 91px;
background-color: #ffffff;
border-radius: 5px;
h1 {
    margin: 13px 0 0 15px;
}
`;
const TextoHabito = styled.div`
width: 220px;
div{
    opacity: 0;
}
h1 {
    color: #666666;
    font-family: Lexend Deca, sans-serif;
    font-size: 20px;
    margin: 2px 0 0 0;
}
h2 {
    color: #666666;
    font-family: Lexend Deca, sans-serif;
    font-size: 13px;
    margin: 5px 0 0 0;
}
`;
const Container = styled.body`
width: 100vw;
height: 100vh;
background-color: #E5E5E5;
`;
const Check = styled.div`
width: 69px;
height: 69px;
background-color: ${props => props.corFundo ? '#8FC549' : '#EBEBEB'};
border: 1px solid #e7e7e7;
border-radius: 5px;
margin: 10px 10px 0 20px;
img {
    width: 35px;
    height: 28px;
    margin: 20px 0 0 18px
}
`;