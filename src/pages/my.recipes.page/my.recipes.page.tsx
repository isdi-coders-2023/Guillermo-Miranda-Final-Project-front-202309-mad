import { useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { ListMyRecipes } from "../../features/recipes/components/list.my.recipes/list.my.recipes";
import { AddButton } from "../../features/recipes/components/add.button/add.button";
import { HomeButton } from "../../features/recipes/components/home.button/home.button";
import { Header } from "../../features/recipes/components/header/header";



export default function MyRecipesPage() {
  
  const { recipes } = useSelector((state: RootState) => state.recipesState);
  const { loggedUser }=useSelector((state:RootState)=>state.userState)
  const userID = loggedUser!.id

  return (
    <>
      <Header></Header>
      <AddButton></AddButton>
      <ListMyRecipes recipeList={recipes} userID={userID} ></ListMyRecipes>
      <HomeButton></HomeButton>
    </>
  );
}
