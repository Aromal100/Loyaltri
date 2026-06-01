import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {EmployeeAttendance} from '../../pages/admin-time-pages/EmployeeAttendance.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'


test.describe.serial('Employee Attendance Function',()=>{

    test('Checking the Employee Attendance details',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToEmployeeAttendance();

    const ea= new EmployeeAttendance(page)
    await ea.viewAttendanceTimeline();

})

test('Verify the OT adding to the employee',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToEmployeeAttendance();

    const ea= new EmployeeAttendance(page);
    await ea.addOtFunction();
    await expect(ea.OTCreatedMessage).toHaveText("Attendance status has been updated to Present");

})

test('Verify the late punch adding to the employee',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToEmployeeAttendance();

    const ea= new EmployeeAttendance(page);
    await ea.addTimeOutFunction();
    await expect(ea.OTCreatedMessage).toHaveText("Attendance status has been updated to Present");

})

test.only('Checking the miss punch function to the employee',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToEmployeeAttendance();

    const ea= new EmployeeAttendance(page);
    await ea.addMissPunchFunction();
    await expect(ea.OTCreatedMessage).toHaveText("Attendance status has been updated to Present");

})




})


