import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastrar from './componentes/Cadastrar.js';
import Entrar from './componentes/Entrar.js';
import Habitos from './componentes/Habitos.js';
import Hoje from './componentes/Hoje.js';
import GlobalStyle from './css/GlobalStyle.js'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Entrar />} />
        <Route path='/cadastro' element={<Cadastrar />} />
        <Route path='/habitos' element={<Habitos />} />
        <Route path='/hoje' element={<Hoje />} />
      </Routes>

    </BrowserRouter>
  );
}
