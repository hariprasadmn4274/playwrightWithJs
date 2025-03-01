const {test, expect}=require('@playwright/test');

test('UI components',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

//1]✅Dropdown(locator should match only one element)
        //1 way: where we have to "select"(which has select tagname) fron constant list. but locator should match to only one element ex: 'select.form-control
    await page.locator('select.form-control').selectOption('Consultant');
        //2nd way
    await page.locator('select.form-control').selectOption({ label: 'Student' });
        //3rd way: using value(in lowe case)
    await page.locator('select.form-control').selectOption({ value: 'teach' });
        //4th way
    await page.locator('select.form-control').selectOption({ index: 2 });


//2]✅RadioButton
    await page.locator('.customradio').nth(1).click()
    await page.locator('#okayBtn').click();//this is just ui popup. there other popup call java papup, will  learn it later
    //assertions
    await expect(page.locator('.customradio').nth(1)).toBeChecked()
    console.log(await page.locator('.customradio').nth(1).isChecked())//-->true. return boolean value: checked=true, not checked=false 

//3]✅checkBox
    await page.locator('[type="checkbox"]').click()
    console.log(await page.locator('[type="checkbox"]').isChecked())//-->true. return boolean value: checked=true, not checked=false
    
    await page.locator('[type="checkbox"]').uncheck()
    console.log(await page.locator('[type="checkbox"]').isChecked())//-->false
    expect(await page.locator('[type="checkbox"]').isChecked()).toBeFalsy()

    await page.locator('[type="checkbox"]').click()
    console.log(await page.locator('[type="checkbox"]').isChecked())//-->true
    expect(await page.locator('[type="checkbox"]').isChecked()).toBeTruthy()//-->true

                                    //await usage= where ever we perform action , we use await
                                    //1. below we are using await at outside.
                                    //await[ expect(page.locator('.customradio').nth(1)) ].toBeChecked()//here toBeChecked() is the action.
                                    //        ^in this [box] we just giving loactor and for that we are performing action
                                    //2. inside
                                    expect(await page.locator('[type="checkbox"]').isChecked()).toBeTruthy()//-->true
                                    // here isChecked() is the action. so for that we are using await

//4]✅Blinking element: identify element is blinking or not?. ans: if that element has attibute class='blinkingText' in DOM then it is blonking element. then check it is there or not using method toHaveAttribute('name','value')
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class','blinkingText')

})


