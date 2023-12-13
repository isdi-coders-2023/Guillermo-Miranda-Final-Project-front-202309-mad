import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { store } from '../../../../core/store/store';
import { MemoryRouter as Router } from "react-router-dom";
import { Register } from './register';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { useUsers } from '../../hooks/users.hook';

jest.mock('../../hooks/users.hook', () => ({
  useUsers: jest.fn().mockReturnValue({
    register: jest.fn(),
  }),
}));
describe('Given Register component', () => {
  describe('When the Register component is rendered', () => {
    test('Then renders register form and handles submission', async () => {
    render( 
      <Router>
      <Provider store={store}>
        <Register></Register>
      </Provider>
    </Router>
    )

    // const title = screen.getByText('NEW USER');
    const form = screen.getByRole('form');
    const input = screen.getAllByRole('textbox');
    await userEvent.type(input[0],'test');
    await userEvent.click(screen.getAllByRole('button')[0]);
    await fireEvent.submit(form);  
    // expect(title).toBeInTheDocument();
    expect (useUsers().register).toHaveBeenCalled(); 
  });

  })


})
