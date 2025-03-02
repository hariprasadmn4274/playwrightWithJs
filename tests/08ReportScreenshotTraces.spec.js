/*
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',

  timeout: 10*1000,
  expect:{
    timeout:5*1000 //5 sec for executing that expecct assertion 
  },

  
  reporter: 'html',//this is html report

  use: {

    browserName:'chromium',  
    headless: false ,

    screenshot : 'on',
    trace : 'on',   we have 3 properties: 'on'(for all), off(for none),'retained-on-failure'(for only failed testcases)
  }
});

step1: put above configuration in config.js file
step2: run tests with 'npx playwright test' command
step3: go to playwright-report folder and copy path of index.html. run it in chrome
step4: download trace zip in trace section of report
step5: paste that zip in 'trace.playwright.dev' ie https://trace.playwright.dev/'
*/

