/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    "/src/main.tsx",
    "/src/config.tsx",
    "/src/core/store/store.tsx",
    "/src/pages/register/register.page.tsx",
    "/src/pages/session.buttons/session.page.tsx",
    "/src/pages/details/details.page.tsx",
    "/src/pages/home/home.page.tsx",
    "/src/pages/recipe.form/recipe.form.tsx",
    "/src/pages/my.recipes.page/my.recipes.page.tsx",
    "/src/features/users/models/user.ts",
    "/src/features/users/models/login.payload.ts",
    "/src/features/recipes/models/img.data.ts",
    "/src/features/recipes/models/recipe.ts",
    "/src/core/App/App.tsx",
    "/src/features/users/slices/users.slice.ts",
    "/src/features/recipes/components/form.recipe/form.recipe.tsx",
    "/src/features/recipes/components/list.my.recipes/list.my.recipes.tsx",
    "/src/features/recipes/components/recipe.details/recipe.details.tsx"
  ],
};
