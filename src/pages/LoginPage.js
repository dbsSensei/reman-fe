import React from 'react';
import Navbar from '../parts/Navbar';
import Login from '../components/Login';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 40 }} />
      <Login />
    </>
  );
}
