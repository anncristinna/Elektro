import { Route, HashRouter, Routes as Router } from "react-router-dom";

import Cadastro2 from "../pages/Cadastro2"; 
import Cadastro from "../pages/Casdatro";
import ErroMenu from "../pages/ErroMenu";
import ErroPesquisa from "../pages/ErroPesquisa";
import Home from "../pages/Home";
import Inicial from "../pages/Inicial";
import Login from "../pages/Login";
import MeuPerfilVisitante from "../pages/MeuPerfilVisitante";
import Parabens from "../pages/Parabens";

const Routes = () => {
    return (
        <HashRouter basename="/">
            <Router>
                <Route Component= { Home } path="/" />
                <Route Component= { Cadastro } path="/cadastro" />
                <Route Component= { Cadastro2 } path="/cadastro2" />
                <Route Component= { ErroPesquisa} path="/erropesquisa" />
                <Route Component= { Inicial } path="/inicial" />
                <Route Component= { Login } path="/login" />
                <Route Component= { MeuPerfilVisitante} path="/meuperfilvisitante" />
                <Route Component= { Parabens } path="/parabens" />
                <Route Component= { ErroMenu } path="/erromenu" />
            </Router>
        </HashRouter>
    )
}

export default Routes