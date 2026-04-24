import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import { faker } from '@faker-js/faker';


test('Mulitple employee registration process',async({page})=>{

    test.setTimeout(30 * 60 * 1000);


    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);
    const ae= new AllEmployees(page);
    await ae.selectCompany();
    const sp= new SidePages(page);
    await sp.goToAllEmployees();

for (let i = 1; i <= 10; i++) {

    const employeeData = {
  name: faker.person.firstName(),
  lastname:faker.person.firstName(),
  email: faker.internet.email(),
  phone: `9${faker.string.numeric(9)}`,
  address: faker.location.streetAddress(),
  postalCode : faker.string.numeric(6)
};

    await ae.goToAddEmployees();
    await ae.employeeOnBoarding(employeeData);
    await ae.workDetails();
    await expect(ae.success).toHaveText("Successful");
    await expect(ae.success).toBeHidden();
}

    

})