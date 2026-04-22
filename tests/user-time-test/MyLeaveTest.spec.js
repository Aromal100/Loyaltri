import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {MyLeave} from '../../pages/user-time-pages/Myleave.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'
import { faker } from '@faker-js/faker';


test('Adding a New leave request function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.userCred.username,datas.userCred.password);

    const sp= new SidePages(page);
    await sp.goToMyLeave();

    const ml= new MyLeave(page);
    await ml.requestLeave();
 

    await page.pause();



})
