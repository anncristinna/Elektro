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
                <Route element= { ErroMenu } path="/erromenu" />
            </Router>
        </HashRouter>
    )
}

export default Routes