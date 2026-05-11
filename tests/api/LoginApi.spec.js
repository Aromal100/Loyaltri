import { test } from '@playwright/test'
import Apidata from '../../config/Apidata.json'
import datas from '../../config/logindata.json'
import {AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'
import {LoginPage} from '../../pages/login/LoginPage.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'


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

    console.log(apiRes);


});


test.beforeEach(async ({ page,request }) => {

    const res=await request.post('https://alpha-api.loyaltri.com/AdminLogin',
        {
            headers :{Authorization:`Bearer ${authData.token}`}
        }
    );

    const data= await res.json();
     console.log(data);

    await page.goto("https://alpha.loyaltri.com/");
})

test('authenticate', async ({ page }) => {

    // const lp= new LoginPage(page);
    // await lp.landingPage();
    // await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    // await page.context().storageState({
    //     path: 'auth.json'
    // });

    const ae = new AllEmployees(page);
    await ae.selectCompany();


})

