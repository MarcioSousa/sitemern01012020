import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import NaoEncontrado from './pages/NaoEncontrado'
import Inicio from './pages/Inicio'
import Login from './pages/Login'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/login" component={Login}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </BrowserRouter>
    )
}