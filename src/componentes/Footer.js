import { Link } from "react-router-dom";
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import Context from "./Context";

export default function Footer() {

    const { feitos, habitosHoje } = useContext(Context)
    console.log(feitos)

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
                                value={feitos && (feitos.length * 100) / habitosHoje.length}
                                text={'Hoje'}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    backgroundColor: "#52B6FF",
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "transparent",
                                    textSize: 22,
                                    strokeLinecap: 'round'
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
`;
const Centralizar = styled.div`
width: 91px;
height: 91px;
margin-left: 10px;
`;