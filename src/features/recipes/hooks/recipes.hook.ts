import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { ApiRepoRecipeStructures } from "../services/api.repo.recipes";
import { createRecipeThunk, deleteRecipeThunk, loadRecipesThunk, loadUserRecipesThunk, updateRecipeThunk } from "../slices/recipes.thunk";
import { recipeStructure } from "../models/recipe";
import { OneRecipe } from "../slices/recipes.slice";


export function useRecipes() {

  const { token } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();
  const repo = new ApiRepoRecipeStructures(token);

  const getAllRecipes = () => {
    dispatch(loadRecipesThunk({repo}));
  }

  const getUserRecipes = (userID: string) => {
    dispatch(loadUserRecipesThunk({repo,userID}));
  }

  const getOneRecipe = async (recipe: recipeStructure) => {
    dispatch(OneRecipe(recipe));
  };

  const createRecipe = async (newRecipe: FormData) => {
    dispatch(createRecipeThunk({repo,newRecipe}));
  };

  const deleteRecipe = async (id: recipeStructure['id']) => {
    dispatch(deleteRecipeThunk({repo,id}));
  };

  const updateRecipe = async (id: recipeStructure['id'], updatedRecipe: FormData) => {
    dispatch(updateRecipeThunk({repo,id,updatedRecipe}));
  };

  return{ getAllRecipes, getOneRecipe, getUserRecipes, createRecipe, deleteRecipe, updateRecipe }
}
