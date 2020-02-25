import React from 'react';
import 'materialize-css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

// import logo from './logo.svg';

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route path="/contact" exact >
          <Contact />
        </Route>
      </Switch>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
