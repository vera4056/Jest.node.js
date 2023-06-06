/** @type {import('jest').Config} */
const config = {
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  };
  
  module.exports = config;