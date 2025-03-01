// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  //1a.location of ur tests: moment you hit run commond , it comes here and goes to mentioned directry and run that folder
  testDir: './tests',

  //1b.maximun time for one test can run. Defaults to 30 seconds.
  timeout: 10*1000,
  expect:{
    timeout:5*1000 //5 sec for executing that expecct assertion 
  },

  //1c.Maximum time in milliseconds the whole test suite can run. Zero timeout (default) disables this behavior. Useful on CI to prevent broken setup from running too long and wasting resources. Learn more about various timeouts.
  //globalTimeout: process.env.CI ? 60 * 60 * 1000 : undefined,

  //1d.Run tests in files in parallel 
  //fullyParallel: true,

  //1e. Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  use: {//here whatever settings you keep, it will be followed by all the test cases.

    browserName:'chromium',  //1f.'firefox','webkit'(for safari)
    headless: false //1e   
  },
});

