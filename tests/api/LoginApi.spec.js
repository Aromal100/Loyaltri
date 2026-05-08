import { test } from '@playwright/test'
import Apidata from '../../config/Apidata.json'


let authData;

test.beforeAll(async ({ request,browser }) => {

    const apiReq = await request.post(
        "https://alpha-api.loyaltri.com/AdminLogin",
        {
            data: Apidata.loginData
        }
    );

    const apiRes = await apiReq.json();

    authData = {
        token: apiRes.userData.token,
    };

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://alpha.loyaltri.com/");

    const encryptedData = await page.evaluate(() => {
        return localStorage.getItem('encryptedData');
    });

    console.log(encryptedData);

});


test.beforeEach(async ({ page }) => {

    await page.addInitScript((data) => {

    localStorage.setItem('token', data.token);

    }, authData)

    await page.goto("https://alpha.loyaltri.com/");
})

test('Loyaltri dashboard', async ({ page }) => {

    const ae = new AllEmployees(page);
    await ae.selectCompany();

    const sp = new SidePages(page);
    await sp.goToShift();
    const s = new Shift(page);

    const word = faker.word.noun();

    await s.addNightShift(word);

    await expect(s.shiftCreatedMessage).toHaveText("Shift has been created.");


})