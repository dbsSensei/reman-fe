import React, { useState } from 'react';
import axios from 'axios';

import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [Confirm, setConfirm] = useState('');

  const clickHandler = event => {
    // console.log(`name: ${name}`);
    // console.log(`email: ${email}`);
    // console.log(`Password: ${Pass}`);
    // console.log(`Confirm: ${Confirm}`);
    axios
      .post('http://sureface-natours.herokuapp.com/api/v1/users/signup', {
        name: name,
        email: email,
        password: Pass,
        passwordConfirm: Confirm,
      })
      .then(response => {
        console.log(response);

        setName('');
        setEmail('');
        setPass('');
        setConfirm('');
      });

    event.preventDefault();
    // alert('Registrasi succes');
  };

  const nameHandler = event => {
    setName(event.target.value);
  };

  const emailHandler = event => {
    setEmail(event.target.value);
  };

  const passwordHandler = event => {
    setPass(event.target.value);
  };

  const confirmHandler = event => {
    setConfirm(event.target.value);
  };
  // console.log(value)
  // console.log(password)
  return (
    <section>
      <div className="container-registrasi">
        <div className="card-registrasi">
          <h1 className="title-registrasi">CREATE YOUR ACCOUNT!</h1>
          <form onSubmit={clickHandler}>
            <div>
              <div>
                <p className="title-email-password">Your Name</p>
              </div>
              <input
                type="text"
                className="input-email"
                placeholder="Your Name"
                value={name}
                onChange={nameHandler}
              />
            </div>
            <div>
              <div>
                <p className="title-email-password">email address</p>
              </div>
              <input
                type="text"
                className="input-email"
                placeholder="     you@example.com"
                value={email}
                onChange={emailHandler}
              />
            </div>
            <div>
              <div className="card-email-registrasi">
                <p className="title-email-password">Password</p>
              </div>
              <input
                type="password"
                value={Pass}
                onChange={passwordHandler}
                placeholder="     • • • • • • • •"
                className="input-password"
              />
            </div>
            <div>
              <div>
                <p className="title-email-password">Confirm Password</p>
              </div>
              <input
                type="password"
                value={Confirm}
                onChange={confirmHandler}
                placeholder="     • • • • • • • •"
                className="input-password"
              />
            </div>
            <button type="submit" className="btn">
              SIGNUP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
