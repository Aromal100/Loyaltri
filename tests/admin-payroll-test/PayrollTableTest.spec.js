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

test('Checking the view report function',async({page})=>{

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


test.only('Verifying Ot amount of the employee',async({page})=>{

    const lp= new LoginPage(page);
    await lp.landingPage();
    await lp.loginPage(datas.adminCred.username,datas.adminCred.password);

    const ae= new AllEmployees(page);
    await ae.selectCompany();

    const sp= new SidePages(page);
    await sp.goToPayrollTable();

    const pt= new PayrollTable(page);
    await pt.checkOtAmount();

    const actualAmount=await pt.actualOtAmount.textContent();

    const amountText = actualAmount
    .replace(/[₹,\s]/g, '') 
    .replace('.00', '');
    const amount=parseInt(amountText);
    console.log(amount);

    await sp.goToAllEmployees();

    await ae.checkOTdetails();
    const otHours= await ae.approvedOtCount.textContent();

    const otHourText = otHours.replace('h 00m', '').trim();
    const otHour=parseInt(otHourText);
    console.log(otHour);

    const time=Number(datas.userCred.time)
    const oTamount = Number(datas.userCred.amount);

    //calculation 
    const expectedAmount =otHour*time*60*oTamount
    console.log(expectedAmount);

    expect(amount).toBe(expectedAmount);




})







