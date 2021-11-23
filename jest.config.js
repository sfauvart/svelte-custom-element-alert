export default {
  transform: {
    '^.+\\.svelte$': [
      '<rootDir>/node_modules/svelte-jester/dist/transformer.mjs',
      {
        preprocess: true,
      },
    ],
  },
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/tests/.*\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['js', 'svelte'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.svelte'],
};
