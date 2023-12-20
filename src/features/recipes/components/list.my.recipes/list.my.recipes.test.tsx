import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {  MemoryRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';
import { store } from '../../../../core/store/store';
import { ListMyRecipes } from './list.my.recipes';
import { useRecipes } from '../../hooks/recipes.hook';
import { recipeStructure } from '../../models/recipe';
import { ImgData } from '../../models/img.data';
import { useUsers } from '../../../users/hooks/users.hook';
import { UserStructure } from '../../../users/models/user';

jest.mock("../../hooks/recipes.hook")
jest.mock("../card.recipes/card.recipes")
jest.mock('../../hooks/recipes.hook', () => ({
  useRecipes: jest.fn().mockReturnValue({
    getUserRecipes: jest.fn(),
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

  const mockId = (useUsers as jest.Mock).mockReturnValue({
    loggedUser: {id:'1'} as UserStructure,
  })

  const mockRecipes = [{
    recipeName: 'n',
    id:'1'
  }] as unknown as recipeStructure[]
  test('then getAll should render the cards', () => {
    render(
      <Router>
        <Provider store={store}>
          <ListMyRecipes recipeList= {mockRecipes} userID={mockId()}></ListMyRecipes>
        </Provider>
      </Router>
    );

    const list = screen.getByRole('list');
    expect(useRecipes().getUserRecipes).toHaveBeenCalled();
    expect(list).toBeInTheDocument();
  });
});
