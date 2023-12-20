
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../core/store/store';
import { UserStructure } from '../../../users/models/user';
import { useUsers } from '../../../users/hooks/users.hook';

jest.mock("../menu/menu")
jest.mock('../../../users/hooks/users.hook')
describe('Given header component', () => {
  describe('When we instantiate', () => {

    (useUsers as jest.Mock).mockReturnValue({
      loggedUser: {} as UserStructure,
    })
    beforeEach(() => {
      render(
        <Router>
          <Provider store={store}>
          <Header></Header>
          </Provider>
        </Router>
      );
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    })
  })
})
