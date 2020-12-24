// cSpell:Ignore ordem, estar, RotasPrivadas, rotasProvadas
import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import NaoEncontrado from './pages/NaoEncontrado'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Menu from './pages/Menu'
import RotasPrivadas from './rotasProvadas'

//as rotas tem que estar na ordem, o último sempre é o não encontrado!
export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/login" component={Login}/>
                <RotasPrivadas exact path="/Menu" component={Menu}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </BrowserRouter>
    )
}