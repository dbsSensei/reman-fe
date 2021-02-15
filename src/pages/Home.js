import React from 'react';
import Navbar from '../parts/Navbar/';
import Aux from 'components/Aux';
import Content from '../parts/Content';
import Footer from '../parts/Footer';

function Home({ login }) {
  console.log(login);
  return (
    <div>
      <Navbar login={login} />
      {/* Taruh NewEvents di bungkus div  ini */}
      <Aux style={{ marginRight: 31, height: 2350 }}>
        <Content />
        <Footer />
      </Aux>
    </div>
  );
}

export default Home;
