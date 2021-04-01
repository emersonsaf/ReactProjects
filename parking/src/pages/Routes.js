import { Home } from '@material-ui/icons'
import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'

import { Home as HomePage } from './Home'
import { NotFound } from './NotFound'
import { Veicle } from './Veicle'
import Veicles from './Veicles'

export const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                    <Home />
                </Route>
                <Route path='/veiculos'>
                    <Veicles />
                </Route>
                <Route path='/veiculo/:id'>
                    <Veicle />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}