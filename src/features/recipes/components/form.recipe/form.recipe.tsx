import { SyntheticEvent, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecipes } from '../../hooks/recipes.hook'
import './form.recipe.scss'
import { recipeStructure } from "../../models/recipe";
import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";

export default function FormRecipe() {
  const navigate = useNavigate();
  const { createRecipe, updateRecipe } = useRecipes();
  const { id } = useParams();
  const { recipes, currentRecipe } = useSelector((state: RootState) => state.recipesState)
  // const [newIngredient, setNewIngredient] = useState(['']);

  useEffect(() => {
    if (id) {
      const existingRecipe: recipeStructure = recipes.find((item)=>item.id === id) as recipeStructure;
      if(existingRecipe.id !== currentRecipe!.id) {
        navigate('/myrecipes');
      } else {

        const form = document.querySelector('.form__form-submit') as HTMLFormElement;
        (form.elements.namedItem('recipeName') as HTMLInputElement).value += currentRecipe!.recipeName;
        (form.elements.namedItem('ingredients') as HTMLInputElement).value += currentRecipe!.ingredients[0];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value += currentRecipe!.ingredients[1];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value += currentRecipe!.ingredients[2];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value += currentRecipe!.ingredients[3];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value += currentRecipe!.ingredients[4];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value += currentRecipe!.ingredients[5];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value += currentRecipe!.ingredients[6];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value += currentRecipe!.ingredients[7];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value += currentRecipe!.ingredients[8];
        (form.elements.namedItem('descriptionRecipe') as HTMLInputElement).value = currentRecipe!.descriptionRecipe;
        (form.elements.namedItem('diets') as HTMLInputElement).value = currentRecipe!.diets;
        
      }
    }
  }, [id]);
  
  const handleSubmitRecipe = async (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement; 
    const formData = new FormData(form);
    if(id){
      await updateRecipe(id,formData);
    } else {
      await createRecipe(formData);
    }
    
    navigate('/myrecipes');
  };
    return (
      <div className="form">
        <div className="form__recipe-tittle">
          <h3>Tu Receta</h3>
        </div>
        <div className="form__recipe-form">
          <form onSubmit={handleSubmitRecipe} action="submit" className="form__form-submit">
            <label htmlFor="recipeName">1° Como se llama tu plato...</label>
              <input type="text" id="recipeName" name="recipeName" required/>
            <label htmlFor="ingredients" >2° Que ingredientes lleva...</label>
              <input type="text" id="ingredients" name="ingredients" placeholder="  1." 
              defaultValue={id?currentRecipe?.ingredients[0]:''}/>
              <input type="text" id="ingredients" name="ingredients" placeholder="  2." 
              defaultValue={id?currentRecipe?.ingredients[1]:''}/>
              <input type="text" id="ingredients" name="ingredients" placeholder="  3." 
              defaultValue={id?currentRecipe?.ingredients[2]:''}/>
              <input type="text" id="ingredients" name="ingredients" placeholder="  4." 
              defaultValue={id?currentRecipe?.ingredients[3]:''}/>
              <input type="text" id="ingredients" name="ingredients" placeholder="  5." 
              defaultValue={id?currentRecipe?.ingredients[4]:''}/>
              <input type="text" id="ingredients" name="ingredients" placeholder="  6." 
              defaultValue={id?currentRecipe?.ingredients[5]:''}/>
              <input type="text" id="ingredients" name="ingredients" placeholder="  7." 
              defaultValue={id?currentRecipe?.ingredients[6]:''}/>
              <input type="text" id="ingredients" name="ingredients" placeholder="  8." 
              defaultValue={id?currentRecipe?.ingredients[7]:''}/>
              <input type="text" id="ingredients" name="ingredients" placeholder="  9." 
              defaultValue={id?currentRecipe?.ingredients[8]:''}/>
              {/* <input type="text" onChange={(e)=> setNewIngredient([...newIngredient,e.target.value])} name="ingredients" />
              <button type="button" name="ingredients" onChange={(e)=>{
                e.preventDefault();
                (e.target as HTMLInputElement).value = '';
              }}>Añadir</button>  */}
            <label htmlFor="descriptionRecipe">3° Cómo se prepara...</label>
              <textarea  id="descriptionRecipe" name="descriptionRecipe" cols={70} rows={10}></textarea>
            <label htmlFor="cockingTime">4° Que tardariamos en prepararlo...</label>
              <input type="number" id="cockingTime" name="cockingTime" pattern="[0-100000]"
              defaultValue={id?currentRecipe?.cockingTime:''}/>
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
        <div className="form__cancel-button">
          <Link to={'/myrecipes'}>
            <button type="button">Cancelar</button>
          </Link>
        </div>
    </div>
  );
}
