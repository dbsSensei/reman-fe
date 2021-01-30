import React from 'react';

import './home.css';
import Navbar from '../parts/navbar';
import NewEvets from '../parts/newEvents';

function Home() {
  return (
    <div className="container-home">
      <Navbar />
      <h1>Ini adalah halaman Home</h1>
      <NewEvets />
    </div>
  );
}

export default Home;
