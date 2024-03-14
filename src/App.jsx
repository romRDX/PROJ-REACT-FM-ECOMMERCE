import React from 'react';
import './App.css';
import './reset.css';
import RoutesConfig from './routes';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header';

function App() {

  return (
    <div id='App'>
      <Header />
      <BrowserRouter>
        <div>
          <RoutesConfig />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
