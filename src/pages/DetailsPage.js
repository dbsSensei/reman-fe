import React from 'react';
import Aux from '../components/Aux';
import Navbar from '../components/Navbar';

import DetailsContent from '../components/DetailsContent';

const DetailsPage = () => {
  return (
    <div>
      <Navbar />
      <Aux>
        <DetailsContent />
      </Aux>
    </div>
  );
};

export default DetailsPage;
