import React from 'react';
import Navbar from '../components/Navbar/index';
import Aux from '../components/Aux';
import Profile from '../components/Profile';
import Footer from '../components/Footer/index';

export default function ProfilePage() {
  return (
    <div>
      <Navbar />
      <Aux>
        <Profile />
        <Footer />
      </Aux>
    </div>
  );
}
