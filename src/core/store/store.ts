import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../features/users/slices/user.slice';
import usersReducer from '../../features/users/slices/users.slice';
import recipesReducer from '../../features/recipes/slices/recipes.slice';


export const store = configureStore({
  reducer: {
    userState: userReducer,
    usersState: usersReducer,
    recipesState: recipesReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
