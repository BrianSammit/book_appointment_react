import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Skate = (props) => {
  const { match } = props;
  const { params } = match;
  const { skateId } = params;
  const [skate, setSkate] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/skateboards/${skateId}`)
      .then((res) => {
        setSkate(res.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [skateId]);

  const generateSkateJSX = () => {
    const { id, brand, image } = skate;

    return (
      <div className="skate-item">
        <h1>{brand}</h1>
        <img className="ca-img" src={image} alt={brand} />
        <button className="btn-div">
          <Link className="btn" to="/skates">
            Go back
          </Link>
        </button>
      </div>
    );
  };

  return <>{generateSkateJSX()}</>;
};

export default Skate;
