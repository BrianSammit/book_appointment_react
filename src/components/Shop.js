import React from 'react';
import Countdown from './Countdown';

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shop-square">
        <Countdown futureDate="2022-12-31 00:00:00"></Countdown>
      </div>
    </div>
  );
};

export default Shop;
