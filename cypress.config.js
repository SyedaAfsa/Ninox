const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://ninox.com/en/sign-up",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
