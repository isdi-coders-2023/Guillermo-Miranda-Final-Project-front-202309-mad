import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom';

describe('Given AppRoutes component', () => {
  describe('When we navigate to home page', () => {
    const MockedHomeComponent = jest.fn().mockReturnValue(<h1>Home</h1>);
    jest.mock('../pages/home/home.page', () => MockedHomeComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/home']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Home');
    });
    test('Then the Home (List) component should been called', () => {
      expect(MockedHomeComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to register page', () => {
    const MockedRegisterComponent = jest
      .fn()
      .mockReturnValue(<h1>Register</h1>);
    jest.mock('../pages/register/register.page', () => MockedRegisterComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/register']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Register');
    });
    test('Then the Register component should been called', () => {
      expect(MockedRegisterComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to session page', () => {
    const MockedLoginComponent = jest.fn().mockReturnValue(<h1>Login</h1>);
    jest.mock('../pages/session.buttons/session.page', () => MockedLoginComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Login');
    });
    test('Then the Login component should been called', () => {
      expect(MockedLoginComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to my recipes', () => {
    const MockedAdminPanelComponent = jest
      .fn()
      .mockReturnValue(<h1>My recipes</h1>);
    jest.mock(
      '../pages/my.recipes.page/my.recipes.page',
      () => MockedAdminPanelComponent
    );
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/myrecipes']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('My recipes');
    });
    test('Then the list component should been called', () => {
      expect(MockedAdminPanelComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to details page', () => {
    const MockedDetailsComponent = jest.fn().mockReturnValue(<h1>Details</h1>);
    jest.mock('../pages/details/details.page', () => MockedDetailsComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/details']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Details');
    });
    test('Then the Details component should been called', () => {
      expect(MockedDetailsComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to form page', () => {
    const MockedCreateClothingItemComponent = jest
      .fn()
      .mockReturnValue(<h1>Form</h1>);
    jest.mock(
      '../pages/recipe.form/recipe.form.page',
      () => MockedCreateClothingItemComponent
    );
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/form']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Form');
    });
    test('Then the form component should been called', () => {
      expect(MockedCreateClothingItemComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
