import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from '../../../../core/store/store';
import { HomeButton } from '../home.button/home.button';


jest.mock('../../../users/hooks/users.hook');

describe('HomeButton', () => {
  test('renders the HomeButton and triggers the link', () => {

    render(
      <Router>
        <Provider store={store}>
          <HomeButton />
        </Provider>
      </Router>
    );

    const linkElement = screen.getByTestId('link');
    expect(linkElement).toBeInTheDocument();
    userEvent.click(linkElement);
    expect(window.location.pathname).toBe('/');
  });
});
