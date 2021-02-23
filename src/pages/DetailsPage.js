import React from 'react';
import Navbar from '../components/Navbar';
import Aux from '../components/Aux';
import DetailsContent from '../components/DetailsContent';

const DetailsPgae = () => {
  return (
    <div>
      <Navbar />
      <Aux>
        <DetailsContent />
      </Aux>
    </div>
  );
};

export default DetailsPgae;
