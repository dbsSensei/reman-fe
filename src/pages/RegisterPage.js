import React from 'react';
import Navbar from '../parts/Navbar';
import Register from '../components/Register';
import Aux from 'components/Aux';
export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <Aux>
        <Register />
      </Aux>
    </div>
  );
}
