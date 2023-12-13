import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserStructure } from '../models/user';

type UsersState = {
  users: UserStructure[];
  currentUser: UserStructure | null;
};

const initialState: UsersState = {
  users: [],
  currentUser: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getAllUsers: (state: UsersState, {payload}: PayloadAction<UsersState>) => {
      state.users = payload.users
    },
    getById: (state: UsersState, {payload}: PayloadAction<UsersState>) => {
      state.currentUser = payload.currentUser
    }
  },
});

export default usersSlice.reducer;
export const { getAllUsers, getById } = usersSlice.actions;
