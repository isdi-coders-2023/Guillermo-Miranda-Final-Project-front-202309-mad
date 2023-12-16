import { Link } from "react-router-dom";
import { recipeStructure } from "../../models/recipe";


type Props = {
  recipe: recipeStructure;
};

export const CardMyRecipes = ({recipe}: Props) => {

  return (
    <div>
      <Link to={'/form'}>
          <img 
            src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702753986/x7w4zk7wskuzyi9kap8x.png" 
            alt="add-card" 
            width={50}
            height={50}
            role='button'
            
              />
        </Link>
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
            <div>
              <img 
                src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702638164/pencil-edit-button_rvc0ao.svg" 
                alt="edit-card" 
                width={50}
                height={50}
                role='button'
                // onClick={}
              />
            </div>
            <div>
              <img 
                src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702638305/delete-button-svgrepo-com_mxfb0q.svg" 
                alt="delete-card" 
                width={50}
                height={50}
                role='button'
                // onClick={}
              />
            </div>
        </div>
    </div>
  );
}
