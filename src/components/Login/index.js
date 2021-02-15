import './index.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login({ setLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handleClick = event => {
    axios
      .post('http://sureface-natours.herokuapp.com/api/v1/users/login', {
        email,
        password,
      })
      .then(res => {
        setEmail('');
        setPassword('');
        console.log(res);
        setLogin(true);
        history.push('/');
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
