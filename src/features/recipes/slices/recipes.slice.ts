import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { recipeStructure } from '../models/recipe';
import { createRecipeThunk, loadRecipesThunk, loadUserRecipesThunk } from './recipes.thunk';



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

      }
});

export default recipesSlice.reducer;
export const {OneRecipe} = recipesSlice.actions;
