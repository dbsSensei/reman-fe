import React from 'react';

import Navbar from '../parts/Navbar/index';
import NewEvents from '../parts/NewEvents/index';

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
