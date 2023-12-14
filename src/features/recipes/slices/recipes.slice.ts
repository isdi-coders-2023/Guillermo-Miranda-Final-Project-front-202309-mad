import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { recipeStructure } from '../models/recipe';
import { loadRecipesThunk } from './recipes.thunk';


type statusRecipeState = 'idle' | 'logging' | 'error';

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
  },
  extraReducers:(builder) => {
    builder.addCase(loadRecipesThunk.fulfilled, 
      (state: RecipesState, {payload}: PayloadAction<recipeStructure[]>) => {
        state.recipes = payload
      
      });

      builder.addCase(loadRecipesThunk.pending, 
        (state:RecipesState) =>{
        state.statusRecipeState = 'logging'
        });

      builder.addCase(loadRecipesThunk.rejected, 
        (state:RecipesState) =>{
        state.statusRecipeState = 'error'
        });
      }
});

export default recipesSlice.reducer;
export const ac = recipesSlice.actions;