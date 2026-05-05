import {test,expect} from '@playwright/test';
import {LoginPage} from '../../pages/login/LoginPage.js'
import datas from '../../config/logindata.json'
import {PayrollTable} from '../../pages/admin-payroll-pages/PayrollTable.js';
import {SidePages} from '../../pages/common-pages/SidePages.js'
import{AllEmployees} from '../../pages/admin-company-pages/AllEmployees.js'

test('Verifying the Monthly Salary Overview',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToPayrollTable();



    const pt= new PayrollTable(page);
    await pt.checkMonthlySalaryOverview();



})

test('Verifying the Start process Payroll Transactions function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToPayrollTable();

    const pt= new PayrollTable(page);
    await pt.startProcess();
    await expect(pt.paylockCreatedMessage).toHaveText("Payroll lock on the employee request(s) completed");


})

test('Verifying the Resume process function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToPayrollTable();

    const pt= new PayrollTable(page);
    await pt.resumeProcess();
    await expect(pt.employeePayoutApprovalMessage).toHaveText("Employee payout requests have been sent for approval");


})

test('Verifying the view process function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToPayrollTable();

    const pt= new PayrollTable(page);
    await pt.viewProcess();
   

})

test.only('Checking the view report function',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToPayrollTable();

    const pt= new PayrollTable(page);
    await pt.viewReport();
   

})







