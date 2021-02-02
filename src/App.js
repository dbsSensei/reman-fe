// import Dashboard from './containers/dashboard'
// import './App.css';
import React from 'react';

import Register from './components/register/register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login/login';
import Home from './pages/home';

function App() {
  console.log('rhoka');
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Router>
    </>
  );
}

export default App;
