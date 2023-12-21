import { Header } from "../../features/recipes/components/header/header";
import { HomeButton } from "../../features/recipes/components/home.button/home.button";
import { Details } from "../../features/recipes/components/recipe.details/recipe.details";

export default function SessionPage() {
  return (

      <section>
      <Header></Header>
      <Details></Details>  
      <HomeButton></HomeButton>  
    </section>
    
  );
}
