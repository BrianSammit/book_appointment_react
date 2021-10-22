/**
 * @jest-environment jsdom
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Shop from '../Shop';

describe('Creates a component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Shop />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a component', () => {
    render(
      <Router>
        <Shop />
      </Router>,
    );
    const element = screen.getByText('COMMING SOON !!');
    expect(element).toBeInTheDocument();
  });
});
