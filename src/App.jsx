import React from 'react';
import './App.css';
import './reset.css';
import RoutesConfig from './routes';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header';
import AppProvider from './hooks';

function App() {

  return (
    <div id='App'>
      <BrowserRouter>
        <AppProvider>
          <Header />
          <div>
            <RoutesConfig />
          </div>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
