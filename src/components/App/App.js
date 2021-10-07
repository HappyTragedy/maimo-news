import './App.css';

import React from "react";
import { BrowserRouter as Router /*Va a decirle a la app que tenga navegabilidad*/, Switch, Route } from "react-router-dom";
import Home from '../../Pages/Home'
import Category from '../../Pages/Category'


function App() {

  //Hacer fetch al endpoint de X categoría

  

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
            <Category />
          </Route>
          <Route path="/about-us">
            <Home />
            <Category />
          </Route>
          <Route path="*">
            <p>Page not found</p>
          </Route>
        </Switch>
      </Router>

    </>


  )
}

export default App;
