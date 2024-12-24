//import { test, expect } from '@playwright/test';
//or 
const {test, expect} =require('@playwright/test')
//      ^bcs of above key word 'test' only it excutes all the tests in browser: that key word import from 'playwright/test' jar from node modules




test('first playwright test1', function(){
//java is synchronous language it excutes step by step but javascript is asynch language so it excutes all steps together. for testing this async creats to fail testcases as before getting element if it do assertion.
    //step1
    //step2
    //step3
})
//so we keep await for every step: but await will use only when we mention 'async'that we using it bcs we handdling asynchronous code: 
test('first playwright test2',async function(){
        //step1
        //await step1();
        //step2
       // await step2();
        //step3
        //await step3();
});
//above function has no name [function()] ie anonymous function we can write it as below
test('first playwright test3',async ()=>{ 
    //await step1();
    //await step2();
    //await step3();
});

//now we need browser to to run tests that is called browser context: we get it from inbuilt fixture called 'browser' that we get allong with 'test' keyword that we imported.
test('Browser context creation playwright test4',async ({browser})=>{ //to identify it is from inbuilt keep in curly braces and should pass it as parameter to use it.

    const context = await browser.newContext();//creating browser window: if need any proxy or coockies you can pass them as parameters for that browser
    const page = await context.newPage();//creating browser tab
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await page.title());
    
})

//bcs we are not usong any cookies or proxy anything so we directly go to page using inbuilt fixture called 'page'
test('page creation  playwright test5',async ({page})=>{ 

    await page.goto('https://google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
})