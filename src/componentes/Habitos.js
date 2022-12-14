import { useState } from "react";
import styled from "styled-components"
import Trash from '../img/remove.png'
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Habitos() {

    const daysWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [daysSelected, setDaysSelected] = useState([]);
    const [newHabit, setNewHabit] = useState(false);

    function selectDaysWeek(i) {
        if (!daysSelected.includes(i)) {
            setDaysSelected([...daysSelected, i]);
        } else {
            let newDaysSelectec = daysSelected.filter((d) => d !== i)
            setDaysSelected(newDaysSelectec)
        }
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
                                <input type='text' placeholder="nome do hábito" required></input>
                                {daysWeek.map((d, i) =>
                                    <Botoes key={i} cor={daysSelected.includes(i)} onClick={() => selectDaysWeek(i)}>{d}</Botoes>
                                )}

                            </InfoHabito>
                            <Acoes>
                                <h1 onClick={() => {
                                    setNewHabit(false)
                                    setDaysSelected('');
                                }}>Cancelar</h1>
                                <button type='submit'>Salvar</button>
                            </Acoes>
                        </AddHabito>
                    )}
                    <Habito>
                        <InfoHabito>
                            <TextoHabito>
                                <h1>Ler 1 capítulo de livro</h1>
                                <img src={Trash} alt='trash' />
                            </TextoHabito>
                            <Botoes>D</Botoes>
                            <Botoes>D</Botoes>
                            <Botoes>D</Botoes>
                            <Botoes>D</Botoes>
                            <Botoes>D</Botoes>
                            <Botoes>D</Botoes>
                            <Botoes>D</Botoes>
                        </InfoHabito>
                    </Habito>
                    <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                </ListaHabitos>
            </ContainerHabitos>
            <Footer />
        </Container>
    )
}
const ContainerHabitos = styled.div`
margin-top: 68px;
height: 100%;
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
    background-color: #52B6FF;
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
height: 100vh;
background-color: #E5E5E5;
`;