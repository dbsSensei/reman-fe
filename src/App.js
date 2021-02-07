import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Profile from './pages/ProfilePage';
import Aux from 'components/Aux';

import Home from './pages/Home';

function App() {
  console.log('rhoka');
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/aux" component={Aux} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    </>
  );
}

export default App;
