import { recipeStructure } from "../../models/recipe";


type Props = {
  recipe: recipeStructure;
};

export const Card = ({recipe}: Props) => {

  return (
    <div>
      <div className="card-info-container">
          <div >
            <p >{recipe.recipeName}</p>
          </div>
          <div >
            <p >{recipe.chef.userName}</p>
          </div>
          <div >
            <img src= {recipe.picture.cloudinaryURL}/> 
          </div>
      </div>
    </div>
  );
}
