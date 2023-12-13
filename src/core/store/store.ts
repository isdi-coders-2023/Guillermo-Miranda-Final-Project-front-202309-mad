import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../features/users/slices/user.slice';
import usersReducer from '../../features/users/slices/users.slice';


export const store = configureStore({
  reducer: {
    userState: userReducer,
    usersState: usersReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
