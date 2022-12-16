import { Link } from "react-router-dom";
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import Context from "./Context";

export default function Footer() {

    const { feitosHoje } = useContext(Context)

    return (
        <>
            <Rodape>
                <Link to={'/habitos'}>
                    <h1>Hábitos</h1>
                </Link>
                <Link to={'/hoje'}>

                    <Centralizar>
                        <CirculoHoje>
                            <CircularProgressbar
                                value={feitosHoje}
                                text={'Hoje'}
                                style={buildStyles({
                                    rotation: 0.25,
                                    strokeLinecap: 'butt',
                                    textSize: '20px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: '#ffffff',
                                    textColor: '#ffffff',
                                    trailColor: '#52B6FF',
                                    backgroundColor: '#000000',
                                })}
                            />
                        </CirculoHoje>
                    </Centralizar>
                </Link>
                <Link to={'/historico'}>
                    <h1>Histórico</h1>
                </Link>
            </Rodape>
        </>
    )
}
const Rodape = styled.div`
width: 100%;
height: 70px;
display: flex;
background-color: #FFFFFF;
justify-content: space-around;
position: fixed;
bottom: 0;
left: 0;
h1{
    padding: 25px;
    font-family: Lexend Deca, sans-serif;
    font-size: 18px;
    color: #52B6FF;
}
`;
const CirculoHoje = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    text-align: center;
    box-sizing: border-box;
    position:absolute;
    bottom: 10px;
    padding: 4px;
`;
const Centralizar = styled.div`
width: 91px;
height: 91px;
margin-left: 10px;
`;