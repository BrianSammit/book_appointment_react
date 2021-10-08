import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointements: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/appointments')
      .then((res) => {
        this.setState({ appointements: res.data });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    const { appointements } = this.state;

    return (
      <table className="div-appo">
        <thead>
          <tr>
            <th>User</th>
            <th>City</th>
            <th>Skateboard</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        {appointements.map((appo) => (
          <tbody className="item" key={appo.id}>
            <tr>
              <td>{appo.user.username}</td>
              <td>{appo.city}</td>
              <td>{appo.skateboard.brand}</td>
              <td>{appo.start_date}</td>
              <td>{appo.end_date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}
