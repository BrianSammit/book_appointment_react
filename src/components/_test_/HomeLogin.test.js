/**
 * @jest-environment jsdom
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import HomeLogin from '../HomeLogin';

describe('Creates a component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <HomeLogin />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a component', () => {
    render(
      <Router>
        <HomeLogin />
      </Router>,
    );
    const element = screen.getByText('Log In');
    expect(element).toBeInTheDocument();
  });
});
