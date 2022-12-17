import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import Context from "../contextAPI/Context";
import { Rodape, Centralizar, CirculoHoje } from "./FooterCSS";

export default function Footer() {

    const { feitos, habitosHoje } = useContext(Context)

    return (
        <>
            <Rodape data-test="menu">
                <Link data-test="habit-link" to={'/habitos'}>
                    <h1>Hábitos</h1>
                </Link>
                <Link data-test="today" to={'/hoje'}>

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
                <Link data-test="history-link" to={'/historico'}>
                    <h1>Histórico</h1>
                </Link>
            </Rodape>
        </>
    )
}