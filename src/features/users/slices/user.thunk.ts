import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginPayload } from '../models/login.payload';
import { LoginUser, UserStructure } from '../models/user';
import { ApiRepoUserStructures } from '../services/api.repo.users';


export const loadUsersThunk = createAsyncThunk<UserStructure[], 
{
  repo: ApiRepoUserStructures, 
  page: string
}>('users/load',async ({repo, page}) => {
    const users = await repo.getUsers(page);
    return users;
  }
);

type ParamsRegister = {
  repo: ApiRepoUserStructures;
  newUser: Partial<UserStructure>;
};

export const registerUserThunk = createAsyncThunk<UserStructure, ParamsRegister>(
  'user/register',
  async ({ repo, newUser }) => {
    const finalUser = await repo.registerUser(newUser);
    return finalUser;
  }
);

export const loginUserThunk = createAsyncThunk<loginPayload,
{
loginUser: LoginUser,
repo: ApiRepoUserStructures
}>('user/login', async({loginUser, repo}) => {
    return await repo.loginUser(loginUser);
  }
);

export const updateTaskThunk = createAsyncThunk<
  UserStructure,
  {
    repo: ApiRepoUserStructures;
    id: UserStructure['id'];
    updatedTask: Partial<UserStructure>;
    token: string;
  }
>('tasks/update', async ({ repo, id, updatedTask, token }) => {
  const finalTask = await repo.updateUser(id, updatedTask,token);
  return finalTask;
});
