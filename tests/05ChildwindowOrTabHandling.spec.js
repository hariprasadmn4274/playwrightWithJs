const{ test, expect}=require('@playwright/test')

test('child window/different tab handling', async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage()

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    const documentLink= page.locator("[href*='documents-request']")


    //promise means action or operation. it has 3 status pending, rejected and fullfilled.
    const [newPage]= await Promise.all([    //promise.all() method will return(in arry format as it executes an arry) either below lines fillfilled or rejected status. if it is in pending means it will keep executing same array for code again and again untill reject or fullfill
                                    //we have two action to perform, so we are passing them in arry form.
    context.waitForEvent('page'),//waitForEvent('page') will look/listen for any 'newPage' event which is going to happen. ie in next line click().
    documentLink.click(),
    ])

    await newPage.waitForLoadState(); // Ensure new tab loads fully
    await newPage.waitForSelector('.red'); // Wait for '.red' element to appear
    const text=await newPage.locator('.red').textContent();
    console.log(text);

    const arryText=text.split('@')
    const domain=arryText[1].split(' ')[0]
    console.log(domain);

    // Switch back to the original page before filling input
    await page.bringToFront();
    await page.locator('#username').fill(domain)
    console.log(await page.locator('#username').textContent())// this will not work(returns null).bcs textContent() method might nor work for input fields
    console.log(await page.locator('#username').inputValue())//use this



    //lets two pages opned the follow like below

    // const [newPage,newPage2]= await Promise.all([   
    // context.waitForEvent('page'),
    // documentLink.click(),
    // ])

    // const text=await newPage2.locator('.red').textContent();
    

})