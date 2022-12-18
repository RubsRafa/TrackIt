import feito from '../../img/check.png'
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import URLBase from '../url';
import Context from '../contextAPI/Context';
import { ContainerHabitos, TextoPrincipal, ListaHabitos, InfoHabito, Habito, TextoHabito, Container, Check } from './HojeCSS';
import dayjs from 'dayjs';


export default function Hoje() {
    const { token, feitos, setFeitos, habitosHoje, setHabitosHoje } = useContext(Context)
    const [renderizar, setRenderizar] = useState(false);
    const [habitosLength, setHabitosLength] = useState();
    const [feitosLength, setFeitosLength] = useState(); 

    let day = dayjs().$D;
    let weekday = dayjs().$W;
    let month = dayjs().$M;

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(`${URLBase}habits/today`, config)
            .then((res) => {
                setHabitosHoje(res.data)
                setHabitosLength(res.data.length) //pq o .length estava dando problema
                setFeitos(res.data.filter((h) => h.done !== false))
                setFeitosLength(res.data.filter((h) => h.done !== false).length) //pq o .length estava dando problema
            })
            .catch((err) => console.log(err.response.data))
    }, [renderizar])

    function marcarFeito(id) {

        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.post(`${URLBase}habits/${id}/check`, body, config)
            .then(() => {
                setRenderizar(!renderizar)
            })
            .catch((err) => console.log(err.response.data))
    }

    function desmarcarHabito(id) {
        setRenderizar(!renderizar)

        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.post(`${URLBase}habits/${id}/uncheck`, body, config)
            .then(() => {
                setRenderizar(!renderizar)
            })
            .catch((err) => console.log(err.response.data))
    }

    return (
        <Container>
            <NavBar />
            <ContainerHabitos>
                <TextoPrincipal>
                    <div>.</div>
                    <h1 data-test="today">
                        {weekday === 0 && 'Domingo'}
                        {weekday === 1 && 'Segunda'}
                        {weekday === 2 && 'Terça'}
                        {weekday === 3 && 'Quarta'}
                        {weekday === 4 && 'Quinta'}
                        {weekday === 5 && 'Sexta'}
                        {weekday === 6 && 'Sábado'}, {day}/{month + 1}
                    </h1>
                    {feitosLength !== 0 ?
                        <h2 data-test="today-counter">{Math.round((feitosLength * 100) / habitosLength)}% dos hábitos concluídos</h2> :
                        <h3 data-test="today-counter">Nenhum hábito concluído ainda</h3>
                    }
                </TextoPrincipal>
                <ListaHabitos>
                    {habitosHoje === undefined &&
                        <TextoPrincipal><h1>Carregando...</h1></TextoPrincipal>
                    }
                    {habitosHoje !== undefined && (

                        habitosHoje.map((h) =>
                            <Habito key={h.id} data-test="today-habit-container">
                                <InfoHabito>
                                    <TextoHabito cor={h.currentSequence === h.highestSequence}>
                                        <div>.</div>
                                        <h1 data-test="today-habit-name">{h.name}</h1>
                                        <h2 data-test="today-habit-sequence">Sequência atual: <span>{h.currentSequence} dias</span></h2>
                                        <h2 data-test="today-habit-record">Seu recorde: <span>{h.highestSequence} dias</span></h2>
                                    </TextoHabito>
                                    <Check data-test="today-habit-check-btn" corFundo={h.done} onClick={h.done ? (() => desmarcarHabito(h.id)) : (() => marcarFeito(h.id))}>
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