import './login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
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
      <div className="container">
        <div className="card">
          <h1 className="title">LOG INTO YOUR ACCOUNT</h1>
          <form onSubmit={handleClick}>
            <div>
              <div className="card-email">
                <p className="title-email-password">Email address</p>
              </div>
              <input
                type="text"
                value={email}
                onChange={handleUsername}
                placeholder="        you@example.com"
                className="input-email"
              />
            </div>
            <div>
              <div>
                <p className="title-email-password">Password</p>
              </div>
              <input
                type="password"
                className="input-password"
                placeholder="     • • • • • • • •"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button type="submit" className="btn">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
