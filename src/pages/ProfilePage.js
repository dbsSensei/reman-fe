import React from 'react';
import Navbar from '../parts/Navbar/index';
import Aux from 'components/Aux';
import Profile from '../components/Profile/index';

export default function ProfilePage() {
  return (
    <div>
      <Navbar />
      <Aux>
        <Profile />
      </Aux>
    </div>
  );
}
