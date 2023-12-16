import { SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecipes } from '../../hooks/recipes.hook'

export default function FormRecipe() {
  const navigate = useNavigate();
  const { createRecipe } = useRecipes();
  // const [newIngredient, setNewIngredient] = useState(['']);
  
  const handleSubmitRecipe = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement; 
    const formData = new FormData(form);
    createRecipe(formData);
    navigate('/myrecipes');
  };
    return (
      <>
        <div className="add-recipe-tittle">
          <h3>ADD Recipe</h3>
        </div>
        <div className="add-Recipe-form">
          <form onSubmit={handleSubmitRecipe} action="submit">
            <label htmlFor="recipe-name">1° Como se llama tu plato...</label>
              <input type="text" name="recipe-name" required/>
            <label htmlFor="ingredients" >2° Que ingredientes lleva...</label>
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
            <input type="text" name="ingredients" />
              {/* <input type="text" onChange={(e)=> setNewIngredient([...newIngredient,e.target.value])} name="ingredients" />
              <button type="button" name="ingredients" onChange={(e)=>{
                e.preventDefault();
                (e.target as HTMLInputElement).value = '';
              }}>Añadir</button>  */}
            <label htmlFor="description-recipe">3° Cómo se prepara...</label>
              <input type="text" name="description-recipe" />
            <label htmlFor="cocking-time">4° Que tardariamos en prepararlo...</label>
              <input type="number" name="cocking-time" />
            <label htmlFor="diets">5° Que tipo de comida es...</label>
              <select name="diets" id="diets">
                <option selected value="defaultValue" disabled>Selecciona una opcion</option>
                <option value="omnivora">Omnivora</option>
                <option value="flexitariana">Flexitariana</option>
                <option value="vegetariana">Vegetariana</option>
                <option value="vegana">Vegana</option>
                <option value="otros">Otros</option>
              </select>
              <div className="add-file" id="add-file">
                <label htmlFor="picture">6° Enseñanos como ha quedado...</label>
                <input type="file" name="picture" aria-label="file"/>
              </div>
              <button className="save-button" type="submit">LISTO</button>
          </form>
        </div>
        <div className="cancel-button">
          <Link to={'/myrecipes'}>
            <button type="button">Cancelar</button>
          </Link>
        </div>
    </>
  );
}
