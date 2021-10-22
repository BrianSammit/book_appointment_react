import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
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
      .get('https://skate-store-api.herokuapp.com/skateboards')
      .then((res) => {
        this.setState({ skates: res.data });
      })
      .catch((error) => {
        throw new Error(error);
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
        <h1>LATES MODELS</h1>
        <p>Please select a skate model</p>
        <Carousel breakPoints={breakPoints}>
          {skates.map((skate) => (
            <div className="item" key={skate.id}>
              <Link to={`${skate.id}`}>
                <img className="ca-img" src={skate.image} alt={skate.brand} />
              </Link>
              <h3>{skate.brand}</h3>
              <ul className="ca-icons">
                <li className="ca-icons-li">
                  <a
                    className="ca-icons-link"
                    href="https://twitter.com/CruzSammit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="ca-icons-li">
                  <a
                    className="ca-icons-link"
                    href="https://www.facebook.com/groups/easkate4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>

                <li className="ca-icons-li">
                  <a
                    className="ca-icons-link"
                    href="https://github.com/BrianSammit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
