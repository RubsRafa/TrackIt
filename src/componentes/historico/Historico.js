import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { Container, ContainerHabitos, TextoPrincipal, ListaHabitos } from "./HistoricoCSS";

export default function Historico() {

    return (
        <Container>
            <NavBar />
            <ContainerHabitos>
                <TextoPrincipal>
                    <div>.</div>
                    <h1>Histórico</h1>
                    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                </TextoPrincipal>
                <ListaHabitos>
                    
                </ListaHabitos>
            </ContainerHabitos>
            <Footer />
        </Container>
    )
}