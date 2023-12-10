import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../features/users/slices/userSlice';
import usersReducer from '../../features/users/slices/usersSlice';


export const store = configureStore({
  reducer: {
    userState: userReducer,
    usersState: usersReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
