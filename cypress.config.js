const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4nqb23',
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
