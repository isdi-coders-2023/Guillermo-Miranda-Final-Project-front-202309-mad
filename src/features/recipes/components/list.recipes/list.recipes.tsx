import { useEffect } from "react";
import { useRecipes } from "../../hooks/recipes.hook";
import { recipeStructure } from "../../models/recipe";
import { Card } from "../card.recipes/card.recipes";
import './list.recipes.scss'

type Props = {
  recipeList: recipeStructure[] | undefined
};
export function List({recipeList}: Props) {
  const { getAllRecipes } = useRecipes();

  useEffect(() => {
    getAllRecipes();
  },[]);

  return (
  
      <ul className="recipes-list">
        {recipeList?.map((item: recipeStructure) => (
          <Card key={item.id} recipe={item}></Card>
        ))}
      </ul>
    
  );
}
