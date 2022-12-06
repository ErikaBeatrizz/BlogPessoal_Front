import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import { About } from './paginas/about/About';
import { Home } from './paginas/home/Home';
import { store } from './store/store';


function App() {
  const nome = 'Erika';
  return (
    // (router) orquestrador - monta a pagina que o user vai ver 
    <Provider store={store}>      
      <Router> 
        <Navbar />
          <Routes> // lista de rotas da aplicação
            <Route path='/' element={<Home />}> </Route>
            <Route path='/home' element={<Home />}> </Route>
            <Route path='/about' element={<About />}> </Route>
          </Routes>     
      </Router> 
    </Provider> 
    
  );
}

export default App;
