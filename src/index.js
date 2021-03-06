import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import LineCard from 'LineCard'
import AboutPage from 'AboutPage'
import ContactPage from 'ContactPage'
import LandingPage from 'LandingPage'

import 'assets/css/index.css'

const history = createBrowserHistory()


ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path="/line-card" component={LineCard} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/" component={LandingPage} />
        </Switch>
    </Router>,
    document.getElementById("react-content"))
