// import Dashboard from './containers/dashboard'
// import './App.css';
import React, { useState } from 'react';

import Register from './components/register/register';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import Login from './components/login/login';
import Dashbord from './containers/dashboard';
import Home from './pages/home';

function App() {
  console.log('rhoka');
  const [loggedin, setLoggedin] = useState(false);
  return (
    <>
      <Router>
        <Route exact path="/">
          {loggedin ? <Redirect to="/home" /> : <Redirect to="/register" />}
        </Route>
        <Route exact path="/login">
          <Login loggedin={loggedin} setLoggedin={setLoggedin} />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
      </Router>
    </>
  );
}

export default App;
