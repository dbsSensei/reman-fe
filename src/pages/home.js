import React from 'react';

import './home.css';
import Navbar from '../parts/navbar';

function Home() {
  return (
    <div className="container-home">
      <Navbar />
      <h1>Ini adalah halaman Home</h1>
    </div>
  );
}

export default Home;
