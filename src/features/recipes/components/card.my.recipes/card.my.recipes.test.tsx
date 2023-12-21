import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { CardMyRecipes } from './card.my.recipes';
import userEvent from '@testing-library/user-event';
import { store } from '../../../../core/store/store';
import { UserStructure } from '../../../users/models/user';
import { ImgData } from '../../models/img.data';
import { recipeStructure } from '../../models/recipe';
import { useRecipes } from '../../hooks/recipes.hook';

jest.mock("../../hooks/recipes.hook", () => ({
  useRecipes: jest.fn().mockReturnValue({
    getOneRecipe: jest.fn().mockReturnValue({} as recipeStructure), 
    deleteRecipe: jest.fn()
})}));

describe('Card Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter >
          <CardMyRecipes recipe={{
            id: '1',
            chef: {} as unknown as UserStructure,
            recipeName: 'n',
            ingredients: [],
            descriptionRecipe: 'd',
            cockingTime: 1,
            picture: {} as unknown as ImgData,
            diets: 'Vegana'
          }}></CardMyRecipes>
        </MemoryRouter>
      </Provider>
    );
  })

  test('renders Card correctly', async() => {
    
    const detailsButton = screen.getAllByRole('button');
    await userEvent.click(detailsButton[0]);
    await userEvent.click(detailsButton[1]);
    expect(useRecipes().getOneRecipe).toHaveBeenCalled()
    await userEvent.click(detailsButton[2]);
    expect(useRecipes().deleteRecipe).toHaveBeenCalled()
    
        
  });
  test('renders Card correctly', async() => {
    
    const linkElement = screen.getAllByTestId('link');
    userEvent.click(linkElement[0]);
    userEvent.click(linkElement[1]);
    expect(window.location.pathname).toBe('/');
        
  });
  
});
