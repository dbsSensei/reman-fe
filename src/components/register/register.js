import './register.css';
import React, { useState } from 'react';

function Register() {
  const [YourName, setYourName] = useState('');
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [Confirm, setConfirm] = useState('');

  const clickHandler = event => {
    console.log(`YourName: ${YourName}`);
    console.log(`Email: ${Email}`);
    console.log(`Password: ${Pass}`);
    console.log(`Confirm: ${Confirm}`);
    setYourName('');
    setEmail('');
    setPass('');
    setConfirm('');
    event.preventDefault();
    alert('Registrasi succes');
  };

  const yourNameHandler = event => {
    setYourName(event.target.value);
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
                value={YourName}
                onChange={yourNameHandler}
              />
            </div>
            <div>
              <div>
                <p className="title-email-password">Email address</p>
              </div>
              <input
                type="text"
                className="input-email"
                placeholder="     you@example.com"
                value={Email}
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
