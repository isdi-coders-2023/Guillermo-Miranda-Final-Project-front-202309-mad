
import { Header } from "../../features/recipes/components/header/header";
import { useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { List } from "../../features/recipes/components/list.recipes/list.recipes";


export default function HomePage() {

  const { recipes } = useSelector((state: RootState) => state.recipesState);

  return (
    <>
      <Header></Header>
      <List recipeList={recipes}></List>
    </>
  );
}
