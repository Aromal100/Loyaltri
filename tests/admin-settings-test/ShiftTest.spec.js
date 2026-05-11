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
    //await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToShift();
    const s= new Shift(page);

    const word = faker.word.noun(); 

    await s.addNightShift(word);

   await expect(s.shiftCreatedMessage).toHaveText("Shift has been created.");
  
})


test('Add Shift scheme function',async({page})=>{

     test.setTimeout(50000);

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
    await expect(s.shiftSchemeCreatedMessage).toHaveText("Shift Scheme has been assigned to selected employees.");

})


test.only('Add Continuous Work Leave Shift scheme function',async({page})=>{

     test.setTimeout(50000);

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToShift();
    const s= new Shift(page);

    const word = faker.word.noun(); 
    const workDays = faker.number.int({ min: 8, max: 10 }).toString();;
    const leaveDays = faker.number.int({ min: 1, max: 4 }).toString();;

    await s.addCwlFunction(word,workDays,leaveDays);
    await expect(s.shiftSchemeCreatedMessage).toHaveText("Shift Scheme has been assigned to selected employees.");

})




