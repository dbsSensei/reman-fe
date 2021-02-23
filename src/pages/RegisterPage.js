import React from 'react';
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import Aux from '../components/Aux';
import Footer from '../components/Footer';

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <Aux>
        <Register />
        <Footer />
      </Aux>
    </div>
  );
}
