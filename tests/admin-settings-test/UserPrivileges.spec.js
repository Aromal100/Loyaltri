import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {UserPrivileges} from '../../pages/admin-settings-pages/UserPrivileges.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'

test('Add new employess to web punch',async({page})=>{

     const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    //await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToUserPrivileges();

    const up= new UserPrivileges(page);
    await up.addNewWebPunch();
    

    await expect(up.attandanceAccMessage).toHaveText("Attendence Access has been updated.");
    await page.pause();


})