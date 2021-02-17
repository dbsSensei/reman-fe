import './index.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Login({ setLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handleClick = event => {
    axios
      .post('https://sureface-natours.herokuapp.com/api/v1/users/login', {
        email,
        password,
      })
      .then(res => {
        setEmail('');
        setPassword('');
        console.log(res);
        console.log(res.cookies);
        setLogin(true);
<<<<<<< HEAD
        history.push('/');
=======
        const cookies = new Cookies();
        cookies.set('jwt', res.data.token, { path: '/' });
        console.log(cookies.get('jwt'));
        // history.push('/');
>>>>>>> 8e0e211802ce38cf4bac7e31f6d14de082402944
      });

    event.preventDefault();
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleUsername = event => {
    setEmail(event.target.value);
  };

  console.log(setLogin);
  return (
    <section>
      <div className="container-login">
        <div className="card-login">
          <h1 className="title-login">log into your account!</h1>
          <form onSubmit={handleClick}>
            <div className="form-email">
              <p className="text-title">Email Address</p>
              <input
                type="text"
                className="input-form form-email"
                placeholder="you@example.com"
                value={email}
                onChange={handleUsername}
              />
            </div>
            <div className="form-password">
              <p className="text-title">Password</p>
              <input
                type="password"
                className="input-form form-password"
                placeholder="• • • • • • • •"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button type="submit" className="btn-login">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
