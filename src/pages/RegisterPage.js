import React from 'react';
import Navbar from '../parts/Navbar';
import Register from '../components/Register';

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginLeft: 40,
          backgroundColor: '#f5f5f5',
          marginRight: 31,
          paddingTop: 20,
          height: 700,
        }}
      >
        <Register />
      </div>
    </div>
  );
}
