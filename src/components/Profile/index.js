import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import './index.css';
import Button from '../../parts/Button';
import Input from '../../parts/Input';
import Star from '../../assets/image/star.svg';
import Settings from '../../assets/image/settings.svg';
import People from '../../assets/image/people.svg';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = '';
  const [confirmPassword, setConfrimPassword] = '';

  useEffect(() => {
    const cookies = new Cookies();

    axios
      .get('https://sureface-natours.herokuapp.com/api/v1/users/me', {
        headers: {
          Authorization: `Bearer ${cookies.get('jwt')}`,
        },
        withCredentials: true,
      })
      .then(res => {
        const { name, email } = res.data.data.data;
        setName(name);
        setEmail(email);
      });
  }, []);

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
            <a href="/profile">
              <div className="card-img-profile">
                <img
                  src={Settings}
                  alt="icon-settings"
                  className="img-profile"
                />
                <p className="text-img-profile">settings</p>
              </div>
            </a>
          </li>
          <li>
            <div>
              <img src={Star} className="img-profile" alt="icon-reviews" />
              <p className="text-img-profile-review">my reviews </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="profile_area">
        <div className="profile-card">
          <div className="color_h2_profile">
            <div className="setting_h2">
              <h2 className="title-profile">your account settings</h2>
            </div>
          </div>
          <form onSubmit={handleClickToApi}>
            <Input
              title="Your Name"
              placeholder="your name"
              value={name}
              onChange={nameHandler}
              inputEmailName
              className="profile-input"
            />
            <Input
              title="Email Address"
              placeholder="you@example.com"
              value={email}
              onChange={emailHandler}
              inputEmailName
              className="profile-input"
            />
            <div>
              <img
                className="img-default-profile"
                src={People}
                alt="icon-people"
              />
            </div>
            <Input />
            <Button btnProfile>SAVE SETTINGS</Button>
          </form>
        </div>
        <div className="border-bottom" />
        <div className="profile-card-password">
          <div className="color_h2_profile">
            <div className="setting_h2">
              <h2 className="title-profile">PASSWORD SETTINGS</h2>
            </div>
          </div>
          <form onSubmit={handleClickToApi}>
            <Input
              inputPassword
              title="Old Password"
              // onChange={}
              // value={}
            />
            <Input
              inputPassword
              title="New Password"
              value={newPassword}
              onChange={handleNewPassword}
            />
            <Input
              inputPassword
              title="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirm}
            />
            <Button btnProfile className="profile-btn-pass">
              SAVE PASSWORD
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
