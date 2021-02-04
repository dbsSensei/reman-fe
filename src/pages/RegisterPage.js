import React from 'react';
import Navbar from '../parts/Navbar';
import Register from '../components/Register';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 40 }} />
      <Register />
    </>
  );
}
