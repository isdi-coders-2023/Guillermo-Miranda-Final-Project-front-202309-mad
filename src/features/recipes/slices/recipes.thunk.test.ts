
import { store } from "../../../core/store/store";
import { ApiRepoRecipeStructures } from "../services/api.repo.recipes";
import { createRecipeThunk, deleteRecipeThunk, loadRecipesThunk, loadUserRecipesThunk, updateRecipeThunk } from "./recipes.thunk";



describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const mockRecipesRepo= {
      repo: { 
        getRecipes: jest.fn().mockReturnValue([]),
        getUserRecipes: jest.fn().mockReturnValue([]),
        createRecipe: jest.fn().mockReturnValue({}),
        updateRecipe: jest.fn().mockResolvedValue({}),
        deleteRecipe: jest.fn().mockResolvedValue('1'),
      } as unknown as ApiRepoRecipeStructures,
    };

    test('Then it should dispatch loadRecipesThunk and update Recipes store', async () => {
      const data = { ...mockRecipesRepo } as { repo: ApiRepoRecipeStructures };
      await store.dispatch(loadRecipesThunk({repo: data.repo}));
      expect(data.repo.getRecipes).toHaveBeenCalled();
    });

    test('Then it should dispatch loadUserRecipesThunk and update Recipes store', async () => {
      const data = { ...mockRecipesRepo } as { repo: ApiRepoRecipeStructures };
      const userId = '1'
      await store.dispatch(loadUserRecipesThunk({userID: userId,repo: data.repo}));
      expect(data.repo.getUserRecipes).toHaveBeenCalled();
    });

    test('Then it should dispatch createRecipeThunk and create a new clothing item', async () => {
      const data = { ...mockRecipesRepo } as { repo: ApiRepoRecipeStructures };
      const newRecipe = {} as FormData;
      await store.dispatch(
        createRecipeThunk({ repo: data.repo, newRecipe })
      );
      expect(data.repo.createRecipe).toHaveBeenCalledWith(
        newRecipe
      );
    });
    test('Then it should dispatch updateRecipesThunk and update a Recipe', async () => {
      const data = { ...mockRecipesRepo } as { repo: ApiRepoRecipeStructures };
      const idToUpdate = '1';
      const updatedRecipe = {} as FormData;

      await store.dispatch(
        updateRecipeThunk({
          repo: data.repo,
          id: idToUpdate,
          updatedRecipe,
        })
      );
      expect(data.repo.updateRecipe).toHaveBeenCalledWith(
        idToUpdate,
        updatedRecipe
      );
    });
    test('Then it should dispatch deleteRecipesThunk and delete a Recipe', async () => {
      const data = { ...mockRecipesRepo } as { repo: ApiRepoRecipeStructures };
      const idToDelete = '1';
      await store.dispatch(
        deleteRecipeThunk({ repo: data.repo, id: idToDelete })
      );

      expect(data.repo.deleteRecipe).toHaveBeenCalledWith(idToDelete);
    });
  });
});
