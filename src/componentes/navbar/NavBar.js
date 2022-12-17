import Context from "../contextAPI/Context";
import { useContext } from "react";
import { NavBarLogo } from "./NavBarCSS";

export default function NavBar () {
    const {image} = useContext(Context)
    return (
        <>
        <NavBarLogo data-test="header">
            <h1>TrackIt</h1>
            <img src={image} alt='perfil' />
        </NavBarLogo>
        </>
    )
}