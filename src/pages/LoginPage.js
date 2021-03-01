import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Aux from '../components/Aux';
import Footer from '../components/Footer';
import Gap from '../parts/Gap/index';

export default function LoginPage({
  login,
  setLogin,
  animation,
  setAnimation,
}) {
  console.log(login);
  return (
    <div>
      <Navbar />
      <Aux style={{ height: 720 }}>
        <Gap height={80} />
        <Login
          setLogin={setLogin}
          animation={animation}
          setAnimation={setAnimation}
        />
        <Footer />
      </Aux>
    </div>
  );
}
