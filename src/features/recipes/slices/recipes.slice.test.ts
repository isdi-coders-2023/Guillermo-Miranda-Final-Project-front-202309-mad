import '@testing-library/jest-dom';
import recipesReducer, { RecipesState } from './recipes.slice';
import { loadRecipesThunk, loadUserRecipesThunk } from './recipes.thunk';
import { recipeStructure } from '../models/recipe';


describe('Given userReducer', () => {

  describe('When recipes/OneRecipe action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const recipeId = {id: '1'}
      const action = {
        type: 'recipes/OneRecipe',
        payload: recipeId as unknown as recipeStructure
      };
      const state: RecipesState = {} as unknown as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.currentRecipe).toBe(recipeId);

    })
  })

  describe('When recipes/load/fulfilled action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = {
        type: 'load/fulfilled',
        payload: [{}] as unknown as recipeStructure
      };
      const state: RecipesState = {} as unknown as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.statusRecipeState).toBe('idle');

    })
  })
  
  describe('When recipes/load/pending action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = loadRecipesThunk.pending; 
      const state: RecipesState = {} as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.statusRecipeState).toBe('loading');
    });
  });

  describe('When recipes/load/rejected action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = loadRecipesThunk.rejected; 
      const state: RecipesState = {} as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.statusRecipeState).toBe('error');
    });
  });

  describe('When recipes/loadUser/fulfilled action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = {
        type: 'loadUser/fulfilled',
        payload: [{}] as unknown as recipeStructure
      };
      const state: RecipesState = {id:'1'} as unknown as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.statusRecipeState).toBe('idle');

    })
  })
  
  describe('When recipes/loadUser/pending action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = loadUserRecipesThunk.pending; 
      const state: RecipesState = {} as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.statusRecipeState).toBe('loading');
    });
  });

  describe('When recipes/loadUser/rejected action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = loadUserRecipesThunk.rejected; 
      const state: RecipesState = {} as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.statusRecipeState).toBe('error');
    });
  });

  describe('When recipes/create/fulfilled action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const createdItem = {
        id: '1',
        name: 'name'
      }
      const action = {
        type: 'create/fulfilled',
        payload: createdItem 
      };
      const state: RecipesState = { recipes: [] } as unknown as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.recipes).toStrictEqual([createdItem]);

    })
  })

  describe('When recipes/delete/fulfilled action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const deletedItem = {
        id:'1',
        name: 'name'
      } as unknown as recipeStructure
      const action = {
        type: 'delete/fulfilled',
        payload: deletedItem as unknown as recipeStructure['id']
      };
      const state: RecipesState = { recipes: [deletedItem] } as unknown as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.recipes).toStrictEqual([]);

    })
  })

  describe('When recipes/update/fulfilled action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const item = {
        id:'1',
        name: 'name'
      }as unknown as recipeStructure
      const updatedItem = {
        id:'1',
        name: 'updatedname'
      }as unknown as recipeStructure
      const action = {
        type: 'update/fulfilled',
        payload: updatedItem 
      };
      const state: RecipesState = { recipes: [item] } as unknown as RecipesState;
      const result = recipesReducer(state, action);
      expect(result.recipes).toStrictEqual([updatedItem]);

    })
  })

});
