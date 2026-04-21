export class Leave
{

    constructor(page)
    {
        this.page=page;
        this.addLeave=page.locator("//span[text()='Add Leave Type']/parent::button");
        this.startFromScarch=page.locator("//div[contains(@class,'flex flex-col justify-c')]").first();
        this.enterLeaveType=page.getByPlaceholder("Enter Leave Type");
        this.descrip=page.getByPlaceholder("Enter Description");
        this.enterDays1=page.getByPlaceholder("Enter Days ").first();
        this.selectBox1=page.locator("[aria-haspopup='listbox']").first();
        this.monthly=page.locator("//div[@title='Monthly']");
        this.enterDays2=page.getByPlaceholder("Enter Days ").last();
        this.selectBox2=page.locator("[aria-haspopup='listbox']").last();
        this.lapse = page.locator("//div[@label='Lapse']");
        this.timeoffAllow=page.locator("//h1[text()='Leave Days Settings']/ancestor::button");
        this.calenderDays=page.locator("//span[text()='Calendar Days']/parent::div");
        this.annuallyRecurring=page.locator("//span[text()='Annually Recurring']/parent::div");
        this.leavePayRate=page.locator("//h1[text()='Leave Pay Rate']/ancestor::button");
        this.paidLeave=page.locator("//span[text()='Paid Leave']/parent::div");
        this.save=page.locator("//div[text()='Save & Continue']/ancestor::button");
        this.ram=page.locator("//p[text()='Ram R']/parent::div");

        this.selectEmp=page.locator("input.ant-checkbox-input").nth(1);
         this.selectEmp2=page.locator("input.ant-checkbox-input").nth(2);
        this.save2=page.locator("//div[text()='Save & Continue']/ancestor::button");
        
    }


    async addLeaveType(name,days)
    {
        await this.addLeave.click();
        await this.startFromScarch.click();
        await this.enterLeaveType.fill(name);
        await this.descrip.fill(name);
        await this.enterDays1.fill(days);
        await this.selectBox1.click();
        await this.monthly.click();
        await this.enterDays2.fill(days);
        await this.selectBox2.click();
         await this.lapse.waitFor();
        await this.lapse.click();
        await this.timeoffAllow.click();
        await this.calenderDays.click();
        await this.annuallyRecurring.click();
        await this.leavePayRate.click();
        await this.paidLeave.click();
        await this.save.click();
        await this.ram.waitFor({ state: 'visible' });
        await this.selectEmp.waitFor({ state: 'visible' });
        await this.selectEmp.click();
        await this.selectEmp2.click();
        await this.save2.click();
    }






}