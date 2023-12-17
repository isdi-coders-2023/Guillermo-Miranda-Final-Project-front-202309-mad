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
  const { recipes } = useSelector((state: RootState) => state.recipesState)
  // const [newIngredient, setNewIngredient] = useState(['']);

  useEffect(() => {
    if (id) {
      const existingRecipe: recipeStructure = recipes.find((item)=>item.id === id) as recipeStructure;
      if(!existingRecipe) {
        navigate('/myrecipes');
      } else {
        const form = document.querySelector('.form__form-submit') as HTMLFormElement;
        (form.elements.namedItem('recipeName') as HTMLInputElement).value = existingRecipe.recipeName;
        (form.elements.namedItem('ingredients') as HTMLInputElement).value = existingRecipe.ingredients[0];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value = existingRecipe.ingredients[1];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value = existingRecipe.ingredients[2];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value = existingRecipe.ingredients[3];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value = existingRecipe.ingredients[4];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value = existingRecipe.ingredients[5];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value = existingRecipe.ingredients[6];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value = existingRecipe.ingredients[7];
        (form.elements.namedItem('ingredients') as HTMLInputElement).value = existingRecipe.ingredients[8];
        (form.elements.namedItem('descriptionRecipe') as HTMLInputElement).value = existingRecipe.descriptionRecipe;
        (form.elements.namedItem('diets') as HTMLInputElement).value = existingRecipe.diets;
        
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
              <input type="text" id="ingredients" name="ingredients" placeholder="1."/>
              <input type="text" id="ingredients" name="ingredients" placeholder="2."/>
              <input type="text" id="ingredients" name="ingredients" placeholder="3."/>
              <input type="text" id="ingredients" name="ingredients" placeholder="4."/>
              <input type="text" id="ingredients" name="ingredients" placeholder="5."/>
              <input type="text" id="ingredients" name="ingredients" placeholder="6."/>
              <input type="text" id="ingredients" name="ingredients" placeholder="7."/>
              <input type="text" id="ingredients" name="ingredients" placeholder="8."/>
              <input type="text" id="ingredients" name="ingredients" placeholder="9."/>
              {/* <input type="text" onChange={(e)=> setNewIngredient([...newIngredient,e.target.value])} name="ingredients" />
              <button type="button" name="ingredients" onChange={(e)=>{
                e.preventDefault();
                (e.target as HTMLInputElement).value = '';
              }}>Añadir</button>  */}
            <label htmlFor="descriptionRecipe">3° Cómo se prepara...</label>
              <input type="text" id="descriptionRecipe" name="descriptionRecipe" />
            <label htmlFor="cockingTime">4° Que tardariamos en prepararlo...</label>
              <input type="number" id="cockingTime" name="cockingTime" />
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
