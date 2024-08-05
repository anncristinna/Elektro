import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Inicial from './pages/Inicial';
import Home from './pages/Home';
import ErroPesquisa from './pages/ErroPesquisa';
import Parabens from './pages/Parabens'
import Cadastro from './pages/Casdatro'
import ErroMenu from './pages/ErroMenu';
import Cadastro2 from './pages/Cadastro2'
import MeuPerfilVisitante from './pages/MeuPerfilVisitante'
import Login from './pages/Login'
import Routes from './routes/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
