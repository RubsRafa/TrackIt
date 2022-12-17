import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components"
import Trash from '../img/remove.png'
import Footer from "./Footer";
import NavBar from "./NavBar";
import URLBase from "./url";
import Context from "./Context";
import { ThreeDots } from 'react-loader-spinner'

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
const ContainerHabitos = styled.div`
margin-top: 68px;
height: 100%;
margin-bottom: 70px;
`;
const TextoPrincipal = styled.div`
display: flex;
justify-content: space-between;
h1 {
    color: #126BA5;
    font-family: Lexend Deca, sans-serif;
    font-size: 23px;
    margin: 30px 0 0 18px;
}
div{
    box-sizing: border-box;
    padding: 2px;
    text-align: center;
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-family: Lexend Deca, sans-serif;
    font-size: 27px;
    margin: 20px 18px 0 0;
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
const AddHabito = styled.div`
background-color: #FFFFFF;
width: 340px;
height: 180px;
border-radius: 5px;
margin-bottom: 29px;
`;
const InfoHabito = styled.div`
margin: 20px 0 0 16px;
input {
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    margin-top: 18px;
    font-family: Lexend Deca, sans-serif;
    font-size: 20px;
    padding: 8px;
    box-sizing: border-box;
    ::placeholder {
        font-family: Lexend Deca, sans-serif;
        font-size: 20px;
        color: #DBDBDB; 
    }
}
`;
const Botoes = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background-color: ${props => props.cor ? '#d4d4d4' : '#ffffff'};
    color: ${props => props.cor ? '#ffffff' : '#d4d4d4'};
    font-family: Lexend Deca, sans-serif;
    font-size: 20px;
    margin-top: 8px;
    margin-right: 5px;
`;
const Acoes = styled.div`
display: flex;
h1{
    margin: 40px 0 0 152px;
    font-family: Lexend Deca, sans-serif;
    font-size: 16px;
    color: #52B6FF;
}
button{
    border: none;
    margin: 29px 0 0 23px;
    width: 84px;
    padding: 8px;
    box-sizing: border-box;
    height: 35px;
    border-radius: 5px;
    background-color: ${props => props.background ? '#86CCFD' : '#52B6FF'};
    color: #FFFFFF;
    text-align: center;
    font-family: Lexend Deca, sans-serif;
    font-size: 16px;
}
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
display: flex;
justify-content: space-between;
h1 {
    color: #666666;
    font-family: Lexend Deca, sans-serif;
    font-size: 20px;
    margin: 13px 0 0 0;
}
img {
    width: 13px;
    height: 15px;
    margin: 11px 15px 0 0;
}
`;
const Container = styled.body`
width: 100vw;
height: 100%;
margin-bottom: 70px;
`;