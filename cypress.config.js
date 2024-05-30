const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:3000",
    "pluginsFile": "cypress/plugins/index.js",
    "viewportHeight": 1000,
    "viewportWidth": 1280,
    projectId: "iw47ve",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

