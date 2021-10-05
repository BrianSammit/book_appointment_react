import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skates: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/skateboards')
      .then((res) => {
        this.setState({ skates: res.data });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];

    const { skates } = this.state;

    return (
      <div className="div-carousel">
        <h2>Skateboards</h2>
        <Carousel breakPoints={breakPoints}>
          {skates.map((skate) => (
            <div className="item" key={skate.id}>
              {skate.brand}
              <img className="ca-img" src={skate.image} alt={skate.brand} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
