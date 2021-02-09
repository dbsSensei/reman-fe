import React from 'react';
import Navbar from '../parts/Navbar';
import Login from '../components/Login';
import Aux from 'components/Aux';
import Footer from '../parts/Footer';

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <Aux>
        <Login />
        <Footer />
      </Aux>
    </div>
  );
}
