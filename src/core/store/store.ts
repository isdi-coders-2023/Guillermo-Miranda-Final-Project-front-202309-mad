import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../../features/users/slices/usersSlice'

export const store = configureStore({
  reducer: {
    usersState: usersReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
