import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Trash from '../../img/remove.png'
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import URLBase from "../url";
import Context from "../contextAPI/Context";
import { ThreeDots } from 'react-loader-spinner'
import { ContainerHabitos, TextoPrincipal, ListaHabitos, AddHabito, InfoHabito, Botoes, Acoes, Habito, TextoHabito, Container } from "./HabitosCSS";

export default function Habitos() {
    const { token } = useContext(Context)

    const daysWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [daysSelected, setDaysSelected] = useState([]);
    const [newHabit, setNewHabit] = useState(false);
    const [nomeHabito, setNomeHabito] = useState('');
    const [habitosLista, setHabitosLista] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(`${URLBase}habits`, config)
            .then((res) => {
                setHabitosLista(res.data)
            })
            .catch((err) => console.log(err.response.data))
    }, [nomeHabito])

    function selectDaysWeek(i) {
        if (!daysSelected.includes(i)) {
            setDaysSelected([...daysSelected, i]);
        } else {
            let newDaysSelectec = daysSelected.filter((d) => d !== i)
            setDaysSelected(newDaysSelectec)
        }
    }

    function criarHabito() {
        setLoading(true)
        const habitoNovo = {
            name: nomeHabito,
            days: daysSelected
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.post(`${URLBase}habits`, habitoNovo, config)
            .then((res) => {
                // setHabitosLista([...habitosLista, res.data])
                setNewHabit(false)
                setDaysSelected('')
                setNomeHabito('')
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.response.data)
                setLoading(false)
                alert(err.response.data.message)
            })
    }

    function removeHabit(id) {
        if (!window.confirm('Confirmação: gostaria realmente de apagar o hábito?')) {
            return; 
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.delete(`${URLBase}habits/${id}`, config)
            .then(() => setHabitosLista(habitosLista.filter((h) => h.id !== id)))
            .catch((err) => alert(err.response.data.message))
    }

    return (
        <Container>
            <NavBar />
            <ContainerHabitos>
                <TextoPrincipal>
                    <h1>Meus hábitos</h1>
                    <div onClick={() => setNewHabit(true)}>+</div>
                </TextoPrincipal>
                <ListaHabitos>
                    {newHabit && (
                        <AddHabito>
                            <InfoHabito>
                                <input disabled={loading} onChange={(e) => setNomeHabito(e.target.value)} value={nomeHabito} type='text' placeholder="nome do hábito" required></input>
                                {daysWeek.map((d, i) =>
                                    <Botoes key={i} disabled={loading} cor={daysSelected.includes(i)} onClick={() => selectDaysWeek(i)}>{d}</Botoes>
                                )}

                            </InfoHabito>
                            <Acoes>
                                <h1 onClick={() => {
                                    setNewHabit(false)
                                }}>Cancelar</h1>
                                {loading ? <button background={true} type='submit'>
                                    <div>
                                        <ThreeDots
                                            height="20"
                                            width="70"
                                            radius="9"
                                            color="#ffffff"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClassName=""
                                            visible={true}
                                        /></div>
                                </button> : <button background={false} type='submit' onClick={criarHabito}>Salvar</button>}
                            </Acoes>
                        </AddHabito>
                    )}
                    {habitosLista.length !== 0 && (

                        habitosLista.map((h) => (
                            <Habito key={h.id}>
                                <InfoHabito>
                                    <TextoHabito>
                                        <h1>{h.name}</h1>
                                        <img onClick={() => removeHabit(h.id)} src={Trash} alt='trash' />
                                    </TextoHabito>
                                    <Botoes cor={h.days.includes(0)}>D</Botoes>
                                    <Botoes cor={h.days.includes(1)}>S</Botoes>
                                    <Botoes cor={h.days.includes(2)}>T</Botoes>
                                    <Botoes cor={h.days.includes(3)}>Q</Botoes>
                                    <Botoes cor={h.days.includes(4)}>Q</Botoes>
                                    <Botoes cor={h.days.includes(5)}>S</Botoes>
                                    <Botoes cor={h.days.includes(6)}>S</Botoes>
                                </InfoHabito>
                            </Habito>
                        ))
                    )
                    }
                    {habitosLista.length === 0 && (
                        <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                    )}

                </ListaHabitos>
            </ContainerHabitos>
            <Footer />
        </Container>
    )
}