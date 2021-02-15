import React from 'react';
import Navbar from '../parts/Navbar/index';
import Aux from '../components/Aux';
import Profile from '../components/Profile';
import Footer from '../parts/Footer/index';

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
