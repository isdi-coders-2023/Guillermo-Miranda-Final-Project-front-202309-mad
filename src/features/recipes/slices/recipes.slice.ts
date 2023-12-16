import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { recipeStructure } from '../models/recipe';
import { createRecipeThunk, deleteRecipeThunk, loadRecipesThunk, loadUserRecipesThunk, updateRecipeThunk } from './recipes.thunk';



type statusRecipeState = 'idle' | 'loading' | 'error';

type RecipesState = {
  recipes: recipeStructure[];
  currentRecipe: recipeStructure | null;
  statusRecipeState: statusRecipeState;
};

const initialState: RecipesState = {
  recipes: [],
  currentRecipe: null,
  statusRecipeState: 'idle'
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    OneRecipe: (
      state: RecipesState,
      { payload }: PayloadAction<recipeStructure | null>
    ) => {
      state.currentRecipe = payload;
      return state;
    },
  },
  extraReducers:(builder) => {
      builder.addCase(loadUserRecipesThunk.fulfilled, 
        (state: RecipesState, {payload}: PayloadAction<recipeStructure[]>) => {
          state.recipes = payload
        });

      builder.addCase(loadUserRecipesThunk.pending, 
        (state:RecipesState) =>{
          state.statusRecipeState = 'loading'
        });

      builder.addCase(loadUserRecipesThunk.rejected, 
        (state:RecipesState) =>{
          state.statusRecipeState = 'error'
        });
        
      builder.addCase(loadRecipesThunk.fulfilled, 
        (state: RecipesState, {payload}: PayloadAction<recipeStructure[]>) => {
          state.recipes = payload
        });

      builder.addCase(loadRecipesThunk.pending, 
        (state:RecipesState) =>{
          state.statusRecipeState = 'loading'
        });

      builder.addCase(loadRecipesThunk.rejected, 
        (state:RecipesState) =>{
          state.statusRecipeState = 'error'
        });

      builder.addCase(createRecipeThunk.fulfilled, 
        (state: RecipesState, {payload}: PayloadAction<recipeStructure>) => ({
          ...state , recipes: [...state.recipes, payload]
          })
        );

      builder.addCase(deleteRecipeThunk.fulfilled, 
        (state: RecipesState, {payload}: PayloadAction<recipeStructure['id']>) => {
          state.recipes.splice(state.recipes.findIndex((item)=>item.id === payload),1)
          return state
          }
        );

      builder.addCase(updateRecipeThunk.fulfilled, 
        (state: RecipesState, {payload}: PayloadAction<recipeStructure>) => {
          state.recipes[state.recipes.findIndex((item) => item.id === payload.id)] = payload;
          return state;
          }
        );

      }
});

export default recipesSlice.reducer;
export const {OneRecipe} = recipesSlice.actions;
