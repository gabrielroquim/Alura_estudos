const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
 reporter: "mochawesome",
 reporterOptions:{
  reporterDir: "cypress/report/mochawesome-report",
  overwrite: true,
  html: true,
  json: true,
  timestamp: "mmddyyyy_HHMMss"
 }
  },
});
