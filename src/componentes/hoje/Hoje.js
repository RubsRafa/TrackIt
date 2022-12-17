import feito from '../img/check.png'
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import URLBase from '../url';
import Context from '../contextAPI/Context';
import { ContainerHabitos, TextoPrincipal, ListaHabitos, InfoHabito, Habito, TextoHabito, Container, Check } from './HojeCSS';


export default function Hoje() {
    const { token, feitos, setFeitos, habitosHoje, setHabitosHoje } = useContext(Context)
    const [renderizar, setRenderizar] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(`${URLBase}habits/today`, config)
            .then((res) => {
                setHabitosHoje(res.data)
                setFeitos(res.data.filter((h) => h.done !== false))
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
                    <h1>Segunda, 17/05</h1>
                    {feitos ?
                        <h2 corletra={false}>{Math.round((feitos.length * 100) / habitosHoje.length)}% dos hábitos concluídos</h2> :
                        <h2 corletra={true}>Nenhum hábito concluído ainda</h2>
                    }
                </TextoPrincipal>
                <ListaHabitos>
                    {habitosHoje === undefined &&
                        <TextoPrincipal><h1>Carregando...</h1></TextoPrincipal>
                    }
                    {habitosHoje !== undefined && (

                        habitosHoje.map((h) =>
                            <Habito key={h.id}>
                                <InfoHabito>
                                    <TextoHabito cor={h.currentSequence === h.highestSequence}>
                                        <div>.</div>
                                        <h1>{h.name}</h1>
                                        <h2>Sequência atual: <span>{h.currentSequence} dias</span></h2>
                                        <h2>Seu recorde: <span>{h.highestSequence} dias</span></h2>
                                    </TextoHabito>
                                    <Check corFundo={h.done} onClick={h.done ? (() => desmarcarHabito(h.id)) : (() => marcarFeito(h.id))}>
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