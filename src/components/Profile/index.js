import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Star from '../../assets/image/star.svg';
import Settings from '../../assets/image/settings.svg';
import People from '../../assets/image/people.svg';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = '';
  const [confirmPassword, setConfrimPassword] = '';

  useEffect(() => {
    axios
      .get('https://sureface-natours.herokuapp.com/api/v1/users/me')
      .then(res => console.log(res));
  }, [0]);

  const handleClickToApi = e => {
    if (newPassword !== confirmPassword) {
      alert('password tidak sama');
    } else {
      // axios post for api taruh di bawah ini untuk setel password
      return console.log('succes');
    }

    e.preventDefault();
  };

  const handleNewPassword = e => {
    setNewPassword(e.target.value);
  };

  const handleConfirm = e => {
    setConfrimPassword(e.target.value);
  };

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
            <a href="#">
              <img
                src={Settings}
                style={{
                  width: 20,
                  height: 20,
                  float: 'left',
                  marginRight: 10,
                }}
              />
              <p>settings</p>
            </a>
          </li>
          <li>
            <p>
              <img
                src={Star}
                style={{
                  width: 20,
                  height: 20,
                  float: 'left',
                  marginRight: 10,
                }}
              />
              <>my reviews </>
            </p>
          </li>
        </ul>
      </div>
      <div className="profile_area">
        <div className="profile-card">
          <div className="color_h2_profile">
            <div className="setting_h2">
              <h2>your account setting</h2>
            </div>
          </div>
          <form onSubmit={handleClickToApi}>
            <div className="form-your-name">
              <p className="title-text">Your Name</p>
              <input
                type="text"
                className="input-form form-email"
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
            <div>
              <img
                src={People}
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: '#808080',
                  marginTop: 40,
                  borderRadius: 20,
                  float: 'left',
                  marginRight: 30,
                }}
              />
            </div>
            <div className="card-text-people-icon">
              <input type="file" class="custom-file-input" />
            </div>
            <div className="card-btn-save-settings">
              <button type="submit" className="btn-save-settings">
                SAVE SETTINGS
              </button>
            </div>
          </form>
        </div>
        <div className="border-bottom" />
        <div className="profile-card-password">
          <div className="color_h2_profile">
            <div className="setting_h2">
              <h2>PASSWORD SETTINGS</h2>
            </div>
          </div>
          <form onSubmit={handleClickToApi}>
            <div className="form-your-name">
              <p className="title-text">Old Password</p>
              <input
                type="password"
                className="input-form form-password"
                placeholder="• • • • • • • •"
                // value={name}
                // onChange={nameHandler}
              />
            </div>
            <div className="form-email">
              <p className="title-text">New Password</p>
              <input
                type="password"
                className="input-form form-password"
                placeholder="• • • • • • • •"
                value={newPassword}
                onChange={handleNewPassword}
              />
            </div>
            <div className="form-email">
              <p className="title-text">Confirm Password</p>
              <input
                type="password"
                className="input-form form-password"
                placeholder="• • • • • • • •"
                value={confirmPassword}
                onChange={handleConfirm}
              />
            </div>
            <div className="card-btn-save-settings">
              <button type="submit" className="btn-save-settings">
                SAVE PASSOWRD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
