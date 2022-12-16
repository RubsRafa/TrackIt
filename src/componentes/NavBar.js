import Context from "./Context";
import { useContext } from "react";
import styled from "styled-components"

export default function NavBar () {
    const {image} = useContext(Context)
    return (
        <>
        <NavBarLogo>
            <h1>TrackIt</h1>
            <img src={image} alt='perfil' />
        </NavBarLogo>
        </>
    )
}

const NavBarLogo = styled.div`
width: 100%;
background-color: #126BA5;
height: 70px;
position: fixed;
top: 0; 
left: 0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
justify-content: space-between;
display: flex;
flex-wrap: wrap;
h1{
    margin: 15px 0 0 18px;
    font-family: Playball, sans-serif;
    font-size: 39px;
    color: #FFFFFF;
}
img {
    margin: 8px 10px 0 0;
    width: 51px;
    height: 51px;
    border-radius: 50%;
}
`;