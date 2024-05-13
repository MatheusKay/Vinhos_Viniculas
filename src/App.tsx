import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Footer from './components/Footer'
import Rotas from './rounters'

import { EstiloGlobal } from './styles/estiloGlobal'

import { store } from './store'
import Modal from './components/Modal'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Modal /> */}
        <EstiloGlobal />
        <Header />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
