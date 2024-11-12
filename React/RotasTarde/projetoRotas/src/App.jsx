import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// BrowserRouter - Serve como container para habilitar todas as nossas rotas.
//Routes - Funciona como uma caixa para todas as nossas rotas.
//Route - Define cada rota individualmente
//Link - É usado para criar links entre as paginas

import Inicio from './Components/Inicio/Inicio'
import Sobre from './Components/Sobre/Sobre'
import Contatos from './Components/Contatos/Contatos'


export default function App() {
  return (
    // <nav>
    //   <ul>
    //     <li><a href="">Inicio</a></li>
    //     <li><a href="">Sobre</a></li>
    //     <li><a href="">Contatos</a></li>
    //   </ul>
    // </nav>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/sobre">SOBRE</Link>
          </li>
          <li>
            <Link to="/contatos">CONTATOS</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  )
}