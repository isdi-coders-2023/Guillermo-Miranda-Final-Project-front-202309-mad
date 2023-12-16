import { createAsyncThunk } from "@reduxjs/toolkit";
import { recipeStructure } from "../models/recipe";
import { ApiRepoRecipeStructures } from "../services/api.repo.recipes";



export const loadRecipesThunk = createAsyncThunk<recipeStructure[], 
{
  repo: ApiRepoRecipeStructures, 
}>('load',async ({repo}) => {
    const recipes = await repo.getRecipes();
    return recipes;
  }
);

export const loadUserRecipesThunk = createAsyncThunk<recipeStructure[], 
{
  userID: string;
  repo: ApiRepoRecipeStructures; 
}>('loadUser',async ({userID, repo}) => {
    const recipes = await repo.getUserRecipes(userID);
    return recipes;
  }
);

export const createRecipeThunk = createAsyncThunk<recipeStructure,
{
  newRecipe: FormData,
  repo: ApiRepoRecipeStructures
}>('create',async ({ repo, newRecipe }) => {
    const addRecipe = await repo.createRecipe(newRecipe);
    return addRecipe;
  }
);

export const deleteRecipeThunk = createAsyncThunk<recipeStructure['id'],
{
  repo: ApiRepoRecipeStructures;
  id: recipeStructure['id'];
}
>('delete', async ({ repo, id }) => {
  await repo.deleteRecipe(id);
  return id;
});
