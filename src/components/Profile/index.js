import React, { useState } from 'react';
import './index.css';
import Star from '../../assets/image/star.svg';
import Settings from '../../assets/image/settings.svg';

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
          <div>
            <img
              src={People}
              style={{
                width: 130,
                height: 130,
                backgroundColor: '#808080',
                marginTop: 40,
                borderRadius: 20,
                float: 'left',
                marginRight: 30,
              }}
            />
            <p
              className="text_people_icon"
              style={{ paddingTop: 80, cursor: 'pointer' }}
              onClick={() => alert('Belum bisa... ngapain diklik')}
            >
              Choose New Photo
            </p>
            <hr />
          </div>
        </div>
        <div className="border-bottom" />
      </div>
    </div>
  );
}
