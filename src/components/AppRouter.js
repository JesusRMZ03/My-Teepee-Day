import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import { NavBar } from './navBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

            <switch>
                <Route exact path="/" component={ HomeScreen} />

                <Route exact path="/about" component={ AboutScreen} />
                <Route exact path="/login" component={ LoginScreen} />

                <Redirect to ="/" />

            </switch>
            </div>
        </Router>
    )
}
//<Route component={ HomeScreen }/>
//Sirve para que no le permitas al usurio buscar cualquier otra pagina