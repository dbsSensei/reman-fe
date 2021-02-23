import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Aux from '../components/Aux';
import Footer from '../components/Footer';

export default function LoginPage({ setLogin }) {
  return (
    <div>
      <Navbar />
      <Aux style={{ height: 720 }}>
        <Login setLogin={setLogin} />
        <Footer />
      </Aux>
    </div>
  );
}
