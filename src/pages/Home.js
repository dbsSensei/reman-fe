import React from 'react';

import Navbar from '../parts/Navbar';
import NewEvents from '../parts/NewEvents';

function Home() {
  return (
    <div>
      <Navbar />
      {/* Taruh NewEvents di bungkus div  ini */}
      <div>
        <NewEvents />
      </div>
    </div>
  );
}

export default Home;
