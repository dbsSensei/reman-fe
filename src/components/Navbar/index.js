import React from 'react';
import Logo from '../../assets/image/reman-logo.png';

import './index.css';

export default function index({ login }) {
  // const [login, setLogin] = useState(false);
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
              <a
                href="/login"
                className="title-login-nav-header"
                // style={{ float: 'right' }}
              >
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
              <a
                href="/profile"
                className="title-signup-nav-header"
                // style={{ float: 'right' }}
              >
                Me
              </a>
            </button>
          </nav>
        </div>
      </header>
    </section>
  );
}
