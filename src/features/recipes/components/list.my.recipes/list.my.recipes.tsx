import { useEffect } from "react";
import { useRecipes } from "../../hooks/recipes.hook";
import { recipeStructure } from "../../models/recipe";
import { CardMyRecipes } from "../card.my.recipes/card.my.recipes";
import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";
import './list.my.recipes.scss'





type Props = {
  userID: string
  recipeList: recipeStructure[],
};
export function ListMyRecipes({userID,recipeList}: Props) {
  const { loggedUser }=useSelector((state:RootState)=>state.userState)
  userID = loggedUser!.id
  const { getUserRecipes } = useRecipes();
  useEffect(() => {
  getUserRecipes(userID)
  },[]);

  return (
    <>
      <ul className="recipes-list">
        {recipeList?.map((item: recipeStructure) => (
          <CardMyRecipes key={item.id} recipe={item}></CardMyRecipes>
        ))}
      </ul>
    </>
  );
}
