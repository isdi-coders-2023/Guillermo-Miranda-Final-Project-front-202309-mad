import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeaderSession } from './header.session';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../core/store/store';

describe('Given header.session component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <Provider store={store}>
          <HeaderSession></HeaderSession>
          </Provider>
        </Router>
      );
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    })
  })
})
