import { recipeStructure } from "../../models/recipe";
import { useRecipes } from "../../hooks/recipes.hook";
import './card.my.recipes.scss'


type Props = {
  recipe: recipeStructure;
};

export const CardMyRecipes = ({recipe}: Props) => {

  const { deleteRecipe } = useRecipes();

  const handleDelete = () => {
    deleteRecipe(recipe.id);
  }

  return (
    <div>
        <div className="card">
            <div >
              <img src= {recipe.picture.cloudinaryURL}
              width={200}
              height={200}/> 
            </div>
            <div >
              <p >{recipe.recipeName}</p>
            </div>
            <div >
              <p >by {recipe.chef.userName}</p>
            </div>
            <div className="card__edit">
              <img 
                src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702638164/pencil-edit-button_rvc0ao.svg" 
                alt="edit-card" 
                width={25}
                height={25}
                role='button'
                // onClick={}
              />
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
