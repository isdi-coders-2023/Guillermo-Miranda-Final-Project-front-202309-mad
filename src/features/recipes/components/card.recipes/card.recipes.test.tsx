import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Card } from './card.recipes';
import userEvent from '@testing-library/user-event';
import { store } from '../../../../core/store/store';
import { UserStructure } from '../../../users/models/user';
import { ImgData } from '../../models/img.data';
import { recipeStructure } from '../../models/recipe';
import { useRecipes } from '../../hooks/recipes.hook';

jest.mock("../../hooks/recipes.hook", () => ({
  useRecipes: jest.fn().mockReturnValue({getOneRecipe: jest.fn().mockReturnValue({} as recipeStructure),
})}));

describe('Card Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter >
          <Card recipe={{
            id: '1',
            chef: {} as unknown as UserStructure,
            recipeName: 'n',
            ingredients: [],
            descriptionRecipe: 'd',
            cockingTime: 1,
            picture: {} as unknown as ImgData,
            diets: 'Vegana'
          }}></Card>
        </MemoryRouter>
      </Provider>
    );
  })

  test('renders Card correctly', async() => {
    
    const detailsButton = screen.getByRole('image');
    await userEvent.click(detailsButton);
    expect(useRecipes().getOneRecipe).toHaveBeenCalled()
        
  });
  test('renders Card correctly', async() => {
    
    const linkElement = screen.getByTestId('link');
    expect(linkElement).toBeInTheDocument();
    userEvent.click(linkElement);
    expect(window.location.pathname).toBe('/');
        
  });
  
});
