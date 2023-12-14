import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../core/store/store";
import { ApiRepoRecipeStructures } from "../services/api.repo.recipes";
import { loadRecipesThunk } from "../slices/recipes.thunk";

export function useRecipes() {

  const dispatch = useDispatch<AppDispatch>();
  const repo = new ApiRepoRecipeStructures();

  const getAllRecipes = () => {
    dispatch(loadRecipesThunk({repo}));
  }

  return{ getAllRecipes }
}
