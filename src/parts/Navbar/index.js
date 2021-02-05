import React from 'react';
import Logo from '../../assets/image/reman-logo.png';

import './index.css';

export default function index() {
  return (
    <section>
      <header className="header">
        <nav className="nav nav--tours">
          <a href="/" className="title-nav-header">
            Reman.
          </a>
        </nav>
        <div className="header__logo">
          <img src={Logo} alt="logo" className="img-hero-header" />
        </div>
        <nav className="nav wrapper-nav-header">
          <button className="button-login-nav-header ">
            <a href="/login" className="title-login-nav-header">
              Log in
            </a>
          </button>
          <button className="button-signup-nav-header">
            <a href="/register" className="title-signup-nav-header">
              Sign up
            </a>
          </button>
        </nav>
      </header>
    </section>
  );
}
