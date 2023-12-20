import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";
import './recipe.details.scss'


export const Details = () => {

  const {currentRecipe} = useSelector((state:RootState)=>state.recipesState)

  return (
    <div className="details">
      <div>
        <img src= {currentRecipe!.picture.cloudinaryURL}
          width={500}
          height={500}
        /> 
      </div >
      <div className="details__info">
        <p data-testid='paragraph' className="details__info__name">{currentRecipe!.recipeName}</p>    
        <div className="details__info__ingredients">
          <p className="details__info__ingredients__title">INGREDIENTES</p>
          <div className="details__info__ingredients__1">
          <p >{currentRecipe!.ingredients[0]}</p>
          <p >{currentRecipe!.ingredients[1]}</p>
          <p >{currentRecipe!.ingredients[2]}</p>
          <p >{currentRecipe!.ingredients[3]}</p>
          </div>
          <div className="details__info__ingredients__2">
          <p >{currentRecipe!.ingredients[4]}</p>
          <p >{currentRecipe!.ingredients[5]}</p>
          <p >{currentRecipe!.ingredients[6]}</p>
          </div>
          <div className="details__info__ingredients__3">
          <p >{currentRecipe!.ingredients[7]}</p>
          <p >{currentRecipe!.ingredients[8]}</p>
          <p >{currentRecipe!.ingredients[9]}</p> 
          </div>
        </div>   
        <p className="details__info__title">DESCRIPCION</p> 
        <p className="details__info__description">{currentRecipe!.descriptionRecipe}</p>
        <p className="details__info__time">
          <img 
          src="https://res.cloudinary.com/dnhrt9kxh/image/upload/v1702894502/time-icon_p9ev7y.png" 
          alt="clock"
          width={50}
          height={50}
          />
          {currentRecipe!.cockingTime}
        </p>
      </div>
    </div>
  );
}
