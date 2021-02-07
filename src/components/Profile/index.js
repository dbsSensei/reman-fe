import React, { useState } from 'react';
import './index.css';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nameHandler = event => {
    setName(event.target.value);
  };

  const emailHandler = event => {
    setEmail(event.target.value);
  };

  return (
    <div className="container_profile">
      <div className="menu_sidebar">
        <ul className="main_menubar">
          <li style={{ marginTop: 60 }}>
            <a href="">settings</a>
          </li>
          <li>
            <a href="">my booking</a>
          </li>
          <li>
            <a href="">my reviews</a>
          </li>
          <li>
            <a href="">billing</a>
          </li>
        </ul>
      </div>
      <div className="profile_area">
        <div className="color_h2_profile">
          <div className="setting_h2">
            <h2>your account setting</h2>
          </div>
        </div>
        <form onSubmit="">
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
        </form>
      </div>
    </div>
  );
}
