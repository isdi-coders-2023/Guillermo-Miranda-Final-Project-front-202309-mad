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
    "/src/features/users/models/user.ts",
    "/src/features/users/models/login.payload.ts",
    "/src/core/App/App.tsx"
  ],
};
