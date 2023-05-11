const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout:6000,
  projectId: 'bft6k7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/intergration/test/*.js'
  },
});
