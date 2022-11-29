import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import { About } from './paginas/about/About';
import { Home } from './paginas/home/Home';


function App() {
  const nome = 'Erika';
  return (
      
    <Router> // orquestrador - monta a pagina que o user vai ver
    <Navbar />
    <Routes> // lista de rotas da aplicação
      <Route path='/' element={<Home />}> </Route>
      <Route path='/home' element={<Home />}> </Route>
      <Route path='/about' element={<About />}> </Route>
    </Routes>     
    </Router>  
    
  );
}

export default App;
