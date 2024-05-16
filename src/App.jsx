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
        <Header />
        <div>
          <AppProvider>
            <RoutesConfig />
          </AppProvider>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
