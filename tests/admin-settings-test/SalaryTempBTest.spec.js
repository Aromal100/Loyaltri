import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {SalaryTempBuilder} from '../../pages/admin-settings-pages/SalaryTempBuilder.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'
import { faker } from '@faker-js/faker';


test("Verify the Create salary Template functionality",async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToSalaryTemplateBuilder();

    const st= new SalaryTempBuilder(page);
    const word = faker.lorem.word(); 
    await st.addSalaryTempBuilder(word);
    await expect(st.salaryTempCreatedMessage).toHaveText("Salary Template Employee mapping has been created.");






})