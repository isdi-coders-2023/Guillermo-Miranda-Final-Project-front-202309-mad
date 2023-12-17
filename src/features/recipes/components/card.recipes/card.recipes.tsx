import { recipeStructure } from "../../models/recipe";
import './card.recipes.scss'


type Props = {
  recipe: recipeStructure;
};

export const Card = ({recipe}: Props) => {

  return (
    <div className="card">
      <div>
      <img src= {recipe.picture.cloudinaryURL}
        width={200}
        height={200}
        /> 
      </div>
      <div >
        <p >{recipe.recipeName}</p>
      </div>
      <div >
        <p >by {recipe.chef.userName}</p>
      </div>
    </div>
  );
}
