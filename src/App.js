import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Entrar from './componentes/Entrar.js';
import GlobalStyle from './css/GlobalStyle.js'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Entrar />} />
      </Routes>

    </BrowserRouter>
  );
}
