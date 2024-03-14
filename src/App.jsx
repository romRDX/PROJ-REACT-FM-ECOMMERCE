import React from 'react';
import './App.css';
import './reset.css';
import RoutesConfig from './routes';
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div id='App'>
      <BrowserRouter>
        <header>
          <ul className='menu'>
            <li>Home</li>
            <li>Produtos</li>
            <li>Carrinho</li>

            <li>Meus pedidos</li>
            
            <li>Login</li>
            <li>Meus dados</li>
          </ul>
        </header>

        <div>
          <RoutesConfig />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
