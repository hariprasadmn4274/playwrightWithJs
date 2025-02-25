/*
1.id--> #idValue (or) tagname#idValue

2.class--> .classValue  (or) tagname.classValue

3.any attribute--> [attribute='value]

4.test--> text="textValue"

5.parent to child traverse-->parentTagname>>childTagname
                        ex:
                        -->.classValue(space)tagname  ==>.card-body a
                        
*/
const {test,expect}=require('@playwright/test')
const exp = require('constants')
const { use } = require('../playwright.config')
const { sign } = require('crypto')

test('validating login error',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')

    await page.locator('#username').fill('rahulshetty')
    await page.locator('#password').fill('learning')
    await page.locator('#signInBtn').click()
    
    console.log(await page.locator("[style*='block']").textContent())
                                                        //^extract text from there
     await expect(page.locator("[style*='block']")).toContainText('Incorrect')
                                                        //^ check substring there


})


test.only('validate home page  by giving valid credentials',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')

    const userName=page.locator('#username')
    const password=page.locator('#password')
    const signin=page.locator('#signInBtn')
    const cardTitles=page.locator('.card-body a')

    await userName.fill('rahulshetty')
    await password.fill('learning')
    await signin.click()
    
    console.log(await page.locator("[style*='block']").textContent())
                                                        //^extract text from there
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
                                                        //^ check substring there
    //erase invalid username and fill valid username
    await userName.fill('')
    await userName.fill('rahulshettyacademy')
    await password.fill('learning')
    await signin.click()

    
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop')
       // console.log(await page.locator('.card-body a').textContent()) for this line we get 4 elements but I want only first one so we follow below menthods

    console.log(await cardTitles.first().textContent())
                                                    //^last() only first and last is there
    console.log(await cardTitles.nth(1).textContent())
   const allCards=await cardTitles.allTextContents()
                                    //^ collect all text
   console.log(allCards)


})

