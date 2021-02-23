import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../parts/Button';
import './index.css';
import Input from '../../parts/Input';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirmPassword] = useState('');

  const clickHandler = event => {
    if (password !== confirm) {
      alert('Password yang ada masukan tidak cocok!');
      // setConfirmPassword('');
    } else {
      axios
        .post('https://sureface-natours.herokuapp.com/api/v1/users/signup', {
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
            <Input
              onChange={nameHandler}
              value={name}
              placeholder="your name"
              inputEmailName
              title="Your Name"
            />
            <Input
              onChange={emailHandler}
              value={email}
              placeholder="you@example.com"
              inputEmailName
              title="Email Adress"
            />
            <Input
              onChange={passwordHandler}
              value={password}
              inputPassword
              title="Password"
            />
            <Input
              onChange={confirmHandler}
              value={confirm}
              inputPassword
              title="Confirm Password"
            />
            <Button btnForLogin>Sign Up</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
