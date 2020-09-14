import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";

function Routing() {
  return (
    <div className="Routing">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>            
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>            
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>      
    </div>
  );
}

function Home() {
  return <h3>Please enter your favourite songs below</h3>;
}

function About() {
  return <h3>In this app you can store your favourite songs </h3>;
    }

export default Routing;