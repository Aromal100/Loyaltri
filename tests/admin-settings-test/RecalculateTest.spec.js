import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {Recalculate} from '../../pages/admin-settings-pages/Recalculate.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'
import { faker } from '@faker-js/faker';


test('Verifying the Recalculate function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToRecalculate();

    const re=new Recalculate(page);
    await re.addRecalculate();
    await expect(re.recalculatedMessage).toHaveText("Recalculation Queued Successfully.");
    
    





})