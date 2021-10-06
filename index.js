import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import LandingPage from './views/landing-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={LandingPage} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
