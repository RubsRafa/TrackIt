import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastrar from './componentes/Cadastrar.js';
import Entrar from './componentes/Entrar.js';
import Habitos from './componentes/Habitos.js';
import Historico from './componentes/Historico.js';
import Hoje from './componentes/Hoje.js';
import GlobalStyle from './css/GlobalStyle.js'

export default function App() {

  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Entrar setToken={setToken} />} />
        <Route path='/cadastro' element={<Cadastrar />} />
        <Route path='/habitos' element={<Habitos token={token} />} />
        <Route path='/hoje' element={<Hoje token={token} />} />
        <Route path='/historico' element={<Historico />} />
      </Routes>

    </BrowserRouter>
  );
}
