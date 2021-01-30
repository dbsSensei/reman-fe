import React from 'react';

import './navbar.css';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Log in</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
