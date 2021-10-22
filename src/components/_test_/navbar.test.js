/**
 * @jest-environment jsdom
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar/Navbar';

describe('Creates a component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a component', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const element = screen.getByText('SKATES');
    expect(element).toBeInTheDocument();
  });
});
