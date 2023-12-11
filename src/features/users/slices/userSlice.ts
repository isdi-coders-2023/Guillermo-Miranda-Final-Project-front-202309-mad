import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginUser } from '../models/user';
import { loginPayload } from '../models/login.payload';
import { loginUserThunk } from './user.thunk';

type LoginState = 'idle' | 'logging' | 'error';

type UserState = {
  loggedUser: LoginUser | null;
  loginState: LoginState;
  token: string;
};

const initialState: UserState = {
  loggedUser: null,
  loginState: 'idle',
  token: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(loginUserThunk.fulfilled, 
      (state:UserState, {payload}: PayloadAction<loginPayload>) =>{
        state.loggedUser = payload.user;
        state.token = payload.token;
      });

      builder.addCase(loginUserThunk.pending, 
        (state:UserState) =>{
        state.loginState = 'logging'
        });

      builder.addCase(loginUserThunk.rejected, 
        (state:UserState) =>{
        state.loginState = 'error'
        });
  }
});

export default userSlice.reducer;
export const ac = userSlice.actions;
