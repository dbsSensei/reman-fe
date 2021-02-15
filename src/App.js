import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Profile from './pages/ProfilePage';
import Details from './pages/DetailsPage';
import Aux from 'components/Aux';

import Home from './pages/Home';

function App() {
  const [login, setLogin] = useState(false);
  console.log('rhoka');
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home login={login} />
        </Route>
        <Route exact path="/aux" component={Aux} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login">
          <Login setLogin={setLogin} />
        </Route>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/details" component={Details} />
      </Router>
    </>
  );
}

export default App;
