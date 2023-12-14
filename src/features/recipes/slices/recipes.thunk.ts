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
