import '@testing-library/jest-dom';



import { ApiRepoUserStructures } from "../services/api.repo.users";

import { loadUsersThunk, loginUserThunk, updateUserThunk } from "../slices/user.thunk";
import { LoginUser, UserStructure } from '../models/user';
import { store } from "../../../core/store/store";




describe('Give user.thunk', () => {
  describe('When an action is taken ', () => {
    const userTest = {
      repo : {
        loginUser: jest.fn().mockReturnValue({
          token: '',
        }),
        updateUser: jest.fn().mockReturnValue({
          token: '',
        }),
        getUsers: jest.fn().mockReturnValue({
          token: '',
        }),
      } as unknown as ApiRepoUserStructures,
      
  
    };

    test('Then is should dispatch loginThunk and update user store', async () => {
      const userData = { ...userTest, loginUser: {} as LoginUser };
      await store.dispatch(loginUserThunk(userData));
      expect(userData.repo.loginUser).toHaveBeenCalled();

    })

    test('Then is should dispatch updateThunk and update user store', async () => {
      const userData = { ...userTest, updatedUser: {} as Partial<UserStructure>, id: {} as string, token: {} as string };
      await store.dispatch(updateUserThunk(userData));
      expect(userData.repo.updateUser).toHaveBeenCalled();

    })

    test('Then is should dispatch loadUsersThunk and update user store', async () => {
      const userData = { ...userTest };
      await store.dispatch(loadUsersThunk(userData));
      expect(userData.repo.getUsers).toHaveBeenCalled();

    })

  })


});

    
