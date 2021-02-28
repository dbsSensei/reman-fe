import React, { useEffect, useState } from 'react';
import Logo from '../../assets/image/reman-logo.png';
import Cookies from 'universal-cookie';
import axios from 'axios';
import './index.css';

export default function Index({ login }) {
  const [me, setMe] = useState('');
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
        const name = res.data.data.data;
        setMe(name.name);
      });
  }, []);
  return !login ? (
    <section>
      <header className="header">
        <nav className="nav nav--tours">
          <a href="/" className="title-nav-header">
            Reman.
          </a>
        </nav>
        <div className="header__logo">
          <img
            src={Logo}
            alt="logo"
            className="img-hero-header"
            onClick={() => alert('ngapain luh click!!!!')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: 20,
          }}
        >
          <nav className="nav wrapper-nav-header">
            <button className="button-login-nav-header ">
              <a href="/login" className="title-login-nav-header">
                Log in
              </a>
            </button>
          </nav>
          <nav>
            <button className="button-signup-nav-header">
              <a
                href="/register"
                className="title-signup-nav-header"
                // style={{ float: 'right' }}
              >
                Sign up
              </a>
            </button>
          </nav>
        </div>
      </header>
    </section>
  ) : (
    <section>
      <header className="header">
        <nav className="nav nav--tours">
          <a href="/" className="title-nav-header">
            Reman.
          </a>
        </nav>
        <div className="header__logo">
          <img
            src={Logo}
            alt="logo"
            className="img-hero-header"
            onClick={() => alert('ngapain luh click!!!!')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: 20,
          }}
        >
          <nav className="nav wrapper-nav-header">
            <button className="button-login-nav-header ">
              <a
                href="/login"
                className="title-login-nav-header"
                // style={{ float: 'right' }}
              >
                Log out
              </a>
            </button>
          </nav>
          <nav>
            <button className="button-signup-nav-header">
              <a href="/profile" className="title-signup-nav-header">
                {me}
              </a>
            </button>
          </nav>
        </div>
      </header>
    </section>
  );
}
