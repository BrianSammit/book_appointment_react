import React, { Component } from 'react';
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
      .get('https://skate-store-api.herokuapp.com//appointments')
      .then((res) => {
        this.setState({ appointements: res.data });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  render() {
    const { appointements } = this.state;

    return (
      <div className="div-appo">
        <table>
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
      </div>
    );
  }
}
