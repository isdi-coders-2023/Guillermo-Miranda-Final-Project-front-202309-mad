import { useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { Header } from "../../features/recipes/components/header/header";
import { ListMyRecipes } from "../../features/recipes/components/list.my.recipes/list.my.recipes";
import { AddButton } from "../../features/recipes/components/add.button/add.button";


export default function MyRecipesPage() {
  
  const { recipes } = useSelector((state: RootState) => state.recipesState);
  const { loggedUser }=useSelector((state:RootState)=>state.userState)
  const userID = loggedUser!.id

  return (
    <>
      <Header></Header>
      <AddButton></AddButton>
      <ListMyRecipes recipeList={recipes} userID={userID} ></ListMyRecipes>
    </>
  );
}
