import styled from "styled-components"

export default function Habitos () {
    return (
        <>
        <NavBar>
            <Logo>TrackIt</Logo>
            <img src='https://bravi.tv/wp-content/uploads/2019/04/Irmao-do-jorel3-214x214.png' alt='perfil' />
        </NavBar>
        </>
    )
}

const NavBar = styled.div`
width: 100%;
background-color: #126BA5;
height: 70px;
position: fixed;
top: 0; 
left: 0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
img {
    
}
`;
const Logo = styled.h1`
margin: 15px 0 0 18px;
font-family: Playball, sans-serif;
font-size: 39px;
color: #FFFFFF;
`;