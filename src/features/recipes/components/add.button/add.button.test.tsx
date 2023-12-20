import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from '../../../../core/store/store';
import { AddButton } from './add.button';
import { UserStructure } from '../../../users/models/user';
import { useUsers } from '../../../users/hooks/users.hook';

jest.mock('../../../users/hooks/users.hook');

describe('AddButton', () => {
  test('renders the AddButton and triggers the link', () => {

    (useUsers as jest.Mock).mockReturnValue({
      loggedUser: {} as UserStructure,
    });

    render(
      <Router>
        <Provider store={store}>
          <AddButton />
        </Provider>
      </Router>
    );

    const linkElement = screen.getByTestId('link');
    expect(linkElement).toBeInTheDocument();
    userEvent.click(linkElement);
    expect(window.location.pathname).toBe('/');
  });
});
