import React from 'react';
import Logo from '../../assets/image/logo-white.png';

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
          <a href="/login" className="title-login-nav-header">
            <button
              className=" button-login-nav-header"
              style={{ fontSize: 20 }}
            >
              Log in
            </button>
          </a>
          <a href="/register" className="title-signup-nav-header">
            <button
              className=" button-signup-nav-header"
              style={{ fontSize: 20, marginLeft: 15 }}
            >
              Sign up
            </button>
          </a>
        </nav>
      </header>
    </section>
  );
}

// <header class="header">
//   <nav class="nav nav--tours">
//     <a href="#" class="nav__el">
//       All tours
//     </a>
//     <form class="nav__search">
//       <button class="nav__search-btn"></button>
//       <input type="text" placeholder="Search tours" class="nav__search-input" />
//     </form>
//   </nav>
//   <div class="header__logo">
//     <img src="img/logo-white.png" alt="Natours logo" />
//   </div>
//   <nav class="nav nav--user">
//     <a href="#" class="nav__el">
//       My bookings
//     </a>
//     <a href="#" class="nav__el">
//       <img src="img/user.jpg" alt="User photo" class="nav__user-img" />
//       <span>Jonas</span>
//     </a>

//     <button class="nav__el">Log in</button>
//     <button class="nav__el nav__el--cta">Sign up</button>
//   </nav>
// </header>;
