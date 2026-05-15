import datas from '../../config/logindata.json'

export class PayrollTable {

    constructor(page) {
        this.page = page;
        this.empname = page.locator(`//p[text()='${datas.userCred.empname2}']/ancestor::tr`);
        this.close = page.locator("[aria-label='Close']");
        this.startProcessBtn = page.locator("//span[text()='Start Process']/parent::button");
        this.dialog = page.getByRole('dialog');
        this.process = this.dialog.getByRole('button', { name: /Process/i });
        this.emp = this.dialog.locator(`text=${datas.userCred.empname2}`)
        .locator('xpath=ancestor::div[contains(@class,"grid")]')
        .locator('input[type="checkbox"]');
        this.save = page.locator("//span[text()='Save & Continue']/parent::button");
        this.approveSelect=page.locator("//span[text()='Approve Selected ']/parent::button");
        this.remark=page.getByPlaceholder("Enter Remarks");
        this.confirmApp=page.locator("//span[text()='Confirm Approval']/parent::button");
        this.netPay = page.locator("//span[text()='Net Pay Review']/parent::button").last();
        this.lockPay = page.locator("//span[text()='Lock Payroll']/parent::button");
        this.lockNow = page.locator("//span[text()='Lock Now']/parent::button");
        this.paylockCreatedMessage = page.locator(".ant-notification-notice-description").last();
        this.resume = page.locator("//span[text()='Resume']/parent::button");
        this.sndApproval = page.locator("//span[text()='Send for Approval']/parent::button");
        this.employeePayoutApprovalMessage = page.locator(".ant-notification-notice-description").last();
        this.payMethodOpt = page.locator(".ant-btn-icon-only");
        this.selectOpt = page.locator("div.ant-select-selector");
        this.opt = page.locator("[title='Cash']");
        this.update = page.locator("//span[text()='Update']/parent::button");
        this.view = page.locator("//span[text()='View']/parent::button");
        this.confirmPayout = page.locator("//span[text()='Confirm Payout (1)']/parent::button");
        this.completeNow = page.locator("//span[text()='Complete Now']/parent::button");
        this.employeePayoutApprovalMessage = page.locator(".ant-notification-notice-description").last();
        this.viewReportBtn=page.locator("//span[text()='View Report']/parent::button");
        this.search=page.locator("[placeholder='Search']");
        this.emp=page.locator(`//p[text()='${datas.userCred.empname}']/ancestor::tr`);
        this.actualOtAmount = page.locator("td.text-right span").last();
        this.close=page.locator("[aria-label='Close']");

    }

    async checkMonthlySalaryOverview() {
        await this.empname.click();
        await this.close.click();
    }

    async startProcess() {
        await this.startProcessBtn.click();
        await this.dialog.waitFor({ state: 'visible' });
        //await this.process.click();
        await this.emp.click(); 
        await this.save.click();
        await this.page.waitForTimeout(3000);
        await this.save.click();
        await this.netPay.click();
        await this.lockPay.click();
        await this.lockNow.click();
    }

    async resumeProcess() {
        await this.resume.click();
        await this.netPay.click();
        await this.save.click();
        await this.emp.click();
        await this.payMethodOpt.click();
        await this.selectOpt.click();
        await this.opt.click();
        await this.update.click();
        await this.sndApproval.click();

    }

    async viewProcess() {
        await this.view.click();
        await this.emp.click();
        await this.confirmPayout.click();
        await this.completeNow.click();
    }

    async viewReport()
    {
     await this.viewReportBtn.click();
     await this.page.waitForTimeout(5000);
    }


    async checkOtAmount(name)
    {
       await this.search.fill(datas.userCred.empname2);
       await this.emp.click();
       await this.actualOtAmount.waitFor();
       await this.close.click();

    }




}