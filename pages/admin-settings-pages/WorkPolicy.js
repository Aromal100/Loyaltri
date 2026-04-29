export class WorkPolicy
{
    constructor(page)
    {
        this.page=page;
        this.creteWorkPolicyBtn=page.locator("//span[text()='Create Work Policy']/parent::button");
        this.otp=page.locator("//h2[text()='Over Time Policy']/ancestor::button");
        this.enterName=page.getByPlaceholder("Enter Work Policy Name");
        this.overtimeTypesOpt=page.locator(".ant-select-selector").first();
        this.beforeAfter=page.locator("[label='Both Before & After Shift']");
        this.choose=page.getByPlaceholder("Choose Employee works more than");
        this.time=page.locator("[data-value='1']").first();
        this.ok = page.locator("//span[text()='OK']/parent::button");
        this.amount=page.getByPlaceholder("Enter Amount Per Minute");
        this.saveCon = page.locator("//div[text()='Save & Continue']/ancestor::button");
        this.proceed = page.locator("//span[text()='Yes,Proceed']/parent::button");
        this.avEmployee=page.getByRole('checkbox', { name: 'Not Assigned to Any Work Policy' });
        this.workPolicyCreatedMessage=page.locator(".ant-notification-notice-description").last();

    }

    async createWorkPolicy(name)
    {
        await this.creteWorkPolicyBtn.click();
        await this.otp.click();
        await this.enterName.fill(name);
        await this.overtimeTypesOpt.click();
        await this.beforeAfter.click();
        await this.choose.click();
        await this.time.click();
        await this.ok.click();
        await this.amount.fill("100");
        await this.saveCon.click();
        await this.proceed.click();
        await this.avEmployee.click();
        await this.saveCon.click();
        await this.proceed.click();
    }


}


