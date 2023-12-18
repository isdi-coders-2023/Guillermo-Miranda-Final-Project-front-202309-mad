import { useRecipes } from "../../hooks/recipes.hook";
import { recipeStructure } from "../../models/recipe";
import './card.recipes.scss'
import { Link } from "react-router-dom";


type Props = {
  recipe: recipeStructure;
};

export const Card = ({recipe}: Props) => {
  const { getOneRecipe } = useRecipes();

  


  return (
    <div className="card">
      <div>
        <Link to={'/details'}>
          <img src= {recipe.picture.cloudinaryURL}
            width={200}
            height={200}
            onClick={()=>getOneRecipe(recipe)}
          /> 
        </Link>
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
