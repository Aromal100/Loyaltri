import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {Shift} from '../../pages/admin-settings-pages/Shift.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'
import { faker } from '@faker-js/faker';


test('Add morning shift function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToShift();
    const s= new Shift(page);

    const word = faker.lorem.word(); 

    await s.addMorningShift(word);

    await expect(s.shiftCreatedMessage).toHaveText("Shift has been created.");
  
}
);

test('Add Night shift function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToShift();
    const s= new Shift(page);

    const word = faker.word.noun(); 

    await s.addNightShift(word);

   await expect(s.shiftCreatedMessage).toHaveText("Shift has been created.");
  
   


})


test.only('Add Shift scheme function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToShift();
    const s= new Shift(page);

    const word = faker.word.noun(); 

    await s.addShiftScheme(word);
    
    await page.waitForTimeout(5000); // Wait to see the result

   //await expect(s.shiftCreatedMessage).toHaveText("Shift has been created.");

  
   


})


