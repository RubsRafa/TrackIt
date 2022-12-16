import { createContext } from "react";

const Context = createContext({
    image: null,
    token: null
});


export default Context; 

// function Provider ({children}) {
//     const [image, setImage] = useState('');
//     const [token, setToken] = useState('');
// }