import React, { Component } from 'react';
import moment, { duration } from 'moment';
import PropTypes from 'prop-types';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    this.setCountdown();
    this.interval = setInterval(() => {
      this.setCountdown();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setCountdown() {
    const futureDate = moment(this.props.futureDate); /* eslint-disable-line */

    const today = moment();

    const clockDuration = duration(futureDate.diff(today));

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const min = clockDuration.minutes();
    const sec = clockDuration.seconds();

    this.setState({
      days,
      hours,
      min,
      sec,
    });
  }

  addZeros(value) {
    this.value = String(value);
    while (value.length < 2) {
      value = `0${value}`; /* eslint-disable-line */
    }
    return value;
  }

  render() {
    return (
      <div className="countdown">
        {Object.keys(this.state).map((key) => (
          <div className="countdown-segment" key={key.toString()}>
            {/* eslint-disable-next-line */}
            <span className="countdown-segment-number">{this.addZeros(this.state[key])}</span>
            <span className="countdown-segment-caption">{key.toUpperCase()}</span>
          </div>
        ))}
      </div>
    );
  }
}

Countdown.propTypes = {
  futureDate: PropTypes.number.isRequired,
};
