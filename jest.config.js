export default {
  preset: "ts-jest", // Use ts-jest preset for TypeScript
  testEnvironment: "jsdom", // Set the environment for React
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Handle TypeScript files
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest", // Handle JS/JSX files
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"], // File extensions Jest should consider
  moduleNameMapper: {
    // Alias mapping to resolve Webpack paths
    "^@/(.*)$": "<rootDir>/src/$1", // Resolves the `@` alias to `src` directory
  },
  transformIgnorePatterns: [
    // Ignore transforming files in node_modules that do not need to be processed
    // "/node_modules/(?!(@babel|some-package-to-transpile))",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/tests/unit/setup.ts"], // Optional setup file for Jest (e.g., to configure Enzyme, React Testing Library, etc.)
};
