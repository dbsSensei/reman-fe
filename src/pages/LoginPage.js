import React from 'react';
import Navbar from '../parts/Navbar';
import Login from '../components/Login';
import Aux from '../components/Aux';
import Footer from '../parts/Footer';

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
