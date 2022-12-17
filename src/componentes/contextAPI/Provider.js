import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    const [image, setImage] = useState('');
    const [token, setToken] = useState('');
    const [feitos, setFeitos] = useState();
    const [habitosHoje, setHabitosHoje] = useState();
    
    return (
        <Context.Provider value={{
            image,
            setImage,
            token,
            setToken,
            feitos,
            setFeitos,
            habitosHoje,
            setHabitosHoje
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;