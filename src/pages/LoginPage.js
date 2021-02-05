import React from 'react';
import Navbar from '../parts/Navbar';
import Login from '../components/Login';
import Aux from 'components/Aux';

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <Aux>
        <Login />
      </Aux>
    </div>
  );
}
