export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: [
    '**/__tests__/**/*.test.js',
  ],
  collectCoverageFrom: [
    'public/script.js',
    '!**/node_modules/**',
    '!**/coverage/**'
  ],
  transform: {},
};
