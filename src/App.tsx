import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Rotas from './rounters'

import { EstiloGlobal } from './styles/estiloGlobal'

function App() {
  // const filtroVolume = MockVinho.filter((vinho) => {
  //   return vinho.volume === 1
  // })

  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
