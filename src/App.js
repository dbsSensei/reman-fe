// import Dashboard from './containers/dashboard'
// import './App.css';
import Register from './components/register/register';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './components/login/login';
import Dashbord from './containers/dashboard';
import Home from './pages/home';
import './assets/scss/style.scss';

function App() {
  console.log('rhoka');
  return (
    <>
      <Router>
        <Route exact path="/" component={Dashbord} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
      </Router>
    </>
  );
}

export default App;
