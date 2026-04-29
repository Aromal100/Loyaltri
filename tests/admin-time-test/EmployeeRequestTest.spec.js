import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {EmployeeRequest} from '../../pages/admin-time-pages/EmployeeRequest.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'
import { faker } from '@faker-js/faker';

test('Verifying the employee request approval function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const sp= new SidePages(page);
    await sp.goToEmployeeRequest();

    const er= new EmployeeRequest(page);
    const word = faker.word.noun(); 
    await er.confirmApproval(word);
    await expect(er.overtimeRequestsCreatedMessage).toHaveText("Overtime Requests has been approved.");
    




})