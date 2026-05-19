import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {WorkPolicy} from '../../pages/admin-settings-pages/WorkPolicy.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'
import { faker } from '@faker-js/faker';

test.describe.serial('Work Policy Tests', () => {

    test('Checking Work policy creation',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToWorkPolicy();

    const wp= new WorkPolicy(page);
    const word = faker.lorem.word();
    await wp.createWorkPolicy(word);
    await expect(wp.workPolicyCreatedMessage).toHaveText("Work Policy has been assigned to selected employees.");
  
})

test('Checking Time In-Out Policy creation',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToWorkPolicy();

    const wp= new WorkPolicy(page);
    const word = faker.lorem.word();
    await wp.creteTimeInOutPolicy(word);
    await expect(wp.workPolicyCreatedMessage).toHaveText("Work Policy has been assigned to selected employees.");

})
})


