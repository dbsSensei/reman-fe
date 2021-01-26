import './login.css';
import React, { useState, useEffect } from 'react';

function Login() {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = event => {
    alert('login succes');
    console.log(value);
    console.log(password);
    setValue('');
    setPassword('');
    event.preventDefault();
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleUsername = event => {
    setValue(event.target.value);
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
                value={value}
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
