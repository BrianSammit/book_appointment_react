import React, { Component } from 'react';
import Countdown from './Countdown';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: {
        futureDate: '2022-12-31 00:00:00',
      },
    };
  }

  render() {
    const { countdown } = this.state;
    return (
      <div className="shop-container">
        <div className="shop-square">
          <Countdown futureDate={countdown.futureDate}></Countdown>
          <h2 className="comming"> COMMING SOON !!</h2>
        </div>
      </div>
    );
  }
}

export default Shop;
