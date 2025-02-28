const{ test, expect}=require('@playwright/test')

test.only('register',async({page})=>{
    const emai=page.locator('#userEmail')
    const password=page.locator('#userPassword')
    const login=page.locator('#login')

    //register
    await page.goto('https://rahulshettyacademy.com/client/')
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/auth/login')
    console.log( page.url())
    await page.locator("text='Register'").click();
    await page.locator('#firstName').fill('hariprasad')
    await page.locator('#lastName').fill('reddy')
    await page.locator('#userEmail').fill('hariprasadreddy@gmail.com')
    await page.locator('#userMobile').fill('8050666989')
    await page.locator("[formcontrolname='occupation']").selectOption({ label: 'Engineer' });
    await page.locator('[value="Male"]').check()
    await page.locator('#userPassword').fill('Hariprasad4274@')
    await page.locator('#confirmPassword').fill('Hariprasad4274@')
    await page.locator('[type="checkbox"]').check()
    await page.locator('[value="Register"]').click()
    console.log(await page.locator('#toast-container').textContent())

    //login (bcs user has already rigistered)
    await page.locator("text='Login here'").click()
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/auth/login')
    await emai.fill('hariprasadreddy@gmail.com')
    await password.fill('Hariprasad4274@')
    await login.click()
    console.log("the title is"+ " "+await page.title())
    await expect(page).toHaveTitle("Let's Shop")

    //get 1st product name
    const firstword=await page.locator('h5 b').first().textContent()
    console.log(firstword)

    //One way: get all products
    console.log(await page.locator('h5 b').first().textContent())//we use .textContent() method before using allTextContents() method because playwright doesnt have auto wait for allTextContents(). but textContent().so 
    console.log(await page.locator('h5 b').allTextContents())

    //2nd way: use technique to wait dynomically 
    await page.waitForLoadState('networkidle')//this wait till network(all api calls or page)gets loaded, then it will fetch . but this is also fleky sometimes.
    console.log(await page.locator('h5 b').allTextContents())

    //3rd way: so use waitFor() method.
    //await page.locator('h5 b').waitFor()// if u use only waitFor(), it will get confuse that for how many text should need to wait, as we get list of products and finally gives [] null
    await page.locator('h5 b').first().waitFor()// now it will wait for 1st then all will get loaded
    console.log(await page.locator('h5 b').allTextContents())




})
