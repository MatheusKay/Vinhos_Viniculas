import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Produtos'
import Winery from './pages/Vinicolas'
import ContactUs from './pages/FaleConosco'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produtos" element={<Products />} />
    <Route path="/vinicolas" element={<Winery />} />
    <Route path="/fale-conosco" element={<ContactUs />} />
  </Routes>
)

export default Rotas
