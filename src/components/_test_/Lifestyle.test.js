/**
 * @jest-environment jsdom
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Lifestyle from '../Lifestyle';

describe('Creates a component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Lifestyle />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a component', () => {
    render(
      <Router>
        <Lifestyle />
      </Router>,
    );
    const element = screen.getByText('STAKE OR DIE');
    expect(element).toBeInTheDocument();
  });
});
