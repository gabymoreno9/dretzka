import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import LineCard from 'LineCard'

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <LineCard />
    </Router>,
    document.getElementById("react-content"))
