import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Skate = (props) => {
  const { match } = props;
  const { params } = match;
  const { skateboard_id } = params;
  const [skate, setSkate] = useState([]);
  const [user_id, setUser] = useState([]);
  const [city, setCity] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3001/skateboards/${skateboard_id}`)
      .then((res) => {
        setSkate(res.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [skateboard_id]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((res) => {
        setUser(res.data.user.id);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [skateboard_id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/appointments', {
        start_date,
        end_date,
        city,
        skateboard_id,
        user_id,
      })
      .then(() => {
        console.log('new appointment created');
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const generateSkateJSX = () => {
    const { brand, image } = skate;

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

  const generateUserForm = () => {
    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              required
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              type="datetime-local"
              value={start_date}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="datetime-local"
              value={end_date}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <button className="" type="submit">
            <div className="text">Submit</div>
          </button>
        </form>
        <p>{user_id}</p>
        <p>{start_date}</p>
        <p>{end_date}</p>
      </div>
    );
  };

  return (
    <>
      {generateSkateJSX()}
      {generateUserForm()}
    </>
  );
};

export default Skate;
