import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home as HomePage } from './Home'
import { NotFound } from './NotFound'
import { Veicle } from './Veicle'
import { Login } from './Login'
import Veicles from './Veicles'


export const Routes = () => {
    let urlElements = window.location.href.split('/')
    return (

        <Router>
            {  urlElements[3] === 'login' ? null : <Navbar />}
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/veiculos'>
                        <Veicles />
                    </Route>
                    <Route path='/veiculo/:id'>
                        <Veicle />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
        </Router>
    )
}