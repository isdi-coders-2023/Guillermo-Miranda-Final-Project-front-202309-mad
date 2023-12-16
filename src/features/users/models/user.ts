import { recipeStructure } from "../../recipes/models/recipe"

export type LoginUser = {

  email:string, 
  passwd:string

}

export type UserStructure = LoginUser & {
  
  id: string,
  userName:string, 
  styleFood: string,
  descriptionUser: string,
  myRecipes: recipeStructure[],
  // Avatar: imgData,

}
