import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';
import App from '../../App';

it('should render the header', () => {
  const component = render(<Router><Header /></Router>);
  expect(component).toMatchSnapshot();
});

describe('Click events', () => {
  test('expect rockets to be default page when the app starts', () => {
    render(<Router><App /></Router>);
    expect(screen.queryByText(/All Rockets/)).toBeInTheDocument();
  });

  test('that user to redirected to the Mission page on clicking Quote', () => {
    render(<Router><App /></Router>);
    expect(screen.queryByText(/Status/)).toBeNull();
    userEvent.click(screen.getByText('Missions'));
    expect(screen.queryByText(/Status/)).toBeInTheDocument();
  });

  test('that user to redirected to the PROFILE page on clicking profile', () => {
    render(<Router><App /></Router>);
    expect(screen.queryByText(/My Rockets/)).toBeNull();
    userEvent.click(screen.getByText('My Profile'));
    expect(screen.queryByText(/My Rockets/)).toBeInTheDocument();
  });
});
