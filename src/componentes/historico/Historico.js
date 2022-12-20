import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { Container, ContainerHabitos, TextoPrincipal, ListaHabitos, ContainerBolinha, Bolinha } from "./HistoricoCSS";
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Context from "../contextAPI/Context";
import axios from "axios";
import URLBase from "../url";
import 'react-calendar/dist/Calendar.css';
import formatDate from "date-fns/format";
import { ColorRing } from "react-loader-spinner";
import { isFirstDayOfMonth } from "date-fns";
import dayjs from "dayjs";


export default function Historico() {
    const { token } = useContext(Context)
    const [value, onChange] = useState(new Date());
    const [mostrarHistorico, setMostrarHistorico] = useState(false)
    const [historico, setHistorico] = useState();


    const teste = [{
        day: '19/12/2022', habits: [
            { name: 'CheckPoints', date: '2022-12-19', done: true },
            { name: 'Dormir cedo', date: '2022-12-19', done: false },
            { name: 'DST', date: '2022-12-19', done: false },
            { name: 'RPGzão', date: '2022-12-19', done: true }
        ]
    },
    {
        day: '18/12/2022', habits: [
            { name: 'CheckPoints', date: '2022-12-18', done: false },
            { name: 'Dormir cedo', date: '2022-12-18', done: false },
            { name: 'DST', date: '2022-12-18', done: true },
            { name: 'RPGzão', date: '2022-12-18', done: true }
        ]
    }
    ]

    console.log(`${teste[0].day[0]}${teste[0].day[1]}`)
    console.log(`${value.getDate()}`)
    console.log(`${teste[0].day[0]}${teste[0].day[1]}` === `${value.getDate()}`)
    // console.log(dayjs())

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

    let cor = '';
    useEffect(() => {
        teste.map((t) => {
            if (`${t.day[0]}${t.day[1]}` === `${value.getDate()}`) {
                cor = 'red'
            } else {
                cor = 'gren'
            }
        })
    }, [])
    return (
        <Container>
            <NavBar />
            <ContainerHabitos>
                <TextoPrincipal>
                    <div>.</div>
                    <h1>Histórico</h1>
                    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                    {/* {!mostrarHistorico && <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>} */}
                </TextoPrincipal>
                {/* <ListaHabitos feito={cor}>
                    {mostrarHistorico &&
                        <>
                            <div>
                                <Calendar
                                    onChange={onChange}
                                    onClickDay={() => console.log('aaaa')}
                                    value={value}
                                    locale={'pt-br'}
                                    formatDay={(locale, data) => formatDate(data, ['d'])}
                                />
                            </div>
                        </>
                    }
                    <div>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            locale={'pt-br'}
                            // formatDay={(locale, data) => formatDate(data, `dd`)}
                            formatDay={(locale, data) => formatDate(data, 'dd')}
                        />
                    </div>
                </ListaHabitos> */}
            </ContainerHabitos>
            <Footer />
        </Container>

    )
}
