import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import {AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'
import datas from '../../config/logindata.json'
import {MakeaPost} from '../../pages/admin-discover-pages/MakeaPost.js'
import { Faker, faker } from '@faker-js/faker';

test('Checking the make post function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const word= faker.company.catchPhrase();
    

    const mp= new MakeaPost(page);
    await mp.makeaPost(word);
    

    

})