import datas from '../../config/logindata.json'

export class WorkPolicy
{
    constructor(page)
    {
        this.page=page;
        this.creteWorkPolicyBtn=page.locator("//span[text()='Create Work Policy']/parent::button");
        this.otp=page.locator("//h2[text()='Over Time Policy']/ancestor::button");
        this.enterName=page.getByPlaceholder("Enter Work Policy Name");
        this.overtimeTypesOpt=page.locator(".ant-select-selector").first();
        this.afterShift=page.locator("[label='After Shift Ends']");
        this.choose=page.getByPlaceholder("Choose Employee works more than");
        this.time=page.locator(`[data-value='${datas.userCred.time}']`).first();
        this.ok = page.locator("//span[text()='OK']/parent::button");
        this.amount=page.getByPlaceholder("Enter Amount Per Minute");
        this.saveCon = page.locator("//div[text()='Save & Continue']/ancestor::button");
        this.proceed = page.locator("//span[text()='Yes,Proceed']/parent::button");
        this.dateOpt=page.locator(".ant-picker-input").last();
        this.date=page.locator("[title='2026-05-01']");
        //this.avEmployee=page.getByRole('checkbox', { name: 'Not Assigned to Any Work Policy' });
        this.avEmployee=page.locator(".ant-checkbox-input").nth(2);
        this.workPolicyCreatedMessage=page.locator(".ant-notification-notice-description").last();

    }

    async createWorkPolicy(name)
    {
        await this.creteWorkPolicyBtn.click();
        await this.otp.click();
        await this.enterName.fill(name);
        await this.overtimeTypesOpt.click();
        await this.afterShift.click();
        await this.choose.click();
        await this.time.click();
        await this.ok.click();
        await this.amount.fill(datas.userCred.amount);
        await this.saveCon.click();
        await this.proceed.click();
        await this.page.waitForTimeout(2000);
        await this.dateOpt.click();
        await this.date.click();
        await this.avEmployee.click();
        await this.saveCon.click();
        await this.proceed.click();
    }


}


