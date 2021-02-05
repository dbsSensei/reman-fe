import React from 'react';

import Navbar from '../parts/Navbar/index';
import NewEvents from '../parts/NewEvents/index';
import Aux from 'components/Aux';

function Home() {
  return (
    <div>
      <Navbar />
      {/* Taruh NewEvents di bungkus div  ini */}
      <Aux style={{ marginRight: 31, height: 1000 }}>
        <NewEvents />
      </Aux>
    </div>
  );
}

export default Home;
