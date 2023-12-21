import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { useRecipes } from './recipes.hook';
import { recipeStructure } from '../models/recipe';
import userEvent from '@testing-library/user-event';
import { store }  from '../../../core/store/store'



jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockOneRecipe = {} as recipeStructure;
const mockcreateRecipe = {} as FormData;
const mockupdateRecipe= {} as FormData;
const mockId= {} as string;

describe('Given useRecipes hooks', () => {
    const TestComponent = () => {
      const { 
        getAllRecipes, 
        getOneRecipe, 
        getUserRecipes, 
        createRecipe, 
        deleteRecipe, 
        updateRecipe 
      } = useRecipes();

      return (
        <>
          <button onClick={() => getAllRecipes()} ></button>
          <button onClick={() => getOneRecipe(mockOneRecipe)}></button>
          <button onClick={() => getUserRecipes(mockId)}></button>
          <button onClick={() => createRecipe(mockcreateRecipe)}></button>
          <button onClick={() => deleteRecipe(mockId)}></button>
          <button onClick={() => updateRecipe(mockId, mockupdateRecipe)}></button>
        </>
      );
    };

    let elements: HTMLElement[];

    beforeEach(() => {
      render(
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      );
      elements = screen.getAllByRole('button');
    });

    describe('When getAllRecipes component is called', () => {
      test('Then it should dispatch', async () => {
        await userEvent.click(elements[0]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    describe('When getUserRecipes component is called', () => {
      test('Then it should dispatch', async () => {
        await userEvent.click(elements[2]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    describe('When updateRecipe component is called', () => {
      test('Then it should dispatch', async () => {
        await userEvent.click(elements[5]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    describe('When createRecipe component is called', () => {
      test('Then it should dispatch', async () => {
        await userEvent.click(elements[3]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    describe('When deleteRecipe component is called', () => {
      test('Then it should dispatch', async () => {
        await userEvent.click(elements[4]);
        expect(useDispatch()).toHaveBeenCalled();

      });
    });

    describe('When getOneRecipe component is called', () => {
      test('Then it should dispatch', async () => {
        await userEvent.click(elements[1]);
        expect(useDispatch()).toHaveBeenCalled();

      });
    });
});
