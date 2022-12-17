import { createContext } from "react";

const Context = createContext({
    image: null,
    token: null,
    feitos: null,
    habitosHoje: null
});


export default Context; 