import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const RegisterPage = lazy(() => import('../pages/register/register.page'));
const SessionPage = lazy(() => import('../pages/session.buttons/session.page'));
const HomePage = lazy(()=> import ('../pages/home/home.page'));
const MyRecipesPage = lazy(()=> import ('../pages/my.recipes.page/my.recipes.page'));
const FormRecipePage = lazy(()=> import ('../pages/recipe.form/recipe.form.page'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route 
            path="/" 
            element={<SessionPage></SessionPage>}
          ></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route
            path="/home"
            element={<HomePage></HomePage>}
          ></Route>
          <Route
            path="/myrecipes"
            element={<MyRecipesPage></MyRecipesPage>}
          ></Route>
          <Route
            path="/form"
            element={<FormRecipePage></FormRecipePage>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
