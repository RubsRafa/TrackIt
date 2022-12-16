import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    const [image, setImage] = useState('');
    const [token, setToken] = useState('');
    const [feitosHoje, setFeitosHoje] = useState();
    
    return (
        <Context.Provider value={{
            image,
            setImage,
            token,
            setToken,
            feitosHoje,
            setFeitosHoje
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;