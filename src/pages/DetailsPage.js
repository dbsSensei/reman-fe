import React from 'react';
import Navbar from '../parts/Navbar';
import Aux from '../components/Aux';
import DetailsContent from '../parts/DetailsContent';

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
