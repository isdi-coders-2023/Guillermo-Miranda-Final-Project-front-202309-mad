import '@testing-library/jest-dom';
import usersReducer, { UserState } from './user.slice';
import { loginUserThunk } from './user.thunk';


describe('Given userReducer', () => {

  describe('When users/login/fulfilled action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = {
        type: 'login/fulfilled',
        payload: { user: 'test', token: 'token' },
      };
      const state: UserState = {} as unknown as UserState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe('test');
      expect(result.token).toBe('token');

    })
  })
  
  describe('When users/login/pending action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = loginUserThunk.pending; 
      const state: UserState = {} as UserState;
      const result = usersReducer(state, action);
      expect(result.loginState).toBe('logging');
    });
  });

  describe('When users/login/rejected action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = loginUserThunk.rejected;  // Usa la acción generada por el thunk cuando es rechazado
      const state: UserState = {} as UserState;
      const result = usersReducer(state, action);
      expect(result.loginState).toBe('error');
    });
  });

  });
