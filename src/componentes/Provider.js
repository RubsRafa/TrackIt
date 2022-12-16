import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    const [image, setImage] = useState('');
    const [token, setToken] = useState('');
    
    console.log(image)
    console.log(token)
    return (
        <Context.Provider value={{
            image,
            setImage,
            token,
            setToken
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;