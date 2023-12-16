import { serverUrl } from '../../../config';
import { recipeStructure } from '../models/recipe';


export class ApiRepoRecipeStructures {
  apiUrl = serverUrl + '/recipes';
  constructor(public token: string) {}

  async getRecipes(): Promise<recipeStructure[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async getUserRecipes(userID: string): Promise<recipeStructure[]> {

    const response = await fetch(this.apiUrl + `/my-recipes/${userID}`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText)
    return response.json();
  }

  async createRecipe(newRecipe: FormData): Promise<recipeStructure> {
    const url = this.apiUrl;
    const response = await fetch(url, {
      method: 'POST',
      body: newRecipe,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

}
