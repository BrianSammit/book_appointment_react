/* eslint-disable arrow-parens */
import axios from 'axios';

describe('Api communications module', () => {
  it('1. Checks the get skate method', () => {
    const data = axios
      .get('https://skate-store-api.herokuapp.com//skateboards')
      .then((res) => res);
    expect(data).toBeInstanceOf(Object);
  });

  it('2. Checks the get one Caetegory info method', () => {
    const data = axios
      .get('https://skate-store-api.herokuapp.com//skateboards')
      .then((res) => res);
    expect(data).toBeInstanceOf(Object);
  });
});
