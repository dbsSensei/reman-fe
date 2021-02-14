import React from 'react';
import Navbar from '../parts/Navbar/index';
import Aux from 'components/Aux';
import NewEvents from '../parts/NewEvents/index';

function Home({ login }) {
  return (
    <div>
      <Navbar login={login} />
      {/* Taruh NewEvents di bungkus div  ini */}
      <Aux style={{ marginRight: 31, height: 1120 }}>
        <NewEvents />
      </Aux>
    </div>
  );
}

export default Home;
