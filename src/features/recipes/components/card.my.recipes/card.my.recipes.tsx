import { recipeStructure } from "../../models/recipe";
import { useRecipes } from "../../hooks/recipes.hook";
import './card.my.recipes.scss'
import { Link } from "react-router-dom";


type Props = {
  recipe: recipeStructure;
};

export const CardMyRecipes = ({recipe}: Props) => {

  const { deleteRecipe } = useRecipes();

  const handleDelete = () => {
    deleteRecipe(recipe.id);
  }

  const { getOneRecipe } = useRecipes();


  return (
    <div>
        <div className="card">
            <Link to={'/details'} data-testid="link">
              <img 
                src= {recipe.picture.cloudinaryURL}
                width={200}
                height={200}
                onClick={()=>getOneRecipe(recipe)}
                role='button'
              /> 
            </Link>
            <div >
              <p >{recipe.recipeName}</p>
            </div>
            <div >
              <p >by {recipe.chef.userName}</p>
            </div>
            <div className="card__edit">
            <Link to={`/form/${recipe.id}`} data-testid="link">
              <img 
                src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702638164/pencil-edit-button_rvc0ao.svg" 
                alt="edit-card" 
                width={25}
                height={25}
                role='button'
                onClick={()=>getOneRecipe(recipe)}
              />
            </Link>
              <img 
                src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702638305/delete-button-svgrepo-com_mxfb0q.svg" 
                alt="delete-card" 
                width={25}
                height={25}
                role='button'
                onClick={handleDelete}
              />
            </div>
        </div>
    </div>
  );
}
