import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { Container, ContainerHabitos, TextoPrincipal, ListaHabitos, Bolinha } from "./HistoricoCSS";
import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Context from "../contextAPI/Context";
import axios from "axios";
import URLBase from "../url";
import 'react-calendar/dist/Calendar.css';
import formatDate from "date-fns/format";


export default function Historico() {
    const { token } = useContext(Context)
    const [value, onChange] = useState(new Date());
    const [mostrarHistorico, setMostrarHistorico] = useState(false)
    const [historico, setHistorico] = useState();
    console.log(historico)
    console.log(value)

    let data = new Date(2022, 11, 22) //ano, mes, dia
    console.log(data)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(`${URLBase}habits/history/daily`, config)
            .then((res) => {
                setHistorico(res.data)
                setMostrarHistorico(true)
            })
            .catch((err) => console.log(err.response.data))
    }, [])

    return (
        <Container>
            <NavBar />
            <ContainerHabitos>
                <TextoPrincipal>
                    <div>.</div>
                    <h1>Histórico</h1>
                    {!mostrarHistorico && <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>}
                </TextoPrincipal>
                <ListaHabitos>
                    {mostrarHistorico &&
                        <>
                            <div>
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    locale={'pt-br'}
                                    formatDay={(locale, date) => formatDate(date, 'd')}
                                />
                            </div>
                        </>
                    }
                    {/* {historico &&
                        historico.map((h) =>
                            <>
                                <div>{h.day}</div>
                            </>
                        )} */}
                </ListaHabitos>
                <Bolinha>.</Bolinha>
            </ContainerHabitos>
            <Footer />
        </Container>

    )
}
