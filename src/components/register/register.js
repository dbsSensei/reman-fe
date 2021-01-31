import React, { useState } from 'react';
import axios from 'axios';

import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirmPassword] = useState('');

  const clickHandler = event => {
    // console.log(`name: ${name}`);
    // console.log(`email: ${email}`);
    // console.log(`Password: ${password}`);
    // console.log(`Confirm: ${confirm}`);
    if (password !== confirm) {
      alert('Password yang ada masukan tidak cocok!');
      // setConfirmPassword('');
    } else {
      axios
        .post('http://sureface-natours.herokuapp.com/api/v1/users/signup', {
          name: name,
          email: email,
          password: password,
          passwordConfirm: confirm,
        })
        .then(response => {
          console.log(response);

          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        });

      event.preventDefault();
      // alert('Registrasi succes');
    }
    event.preventDefault();
  };

  const nameHandler = event => {
    setName(event.target.value);
  };

  const emailHandler = event => {
    setEmail(event.target.value);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };

  const confirmHandler = event => {
    setConfirmPassword(event.target.value);
  };
  // console.log(value)
  // console.log(password)
  return (
    <section>
      <div className="container-register">
        <div className="card-register">
          <h1 className="title-register">Create your account!</h1>
          <form onSubmit={clickHandler}>
            <div className="form-your-name">
              <p className="title-text">Your Name</p>
              <input
                type="text"
                className="input-form your-name"
                placeholder="your name"
                value={name}
                onChange={nameHandler}
              />
            </div>
            <div className="form-email">
              <p className="title-text">Email Address</p>
              <input
                type="text"
                className="input-form form-email"
                placeholder="you@example.com"
                value={email}
                onChange={emailHandler}
              />
            </div>
            <div className="form-password">
              <p className="title-text">Password</p>
              <input
                type="password"
                className="input-form form-password"
                placeholder="• • • • • • • •"
                value={password}
                onChange={passwordHandler}
              />
            </div>
            <div className="form-confirm-password">
              <p className="title-text">Confirm Password</p>
              <input
                type="password"
                className="input-form form-confirm-password"
                placeholder="• • • • • • • •"
                value={confirm}
                onChange={confirmHandler}
              />
            </div>
            <button type="submit" className="btn-register">
              SIGNUP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
