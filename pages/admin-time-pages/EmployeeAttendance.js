import datas from '../../config/logindata.json';

export class EmployeeAttendance {
    constructor(page) {
        this.page = page;
        this.monthlyView = page.locator("//span[text()='Monthly View']/parent::button");
        this.empName = page.locator(`//span[text()='${datas.userCred.empname}']/ancestor::button`);
        this.empName2 = page.locator(`//span[text()='${datas.userCred.empname2}']/ancestor::button`);
        this.preDate=page.locator(`div:has(p.font-medium:text-is("${datas.userCred.date}")) > p.ant-dropdown-trigger`);
        this.activePdate = page.locator("div.bg-primary:has(p.font-medium) ~ p.ant-dropdown-trigger");
        this.activePdate2 = page.locator("div.bg-primary:has(p.font-medium) ~ p.ant-dropdown-trigger").last();
        this.viewLog = page.locator("//span[text()='View Log']");
        this.present = page.getByRole('menuitem', { name: 'Present' });
        this.timeopt=page.getByPlaceholder("Choose Time").first();
        this.time = page.locator("[data-value='9']").first();
        this.addtime=page.locator("//p[text()='Add Time']/parent::div");
        this.timeopt2=page.getByPlaceholder("Choose Time").last();
        this.timee = page.locator("[data-value='18']").nth(2);
        this.overTime = page.getByRole('menuitem', { name: 'Overtime' });
        this.overTimeOpt=page.getByPlaceholder("Number of hours");
        this.timeIn = page.locator("[data-value='1']").first();
        this.ok = page.locator("//span[text()='OK']/parent::button");
        this.ok2 = page.locator("//span[text()='OK']/parent::button").last();
        this.overRate=page.locator(".ant-select-selector").last();
        this.fixedAmount=page.locator("[title='Fixed Amount']");
        this.enterAmount=page.getByPlaceholder("Enter Amount Per Hour");
        this.submit=page.locator("//span[text()='Submit']/parent::button");
        this.OTCreatedMessage=page.locator(".ant-notification-notice-description").last();
        this.searchBar=page.getByPlaceholder("Search Employees and Emp Code")







    }

    async viewAttendanceTimeline() {
        await this.monthlyView.click();
        await this.empName.click();
        await this.page.waitForTimeout(3000);
        await this.empName.click();
        await this.activePdate.click();
        await this.page.evaluate(() => {
            document.body.style.zoom = "0.75";
        });
        await this.viewLog.click();


    }

    async addOtFunction(name)
    {
        await this.monthlyView.click();
        // await this.empName2.click();
       // await this.empName.click();
        await this.page.waitForTimeout(3000);
        await this.searchBar.fill(name);
        await this.empName2.click();
        await this.empName2.click();
        await this.preDate.click();
        await this.present.click();
        await this.timeopt.click();
        await this.time.click();
        await this.ok.click();
        await this.addtime.click();
        await this.timeopt2.click();
        await this.timee.click();
        await this.ok2.click();
        await this.submit.click();
        
        // await this.activePdate2.click();
        // await this.overTime.click();
        // await this.overTimeOpt.click();
        // await this.timeIn.click();
        // await this.ok.click();
        // await this.overRate.click();
        // await this.fixedAmount.click();
        // await this.enterAmount.fill("100");
        // await this.submit.click();

    }



}