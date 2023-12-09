import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserState = {
  email: string;
  passwd: string;
};

const initialState: UserState = {
  email: '',
  passwd: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    }
  },
});

export default usersSlice.reducer;
export const { create } = usersSlice.actions;
