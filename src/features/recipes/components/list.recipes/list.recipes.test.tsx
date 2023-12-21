import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {  MemoryRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';
import { store } from '../../../../core/store/store';
import { List } from './list.recipes';
import { useRecipes } from '../../hooks/recipes.hook';
import { recipeStructure } from '../../models/recipe';
import { ImgData } from '../../models/img.data';


jest.mock("../card.recipes/card.recipes")
jest.mock('../../hooks/recipes.hook', () => ({
  useRecipes: jest.fn().mockReturnValue({
    getAllRecipes: jest.fn(),
    recipes: [
      {
        recipeName: 'n',
        id:'1',
        picture: {cloudinaryURL:'m'} as unknown as ImgData
        
      },
    ],
  }),
}));

describe('List', () => {

  const mockRecipes = [{
    recipeName: 'n',
    id:'1'
  }] as unknown as recipeStructure[]
  test('then getAll should render the cards', () => {
    render(
      <Router>
        <Provider store={store}>
          <List recipeList= {mockRecipes}></List>
        </Provider>
      </Router>
    );

    const list = screen.getByRole('list');
    expect(useRecipes().getAllRecipes).toHaveBeenCalled();
    expect(list).toBeInTheDocument();
  });
});
