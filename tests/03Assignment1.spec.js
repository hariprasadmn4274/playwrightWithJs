const{ test, expect}=require('@playwright/test')
const exp = require('constants')

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

    
    console.log(await page.locator('h5 b').first().textContent())
    console.log(await page.locator('h5 b').last().textContent())
    console.log(await page.locator('h5 b').nth(1).textContent())
    console.log(await page.locator('h5 b').allTextContents())


})
