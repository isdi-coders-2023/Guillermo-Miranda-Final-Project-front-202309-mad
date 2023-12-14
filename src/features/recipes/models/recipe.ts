import { UserStructure } from "../../users/models/user"
import { ImgData } from "./img.data"


export type recipeStructure = {
  
  id: string,
  chef: UserStructure,
  recipeName:string, 
  ingredients: string[],
  descriptionRecipe: string,
  cockingTime: number,
  picture: ImgData,
  diets: 'Omnivora' | 'Flexitariana' | 'Vegetariana' |'Vegana' | 'Otros'
}
