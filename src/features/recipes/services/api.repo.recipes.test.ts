import { recipeStructure } from "../models/recipe";
import { ApiRepoRecipeStructures } from "./api.repo.recipes";

describe('Given ApiRepoRecipeStructures class', () => {
  const repo = new ApiRepoRecipeStructures('');
  describe('When we instantiate it and response is ok', () => {
    
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    test('Then method getRecipes should...', async () => {
      const expected: recipeStructure[] = [];
      const result = await repo.getRecipes();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then method getUserRecipes should...', async () => {
      const userId = '1';
      const expected: recipeStructure[] = [];
      const result = await repo.getUserRecipes(userId);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then the createRecipes should be used...', async () => {
      const result = await repo.createRecipe({} as FormData);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual([]);
    });
  })

  describe('When we call getRecipes and response is bad', () => {
    const token = '';
    beforeEach(() => {
      const jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jsonMock,
      });
    });
    test('Then getRecipes should throw an error', async () => {
      const repo = new ApiRepoRecipeStructures(token);
      await expect(repo.getRecipes()).rejects.toThrow();
    });
  });

  describe('When we call getUserRecipes and response is bad', () => {
    const recipesId = '1';
    const token = '';
    beforeEach(() => {
      const jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jsonMock,
      });
    });
    test('Then getUserRecipes should throw an error', async () => {
      const repo = new ApiRepoRecipeStructures(token);
      await expect(repo.getUserRecipes(recipesId)).rejects.toThrow();
    });
  });

  describe('When we call deleteRecipe and response is bad', () => {
    const token = '';
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then deleteRecipe should throw an error', async () => {
      const recipesId = '1';
      const repo = new ApiRepoRecipeStructures(token);
      await expect(repo.deleteRecipe(recipesId)).rejects.toThrow();
    });
  });

  describe('When we call updateRecipe', () => {
    beforeEach(() => {
      
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    const jsonMock = jest.fn().mockResolvedValue({} as recipeStructure);
    test('Then fetch should be called and return a recipes', async () => {
      const recipesId = '1';
      const token = '';
      const updatedrecipes = {
        name: 'Updated Skin',
      } as unknown as FormData;
      const expected: recipeStructure = {} as recipeStructure;
      const repo = new ApiRepoRecipeStructures(token);
      const result = await repo.updateRecipe(recipesId, updatedrecipes);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we call updateRecipe and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then updaterecipes should throw an error', async () => {
      const recipesId = '1';
      const token = '';
      const updatedSkin = {
        name: 'Updated recipes',
      } as unknown as FormData;
      const repo = new ApiRepoRecipeStructures(token);
      await expect(repo.updateRecipe(recipesId, updatedSkin)).rejects.toThrow();
    });
  });

  describe('When we call createRecipes and response is bad', () => {
    const token = '';
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then createRecipes should throw an error', async () => {
      const repo = new ApiRepoRecipeStructures(token);
      await expect(repo.createRecipe({} as FormData)).rejects.toThrow();
    });
  });
})
