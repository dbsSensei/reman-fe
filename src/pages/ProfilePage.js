import React from 'react';
import Navbar from '../components/Navbar/index';
import Aux from '../components/Aux';
import Profile from '../components/Profile';
import Footer from '../components/Footer/index';

export default function ProfilePage({ login, setLogin }) {
  return (
    <div>
      <Navbar login={login} />
      <Aux>
        <Profile setLogin={setLogin} />
        <Footer />
      </Aux>
    </div>
  );
}
