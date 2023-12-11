import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const RegisterPage = lazy(() => import('../../pages/register/register.page'));
const SessionPage = lazy(() => import('../../pages/session.buttons/session.page'));

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
          
        </Routes>
      </Suspense>
    </main>
  );
}
