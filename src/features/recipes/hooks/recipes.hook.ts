import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../core/store/store";
import { ApiRepoRecipeStructures } from "../services/api.repo.recipes";
import { loadRecipesThunk } from "../slices/recipes.thunk";
import { recipeStructure } from "../models/recipe";
import { OneRecipe } from "../slices/recipes.slice";

export function useRecipes() {

  const dispatch = useDispatch<AppDispatch>();
  const repo = new ApiRepoRecipeStructures();

  const getAllRecipes = () => {
    dispatch(loadRecipesThunk({repo}));
  }

  const getOneRecipe = async (recipe: recipeStructure) => {
    dispatch(OneRecipe(recipe));
  };

  return{ getAllRecipes, getOneRecipe }
}
