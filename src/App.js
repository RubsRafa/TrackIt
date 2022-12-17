
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastrar from './componentes/cadastrar/Cadastrar.js';
import Entrar from './componentes/entrar/Entrar.js';
import Habitos from './componentes/habitos/Habitos.js';
import Historico from './componentes/historico/Historico.js';
import Hoje from './componentes/hoje/Hoje.js';
import GlobalStyle from './css/GlobalStyle.js'
import Provider from './componentes/contextAPI/Provider.js';

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Provider>
        <Routes>
          <Route path='/' element={<Entrar />} />
          <Route path='/cadastro' element={<Cadastrar />} />
          <Route path='/habitos' element={<Habitos />} />
          <Route path='/hoje' element={<Hoje />} />
          <Route path='/historico' element={<Historico />} />
        </Routes>
      </Provider>

    </BrowserRouter>
  );
}
