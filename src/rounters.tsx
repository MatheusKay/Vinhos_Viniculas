import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Vinicolas from './pages/Vinicolas'
import FaleConosco from './pages/FaleConosco'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produtos" element={<Produtos />} />
    <Route path="/vinicolas" element={<Vinicolas />} />
    <Route path="/fale-conosco" element={<FaleConosco />} />
  </Routes>
)

export default Rotas
