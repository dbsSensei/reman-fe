import './login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = event => {
    axios
      .post('http://sureface-natours.herokuapp.com/api/v1/users/login', {
        email,
        password,
      })
      .then(res => {
        setEmail('');
        setPassword('');
        props.setLoggedin(true);
        <Redirect to="/home" />;
        console.log(res);
      });

    event.preventDefault();
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleUsername = event => {
    setEmail(event.target.value);
  };
  // console.log(value)
  // console.log(password)
  return (
    <section>
      <div className="container-login mt-5">
        <div className="card-login">
          <h1 className="title-login h3 mt-4">log into your account!</h1>
          <form onSubmit={handleClick} className="mt-4">
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
