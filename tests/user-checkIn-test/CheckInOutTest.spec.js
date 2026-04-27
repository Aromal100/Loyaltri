import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {CheckInOut} from '../../pages/user-checkInOut/CheckInOut.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'

test('Verify user check-in and check-out functionality',async({page})=>{

      test.setTimeout(240000); 

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.userCred.username,datas.userCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const cc= new CheckInOut(page);
    await cc.checkInFn();

    await page.waitForTimeout(210000);

    await cc.checkOutFn();
    
    await expect(cc.punchMessage).toHaveText("Punch has been saved .")



})