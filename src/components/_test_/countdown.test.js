/**
 * @jest-environment jsdom
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Countdown from '../Countdown';

describe('Creates a component', () => {
  it('Renders a component', () => {
    render(
      <Router>
        <Countdown />
      </Router>,
    );
    const element = screen.getByText('HOURS');
    expect(element).toBeInTheDocument();
  });
});
