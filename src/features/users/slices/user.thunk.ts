import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginPayload } from '../models/login.payload';
import { LoginUser, UserStructure } from '../models/user';
import { ApiRepoUserStructures } from '../services/api.repo.users';


export const loadUsersThunk = createAsyncThunk<UserStructure[], 
{
  repo: ApiRepoUserStructures, 
}>('load',async ({repo}) => {
    const users = await repo.getUsers();
    return users;
  }
);

// type ParamsRegister = {
//   repo: ApiRepoUserStructures;
//   newUser: Partial<UserStructure>;
// };

// export const registerUserThunk = createAsyncThunk<UserStructure, ParamsRegister>(
//   'user/register',
//   async ({ repo, newUser }) => {
//     const finalUser = await repo.registerUser(newUser);
//     return finalUser;
//   }
// );

export const loginUserThunk = createAsyncThunk<loginPayload,
{
loginUser: LoginUser,
repo: ApiRepoUserStructures
}>('login', async({loginUser, repo}) => {
    return await repo.loginUser(loginUser);
  }
);

export const updateUserThunk = createAsyncThunk<
  UserStructure,
  {
    repo: ApiRepoUserStructures;
    id: UserStructure['id'];
    updatedUser: Partial<UserStructure>;
    token: string;
  }
>('update', async ({ repo, id, updatedUser, token }) => {
  const finalUser = await repo.updateUser(id, updatedUser,token);
  return finalUser;
});
