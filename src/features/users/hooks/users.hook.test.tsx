import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LoginUser, UserStructure } from "../models/user";
import { useUsers } from './users.hook';
import { userEvent } from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { store } from "../../../core/store/store";
import { ApiRepoUserStructures } from "../services/api.repo.users"



jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockLoginUser = {} as LoginUser;
const mockNewUser = {} as Partial<UserStructure>;
const mockUpdatedUser= {} as Partial<UserStructure>;
const mockId= {} as string;

describe('Given useUsers hooks', () => {
  const TestComponent = () => {
    const { register, login, update } = useUsers();

    return (
      <>
        <button onClick={() => update(mockUpdatedUser, mockId)} ></button>
        <button onClick={() => login(mockLoginUser)}></button>
        <button onClick={() => register(mockNewUser)}></button>
      </>
    );
  };

  let elements: HTMLElement[];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <TestComponent></TestComponent>
      </Provider>
    );
    elements = screen.getAllByRole('button');
  });


  describe('When we click button login', () => {
    test('Then the dispacht should have been called', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button update', () => {
    test('Then the dispacht should have been called', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button register ', () => {
    test('Then the dispacht should have been called', async () => {
      ApiRepoUserStructures.prototype.registerUser = jest.fn();

      await userEvent.click(elements[3]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
