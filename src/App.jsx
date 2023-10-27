import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Historia from './Pages/Historia'
import Titulos from './Pages/Titulos'
import Galeria from './Pages/Galeria'
import AcercaDe from './Pages/AcercaDe'
import InicioSesion from './Pages/IniciarSescion'
import Layout from './Layouts/Layout';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path="/" element={<Historia/>} />
            <Route path="/titulos" element={<Titulos/>} />
            <Route path="/galeria"element={<Galeria/>} />
            <Route path="/acercade" element={<AcercaDe/>} />
            <Route path="/login" element={<InicioSesion/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App


