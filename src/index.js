import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import LineCard from 'LineCard'
import AboutPage from 'AboutPage'
import ContactPage from 'ContactPage'

import 'assets/css/index.css'

const history = createBrowserHistory()


ReactDOM.render(
    <Router history={history}>
        <Route path="/line-card" component={LineCard} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
    </Router>,
    document.getElementById("react-content"))
