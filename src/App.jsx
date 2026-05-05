import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';

import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo02 from './pages/exemplos/ex-02';
import Exemplo03 from './pages/exemplos/ex-03';

import Atv01 from './pages/atividades/atv-01';
import Atv02 from './pages/atividades/atv-02';
import Atv03 from './pages/atividades/atv-03';
import Atv04 from './pages/atividades/atv-04';

function App() {

  return (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/exemplo/1" element={<Exemplo01 />} />
    <Route path="/exemplo/2" element={<Exemplo02 />} />
    <Route path="/exemplo/3" element={<Exemplo03 />} />

    <Route path="/atividade/1" element={<Atv01 />} />
    <Route path="/atividade/2" element={<Atv02 />} />
    <Route path="/atividade/3" element={<Atv03 />} />
    <Route path="/atividade/4" element={<Atv04 />} />

  </Routes>
  )
}

export default App
