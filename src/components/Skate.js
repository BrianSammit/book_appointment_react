import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <>
        <div className="item">
          <h3>{brand}</h3>
          <img className="ca-img" src={image} alt={brand} />
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
      </>
    );
  };

  return <>{generateSkateJSX()}</>;
};

export default Skate;
